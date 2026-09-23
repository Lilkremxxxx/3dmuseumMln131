import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EXHIBITS_DATA } from '../data/exhibits-data.js';

export function createExhibitObjects(scene) {
  const exhibitObjects = [];
  const animators = [];
  const gltfLoader = new GLTFLoader();

  // Vật liệu bục trưng bày sáng cẩm thạch
  const pedestalMat = new THREE.MeshStandardMaterial({
    color: 0xf5f3ee, // Đá cẩm thạch trắng sáng
    roughness: 0.25,
    metalness: 0.1,
  });

  const goldTrimMat = new THREE.MeshStandardMaterial({
    color: 0xd4af37,
    roughness: 0.2,
    metalness: 0.85,
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
      new THREE.CylinderGeometry(1.65, 1.8, pedHeight, 32),
      pedestalMat
    );
    pedBase.position.y = pedHeight / 2;
    pedBase.receiveShadow = true;
    pedBase.castShadow = true;
    group.add(pedBase);

    // Vành vàng trang trí bục
    const pedRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.67, 0.04, 16, 48),
      goldTrimMat
    );
    pedRing.rotation.x = Math.PI / 2;
    pedRing.position.y = pedHeight;
    group.add(pedRing);

    // Biển tên hiện vật gắn trước bục (chữ La Mã học thuật, không icon)
    const badgeMesh = createPedestalBadge(data.title, data.romanNumeral);
    badgeMesh.position.set(0, 0.5, -1.72);
    badgeMesh.rotation.y = Math.PI;
    group.add(badgeMesh);

    // Spotlight rọi riêng từng hiện vật - độ sáng cao
    const spot = new THREE.SpotLight(0xfff8ee, 3.2, 10, Math.PI / 4, 0.35);
    spot.position.set(0, 5.5, 0);
    spot.target = pedBase;
    group.add(spot);

    // ── MÔ HÌNH 3D (HỖ TRỢ GLTF FILE HOẶC PROCEDURAL) ───────────
    const modelContainer = new THREE.Group();
    modelContainer.position.y = pedHeight;
    group.add(modelContainer);

    // Thử tải file .glb nếu người dùng đưa vào thư mục public/models/
    let hasLoadedGltf = false;
    if (data.modelFile) {
      gltfLoader.load(
        data.modelFile,
        (gltf) => {
          hasLoadedGltf = true;
          // Xóa mô hình tạm nếu có
          while (modelContainer.children.length > 0) {
            modelContainer.remove(modelContainer.children[0]);
          }
          const loadedModel = gltf.scene;
          loadedModel.scale.set(1, 1, 1);
          modelContainer.add(loadedModel);
        },
        undefined,
        () => {
          // File GLB chưa có sẵn, tiếp tục hiển thị mô hình 3D thủ công
        }
      );
    }

    // Mô hình 3D thủ công mặc định
    let defaultModel = null;
    switch (data.id) {
      case 1:
        defaultModel = buildDongSonDrum(animators);
        break;
      case 2:
        defaultModel = buildLeninThesis(animators);
        break;
      case 3:
        defaultModel = buildUncleHoExhibit(animators);
        break;
      case 4:
        defaultModel = buildHungKingAltar(animators);
        break;
      case 5:
        defaultModel = buildOnePillarPagoda(animators);
        break;
      case 6:
        defaultModel = buildPhatDiemBelfry(animators);
        break;
      case 7:
        defaultModel = buildMultiReligionExhibit(animators);
        break;
      case 8:
        defaultModel = buildNhaRongExhibit(animators);
        break;
      case 9:
        defaultModel = buildConstitutionExhibit(animators);
        break;
      case 10:
        defaultModel = buildSecurityShieldExhibit(animators);
        break;
      default:
        defaultModel = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), goldTrimMat);
    }

    if (defaultModel) {
      modelContainer.add(defaultModel);
    }

    // Collider vô hình bắt click
    const collider = new THREE.Mesh(
      new THREE.CylinderGeometry(1.85, 1.85, 3.2, 16),
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

// ── BUILDER CHO 10 HIỆN VẬT THỦ CÔNG SANG TRỌNG ───────────────

function buildDongSonDrum(animators) {
  const g = new THREE.Group();
  const bronzeMat = new THREE.MeshStandardMaterial({
    color: 0x9e721d,
    roughness: 0.45,
    metalness: 0.75,
  });
  const patinaMat = new THREE.MeshStandardMaterial({
    color: 0x41726a,
    roughness: 0.6,
    metalness: 0.35,
  });

  const drumUpper = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.62, 0.35, 32), bronzeMat);
  drumUpper.position.y = 0.55;
  g.add(drumUpper);

  const drumWaist = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.3, 32), patinaMat);
  drumWaist.position.y = 0.28;
  g.add(drumWaist);

  const drumBase = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.78, 0.35, 32), bronzeMat);
  drumBase.position.y = 0.12;
  g.add(drumBase);

  const faceMat = new THREE.MeshStandardMaterial({ color: 0xb38622, roughness: 0.4, metalness: 0.8 });
  const faceMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.73, 0.73, 0.05, 32), faceMat);
  faceMesh.position.y = 0.73;
  g.add(faceMesh);

  for (let r = 0.25; r <= 0.65; r += 0.12) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.008, 8, 32), bronzeMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.76;
    g.add(ring);
  }

  const holoGeo = new THREE.SphereGeometry(0.38, 24, 24);
  const holoMat = new THREE.MeshBasicMaterial({
    color: 0x0099cc,
    wireframe: true,
    transparent: true,
    opacity: 0.45,
  });
  const holoSphere = new THREE.Mesh(holoGeo, holoMat);
  holoSphere.position.y = 1.35;
  g.add(holoSphere);

  const orbitRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.48, 0.012, 8, 32),
    new THREE.MeshBasicMaterial({ color: 0xd4af37 })
  );
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

function buildLeninThesis(animators) {
  const g = new THREE.Group();
  
  const caseGeo = new THREE.BoxGeometry(1.4, 1.2, 1.0);
  const caseMat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, transparent: true, opacity: 0.25, roughness: 0.05 });
  const displayCase = new THREE.Mesh(caseGeo, caseMat);
  displayCase.position.y = 0.65;
  g.add(displayCase);

  const standMesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 0.15, 0.5),
    new THREE.MeshStandardMaterial({ color: 0x2c3e50, roughness: 0.3 })
  );
  standMesh.rotation.x = -Math.PI / 6;
  standMesh.position.set(0, 0.45, 0);
  g.add(standMesh);

  const bookCoverMat = new THREE.MeshStandardMaterial({ color: 0x8b0000, roughness: 0.5 });
  const bookPageMat = new THREE.MeshStandardMaterial({ color: 0xfbf8ee, roughness: 0.8 });

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

  const bustMat = new THREE.MeshStandardMaterial({ color: 0xb5882b, roughness: 0.35, metalness: 0.8 });
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), bustMat);
  head.position.set(-0.4, 0.65, 0.15);
  g.add(head);

  const chest = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.18, 0.22, 16), bustMat);
  chest.position.set(-0.4, 0.48, 0.15);
  g.add(chest);

  const ribbon = new THREE.Mesh(
    new THREE.TorusGeometry(0.68, 0.015, 8, 32),
    new THREE.MeshBasicMaterial({ color: 0xc0392b, transparent: true, opacity: 0.6 })
  );
  ribbon.rotation.x = Math.PI / 2.5;
  ribbon.position.y = 0.8;
  g.add(ribbon);

  animators.push((time) => {
    ribbon.rotation.z = time * 0.3;
  });

  return g;
}

function buildUncleHoExhibit(animators) {
  const g = new THREE.Group();
  const bronzeMat = new THREE.MeshStandardMaterial({ color: 0x8c622b, roughness: 0.4, metalness: 0.65 });

  const hoTorso = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.32, 0.8, 16), bronzeMat);
  hoTorso.position.set(0, 0.55, 0.1);
  g.add(hoTorso);

  const hoHead = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), bronzeMat);
  hoHead.position.set(0, 1.05, 0.1);
  g.add(hoHead);

  const child1 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.5, 12), bronzeMat);
  child1.position.set(-0.35, 0.38, 0.25);
  g.add(child1);

  const child2 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.5, 12), bronzeMat);
  child2.position.set(0.35, 0.38, 0.25);
  g.add(child2);

  const desk = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.3, 0.4),
    new THREE.MeshStandardMaterial({ color: 0x5a3818, roughness: 0.5 })
  );
  desk.position.set(0, 0.25, -0.4);
  desk.rotation.x = -Math.PI / 8;
  g.add(desk);

  const letter = new THREE.Mesh(
    new THREE.PlaneGeometry(0.35, 0.25),
    new THREE.MeshStandardMaterial({ color: 0xfffcf5, roughness: 0.9 })
  );
  letter.rotation.x = -Math.PI / 2.3;
  letter.position.set(0, 0.42, -0.38);
  g.add(letter);

  const seal = new THREE.Mesh(
    new THREE.CircleGeometry(0.025, 16),
    new THREE.MeshBasicMaterial({ color: 0xc0392b })
  );
  seal.rotation.x = -Math.PI / 2.3;
  seal.position.set(0.1, 0.43, -0.36);
  g.add(seal);

  return g;
}

function buildHungKingAltar(animators) {
  const g = new THREE.Group();
  const woodMat = new THREE.MeshStandardMaterial({ color: 0x6e2428, roughness: 0.45 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.25, metalness: 0.85 });

  const colGeo = new THREE.CylinderGeometry(0.06, 0.06, 1.4, 12);
  for (const [cx, cz] of [[-0.6, -0.4], [0.6, -0.4], [-0.6, 0.4], [0.6, 0.4]]) {
    const col = new THREE.Mesh(colGeo, woodMat);
    col.position.set(cx, 0.7, cz);
    g.add(col);
  }

  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(0.95, 0.4, 4),
    new THREE.MeshStandardMaterial({ color: 0xa93226, roughness: 0.65 })
  );
  roof.rotation.y = Math.PI / 4;
  roof.position.set(0, 1.5, 0);
  g.add(roof);

  const altarTable = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.45, 0.55), woodMat);
  altarTable.position.set(0, 0.25, 0);
  g.add(altarTable);

  const censer = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.2, 16), goldMat);
  censer.position.set(0, 0.58, 0);
  g.add(censer);

  for (const hx of [-0.3, 0.3]) {
    const crane = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.02, 0.35, 8), goldMat);
    crane.position.set(hx, 0.65, 0);
    g.add(crane);
  }

  const smokeParticles = [];
  const smokeMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3 });
  for (let i = 0; i < 6; i++) {
    const p = new THREE.Mesh(new THREE.SphereGeometry(0.025 + i * 0.008, 8, 8), smokeMat);
    p.position.set(0, 0.7 + i * 0.08, 0);
    g.add(p);
    smokeParticles.push({ mesh: p, baseHeight: 0.7 + i * 0.08 });
  }

  animators.push((time) => {
    smokeParticles.forEach((sp, idx) => {
      sp.mesh.position.y = sp.baseHeight + Math.sin(time * 2 + idx) * 0.04;
      sp.mesh.position.x = Math.sin(time * 1.5 + idx) * 0.02;
    });
  });

  return g;
}

function buildOnePillarPagoda(animators) {
  const g = new THREE.Group();
  
  const poolWall = new THREE.Mesh(
    new THREE.BoxGeometry(1.6, 0.2, 1.6),
    new THREE.MeshStandardMaterial({ color: 0x4a5b60, roughness: 0.5 })
  );
  poolWall.position.y = 0.1;
  g.add(poolWall);

  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(1.45, 1.45),
    new THREE.MeshStandardMaterial({ color: 0x2471a3, roughness: 0.08, metalness: 0.2 })
  );
  water.rotation.x = -Math.PI / 2;
  water.position.y = 0.18;
  g.add(water);

  const stoneCol = new THREE.Mesh(
    new THREE.CylinderGeometry(0.18, 0.2, 0.7, 16),
    new THREE.MeshStandardMaterial({ color: 0x95a5a6, roughness: 0.7 })
  );
  stoneCol.position.set(-0.25, 0.5, 0);
  g.add(stoneCol);

  const pagodaBody = new THREE.Mesh(
    new THREE.BoxGeometry(0.55, 0.35, 0.55),
    new THREE.MeshStandardMaterial({ color: 0x922b21, roughness: 0.45 })
  );
  pagodaBody.position.set(-0.25, 0.95, 0);
  g.add(pagodaBody);

  const pagodaRoof = new THREE.Mesh(
    new THREE.ConeGeometry(0.65, 0.3, 4),
    new THREE.MeshStandardMaterial({ color: 0xb03a2e, roughness: 0.55 })
  );
  pagodaRoof.rotation.y = Math.PI / 4;
  pagodaRoof.position.set(-0.25, 1.25, 0);
  g.add(pagodaRoof);

  const buddhaMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.25, metalness: 0.8 });
  const buddhaPed = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, 0.15, 16), buddhaMat);
  buddhaPed.position.set(0.42, 0.25, 0);
  g.add(buddhaPed);

  const buddhaBody = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.45, 12), buddhaMat);
  buddhaBody.position.set(0.42, 0.5, 0);
  g.add(buddhaBody);

  const buddhaHead = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 16), buddhaMat);
  buddhaHead.position.set(0.42, 0.78, 0);
  g.add(buddhaHead);

  const halo = new THREE.Mesh(
    new THREE.TorusGeometry(0.18, 0.015, 8, 32),
    new THREE.MeshBasicMaterial({ color: 0xf1c40f })
  );
  halo.position.set(0.42, 0.78, -0.05);
  g.add(halo);

  animators.push((time) => {
    halo.scale.setScalar(1 + Math.sin(time * 3) * 0.08);
  });

  return g;
}

function buildPhatDiemBelfry(animators) {
  const g = new THREE.Group();
  const stoneMat = new THREE.MeshStandardMaterial({ color: 0x626567, roughness: 0.6 });
  const bronzeMat = new THREE.MeshStandardMaterial({ color: 0x9a7d46, roughness: 0.35, metalness: 0.75 });

  const tower1 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.5, 0.9), stoneMat);
  tower1.position.y = 0.25;
  g.add(tower1);

  const archHole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.2, 0.2, 0.92, 16),
    new THREE.MeshBasicMaterial({ color: 0x222222 })
  );
  archHole.rotation.x = Math.PI / 2;
  archHole.position.y = 0.25;
  g.add(archHole);

  const tower2 = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.6, 0.75), stoneMat);
  tower2.position.y = 0.75;
  g.add(tower2);

  const bell = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.35, 16), bronzeMat);
  bell.position.set(0, 0.7, 0);
  g.add(bell);

  const bellRoof = new THREE.Mesh(
    new THREE.ConeGeometry(0.85, 0.25, 4),
    new THREE.MeshStandardMaterial({ color: 0x78281f, roughness: 0.6 })
  );
  bellRoof.rotation.y = Math.PI / 4;
  bellRoof.position.y = 1.15;
  g.add(bellRoof);

  const crossMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.25, metalness: 0.85 });
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

function buildMultiReligionExhibit(animators) {
  const g = new THREE.Group();
  const turnTable = new THREE.Group();
  g.add(turnTable);

  const caodaiGroup = new THREE.Group();
  caodaiGroup.position.set(-0.45, 0, 0);

  const caodaiGlobe = new THREE.Mesh(
    new THREE.SphereGeometry(0.28, 24, 24),
    new THREE.MeshStandardMaterial({ color: 0x2471a3, roughness: 0.3, metalness: 0.4 })
  );
  caodaiGlobe.position.y = 0.55;
  caodaiGroup.add(caodaiGlobe);

  const eyeHalo = new THREE.Mesh(
    new THREE.TorusGeometry(0.36, 0.02, 12, 32),
    new THREE.MeshBasicMaterial({ color: 0xf39c12 })
  );
  eyeHalo.position.set(0, 0.55, 0);
  caodaiGroup.add(eyeHalo);
  turnTable.add(caodaiGroup);

  const islamGroup = new THREE.Group();
  islamGroup.position.set(0.45, 0, 0);

  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(0.3, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: 0x16a085, roughness: 0.25, metalness: 0.5 })
  );
  dome.position.y = 0.35;
  islamGroup.add(dome);

  const crescent = new THREE.Mesh(
    new THREE.TorusGeometry(0.1, 0.025, 8, 24, Math.PI * 1.5),
    new THREE.MeshBasicMaterial({ color: 0xf1c40f })
  );
  crescent.position.set(0, 0.75, 0);
  islamGroup.add(crescent);
  turnTable.add(islamGroup);

  const bridge = new THREE.Mesh(
    new THREE.TorusGeometry(0.65, 0.02, 8, 32, Math.PI),
    new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.3, metalness: 0.85 })
  );
  bridge.rotation.x = Math.PI / 2;
  bridge.position.y = 0.15;
  turnTable.add(bridge);

  animators.push((time) => {
    turnTable.rotation.y = time * 0.25;
  });

  return g;
}

function buildNhaRongExhibit(animators) {
  const g = new THREE.Group();
  const woodMat = new THREE.MeshStandardMaterial({ color: 0x784212, roughness: 0.65 });
  const thatchMat = new THREE.MeshStandardMaterial({ color: 0xd35400, roughness: 0.85 });
  const bronzeMat = new THREE.MeshStandardMaterial({ color: 0x5b4822, roughness: 0.4, metalness: 0.75 });

  for (const [x, z] of [[-0.4, -0.3], [0.4, -0.3], [-0.4, 0.3], [0.4, 0.3]]) {
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.5, 8), woodMat);
    col.position.set(x, 0.25, z);
    g.add(col);
  }

  const floor = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.06, 0.75), woodMat);
  floor.position.y = 0.5;
  g.add(floor);

  const roof = new THREE.Mesh(new THREE.ConeGeometry(0.7, 1.4, 4), thatchMat);
  roof.scale.set(0.6, 1.0, 1.2);
  roof.position.set(0, 1.25, 0);
  g.add(roof);

  const gongRack = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 0.04, 0.04),
    new THREE.MeshStandardMaterial({ color: 0x333333 })
  );
  gongRack.position.set(0, 0.45, 0.55);
  g.add(gongRack);

  for (let i = -2; i <= 2; i++) {
    const r = 0.07 - Math.abs(i) * 0.01;
    const gong = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.015, 16), bronzeMat);
    gong.rotation.x = Math.PI / 2;
    gong.position.set(i * 0.16, 0.38, 0.55);
    g.add(gong);
  }

  const fire = new THREE.Mesh(
    new THREE.ConeGeometry(0.12, 0.25, 8),
    new THREE.MeshBasicMaterial({ color: 0xe67e22 })
  );
  fire.position.set(0, 0.12, -0.55);
  g.add(fire);

  animators.push((time) => {
    fire.scale.y = 1 + Math.sin(time * 12) * 0.2;
    fire.scale.x = 1 + Math.cos(time * 10) * 0.15;
  });

  return g;
}

function buildConstitutionExhibit(animators) {
  const g = new THREE.Group();
  
  const marbleMat = new THREE.MeshStandardMaterial({ color: 0xfcfcfc, roughness: 0.15, metalness: 0.05 });
  const stand = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.35, 0.7), marbleMat);
  stand.position.y = 0.18;
  g.add(stand);

  const emblemMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.2, metalness: 0.9 });
  const emblem = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.03, 32), emblemMat);
  emblem.rotation.x = Math.PI / 2;
  emblem.position.set(0, 0.18, 0.36);
  g.add(emblem);

  const lawMat = new THREE.MeshStandardMaterial({ color: 0x922b21, roughness: 0.5 });
  const book1 = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.08, 0.32), lawMat);
  book1.position.set(-0.28, 0.4, 0);
  book1.rotation.y = 0.1;
  g.add(book1);

  const book2 = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.08, 0.32), lawMat);
  book2.position.set(0.28, 0.4, 0);
  book2.rotation.y = -0.1;
  g.add(book2);

  const pole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.015, 0.015, 1.4, 12),
    new THREE.MeshStandardMaterial({ color: 0xdddddd, metalness: 0.8 })
  );
  pole.position.set(0, 0.8, -0.28);
  g.add(pole);

  const flag = new THREE.Mesh(
    new THREE.PlaneGeometry(0.45, 0.3),
    new THREE.MeshBasicMaterial({ color: 0xda251d, side: THREE.DoubleSide })
  );
  flag.position.set(0.23, 1.35, -0.28);
  g.add(flag);

  const star = new THREE.Mesh(
    new THREE.CircleGeometry(0.06, 5),
    new THREE.MeshBasicMaterial({ color: 0xffff00 })
  );
  star.position.set(0.23, 1.35, -0.27);
  g.add(star);

  animators.push((time) => {
    flag.rotation.y = Math.sin(time * 3) * 0.15;
  });

  return g;
}

function buildSecurityShieldExhibit(animators) {
  const g = new THREE.Group();
  const titanMat = new THREE.MeshStandardMaterial({
    color: 0x566573,
    roughness: 0.25,
    metalness: 0.85,
  });

  const shield = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.42, 0.85, 8), titanMat);
  shield.scale.set(1.0, 1.1, 0.25);
  shield.position.set(0, 0.65, 0);
  g.add(shield);

  const sMap = new THREE.Mesh(
    new THREE.TorusGeometry(0.25, 0.02, 8, 32, Math.PI * 1.6),
    new THREE.MeshBasicMaterial({ color: 0xf1c40f })
  );
  sMap.position.set(0, 0.65, 0.15);
  g.add(sMap);

  const radar = new THREE.Mesh(
    new THREE.RingGeometry(0.7, 0.74, 32),
    new THREE.MeshBasicMaterial({ color: 0x00d4ff, side: THREE.DoubleSide, transparent: true, opacity: 0.6 })
  );
  radar.rotation.x = Math.PI / 2;
  radar.position.y = 0.65;
  g.add(radar);

  const screen = new THREE.Mesh(
    new THREE.BoxGeometry(0.65, 0.45, 0.05),
    new THREE.MeshStandardMaterial({ color: 0x1a252f, roughness: 0.2 })
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

// ── BẢNG TÊN HIỆN VẬT GẮN TRƯỚC BỤC (TRANG TRỌNG - CHỮ LA MÃ) ─
function createPedestalBadge(title, romanNumeral) {
  const canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 200;
  const ctx = canvas.getContext('2d');

  // Khung biển nền trắng cẩm thạch sang trọng
  ctx.fillStyle = '#faf8f5';
  ctx.fillRect(0, 0, 640, 200);

  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 6;
  ctx.strokeRect(10, 10, 620, 180);

  ctx.strokeStyle = '#8a1b24';
  ctx.lineWidth = 2;
  ctx.strokeRect(18, 18, 604, 164);

  // Số La Mã
  ctx.fillStyle = '#8a1b24';
  ctx.font = 'bold 36px "Cinzel", "Times New Roman", serif';
  ctx.textAlign = 'center';
  ctx.fillText(`HIỆN VẬT ${romanNumeral}`, 320, 65);

  // Tên hiện vật
  ctx.fillStyle = '#1c2833';
  ctx.font = 'bold 24px "Montserrat", "Segoe UI", sans-serif';
  ctx.fillText(title, 320, 125);

  ctx.fillStyle = '#2980b9';
  ctx.font = '500 16px "Montserrat", sans-serif';
  ctx.fillText('Nhấp để quan sát chi tiết', 320, 165);

  const texture = new THREE.CanvasTexture(canvas);
  return new THREE.Mesh(
    new THREE.PlaneGeometry(1.2, 0.38),
    new THREE.MeshBasicMaterial({ map: texture })
  );
}
