import * as THREE from 'three';
import { EXHIBITS_DATA } from '../data/exhibits-data.js';

export class CameraController {
  constructor(camera, domElement, onHallChange, onApproachExhibit) {
    this.camera = camera;
    this.domElement = domElement;
    this.onHallChange = onHallChange;
    this.onApproachExhibit = onApproachExhibit;

    // Trạng thái góc nhìn
    this.yaw = Math.PI; // Hướng nhìn ban đầu dọc theo hành lang
    this.pitch = 0;
    this.keys = {};
    this.moveVelocity = new THREE.Vector3();
    this.isDragging = false;
    this.lastPointerX = 0;
    this.lastPointerY = 0;
    this.dragDistance = 0;

    // Chế độ camera
    this.mode = 'FREE'; // 'FREE' | 'APPROACHING' | 'INSPECTING'
    this.currentExhibitIndex = -1;

    // Tweening animation
    this.transition = {
      active: false,
      startTime: 0,
      duration: 1200, // ms
      startPos: new THREE.Vector3(),
      targetPos: new THREE.Vector3(),
      startLook: new THREE.Vector3(),
      targetLook: new THREE.Vector3(),
      currentLook: new THREE.Vector3(),
      onComplete: null,
    };

    // Tham số giới hạn không gian
    this.bounds = {
      minX: -8.0,
      maxX: 8.0,
      minZ: -8.0,
      maxZ: 106.0,
      eyeHeight: 1.65,
    };

    this.initEventListeners();
  }

  initEventListeners() {
    window.addEventListener('keydown', (e) => {
      this.keys[e.key.toLowerCase()] = true;
      if (this.mode === 'INSPECTING' && (e.key === 'Escape' || e.key === 'w' || e.key === 's')) {
        this.exitInspectMode();
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.key.toLowerCase()] = false;
    });

    this.domElement.addEventListener('pointerdown', (e) => {
      this.isDragging = true;
      this.lastPointerX = e.clientX;
      this.lastPointerY = e.clientY;
      this.dragDistance = 0;
    });

    window.addEventListener('pointerup', () => {
      this.isDragging = false;
    });

    window.addEventListener('pointermove', (e) => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.lastPointerX;
      const dy = e.clientY - this.lastPointerY;
      this.dragDistance += Math.abs(dx) + Math.abs(dy);
      this.lastPointerX = e.clientX;
      this.lastPointerY = e.clientY;

      if (this.mode === 'INSPECTING' && this.currentExhibitIndex >= 0) {
        // Xoay quanh vật thể
        const ex = EXHIBITS_DATA[this.currentExhibitIndex];
        const center = new THREE.Vector3(ex.position.x, ex.position.y, ex.position.z);
        const offset = this.camera.position.clone().sub(center);
        const radius = Math.sqrt(offset.x * offset.x + offset.z * offset.z);
        let angle = Math.atan2(offset.x, offset.z);
        angle -= dx * 0.006;
        offset.x = Math.sin(angle) * radius;
        offset.z = Math.cos(angle) * radius;
        offset.y = Math.max(0.8, Math.min(3.0, offset.y - dy * 0.005));
        this.camera.position.copy(center.clone().add(offset));
        this.camera.lookAt(center);
        return;
      }

      // Xoay góc nhìn thông thường
      this.yaw += dx * 0.003;
      this.pitch = Math.max(-0.7, Math.min(0.7, this.pitch - dy * 0.003));
    });
  }

  /**
   * Bấm mũi tên / Chọn hiện vật để camera tự động bước đến gần
   */
  approachExhibit(index, onComplete = null) {
    if (index < 0 || index >= EXHIBITS_DATA.length) return;
    const exhibit = EXHIBITS_DATA[index];
    this.currentExhibitIndex = index;
    this.mode = 'APPROACHING';

    const targetPos = new THREE.Vector3(
      exhibit.cameraWaypoint.x,
      exhibit.cameraWaypoint.y,
      exhibit.cameraWaypoint.z
    );

    const targetLook = new THREE.Vector3(
      exhibit.lookAt.x,
      exhibit.lookAt.y,
      exhibit.lookAt.z
    );

    // Tính hướng nhìn hiện tại của camera
    const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion);
    const startLook = this.camera.position.clone().add(fwd.multiplyScalar(4));

    this.startTransition(targetPos, startLook, targetLook, 1200, () => {
      this.mode = 'FREE';
      // Tính lại yaw và pitch theo hướng nhìn mới
      const dir = targetLook.clone().sub(this.camera.position).normalize();
      this.yaw = Math.atan2(-dir.x, -dir.z);
      this.pitch = Math.asin(dir.y);
      if (this.onApproachExhibit) {
        this.onApproachExhibit(exhibit, index);
      }
      if (onComplete) onComplete();
    });
  }

  /**
   * Chế độ xoay 360 độ xung quanh hiện vật (Inspect Mode)
   */
  startInspectMode(index) {
    if (index < 0 || index >= EXHIBITS_DATA.length) return;
    this.currentExhibitIndex = index;
    const ex = EXHIBITS_DATA[index];
    const center = new THREE.Vector3(ex.position.x, ex.position.y, ex.position.z);
    
    // Đặt camera ở khoảng cách 1.8m nhìn thẳng vào vật thể
    const inspectPos = center.clone().add(new THREE.Vector3(0, 0.4, -1.8));
    this.startTransition(inspectPos, this.camera.position.clone(), center, 900, () => {
      this.mode = 'INSPECTING';
    });
  }

  exitInspectMode() {
    if (this.currentExhibitIndex >= 0) {
      this.approachExhibit(this.currentExhibitIndex);
    } else {
      this.mode = 'FREE';
    }
  }

  /**
   * Lùi lại góc nhìn toàn cảnh sảnh (Step back)
   */
  stepBackOverview() {
    this.mode = 'APPROACHING';
    const targetZ = this.camera.position.z - 3.5;
    const targetPos = new THREE.Vector3(0, 1.85, Math.max(this.bounds.minZ, targetZ));
    const targetLook = new THREE.Vector3(0, 1.5, targetPos.z + 8);
    const startLook = targetPos.clone().add(new THREE.Vector3(0, 0, 5));

    this.startTransition(targetPos, startLook, targetLook, 1000, () => {
      this.mode = 'FREE';
      this.yaw = Math.PI;
      this.pitch = 0;
    });
  }

  startTransition(targetPos, startLook, targetLook, duration, onComplete) {
    this.transition.active = true;
    this.transition.startTime = performance.now();
    this.transition.duration = duration;
    this.transition.startPos.copy(this.camera.position);
    this.transition.targetPos.copy(targetPos);
    this.transition.startLook.copy(startLook);
    this.transition.targetLook.copy(targetLook);
    this.transition.onComplete = onComplete;
  }

  update(dt) {
    // 1. Cập nhật chuyển động chuyển tiếp nếu đang di chuyển tự động (Approaching)
    if (this.transition.active) {
      const now = performance.now();
      const elapsed = now - this.transition.startTime;
      let progress = Math.min(1, elapsed / this.transition.duration);

      // Smooth cubic easing (In-Out)
      progress = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      this.camera.position.lerpVectors(this.transition.startPos, this.transition.targetPos, progress);
      this.transition.currentLook.lerpVectors(this.transition.startLook, this.transition.targetLook, progress);
      this.camera.lookAt(this.transition.currentLook);

      if (elapsed >= this.transition.duration) {
        this.transition.active = false;
        if (this.transition.onComplete) {
          this.transition.onComplete();
        }
      }
      return;
    }

    if (this.mode === 'INSPECTING') {
      return;
    }

    // 2. Chế độ tự do (Free Roam) với W/A/S/D
    const fwd = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));

    const moveZ = (this.keys['w'] || this.keys['arrowup'] ? 1 : 0) - (this.keys['s'] || this.keys['arrowdown'] ? 1 : 0);
    const moveX = (this.keys['d'] ? 1 : 0) - (this.keys['a'] ? 1 : 0);

    const accel = 18.0;
    const maxSpeed = 3.6;
    const friction = Math.exp(-6.0 * dt);

    if (moveZ !== 0) {
      this.moveVelocity.addScaledVector(fwd, moveZ * accel * dt);
    }
    if (moveX !== 0) {
      this.moveVelocity.addScaledVector(right, moveX * accel * dt);
    }

    if (this.moveVelocity.length() > maxSpeed) {
      this.moveVelocity.normalize().multiplyScalar(maxSpeed);
    }

    this.camera.position.addScaledVector(this.moveVelocity, dt);
    this.moveVelocity.multiplyScalar(friction);

    // Ràng buộc giới hạn trong bảo tàng
    this.camera.position.x = Math.max(this.bounds.minX, Math.min(this.bounds.maxX, this.camera.position.x));
    this.camera.position.y = this.bounds.eyeHeight;
    this.camera.position.z = Math.max(this.bounds.minZ, Math.min(this.bounds.maxZ, this.camera.position.z));

    // Cập nhật hướng nhìn
    const euler = new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ');
    this.camera.quaternion.setFromEuler(euler);

    // Kiểm tra và báo sảnh hiện tại
    if (this.onHallChange) {
      const z = this.camera.position.z;
      let hallId = 0;
      if (z > 78) hallId = 3;
      else if (z > 52) hallId = 2;
      else if (z > 22) hallId = 1;
      this.onHallChange(hallId);
    }
  }
}
