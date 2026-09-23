import * as THREE from 'three';
import { EXHIBITS_DATA } from '../data/exhibits-data.js';

export function createExhibitObjects(scene) {
  const exhibitObjects = [];
  const animators = [];

  // Vật liệu chung
  const pedestalMat = new THREE.MeshStandardMaterial({
    color: 0x1e2430,
    roughness: 0.35,
    metalness: 0.4,
  });

  const goldTrimMat = new THREE.MeshStandardMaterial({
    color: 0xd4af37,
    roughness: 0.25,
    metalness: 0.85,
  });

  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.28,
    roughness: 0.05,
    metalness: 0.1,
    transmission: 0.9,
    ior: 1.5,
  });

  EXHIBITS_DATA.forEach((data, index) => {
    const group = new THREE.Group();
    group.position.set(data.position.x, 0, data.position.z);
    group.userData = {
      isExhibit: true,
      exhibitIndex: index,
      data: data
    };

    // ── BỤC TRƯNG BÀY (PEDESTAL) ────────────────────────────────
    const pedHeight = 0.9;
    const pedBase = new THREE.Mesh(
      new THREE.CylinderGeometry(1.6, 1.75, pedHeight, 32),
      pedestalMat
    );
    pedBase.position.y = pedHeight / 2;
    pedBase.receiveShadow = true;
    pedBase.castShadow = true;
    group.add(pedBase);

    // Vành vàng trang trí bục
    const pedRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.62, 0.04, 16, 48),
      goldTrimMat
    );
    pedRing.rotation.x = Math.PI / 2;
    pedRing.position.y = pedHeight;
    group.add(pedRing);

    // Biển tên hiện vật gắn trước bục
    const badgeMesh = createPedestalBadge(data.title, data.icon);
    badgeMesh.position.set(0, 0.5, -1.68);
    badgeMesh.rotation.y = Math.PI;
    group.add(badgeMesh);

    // Spotlight rọi riêng từng hiện vật
    const spot = new THREE.SpotLight(0xfff5e0, 2.2, 8, Math.PI / 5, 0.4);
    spot.position.set(0, 5, 0);
    spot.target = pedBase;
    group.add(spot);

    // ── MÔ HÌNH 3D CHI TIẾT THEO TỪNG HIỆN VẬT ─────────────────
    let modelMesh = null;

    switch (data.id) {
      case 1: // Trống đồng Đông Sơn & Quả cầu Hologram 54 dân tộc
        modelMesh = buildDongSonDrum(animators);
        break;
      case 2: // Cương lĩnh Dân tộc V.I. Lênin
        modelMesh = buildLeninThesis(animators);
        break;
      case 3: // Tượng Bác Hồ với đồng bào DTTS & Thư 1946
        modelMesh = buildUncleHoExhibit(animators);
        break;
      case 4: // Gian thờ Hùng Vương & Bàn thờ Tổ tiên
        modelMesh = buildHungKingAltar(animators);
        break;
      case 5: // Chùa Một Cột & Tượng Phật hoàng Trần Nhân Tông
        modelMesh = buildOnePillarPagoda(animators);
        break;
      case 6: // Chuông đồng & Thánh giá Phát Diệm
        modelMesh = buildPhatDiemBelfry(animators);
        break;
      case 7: // Cụm Đa tôn giáo: Thiên Nhãn & Hồi giáo Chăm
        modelMesh = buildMultiReligionExhibit(animators);
        break;
      case 8: // Nhà rông Tây Nguyên & Cồng chiêng
        modelMesh = buildNhaRongExhibit(animators);
        break;
      case 9: // Hiến pháp 2013 & Luật Tín ngưỡng tôn giáo
        modelMesh = buildConstitutionExhibit(animators);
        break;
      case 10: // Lá chắn thép chống Diễn biến hòa bình
        modelMesh = buildSecurityShieldExhibit(animators);
        break;
      default:
        modelMesh = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), goldTrimMat);
    }

    if (modelMesh) {
      modelMesh.position.y = pedHeight;
      group.add(modelMesh);
    }

    // Collider vô hình giúp bắt click chuẩn xác
    const collider = new THREE.Mesh(
      new THREE.CylinderGeometry(1.8, 1.8, 3.2, 16),
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

// ── BUILDER CHO 10 HIỆN VẬT ──────────────────────────────────

// 1. Trống đồng Đông Sơn
function buildDongSonDrum(animators) {
  const g = new THREE.Group();
  const bronzeMat = new THREE.MeshStandardMaterial({
    color: 0x8b6508,
    roughness: 0.5,
    metalness: 0.7,
  });
  const patinaMat = new THREE.MeshStandardMaterial({
    color: 0x3d7068,
    roughness: 0.65,
    metalness: 0.3,
  });

  // Thân trống đồng eo thon
  const drumUpper = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.62, 0.35, 32), bronzeMat);
  drumUpper.position.y = 0.55;
  g.add(drumUpper);

  const drumWaist = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.3, 32), patinaMat);
  drumWaist.position.y = 0.28;
  g.add(drumWaist);

  const drumBase = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.78, 0.35, 32), bronzeMat);
  drumBase.position.y = 0.12;
  g.add(drumBase);

  // Mặt trống chạm khắc ngôi sao mặt trời
  const faceMat = new THREE.MeshStandardMaterial({ color: 0x9c7414, roughness: 0.45, metalness: 0.75 });
  const faceMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.73, 0.73, 0.05, 32), faceMat);
  faceMesh.position.y = 0.73;
  g.add(faceMesh);

  // Vành chim Lạc bay (Procedural rings)
  for (let r = 0.25; r <= 0.65; r += 0.12) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.008, 8, 32), bronzeMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.76;
    g.add(ring);
  }

  // Quả cầu hologram 54 dân tộc lơ lửng bên trên
  const holoGeo = new THREE.SphereGeometry(0.38, 24, 24);
  const holoMat = new THREE.MeshBasicMaterial({
    color: 0x00d4ff,
    wireframe: true,
    transparent: true,
    opacity: 0.45,
  });
  const holoSphere = new THREE.Mesh(holoGeo, holoMat);
  holoSphere.position.y = 1.35;
  g.add(holoSphere);

  // Vòng quỹ đạo ánh sáng
  const orbitMat = new THREE.MeshBasicMaterial({ color: 0xf39c12, wireframe: false });
  const orbitRing = new THREE.Mesh(new THREE.TorusGeometry(0.48, 0.012, 8, 32), orbitMat);
  orbitRing.rotation.x = Math.PI / 3;
  orbitRing.position.y = 1.35;
  g.add(orbitRing);

  animators.push((time) => {
    holoSphere.rotation.y = time * 0.4;
    orbitRing.rotation.z = time * 0.6;
    holoSphere.position.y = 1.35 + Math.sin(time * 2) * 0.04;
  });

  return g;
}

// 2. Cương lĩnh Dân tộc V.I. Lênin
function buildLeninThesis(animators) {
  const g = new THREE.Group();
  
  // Tủ kính bảo vệ
  const caseGeo = new THREE.BoxGeometry(1.4, 1.2, 1.0);
  const caseMat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, transparent: true, opacity: 0.25, roughness: 0.1 });
  const displayCase = new THREE.Mesh(caseGeo, caseMat);
  displayCase.position.y = 0.65;
  g.add(displayCase);

  // Bục nghiêng trong tủ
  const standMesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 0.15, 0.5),
    new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.3 })
  );
  standMesh.rotation.x = -Math.PI / 6;
  standMesh.position.set(0, 0.45, 0);
  g.add(standMesh);

  // Cuốn sách mở rộng
  const bookCoverMat = new THREE.MeshStandardMaterial({ color: 0x8b0000, roughness: 0.6 });
  const bookPageMat = new THREE.MeshStandardMaterial({ color: 0xf5f0dc, roughness: 0.8 });

  const leftPage = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.02, 0.42), bookPageMat);
  leftPage.position.set(-0.16, 0.52, 0);
  leftPage.rotation.x = -Math.PI / 6;
  leftPage.rotation.y = 0.05;
  g.add(leftPage);

  const rightPage = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.02, 0.42), bookPageMat);
  rightPage.position.set(0.16, 0.52, 0);
  rightPage.rotation.x = -Math.PI / 6;
  rightPage.rotation.y = -0.05;
  g.add(rightPage);

  // Tượng bán thân Lênin bằng đồng bên cạnh
  const bustMat = new THREE.MeshStandardMaterial({ color: 0xaa7722, roughness: 0.35, metalness: 0.8 });
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), bustMat);
  head.position.set(-0.4, 0.65, 0.15);
  g.add(head);

  const chest = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.18, 0.22, 16), bustMat);
  chest.position.set(-0.4, 0.48, 0.15);
  g.add(chest);

  // Dải ruy băng ánh sáng 3 nguyên tắc Cương lĩnh
  const ribbonGeo = new THREE.TorusGeometry(0.68, 0.015, 8, 32);
  const ribbonMat = new THREE.MeshBasicMaterial({ color: 0xe74c3c, transparent: true, opacity: 0.7 });
  const ribbon = new THREE.Mesh(ribbonGeo, ribbonMat);
  ribbon.rotation.x = Math.PI / 2.5;
  ribbon.position.y = 0.8;
  g.add(ribbon);

  animators.push((time) => {
    ribbon.rotation.z = time * 0.3;
  });

  return g;
}

// 3. Tượng Bác Hồ với đồng bào các DTTS & Bức thư 1946
function buildUncleHoExhibit(animators) {
  const g = new THREE.Group();
  const bronzeMat = new THREE.MeshStandardMaterial({ color: 0x7c531e, roughness: 0.4, metalness: 0.6 });

  // Tượng Bác Hồ (Điêu khắc hình khối ước lệ tôn nghiêm)
  const hoTorso = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.32, 0.8, 16), bronzeMat);
  hoTorso.position.set(0, 0.55, 0.1);
  g.add(hoTorso);

  const hoHead = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), bronzeMat);
  hoHead.position.set(0, 1.05, 0.1);
  g.add(hoHead);

  // Nhân vật thiếu nhi / đồng bào đứng quây quần
  const child1 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.5, 12), bronzeMat);
  child1.position.set(-0.35, 0.38, 0.25);
  g.add(child1);

  const child2 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.5, 12), bronzeMat);
  child2.position.set(0.35, 0.38, 0.25);
  g.add(child2);

  // Bục thư 1946 phía trước
  const desk = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.3, 0.4),
    new THREE.MeshStandardMaterial({ color: 0x4a2c10, roughness: 0.6 })
  );
  desk.position.set(0, 0.25, -0.4);
  desk.rotation.x = -Math.PI / 8;
  g.add(desk);

  // Tờ giấy thư có dấu son đỏ
  const letter = new THREE.Mesh(
    new THREE.PlaneGeometry(0.35, 0.25),
    new THREE.MeshStandardMaterial({ color: 0xfffcf0, roughness: 0.9 })
  );
  letter.rotation.x = -Math.PI / 2.3;
  letter.position.set(0, 0.42, -0.38);
  g.add(letter);

  // Dấu mộc son đỏ tròn
  const seal = new THREE.Mesh(
    new THREE.CircleGeometry(0.025, 16),
    new THREE.MeshBasicMaterial({ color: 0xd63031 })
  );
  seal.rotation.x = -Math.PI / 2.3;
  seal.position.set(0.1, 0.43, -0.36);
  g.add(seal);

  return g;
}

// 4. Gian thờ Hùng Vương & Bàn thờ Tổ tiên
function buildHungKingAltar(animators) {
  const g = new THREE.Group();
  const woodMat = new THREE.MeshStandardMaterial({ color: 0x5a181b, roughness: 0.5 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.3, metalness: 0.8 });

  // 4 cột gỗ gian thờ thu nhỏ
  const colGeo = new THREE.CylinderGeometry(0.06, 0.06, 1.4, 12);
  for (const [cx, cz] of [[-0.6, -0.4], [0.6, -0.4], [-0.6, 0.4], [0.6, 0.4]]) {
    const col = new THREE.Mesh(colGeo, woodMat);
    col.position.set(cx, 0.7, cz);
    g.add(col);
  }

  // Mái ngói cong cổ kính
  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(0.95, 0.4, 4),
    new THREE.MeshStandardMaterial({ color: 0xa93226, roughness: 0.7 })
  );
  roof.rotation.y = Math.PI / 4;
  roof.position.set(0, 1.5, 0);
  g.add(roof);

  // Bàn thờ tam cấp
  const altarTable = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.45, 0.55), woodMat);
  altarTable.position.set(0, 0.25, 0);
  g.add(altarTable);

  // Đỉnh hương đồng
  const censer = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.2, 16), goldMat);
  censer.position.set(0, 0.58, 0);
  g.add(censer);

  // Đôi hạc ngự lưng rùa hai bên
  for (const hx of [-0.3, 0.3]) {
    const crane = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.02, 0.35, 8), goldMat);
    crane.position.set(hx, 0.65, 0);
    g.add(crane);
  }

  // Khói trầm hương particle bay lên
  const smokeParticles = [];
  const smokeMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 });
  for (let i = 0; i < 6; i++) {
    const p = new THREE.Mesh(new THREE.SphereGeometry(0.025 + i * 0.008, 8, 8), smokeMat);
    p.position.set(0, 0.7 + i * 0.08, 0);
    g.add(p);
    smokeParticles.push({ mesh: p, baseHeight: 0.7 + i * 0.08, speed: 0.5 + i * 0.1 });
  }

  animators.push((time) => {
    smokeParticles.forEach((sp, idx) => {
      sp.mesh.position.y = sp.baseHeight + Math.sin(time * 2 + idx) * 0.04;
      sp.mesh.position.x = Math.sin(time * 1.5 + idx) * 0.02;
    });
  });

  return g;
}

// 5. Chùa Một Cột & Tượng Phật hoàng Trần Nhân Tông
function buildOnePillarPagoda(animators) {
  const g = new THREE.Group();
  
  // Hồ sen vuông
  const poolWall = new THREE.Mesh(
    new THREE.BoxGeometry(1.6, 0.2, 1.6),
    new THREE.MeshStandardMaterial({ color: 0x334444, roughness: 0.6 })
  );
  poolWall.position.y = 0.1;
  g.add(poolWall);

  // Mặt nước hồ sen trong xanh phản chiếu
  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(1.45, 1.45),
    new THREE.MeshStandardMaterial({ color: 0x1b4f72, roughness: 0.1, metalness: 0.2 })
  );
  water.rotation.x = -Math.PI / 2;
  water.position.y = 0.18;
  g.add(water);

  // Trụ đá đơn Chùa Một Cột
  const stoneCol = new THREE.Mesh(
    new THREE.CylinderGeometry(0.18, 0.2, 0.7, 16),
    new THREE.MeshStandardMaterial({ color: 0x7f8c8d, roughness: 0.8 })
  );
  stoneCol.position.set(-0.25, 0.5, 0);
  g.add(stoneCol);

  // Liên Hoa Đài (Chùa gỗ mái ngói cong)
  const pagodaBody = new THREE.Mesh(
    new THREE.BoxGeometry(0.55, 0.35, 0.55),
    new THREE.MeshStandardMaterial({ color: 0x922b21, roughness: 0.5 })
  );
  pagodaBody.position.set(-0.25, 0.95, 0);
  g.add(pagodaBody);

  const pagodaRoof = new THREE.Mesh(
    new THREE.ConeGeometry(0.65, 0.3, 4),
    new THREE.MeshStandardMaterial({ color: 0xb03a2e, roughness: 0.6 })
  );
  pagodaRoof.rotation.y = Math.PI / 4;
  pagodaRoof.position.set(-0.25, 1.25, 0);
  g.add(pagodaRoof);

  // Tượng Phật hoàng Trần Nhân Tông tọa thiền
  const buddhaMat = new THREE.MeshStandardMaterial({ color: 0xc8a020, roughness: 0.3, metalness: 0.7 });
  const buddhaPed = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, 0.15, 16), buddhaMat);
  buddhaPed.position.set(0.42, 0.25, 0);
  g.add(buddhaPed);

  const buddhaBody = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.45, 12), buddhaMat);
  buddhaBody.position.set(0.42, 0.5, 0);
  g.add(buddhaBody);

  const buddhaHead = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 16), buddhaMat);
  buddhaHead.position.set(0.42, 0.78, 0);
  g.add(buddhaHead);

  // Hào quang Phật phát sáng
  const halo = new THREE.Mesh(
    new THREE.TorusGeometry(0.18, 0.015, 8, 32),
    new THREE.MeshBasicMaterial({ color: 0xffe600 })
  );
  halo.position.set(0.42, 0.78, -0.05);
  g.add(halo);

  animators.push((time) => {
    halo.scale.setScalar(1 + Math.sin(time * 3) * 0.08);
  });

  return g;
}

// 6. Tháp chuông Phương Đình & Thánh giá Nhà thờ Phát Diệm
function buildPhatDiemBelfry(animators) {
  const g = new THREE.Group();
  const stoneMat = new THREE.MeshStandardMaterial({ color: 0x566573, roughness: 0.7 });
  const bronzeMat = new THREE.MeshStandardMaterial({ color: 0x8a6d3b, roughness: 0.4, metalness: 0.7 });

  // Tầng 1 Tháp Phương Đình bằng đá xanh
  const tower1 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.5, 0.9), stoneMat);
  tower1.position.y = 0.25;
  g.add(tower1);

  // Cửa vòm cuốn đá
  const archHole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.2, 0.2, 0.92, 16),
    new THREE.MeshBasicMaterial({ color: 0x111111 })
  );
  archHole.rotation.x = Math.PI / 2;
  archHole.position.y = 0.25;
  g.add(archHole);

  // Tầng 2 Tháp treo quả chuông đồng lớn
  const tower2 = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.6, 0.75), stoneMat);
  tower2.position.y = 0.75;
  g.add(tower2);

  // Quả chuông đồng 2 tấn treo giữa vòm
  const bell = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.35, 16), bronzeMat);
  bell.position.set(0, 0.7, 0);
  g.add(bell);

  // Mái ngói cong truyền thống Á Đông của tháp chuông
  const bellRoof = new THREE.Mesh(
    new THREE.ConeGeometry(0.85, 0.25, 4),
    new THREE.MeshStandardMaterial({ color: 0x78281f, roughness: 0.6 })
  );
  bellRoof.rotation.y = Math.PI / 4;
  bellRoof.position.y = 1.15;
  g.add(bellRoof);

  // Cây Thánh giá gỗ mun nạm xà cừ đặt trang trọng phía trước
  const crossMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.3, metalness: 0.8 });
  const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.45, 0.04), crossMat);
  crossV.position.set(0, 0.55, 0.55);
  g.add(crossV);

  const crossH = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.06, 0.04), crossMat);
  crossH.position.set(0, 0.65, 0.55);
  g.add(crossH);

  animators.push((time) => {
    bell.rotation.z = Math.sin(time * 1.5) * 0.08;
  });

  return g;
}

// 7. Cụm Đa tôn giáo: Thiên Nhãn Cao Đài & Vòm Hồi giáo Chăm
function buildMultiReligionExhibit(animators) {
  const g = new THREE.Group();
  
  // Bục xoay tròn 360 độ
  const turnTable = new THREE.Group();
  g.add(turnTable);

  // 1. Biểu tượng Cao Đài: Quả Càn Khôn & Thiên Nhãn (bên trái)
  const caodaiGroup = new THREE.Group();
  caodaiGroup.position.set(-0.45, 0, 0);

  const globeGeo = new THREE.SphereGeometry(0.28, 24, 24);
  const globeMat = new THREE.MeshStandardMaterial({ color: 0x1f618d, roughness: 0.3, metalness: 0.4 });
  const caodaiGlobe = new THREE.Mesh(globeGeo, globeMat);
  caodaiGlobe.position.y = 0.55;
  caodaiGroup.add(caodaiGlobe);

  // Biểu tượng Thiên Nhãn (Mắt Trời tỏa hào quang)
  const eyeHalo = new THREE.Mesh(
    new THREE.TorusGeometry(0.36, 0.02, 12, 32),
    new THREE.MeshBasicMaterial({ color: 0xf39c12 })
  );
  eyeHalo.position.set(0, 0.55, 0);
  caodaiGroup.add(eyeHalo);

  turnTable.add(caodaiGroup);

  // 2. Biểu tượng Hồi giáo Chăm: Mái vòm xanh & Trăng sao (bên phải)
  const islamGroup = new THREE.Group();
  islamGroup.position.set(0.45, 0, 0);

  const domeMat = new THREE.MeshStandardMaterial({ color: 0x117864, roughness: 0.25, metalness: 0.6 });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(0.3, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2), domeMat);
  dome.position.y = 0.35;
  islamGroup.add(dome);

  // Trăng sao lưỡi liềm vàng kim trên đỉnh vòm
  const crescentMat = new THREE.MeshBasicMaterial({ color: 0xf4d03f });
  const crescent = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.025, 8, 24, Math.PI * 1.5), crescentMat);
  crescent.position.set(0, 0.75, 0);
  islamGroup.add(crescent);

  turnTable.add(islamGroup);

  // Phù điêu bàn tay đoàn kết kết nối
  const bridgeMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.4, metalness: 0.8 });
  const bridge = new THREE.Mesh(new THREE.TorusGeometry(0.65, 0.02, 8, 32, Math.PI), bridgeMat);
  bridge.rotation.x = Math.PI / 2;
  bridge.position.y = 0.15;
  turnTable.add(bridge);

  animators.push((time) => {
    turnTable.rotation.y = time * 0.25;
  });

  return g;
}

// 8. Mô hình Nhà rông Tây Nguyên & Cồng chiêng
function buildNhaRongExhibit(animators) {
  const g = new THREE.Group();
  const woodMat = new THREE.MeshStandardMaterial({ color: 0x6e2c00, roughness: 0.7 });
  const thatchMat = new THREE.MeshStandardMaterial({ color: 0xd35400, roughness: 0.9 });
  const bronzeMat = new THREE.MeshStandardMaterial({ color: 0x4a3b1a, roughness: 0.4, metalness: 0.8 });

  // Cột nhà sàn
  for (const [x, z] of [[-0.4, -0.3], [0.4, -0.3], [-0.4, 0.3], [0.4, 0.3]]) {
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.5, 8), woodMat);
    col.position.set(x, 0.25, z);
    g.add(col);
  }

  // Sàn gỗ nhà rông
  const floor = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.06, 0.75), woodMat);
  floor.position.y = 0.5;
  g.add(floor);

  // Mái nhà rông cao vút lưỡi búa vươn lên trời
  const roof = new THREE.Mesh(new THREE.ConeGeometry(0.7, 1.4, 4), thatchMat);
  roof.scale.set(0.6, 1.0, 1.2);
  roof.position.set(0, 1.25, 0);
  g.add(roof);

  // Giá treo bộ cồng chiêng trước sân
  const gongRack = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 0.04, 0.04),
    new THREE.MeshStandardMaterial({ color: 0x222222 })
  );
  gongRack.position.set(0, 0.45, 0.55);
  g.add(gongRack);

  // 5 chiếc cồng chiêng kích thước giảm dần
  for (let i = -2; i <= 2; i++) {
    const r = 0.07 - Math.abs(i) * 0.01;
    const gong = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.015, 16), bronzeMat);
    gong.rotation.x = Math.PI / 2;
    gong.position.set(i * 0.16, 0.38, 0.55);
    g.add(gong);
  }

  // Bếp lửa buôn làng bập bùng
  const fireMat = new THREE.MeshBasicMaterial({ color: 0xe67e22 });
  const fire = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.25, 8), fireMat);
  fire.position.set(0, 0.12, -0.55);
  g.add(fire);

  animators.push((time) => {
    fire.scale.y = 1 + Math.sin(time * 12) * 0.2;
    fire.scale.x = 1 + Math.cos(time * 10) * 0.15;
  });

  return g;
}

// 9. Hiến pháp 2013 & Luật Tín ngưỡng, Tôn giáo 2016
function buildConstitutionExhibit(animators) {
  const g = new THREE.Group();
  
  // Bục cẩm thạch trắng
  const marbleMat = new THREE.MeshStandardMaterial({ color: 0xf8f9f9, roughness: 0.2, metalness: 0.1 });
  const stand = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.35, 0.7), marbleMat);
  stand.position.y = 0.18;
  g.add(stand);

  // Quốc huy Việt Nam mạ vàng dập nổi phía trước bục
  const emblemMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.2, metalness: 0.9 });
  const emblem = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.03, 32), emblemMat);
  emblem.rotation.x = Math.PI / 2;
  emblem.position.set(0, 0.18, 0.36);
  g.add(emblem);

  // Hai cuốn sách luật bìa đỏ dập chữ vàng
  const lawMat = new THREE.MeshStandardMaterial({ color: 0x922b21, roughness: 0.5 });
  const book1 = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.08, 0.32), lawMat);
  book1.position.set(-0.28, 0.4, 0);
  book1.rotation.y = 0.1;
  g.add(book1);

  const book2 = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.08, 0.32), lawMat);
  book2.position.set(0.28, 0.4, 0);
  book2.rotation.y = -0.1;
  g.add(book2);

  // Cột cờ Tổ quốc phía sau tung bay
  const pole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.015, 0.015, 1.4, 12),
    new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.8 })
  );
  pole.position.set(0, 0.8, -0.28);
  g.add(pole);

  const flagMat = new THREE.MeshBasicMaterial({ color: 0xda251d, side: THREE.DoubleSide });
  const flag = new THREE.Mesh(new THREE.PlaneGeometry(0.45, 0.3), flagMat);
  flag.position.set(0.23, 1.35, -0.28);
  g.add(flag);

  // Ngôi sao vàng trên cờ
  const starMat = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const star = new THREE.Mesh(new THREE.CircleGeometry(0.06, 5), starMat);
  star.position.set(0.23, 1.35, -0.27);
  g.add(star);

  animators.push((time) => {
    flag.rotation.y = Math.sin(time * 3) * 0.15;
  });

  return g;
}

// 10. Trận tuyến "Lá chắn thép" chống Diễn biến hòa bình
function buildSecurityShieldExhibit(animators) {
  const g = new THREE.Group();
  const titanMat = new THREE.MeshStandardMaterial({
    color: 0x4a5568,
    roughness: 0.3,
    metalness: 0.85,
  });

  // Khiên thép titan bảo vệ vững chắc
  const shieldGeo = new THREE.CylinderGeometry(0.55, 0.42, 0.85, 8);
  const shield = new THREE.Mesh(shieldGeo, titanMat);
  shield.scale.set(1.0, 1.1, 0.25);
  shield.position.set(0, 0.65, 0);
  g.add(shield);

  // Bản đồ chữ S và 2 quần đảo Hoàng Sa - Trường Sa mạ vàng trên mặt khiên
  const sMapMat = new THREE.MeshBasicMaterial({ color: 0xf1c40f });
  const sMap = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.02, 8, 32, Math.PI * 1.6), sMapMat);
  sMap.position.set(0, 0.65, 0.15);
  g.add(sMap);

  // Vòng quét laser radar phòng hộ
  const radarGeo = new THREE.RingGeometry(0.7, 0.74, 32);
  const radarMat = new THREE.MeshBasicMaterial({ color: 0x00d4ff, side: THREE.DoubleSide, transparent: true, opacity: 0.6 });
  const radar = new THREE.Mesh(radarGeo, radarMat);
  radar.rotation.x = Math.PI / 2;
  radar.position.y = 0.65;
  g.add(radar);

  // Màn hình tư liệu an ninh bên cạnh
  const screen = new THREE.Mesh(
    new THREE.BoxGeometry(0.65, 0.45, 0.05),
    new THREE.MeshStandardMaterial({ color: 0x111622, roughness: 0.2 })
  );
  screen.position.set(0.7, 0.55, -0.15);
  screen.rotation.y = -Math.PI / 6;
  g.add(screen);

  animators.push((time) => {
    radar.rotation.z = time * 0.8;
    radar.scale.setScalar(1 + Math.sin(time * 2) * 0.06);
  });

  return g;
}

// ── BẢNG TÊN HIỆN VẬT GẮN TRƯỚC BỤC (PEDESTAL BADGE) ─────────
function createPedestalBadge(title, icon) {
  const canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 200;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(15, 20, 30, 0.95)';
  ctx.fillRect(0, 0, 640, 200);

  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 6;
  ctx.strokeRect(10, 10, 620, 180);

  ctx.fillStyle = '#f39c12';
  ctx.font = '48px serif';
  ctx.textAlign = 'center';
  ctx.fillText(icon, 320, 65);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 26px "Segoe UI", sans-serif';
  ctx.fillText(title, 320, 130);

  ctx.fillStyle = '#00d4ff';
  ctx.font = '18px "Segoe UI", sans-serif';
  ctx.fillText('Nhấp để đến gần & Khám phá chi tiết', 320, 168);

  const texture = new THREE.CanvasTexture(canvas);
  return new THREE.Mesh(
    new THREE.PlaneGeometry(1.2, 0.38),
    new THREE.MeshBasicMaterial({ map: texture, transparent: true })
  );
}
