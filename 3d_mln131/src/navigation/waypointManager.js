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

  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xd4af37,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.75,
  });

  const arrowMat = new THREE.MeshStandardMaterial({
    color: 0xffd700,
    emissive: 0xd4af37,
    emissiveIntensity: 0.55,
    roughness: 0.2,
    metalness: 0.85,
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
      new THREE.MeshBasicMaterial({ color: 0xffe082, transparent: true, opacity: 0.85 })
    );
    innerDot.rotation.x = -Math.PI / 2;
    wp.add(innerDot);

    // 2. Mũi tên 3D chỉ hướng lơ lửng chỉ về phía hiện vật
    const arrowGroup = new THREE.Group();
    
    const shaft = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 0.45, 12),
      arrowMat.clone()
    );
    shaft.position.y = 0.22;
    arrowGroup.add(shaft);

    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(0.12, 0.25, 16),
      arrowMat.clone()
    );
    cone.position.y = 0.55;
    arrowGroup.add(cone);

    arrowGroup.position.y = 0.35;
    
    const dir = new THREE.Vector3(
      exhibit.position.x - wpPos.x,
      0,
      exhibit.position.z - wpPos.z
    ).normalize();
    const targetAngle = Math.atan2(dir.x, dir.z);
    arrowGroup.rotation.y = targetAngle;
    arrowGroup.rotation.x = Math.PI / 4;
    wp.add(arrowGroup);

    // 3. Bảng nhãn tên nổi 3D (Billboard Badge) - Không dùng icon
    const labelBadge = createFloatingLabel(`Hiện vật ${exhibit.romanNumeral}: ${exhibit.title}`);
    labelBadge.position.set(0, 0.9, 0);
    wp.add(labelBadge);

    // 4. Vùng collider lớn
    const wpCollider = new THREE.Mesh(
      new THREE.CylinderGeometry(1.0, 1.0, 1.5, 16),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    wpCollider.position.y = 0.75;
    wpCollider.userData = { isWaypointCollider: true, exhibitIndex: index };
    wp.add(wpCollider);

    waypointGroup.add(wp);
    waypoints.push(wp);

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
  canvas.width = 800;
  canvas.height = 130;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(20, 15, 12, 0.92)';
  if (ctx.roundRect) {
    ctx.roundRect(10, 10, 780, 110, 20);
  } else {
    ctx.fillRect(10, 10, 780, 110);
  }
  ctx.fill();

  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 4;
  ctx.stroke();

  // Tự động co giãn cỡ chữ để đảm bảo text không bao giờ tràn ra ngoài ô
  let fontSize = 23;
  ctx.font = `700 ${fontSize}px "Be Vietnam Pro", "Montserrat", "Segoe UI", sans-serif`;
  while (ctx.measureText(text).width > 720 && fontSize > 14) {
    fontSize -= 1;
    ctx.font = `700 ${fontSize}px "Be Vietnam Pro", "Montserrat", "Segoe UI", sans-serif`;
  }

  ctx.fillStyle = '#f5d77f';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 400, 65);

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 8;
  const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
  const sprite = new THREE.Sprite(spriteMat);
  sprite.scale.set(2.8, 0.455, 1);
  return sprite;
}
