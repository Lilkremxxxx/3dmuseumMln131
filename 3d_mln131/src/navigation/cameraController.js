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
    this.isDragging = false;
    this.lastPointerX = 0;
    this.lastPointerY = 0;
    this.dragDistance = 0;

    // Hệ thống Zoom quang học bằng con lăn chuột (Mouse Wheel Zoom) để ngắm chữ / chi tiết từ xa
    this.defaultFov = 65;
    this.targetFov = 65;
    this.minFov = 16;  // Cực đại phóng to ~4x (FOV hẹp) để đọc rõ từng chữ trên bia đá, tranh ảnh, tường
    this.maxFov = 75;  // Góc nhìn rộng toàn cảnh sảnh
    this.camera.fov = this.defaultFov;
    this.camera.updateProjectionMatrix();

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

    // Giới hạn tầm mắt
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
    // 1. Zoom bằng con lăn chuột (Mouse Wheel Zoom)
    this.domElement.addEventListener('wheel', (e) => {
      e.preventDefault();
      // Cuộn lên (deltaY < 0): Phóng to (Zoom In - giảm FOV)
      // Cuộn xuống (deltaY > 0): Thu nhỏ (Zoom Out - tăng FOV)
      const zoomSensitivity = 0.045;
      const delta = e.deltaY * zoomSensitivity;
      this.targetFov = Math.max(this.minFov, Math.min(this.maxFov, this.targetFov + delta));
    }, { passive: false });

    // Hỗ trợ pinch-to-zoom trên màn hình cảm ứng
    let initialPinchDist = null;
    this.domElement.addEventListener('touchstart', (e) => {
      if (e.touches.length === 2) {
        initialPinchDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    }, { passive: true });

    this.domElement.addEventListener('touchmove', (e) => {
      if (e.touches.length === 2 && initialPinchDist) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const diff = initialPinchDist - dist;
        this.targetFov = Math.max(this.minFov, Math.min(this.maxFov, this.targetFov + diff * 0.08));
        initialPinchDist = dist;
      }
    }, { passive: true });

    this.domElement.addEventListener('touchend', () => {
      initialPinchDist = null;
    }, { passive: true });

    // Phím tắt thoát chế độ 360
    window.addEventListener('keydown', (e) => {
      if (this.mode === 'INSPECTING' && (e.key === 'Escape' || e.key === 'Backspace')) {
        this.exitInspectMode();
      }
    });

    // 2. Kéo chuột xoay góc nhìn
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
        const center = new THREE.Vector3(ex.position.x, 1.65, ex.position.z);
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

      // Xoay góc nhìn trong không gian tự do
      this.yaw += dx * 0.003;
      this.pitch = Math.max(-0.75, Math.min(0.75, this.pitch - dy * 0.003));
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

    // Tự động đưa FOV về tiêu chuẩn 65 độ khi chuyển hiện vật
    this.targetFov = this.defaultFov;

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
      // Căn chỉnh yaw và pitch theo góc nhìn chuẩn về hiện vật
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
    const center = new THREE.Vector3(ex.position.x, 1.65, ex.position.z);
    
    // Đặt camera ở khoảng cách 2.4m nhìn thẳng vào mặt tranh
    const inspectPos = center.clone().add(new THREE.Vector3(0, 0.05, -2.4));
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
    this.targetFov = this.defaultFov;
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
    // Cập nhật zoom mượt mà (Smooth FOV Lerp)
    if (Math.abs(this.camera.fov - this.targetFov) > 0.01) {
      this.camera.fov = THREE.MathUtils.lerp(this.camera.fov, this.targetFov, 0.16);
      this.camera.updateProjectionMatrix();
    }

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

    // 2. Cập nhật hướng nhìn camera từ yaw và pitch (đã bỏ di chuyển a/w/s/d)
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
