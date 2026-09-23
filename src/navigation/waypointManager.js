import * as THREE from 'three';
import { EXHIBITS_DATA } from '../data/exhibits-data.js';

/**
 * Quản lý các điểm Waypoint Mũi tên điều hướng 3D dưới sàn trước mỗi hiện vật
 */
export function createWaypoints(scene, onWaypointClick) {
  const waypointGroup = new THREE.Group();
  waypointGroup.name = "ExhibitWaypoints";
  const waypoints = [];
  const animators = [];

  // Material phát sáng
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0x00d4ff,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.65,
  });

  const arrowMat = new THREE.MeshStandardMaterial({
    color: 0xf39c12,
    emissive: 0xf39c12,
    emissiveIntensity: 0.5,
    roughness: 0.3,
    metalness: 0.7,
  });

  EXHIBITS_DATA.forEach((exhibit, index) => {
    const wp = new THREE.Group();
    const wpPos = exhibit.cameraWaypoint;
    wp.position.set(wpPos.x, 0.02, wpPos.z);
    wp.userData = {
      isWaypoint: true,
      exhibitIndex: index,
      exhibitData: exhibit
    };

    // 1. Vòng tròn đồng tâm phát sáng nhấp nháy trên sàn
    const outerRing = new THREE.Mesh(
      new THREE.RingGeometry(0.65, 0.8, 32),
      ringMat.clone()
    );
    outerRing.rotation.x = -Math.PI / 2;
    wp.add(outerRing);

    const innerDot = new THREE.Mesh(
      new THREE.CircleGeometry(0.18, 24),
      new THREE.MeshBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.75 })
    );
    innerDot.rotation.x = -Math.PI / 2;
    wp.add(innerDot);

    // 2. Mũi tên 3D chỉ hướng lơ lửng chỉ về phía hiện vật
    const arrowGroup = new THREE.Group();
    
    // Thân mũi tên
    const shaft = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 0.45, 12),
      arrowMat.clone()
    );
    shaft.position.y = 0.22;
    arrowGroup.add(shaft);

    // Đầu nhọn mũi tên
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(0.12, 0.25, 16),
      arrowMat.clone()
    );
    cone.position.y = 0.55;
    arrowGroup.add(cone);

    arrowGroup.position.y = 0.35;
    
    // Hướng mũi tên chỉ về bục hiện vật
    const dir = new THREE.Vector3(
      exhibit.position.x - wpPos.x,
      0,
      exhibit.position.z - wpPos.z
    ).normalize();
    const targetAngle = Math.atan2(dir.x, dir.z);
    arrowGroup.rotation.y = targetAngle;
    arrowGroup.rotation.x = Math.PI / 4; // Nghiêng 45 độ hướng về hiện vật
    wp.add(arrowGroup);

    // 3. Bảng nhãn tên nổi 3D (Billboard Badge)
    const labelBadge = createFloatingLabel(`${exhibit.icon} Bấm bước tới: ${exhibit.title}`);
    labelBadge.position.set(0, 0.9, 0);
    wp.add(labelBadge);

    // 4. Vùng collider lớn giúp dễ click trúng
    const wpCollider = new THREE.Mesh(
      new THREE.CylinderGeometry(1.0, 1.0, 1.5, 16),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    wpCollider.position.y = 0.75;
    wpCollider.userData = { isWaypointCollider: true, exhibitIndex: index };
    wp.add(wpCollider);

    waypointGroup.add(wp);
    waypoints.push(wp);

    // Hoạt ảnh nhấp nhô & phát sáng cho mũi tên
    animators.push((time) => {
      const pulse = Math.sin(time * 3 + index) * 0.15;
      outerRing.scale.set(1 + pulse, 1 + pulse, 1);
      arrowGroup.position.y = 0.35 + Math.sin(time * 4 + index) * 0.08;
      labelBadge.position.y = 0.9 + Math.sin(time * 2.5 + index) * 0.04;
    });
  });

  scene.add(waypointGroup);

  return { waypointGroup, waypoints, animators };
}

function createFloatingLabel(text) {
  const canvas = document.createElement('canvas');
  canvas.width = 600;
  canvas.height = 120;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(5, 15, 30, 0.9)';
  ctx.roundRect ? ctx.roundRect(10, 10, 580, 100, 20) : ctx.fillRect(10, 10, 580, 100);
  ctx.fill();

  ctx.strokeStyle = '#00d4ff';
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 24px "Segoe UI", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 300, 60);

  const texture = new THREE.CanvasTexture(canvas);
  const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
  const sprite = new THREE.Sprite(spriteMat);
  sprite.scale.set(2.2, 0.45, 1);
  return sprite;
}
