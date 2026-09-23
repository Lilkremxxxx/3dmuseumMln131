import * as THREE from 'three';
import { HALLS_INFO } from '../data/exhibits-data.js';

export function buildMuseumHalls(scene) {
  const hallsGroup = new THREE.Group();
  hallsGroup.name = "MuseumArchitecture";

  // ── MATERIALS (TONE SÁNG TRANG NHÃ - BẢO TÀNG HIỆN ĐẠI) ─────
  const floorMat = new THREE.MeshStandardMaterial({
    color: 0xdfd9cf, // Đá cẩm thạch sáng màu kem
    roughness: 0.22,
    metalness: 0.08,
  });

  const wallMat = new THREE.MeshStandardMaterial({
    color: 0xf5f2ec, // Tường thạch cao sáng màu
    roughness: 0.75,
    metalness: 0.02,
  });

  const trimMat = new THREE.MeshStandardMaterial({
    color: 0xd4af37, // Viền vàng hoàng gia
    roughness: 0.3,
    metalness: 0.8,
  });

  const columnMat = new THREE.MeshStandardMaterial({
    color: 0xf0ece4, // Cột cẩm thạch sáng
    roughness: 0.35,
    metalness: 0.1,
  });

  const ceilMat = new THREE.MeshStandardMaterial({
    color: 0xfcfbfa,
    roughness: 0.85,
  });

  const glassCeilMat = new THREE.MeshStandardMaterial({
    color: 0xd6eaf8,
    roughness: 0.1,
    metalness: 0.1,
    transparent: true,
    opacity: 0.45,
  });

  // Overall museum dimensions
  const WIDTH = 18;
  const HEIGHT = 7.5;
  const LENGTH = 120; // z from -10 to 110
  const START_Z = -10;

  // ── SÀN NHÀ (FLOOR) ──────────────────────────────────────────
  const floorGeo = new THREE.PlaneGeometry(WIDTH, LENGTH);
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(0, 0, (START_Z + LENGTH / 2));
  floor.receiveShadow = true;
  hallsGroup.add(floor);

  // Thảm lối đi trung tâm (Center Carpet) - Màu đỏ hoàng gia sang trọng
  const carpetGeo = new THREE.PlaneGeometry(3.6, LENGTH);
  const carpetMat = new THREE.MeshStandardMaterial({
    color: 0x8a1b24,
    roughness: 0.7,
  });
  const carpet = new THREE.Mesh(carpetGeo, carpetMat);
  carpet.rotation.x = -Math.PI / 2;
  carpet.position.set(0, 0.01, (START_Z + LENGTH / 2));
  carpet.receiveShadow = true;
  hallsGroup.add(carpet);

  // Dải viền mạ vàng dọc lối đi
  for (const xOffset of [-1.85, 1.85]) {
    const goldStrip = new THREE.Mesh(
      new THREE.PlaneGeometry(0.12, LENGTH),
      trimMat
    );
    goldStrip.rotation.x = -Math.PI / 2;
    goldStrip.position.set(xOffset, 0.015, (START_Z + LENGTH / 2));
    hallsGroup.add(goldStrip);
  }

  // ── TRẦN NHÀ & GIẾNG TRỜI LẤY SÁNG TỰ NHIÊN ──────────────────
  const ceilGeo = new THREE.PlaneGeometry(WIDTH, LENGTH);
  const ceil = new THREE.Mesh(ceilGeo, ceilMat);
  ceil.rotation.x = Math.PI / 2;
  ceil.position.set(0, HEIGHT, (START_Z + LENGTH / 2));
  hallsGroup.add(ceil);

  // Vòm kính giếng trời chạy dọc trung tâm trần
  const skylight = new THREE.Mesh(
    new THREE.PlaneGeometry(4.5, LENGTH),
    glassCeilMat
  );
  skylight.rotation.x = Math.PI / 2;
  skylight.position.set(0, HEIGHT - 0.05, (START_Z + LENGTH / 2));
  hallsGroup.add(skylight);

  // ── TƯỜNG TRÁI & PHẢI (LEFT & RIGHT WALLS) ───────────────────
  const wallGeo = new THREE.PlaneGeometry(LENGTH, HEIGHT);
  
  // Tường trái
  const leftWall = new THREE.Mesh(wallGeo, wallMat);
  leftWall.rotation.y = Math.PI / 2;
  leftWall.position.set(-WIDTH / 2, HEIGHT / 2, (START_Z + LENGTH / 2));
  leftWall.receiveShadow = true;
  hallsGroup.add(leftWall);

  // Tường phải
  const rightWall = new THREE.Mesh(wallGeo, wallMat);
  rightWall.rotation.y = -Math.PI / 2;
  rightWall.position.set(WIDTH / 2, HEIGHT / 2, (START_Z + LENGTH / 2));
  rightWall.receiveShadow = true;
  hallsGroup.add(rightWall);

  // Tường đầu sảnh (Entrance wall)
  const frontWall = new THREE.Mesh(new THREE.PlaneGeometry(WIDTH, HEIGHT), wallMat);
  frontWall.position.set(0, HEIGHT / 2, START_Z);
  hallsGroup.add(frontWall);

  // Tường cuối sảnh (End wall)
  const backWall = new THREE.Mesh(new THREE.PlaneGeometry(WIDTH, HEIGHT), wallMat);
  backWall.rotation.y = Math.PI;
  backWall.position.set(0, HEIGHT / 2, START_Z + LENGTH);
  hallsGroup.add(backWall);

  // ── CỘT TRỤ BẢO TÀNG (COLUMNS) ──────────────────────────────
  const colGeo = new THREE.CylinderGeometry(0.35, 0.42, HEIGHT, 16);
  for (let z = 0; z <= 100; z += 12) {
    const colLeft = new THREE.Mesh(colGeo, columnMat);
    colLeft.position.set(-WIDTH / 2 + 1.2, HEIGHT / 2, z);
    colLeft.castShadow = true;
    colLeft.receiveShadow = true;
    hallsGroup.add(colLeft);

    const colRight = new THREE.Mesh(colGeo, columnMat);
    colRight.position.set(WIDTH / 2 - 1.2, HEIGHT / 2, z);
    colRight.castShadow = true;
    colRight.receiveShadow = true;
    hallsGroup.add(colRight);
  }

  // ── CỔNG PHÂN ĐỊNH 4 SẢNH (HALL ARCHES & BANNERS) ───────────
  const archMat = new THREE.MeshStandardMaterial({
    color: 0x2b3340,
    roughness: 0.4,
    metalness: 0.4,
  });

  HALLS_INFO.forEach((hall, idx) => {
    const archZ = hall.zRange[0];
    if (idx > 0) {
      // Vòm cổng
      const archL = new THREE.Mesh(new THREE.BoxGeometry(1.2, HEIGHT, 0.8), archMat);
      archL.position.set(-WIDTH / 2 + 0.6, HEIGHT / 2, archZ);
      hallsGroup.add(archL);

      const archR = new THREE.Mesh(new THREE.BoxGeometry(1.2, HEIGHT, 0.8), archMat);
      archR.position.set(WIDTH / 2 - 0.6, HEIGHT / 2, archZ);
      hallsGroup.add(archR);

      const archTop = new THREE.Mesh(new THREE.BoxGeometry(WIDTH, 1.2, 0.8), archMat);
      archTop.position.set(0, HEIGHT - 0.6, archZ);
      hallsGroup.add(archTop);

      // Biển tên sảnh
      const bannerCanvas = document.createElement('canvas');
      bannerCanvas.width = 1024;
      bannerCanvas.height = 160;
      const ctx = bannerCanvas.getContext('2d');
      ctx.fillStyle = '#1a222e';
      ctx.fillRect(0, 0, 1024, 160);
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 6;
      ctx.strokeRect(10, 10, 1004, 140);
      ctx.fillStyle = '#f1c40f';
      ctx.font = 'bold 44px "Segoe UI", serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(hall.name.toUpperCase(), 512, 80);

      const bannerTex = new THREE.CanvasTexture(bannerCanvas);
      const bannerMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(8, 1.2),
        new THREE.MeshBasicMaterial({ map: bannerTex })
      );
      bannerMesh.position.set(0, HEIGHT - 0.6, archZ - 0.42);
      hallsGroup.add(bannerMesh);
    }
  });

  // ── KHẨU HIỆU & VĂN KIỆN LỚN TRÊN TƯỜNG (TRANH KHẮC CHỮ SANG TRỌNG) ──
  createWallBanner(
    hallsGroup,
    "ĐOÀN KẾT, ĐOÀN KẾT, ĐẠI ĐOÀN KẾT\nTHÀNH CÔNG, THÀNH CÔNG, ĐẠI THÀNH CÔNG\n— CHỦ TỊCH HỒ CHÍ MINH —",
    { x: -WIDTH / 2 + 0.05, y: 4.8, z: 6 },
    Math.PI / 2,
    0xc0392b
  );

  createWallBanner(
    hallsGroup,
    "CÁC DÂN TỘC HOÀN TOÀN BÌNH ĐẲNG\nCÁC DÂN TỘC ĐƯỢC QUYỀN TỰ QUYẾT\nLIÊN HIỆP CÔNG NHÂN TẤT CẢ CÁC DÂN TỘC LẠI\n— V.I. LÊNIN (1913 - 1914) —",
    { x: WIDTH / 2 - 0.05, y: 4.8, z: 12 },
    -Math.PI / 2,
    0xc0392b
  );

  createWallBanner(
    hallsGroup,
    "ĐẠO PHÁP — DÂN TỘC — CHỦ NGHĨA XÃ HỘI\nSỐNG PHÚC ÂM GIỮA LÒNG DÂN TỘC\nĐỂ PHỤC VỤ HẠNH PHÚC CỦA ĐỒNG BÀO",
    { x: -WIDTH / 2 + 0.05, y: 4.8, z: 36 },
    Math.PI / 2,
    0x2980b9
  );

  createWallBanner(
    hallsGroup,
    "ĐIỀU 5 HIẾN PHÁP NĂM 2013:\nCÁC DÂN TỘC BÌNH ĐẲNG, ĐOÀN KẾT, TÔN TRỌNG\nVÀ GIÚP NHAU CÙNG PHÁT TRIỂN;\nNGHIÊM CẤM MỌI HÀNH VI KỲ THỊ, CHIA RẼ DÂN TỘC",
    { x: WIDTH / 2 - 0.05, y: 4.8, z: 88 },
    -Math.PI / 2,
    0x27ae60
  );

  // ── HỆ THỐNG CHIẾU SÁNG MẠNH MẼ, SÁNG RỰC RỠ ─────────────────
  // 1. Ánh sáng môi trường toàn thể (Ambient Light)
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
  hallsGroup.add(ambientLight);

  // 2. Bán cầu ánh sáng mô phỏng vòm trời (Hemisphere Light)
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0xded8cc, 0.85);
  hemiLight.position.set(0, 15, 0);
  hallsGroup.add(hemiLight);

  // 3. Ánh sáng mặt trời chiếu qua giếng trời (Directional Sun)
  const sunLight = new THREE.DirectionalLight(0xfffaec, 1.25);
  sunLight.position.set(10, 20, 20);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 2048;
  sunLight.shadow.mapSize.height = 2048;
  sunLight.shadow.camera.near = 0.5;
  sunLight.shadow.camera.far = 100;
  hallsGroup.add(sunLight);

  // 4. Đèn rọi trần liên tục dọc hành lang
  for (let z = -5; z <= 105; z += 8) {
    const trackLight = new THREE.PointLight(0xfff6e8, 1.3, 16, 1.2);
    trackLight.position.set(0, HEIGHT - 0.4, z);
    hallsGroup.add(trackLight);

    // Đèn rọi hai bên tường
    const wallLightL = new THREE.PointLight(0xfffaee, 0.9, 10, 1.5);
    wallLightL.position.set(-WIDTH / 2 + 1.5, HEIGHT - 1.2, z);
    hallsGroup.add(wallLightL);

    const wallLightR = new THREE.PointLight(0xfffaee, 0.9, 10, 1.5);
    wallLightR.position.set(WIDTH / 2 - 1.5, HEIGHT - 1.2, z);
    hallsGroup.add(wallLightR);
  }

  scene.add(hallsGroup);
  return hallsGroup;
}

function createWallBanner(parent, text, pos, rotY, accentColor = 0xc0392b) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 360;
  const ctx = canvas.getContext('2d');

  // Khung biển nền kem trang nhã
  ctx.fillStyle = '#faf8f5';
  ctx.fillRect(0, 0, 1024, 360);
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 8;
  ctx.strokeRect(10, 10, 1004, 340);

  ctx.strokeStyle = `#${accentColor.toString(16).padStart(6, '0')}`;
  ctx.lineWidth = 2;
  ctx.strokeRect(20, 20, 984, 320);

  ctx.fillStyle = `#${accentColor.toString(16).padStart(6, '0')}`;
  ctx.font = 'bold 34px "Segoe UI", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const lines = text.split('\n');
  const startY = 180 - ((lines.length - 1) * 50) / 2;
  lines.forEach((line, i) => {
    ctx.fillText(line, 512, startY + i * 50);
  });

  const texture = new THREE.CanvasTexture(canvas);
  const banner = new THREE.Mesh(
    new THREE.PlaneGeometry(6.4, 2.3),
    new THREE.MeshBasicMaterial({ map: texture })
  );
  banner.position.set(pos.x, pos.y, pos.z);
  banner.rotation.y = rotY;
  parent.add(banner);
}
