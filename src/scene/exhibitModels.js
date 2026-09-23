import * as THREE from 'three';
import { EXHIBITS_DATA } from '../data/exhibits-data.js';

export function createExhibitObjects(scene) {
  const exhibitObjects = [];
  const animators = [];
  const textureLoader = new THREE.TextureLoader();

  // Vật liệu bục trưng bày gỗ gụ & đá sẫm cao cấp phong cách bảo tàng
  const pedestalMat = new THREE.MeshStandardMaterial({
    color: 0x1e1611, // Gỗ mun/gụ sẫm bóng mờ bảo tàng
    roughness: 0.55,
    metalness: 0.15,
  });

  const pedestalBaseMat = new THREE.MeshStandardMaterial({
    color: 0x140e0a,
    roughness: 0.7,
    metalness: 0.1,
  });

  const goldTrimMat = new THREE.MeshStandardMaterial({
    color: 0xd4af37, // Mạ vàng hoàng gia
    roughness: 0.18,
    metalness: 0.88,
  });

  const velvetMat = new THREE.MeshStandardMaterial({
    color: 0x730e16, // Đệm nhung đỏ bảo tàng
    roughness: 0.75,
    metalness: 0.05,
  });

  EXHIBITS_DATA.forEach((data, index) => {
    const group = new THREE.Group();
    group.position.set(data.position.x, 0, data.position.z);
    group.userData = {
      isExhibit: true,
      exhibitIndex: index,
      data: data
    };

    // ── 1. BỆ ĐỠ CHUNG BẢO TÀNG (UNIFIED MUSEUM PEDESTAL) ────────
    const pedGroup = new THREE.Group();

    // Chân đế bệ vát gờ
    const baseMesh = new THREE.Mesh(
      new THREE.BoxGeometry(2.0, 0.18, 1.8),
      pedestalBaseMat
    );
    baseMesh.position.y = 0.09;
    baseMesh.receiveShadow = true;
    baseMesh.castShadow = true;
    pedGroup.add(baseMesh);

    // Thân bục chính
    const pedHeight = 0.85;
    const bodyMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1.7, pedHeight, 1.5),
      pedestalMat
    );
    bodyMesh.position.y = 0.18 + pedHeight / 2;
    bodyMesh.receiveShadow = true;
    bodyMesh.castShadow = true;
    pedGroup.add(bodyMesh);

    // Viền nẹp phào chỉ mạ vàng bao quanh mép bục
    const trimMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1.74, 0.04, 1.54),
      goldTrimMat
    );
    trimMesh.position.y = 0.18 + pedHeight;
    pedGroup.add(trimMesh);

    // Tấm đệm nhung đỏ trang trọng đặt khung tranh
    const cushionMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1.55, 0.03, 1.35),
      velvetMat
    );
    cushionMesh.position.y = 0.18 + pedHeight + 0.02;
    cushionMesh.receiveShadow = true;
    pedGroup.add(cushionMesh);

    // ── 2. CỘT BARIE DÂY NHUNG ĐỎ BẢO VỆ (STANCHIONS) ─────────────
    createVelvetBarrier(pedGroup, goldTrimMat);

    // ── 3. VÒNG HÀO QUANG VÀNG DƯỚI SÀN (FLOOR GLOW RING) ─────────
    const glowRingGeo = new THREE.RingGeometry(1.4, 1.65, 48);
    const glowRingMat = new THREE.MeshBasicMaterial({
      color: 0xffd700,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6
    });
    const glowRing = new THREE.Mesh(glowRingGeo, glowRingMat);
    glowRing.rotation.x = -Math.PI / 2;
    glowRing.position.y = 0.015;
    pedGroup.add(glowRing);

    animators.push((time) => {
      glowRingMat.opacity = 0.45 + Math.sin(time * 2.2 + index) * 0.2;
      const s = 1 + Math.sin(time * 2.2 + index) * 0.03;
      glowRing.scale.set(s, s, 1);
    });

    // ── 4. BIỂN TÊN HIỆN VẬT GẮN TRƯỚC BỤC (BRASS BADGE) ──────────
    const badgeMesh = createPedestalBadge(data.title, data.romanNumeral);
    badgeMesh.position.set(0, 0.62, -0.88);
    badgeMesh.rotation.set(0.24, Math.PI, 0); // Nghiêng 14 độ ngửa lên hướng tầm mắt người xem
    pedGroup.add(badgeMesh);

    // ── 5. SPOTLIGHT VÀNG ẤM RỌI HIỆN VẬT TỪ TRẦN CAO ────────────
    const spot = new THREE.SpotLight(0xffdfa8, 4.7, 16, Math.PI / 4, 0.4, 1.2);
    spot.position.set(0, 6.0, 0);
    spot.target = bodyMesh;
    pedGroup.add(spot);

    group.add(pedGroup);

    // ── 6. KHUNG TRANH NGHỆ THUẬT 3D VỚI ẢNH TƯ LIỆU THẬT ────────
    const modelContainer = new THREE.Group();
    modelContainer.position.y = 0.18 + pedHeight + 0.03;
    const artFrame = buildArtDisplayFrame(data, textureLoader, goldTrimMat, animators);
    modelContainer.add(artFrame);
    group.add(modelContainer);

    // Collider vô hình bắt click chuột tương tác
    const collider = new THREE.Mesh(
      new THREE.CylinderGeometry(1.6, 1.6, 3.2, 16),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    collider.position.y = 1.6;
    collider.userData = { isExhibitCollider: true, exhibitIndex: index };
    group.add(collider);

    scene.add(group);
    exhibitObjects.push(group);
  });

  return { exhibitObjects, animators };
}

// ── KHUNG TRANH 3D NGHỆ THUẬT MẠ VÀNG (3D ART DISPLAY FRAME) ─────
function buildArtDisplayFrame(data, textureLoader, goldMat, animators) {
  const frameGroup = new THREE.Group();

  // Nạp ảnh tư liệu thật chất lượng cao
  const imageUrl = (data.historicalImages && data.historicalImages[0] && data.historicalImages[0].imageUrl)
    ? data.historicalImages[0].imageUrl
    : `/images/exhibits/exhibit_${data.id}_1.jpg`;

  const texture = textureLoader.load(imageUrl);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;

  // Kích thước tranh chuẩn bảo tàng (Rộng 1.7m, Cao 1.25m)
  const W = 1.7;
  const H = 1.25;
  const D = 0.1;

  // 1. Khung gỗ sẫm phía sau (Dark Walnut / Mahogany Frame)
  const woodMat = new THREE.MeshStandardMaterial({
    color: 0x221711,
    roughness: 0.65,
    metalness: 0.15
  });
  const backFrame = new THREE.Mesh(new THREE.BoxGeometry(W + 0.24, H + 0.24, D), woodMat);
  backFrame.position.set(0, 0, -D / 2);
  backFrame.castShadow = true;
  backFrame.receiveShadow = true;
  frameGroup.add(backFrame);

  // 2. Viền phào chỉ mạ vàng hoàng gia ôm sát mép tranh (Gold Gilded Bevel Trim)
  const innerGold = new THREE.Mesh(new THREE.BoxGeometry(W + 0.08, H + 0.08, 0.03), goldMat);
  innerGold.position.set(0, 0, 0.015);
  frameGroup.add(innerGold);

  // 3. Mặt tranh in ảnh tư liệu thật (Canvas Painting Plane)
  const canvasMat = new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 0.65,
    metalness: 0.05,
    side: THREE.DoubleSide
  });
  const canvasMesh = new THREE.Mesh(new THREE.PlaneGeometry(W, H), canvasMat);
  canvasMesh.position.set(0, 0, 0.035);
  canvasMesh.receiveShadow = true;
  frameGroup.add(canvasMesh);

  // 4. Mặt kính bảo tàng phản quang mờ (Museum Anti-reflective Glass)
  const glassMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.05,
    metalness: 0.1,
    transparent: true,
    opacity: 0.12
  });
  const glassMesh = new THREE.Mesh(new THREE.PlaneGeometry(W, H), glassMat);
  glassMesh.position.set(0, 0, 0.045);
  frameGroup.add(glassMesh);

  // 5. Đèn rọi tranh chuyên dụng gắn đỉnh khung tranh (Gallery Picture Light)
  const lampGroup = new THREE.Group();
  lampGroup.position.set(0, H / 2 + 0.12, 0);

  // Cần đèn kim loại mạ vàng cong vươn ra
  const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.3, 12), goldMat);
  arm.rotation.x = Math.PI / 3.4;
  arm.position.set(0, 0.06, 0.12);
  lampGroup.add(arm);

  // Chóa đèn dạng thanh đồng ngang trên đầu bức tranh
  const shade = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.8, 16), goldMat);
  shade.rotation.z = Math.PI / 2;
  shade.position.set(0, 0.14, 0.24);
  shade.castShadow = true;
  lampGroup.add(shade);

  // Nguồn sáng vàng ấm rọi trực tiếp từ chóa đèn vào mặt tranh
  const lampLight = new THREE.SpotLight(0xffdf99, 2.85, 3.5, Math.PI / 3, 0.45, 1.2);
  lampLight.position.set(0, 0.14, 0.25);
  lampLight.target = canvasMesh;
  lampGroup.add(lampLight);

  frameGroup.add(lampGroup);

  // 6. Chân giá đỡ gỗ nghiêng phía sau (Easel Back Support)
  const easelLeg = new THREE.Mesh(new THREE.BoxGeometry(0.08, H + 0.35, 0.04), woodMat);
  easelLeg.position.set(0, 0.0, -0.22);
  easelLeg.rotation.x = Math.PI / 7.5;
  frameGroup.add(easelLeg);

  // Khung tranh hướng về phía người xem (-Z) và nghiêng góc 15° nghệ thuật ngửa lên
  frameGroup.rotation.set(Math.PI / 12, Math.PI, 0);
  frameGroup.position.set(0, H / 2 + 0.08, 0.0);

  // Nhịp thở ánh sáng đèn rọi tranh
  if (animators) {
    animators.push((time) => {
      lampLight.intensity = 2.85 + Math.sin(time * 2.5 + data.id) * 0.2;
    });
  }

  return frameGroup;
}

// ── CỘT BARIE DÂY NHUNG ĐỎ BẢO VỆ (VELVET ROPE STANCHIONS) ────────
function createVelvetBarrier(parent, goldMat) {
  const barrierGroup = new THREE.Group();
  const ropeMat = new THREE.MeshStandardMaterial({
    color: 0x8a0b14, // Dây nhung đỏ sẫm
    roughness: 0.6,
  });

  const positions = [
    [-1.05, 0, -0.95],
    [1.05, 0, -0.95],
    [1.05, 0, 0.95],
    [-1.05, 0, 0.95]
  ];

  // 4 Cột đồng mạ vàng ở 4 góc
  positions.forEach(pos => {
    const colGroup = new THREE.Group();
    colGroup.position.set(pos[0], 0, pos[2]);

    // Đế cột
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 0.04, 16), goldMat);
    base.position.y = 0.02;
    colGroup.add(base);

    // Thân cột
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.9, 16), goldMat);
    pole.position.y = 0.47;
    pole.castShadow = true;
    colGroup.add(pole);

    // Quả cầu đỉnh cột
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.045, 16, 16), goldMat);
    ball.position.y = 0.94;
    colGroup.add(ball);

    barrierGroup.add(colGroup);
  });

  // 4 Dây nhung uốn cong tự nhiên nối các cột
  const ropePairs = [
    [[-1.05, 0.88, -0.95], [1.05, 0.88, -0.95]],
    [[1.05, 0.88, -0.95], [1.05, 0.88, 0.95]],
    [[1.05, 0.88, 0.95], [-1.05, 0.88, 0.95]],
    [[-1.05, 0.88, 0.95], [-1.05, 0.88, -0.95]]
  ];

  ropePairs.forEach(([start, end]) => {
    const mid = [
      (start[0] + end[0]) / 2,
      (start[1] + end[1]) / 2 - 0.16, // Trùng xuống tự nhiên
      (start[2] + end[2]) / 2
    ];
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...start),
      new THREE.Vector3(...mid),
      new THREE.Vector3(...end)
    );
    const tubeGeo = new THREE.TubeGeometry(curve, 16, 0.02, 8, false);
    const ropeMesh = new THREE.Mesh(tubeGeo, ropeMat);
    barrierGroup.add(ropeMesh);
  });

  parent.add(barrierGroup);
}

// ── BẢNG TÊN HIỆN VẬT GẮN TRƯỚC BỤC (MUSEUM BRASS PLAQUE) ────────
function createPedestalBadge(title, romanNumeral) {
  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 260;
  const ctx = canvas.getContext('2d');

  // Khung biển nền đen đá cẩm thạch sang trọng
  ctx.fillStyle = '#141824';
  ctx.fillRect(0, 0, 800, 260);

  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 8;
  ctx.strokeRect(10, 10, 780, 240);

  ctx.strokeStyle = '#8a1b24';
  ctx.lineWidth = 3;
  ctx.strokeRect(20, 20, 760, 220);

  // Số La Mã vàng ánh kim
  ctx.fillStyle = '#f1c40f';
  ctx.font = 'bold 38px "Cinzel", "Times New Roman", serif';
  ctx.textAlign = 'center';
  ctx.fillText(`HIỆN VẬT ${romanNumeral}`, 400, 75);

  // Tên hiện vật trắng sáng sắc nét
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 28px "Montserrat", "Segoe UI", sans-serif';
  ctx.fillText(title, 400, 150);

  // Chú thích hướng dẫn tương tác
  ctx.fillStyle = '#ecc94b';
  ctx.font = '500 20px "Montserrat", sans-serif';
  ctx.fillText('Nhấp để xem tư liệu chi tiết', 400, 205);

  const texture = new THREE.CanvasTexture(canvas);
  return new THREE.Mesh(
    new THREE.PlaneGeometry(1.36, 0.44),
    new THREE.MeshBasicMaterial({ map: texture })
  );
}
