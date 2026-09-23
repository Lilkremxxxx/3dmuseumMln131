import * as THREE from 'three';
import { HALLS_INFO } from '../data/exhibits-data.js';

export function buildMuseumHalls(scene) {
  const hallsGroup = new THREE.Group();
  hallsGroup.name = "MuseumArchitecture";

  // ── MATERIALS ────────────────────────────────────────────────
  const floorMat = new THREE.MeshStandardMaterial({
    color: 0x22262d,
    roughness: 0.25,
    metalness: 0.15,
  });

  const wallMat = new THREE.MeshStandardMaterial({
    color: 0x181c24,
    roughness: 0.85,
    metalness: 0.05,
  });

  const trimMat = new THREE.MeshStandardMaterial({
    color: 0xd4af37, // Gold trim
    roughness: 0.35,
    metalness: 0.75,
  });

  const columnMat = new THREE.MeshStandardMaterial({
    color: 0x2a303c,
    roughness: 0.4,
    metalness: 0.2,
  });

  const ceilMat = new THREE.MeshStandardMaterial({
    color: 0x12151b,
    roughness: 0.9,
  });

  const glassCeilMat = new THREE.MeshStandardMaterial({
    color: 0x88ccff,
    roughness: 0.1,
    metalness: 0.1,
    transparent: true,
    opacity: 0.35,
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

  // Đường viền hoa văn sàn (Floor Center Carpet / Inlay)
  const carpetGeo = new THREE.PlaneGeometry(3.6, LENGTH);
  const carpetMat = new THREE.MeshStandardMaterial({
    color: 0x6b141a, // Đỏ thẫm truyền thống
    roughness: 0.8,
  });
  const carpet = new THREE.Mesh(carpetGeo, carpetMat);
  carpet.rotation.x = -Math.PI / 2;
  carpet.position.set(0, 0.01, (START_Z + LENGTH / 2));
  hallsGroup.add(carpet);

  // Dải viền vàng dọc lối đi
  for (const xOffset of [-1.85, 1.85]) {
    const goldStrip = new THREE.Mesh(
      new THREE.PlaneGeometry(0.1, LENGTH),
      trimMat
    );
    goldStrip.rotation.x = -Math.PI / 2;
    goldStrip.position.set(xOffset, 0.015, (START_Z + LENGTH / 2));
    hallsGroup.add(goldStrip);
  }

  // ── TRẦN NHÀ (CEILING & SKYLIGHTS) ───────────────────────────
  const ceilGeo = new THREE.PlaneGeometry(WIDTH, LENGTH);
  const ceil = new THREE.Mesh(ceilGeo, ceilMat);
  ceil.rotation.x = Math.PI / 2;
  ceil.position.set(0, HEIGHT, (START_Z + LENGTH / 2));
  hallsGroup.add(ceil);

  // Vòm kính giếng trời chạy dọc trung tâm trần
  const skylight = new THREE.Mesh(
    new THREE.PlaneGeometry(4, LENGTH),
    glassCeilMat
  );
  skylight.rotation.x = Math.PI / 2;
  skylight.position.set(0, HEIGHT - 0.05, (START_Z + LENGTH / 2));
  hallsGroup.add(skylight);

  // ── TƯỜNG TRÁI & PHẢI (LEFT & RIGHT WALLS) ───────────────────
  const wallGeo = new THREE.PlaneGeometry(LENGTH, HEIGHT);
  
  // Tường trái (Left wall)
  const leftWall = new THREE.Mesh(wallGeo, wallMat);
  leftWall.rotation.y = Math.PI / 2;
  leftWall.position.set(-WIDTH / 2, HEIGHT / 2, (START_Z + LENGTH / 2));
  hallsGroup.add(leftWall);

  // Tường phải (Right wall)
  const rightWall = new THREE.Mesh(wallGeo, wallMat);
  rightWall.rotation.y = -Math.PI / 2;
  rightWall.position.set(WIDTH / 2, HEIGHT / 2, (START_Z + LENGTH / 2));
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
    hallsGroup.add(colLeft);

    const colRight = new THREE.Mesh(colGeo, columnMat);
    colRight.position.set(WIDTH / 2 - 1.2, HEIGHT / 2, z);
    hallsGroup.add(colRight);
  }

  // ── CỔNG PHÂN ĐỊNH 4 SẢNH (HALL ARCHES & BANNERS) ───────────
  const archMat = new THREE.MeshStandardMaterial({
    color: 0x1f242d,
    roughness: 0.5,
    metalness: 0.6,
  });

  HALLS_INFO.forEach((hall, idx) => {
    const archZ = hall.zRange[0];
    if (idx > 0) {
      // Vòm cổng phân cách sảnh
      const archL = new THREE.Mesh(new THREE.BoxGeometry(1.2, HEIGHT, 0.8), archMat);
      archL.position.set(-WIDTH / 2 + 0.6, HEIGHT / 2, archZ);
      hallsGroup.add(archL);

      const archR = new THREE.Mesh(new THREE.BoxGeometry(1.2, HEIGHT, 0.8), archMat);
      archR.position.set(WIDTH / 2 - 0.6, HEIGHT / 2, archZ);
      hallsGroup.add(archR);

      const archTop = new THREE.Mesh(new THREE.BoxGeometry(WIDTH, 1.2, 0.8), archMat);
      archTop.position.set(0, HEIGHT - 0.6, archZ);
      hallsGroup.add(archTop);

      // Biển tên sảnh trên vòm cổng
      const bannerCanvas = document.createElement('canvas');
      bannerCanvas.width = 1024;
      bannerCanvas.height = 160;
      const ctx = bannerCanvas.getContext('2d');
      ctx.fillStyle = '#0f141c';
      ctx.fillRect(0, 0, 1024, 160);
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 6;
      ctx.strokeRect(10, 10, 1004, 140);
      ctx.fillStyle = '#f39c12';
      ctx.font = 'bold 44px sans-serif';
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

  // ── KHẨU HIỆU & VĂN KIỆN LỚN TRÊN TƯỜNG (SLOGANS) ────────────
  createWallBanner(
    hallsGroup,
    "ĐOÀN KẾT, ĐOÀN KẾT, ĐẠI ĐOÀN KẾT\nTHÀNH CÔNG, THÀNH CÔNG, ĐẠI THÀNH CÔNG\n— CHỦ TỊCH HỒ CHÍ MINH —",
    { x: -WIDTH / 2 + 0.05, y: 4.8, z: 6 },
    Math.PI / 2,
    0xf1c40f
  );

  createWallBanner(
    hallsGroup,
    "CÁC DÂN TỘC HOÀN TOÀN BÌNH ĐẲNG\nCÁC DÂN TỘC ĐƯỢC QUYỀN TỰ QUYẾT\nLIÊN HIỆP CÔNG NHÂN TẤT CẢ CÁC DÂN TỘC LẠI\n— V.I. LÊNIN (1913 - 1914) —",
    { x: WIDTH / 2 - 0.05, y: 4.8, z: 12 },
    -Math.PI / 2,
    0xe74c3c
  );

  createWallBanner(
    hallsGroup,
    "ĐẠO PHÁP — DÂN TỘC — CHỦ NGHĨA XÃ HỘI\nSỐNG PHÚC ÂM GIỮA LÒNG DÂN TỘC\nĐỂ PHỤC VỤ HẠNH PHÚC CỦA ĐỒNG BÀO",
    { x: -WIDTH / 2 + 0.05, y: 4.8, z: 36 },
    Math.PI / 2,
    0x3498db
  );

  createWallBanner(
    hallsGroup,
    "ĐIỀU 5 HIẾN PHÁP 2013:\nCÁC DÂN TỘC BÌNH ĐẲNG, ĐOÀN KẾT, TÔN TRỌNG\nVÀ GIÚP NHAU CÙNG PHÁT TRIỂN;\nNGHIÊM CẤM MỌI HÀNH VI KỲ THỊ, CHIA RẼ DÂN TỘC",
    { x: WIDTH / 2 - 0.05, y: 4.8, z: 88 },
    -Math.PI / 2,
    0x2ecc71
  );

  // ── ÁNH SÁNG MÔI TRƯỜNG (LIGHTING) ───────────────────────────
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
  hallsGroup.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xfffaed, 0.6);
  mainLight.position.set(5, 15, 10);
  hallsGroup.add(mainLight);

  // Dải đèn rọi spotlight dọc bảo tàng
  for (let z = 0; z <= 100; z += 10) {
    const downLight = new THREE.PointLight(0xfff3d6, 0.75, 14, 1.5);
    downLight.position.set(0, HEIGHT - 0.5, z);
    hallsGroup.add(downLight);
  }

  scene.add(hallsGroup);
  return hallsGroup;
}

function createWallBanner(parent, text, pos, rotY, textColor = 0xf39c12) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 360;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(15, 20, 30, 0.88)';
  ctx.fillRect(0, 0, 1024, 360);
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 4;
  ctx.strokeRect(10, 10, 1004, 340);

  ctx.fillStyle = `#${textColor.toString(16).padStart(6, '0')}`;
  ctx.font = 'bold 36px "Segoe UI", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const lines = text.split('\n');
  const startY = 180 - ((lines.length - 1) * 48) / 2;
  lines.forEach((line, i) => {
    ctx.fillText(line, 512, startY + i * 48);
  });

  const texture = new THREE.CanvasTexture(canvas);
  const banner = new THREE.Mesh(
    new THREE.PlaneGeometry(6.4, 2.3),
    new THREE.MeshBasicMaterial({ map: texture, transparent: true })
  );
  banner.position.set(pos.x, pos.y, pos.z);
  banner.rotation.y = rotY;
  parent.add(banner);
}
