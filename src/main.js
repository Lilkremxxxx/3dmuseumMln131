import * as THREE from 'three';
import { HALLS_INFO, EXHIBITS_DATA } from './data/exhibits-data.js';
import { buildMuseumHalls } from './scene/halls.js';
import { createExhibitObjects } from './scene/exhibitModels.js';
import { createWaypoints } from './navigation/waypointManager.js';
import { CameraController } from './navigation/cameraController.js';
import { ModalManager } from './ui/modalManager.js';

// ── RENDERER & SCENE SETUP (KHÔNG GIAN SÁNG RỰC RỠ) ───────────
const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.35; // Tăng sáng rực rỡ

const scene = new THREE.Scene();
// Nền sảnh bảo tàng màu sáng ấm cúng
scene.background = new THREE.Color(0xf2efe9);
scene.fog = new THREE.Fog(0xf2efe9, 32, 115);

const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 150);
camera.position.set(0, 1.65, -4);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize);

// ── DỰNG KIẾN TRÚC BẢO TÀNG & 10 HIỆN VẬT ────────────────────
buildMuseumHalls(scene);
const { exhibitObjects, animators: exhibitAnimators } = createExhibitObjects(scene);

// ── TẠO MŨI TÊN WAYPOINT 3D DƯỚI SÀN ──────────────────────────
const { waypointGroup, waypoints, animators: waypointAnimators } = createWaypoints(scene);

// ── UI ELEMENTS ───────────────────────────────────────────────
const hallNameEl = document.getElementById('currentHallName');
const currentExhibitBadgeEl = document.getElementById('currentExhibitBadge');
const quickSelectEl = document.getElementById('quickExhibitSelect');
const btnPrevEl = document.getElementById('btnPrevExhibit');
const btnNextEl = document.getElementById('btnNextExhibit');
const btnInspectEl = document.getElementById('btnInspect');
const btnStepBackEl = document.getElementById('btnStepBack');
const btnAutoTourEl = document.getElementById('btnAutoTour');

let currentActiveIndex = 0;
let isTourRunning = false;
let tourTimer = null;

// Thêm 10 hiện vật vào danh sách chọn nhanh (không emoji)
EXHIBITS_DATA.forEach((ex, idx) => {
  const opt = document.createElement('option');
  opt.value = idx;
  opt.textContent = `Hiện vật ${ex.romanNumeral}: ${ex.title}`;
  quickSelectEl.appendChild(opt);
});

// ── MODAL MANAGER ─────────────────────────────────────────────
const modalManager = new ModalManager(
  (index) => cameraController.startInspectMode(index),
  () => navigateExhibit(-1),
  () => navigateExhibit(1)
);

// ── CAMERA CONTROLLER ─────────────────────────────────────────
const cameraController = new CameraController(
  camera,
  canvas,
  (hallId) => {
    const hall = HALLS_INFO[hallId];
    if (hall && hallNameEl) {
      hallNameEl.textContent = hall.name;
    }
  },
  (exhibit, index) => {
    currentActiveIndex = index;
    quickSelectEl.value = index;
    if (currentExhibitBadgeEl) {
      currentExhibitBadgeEl.textContent = `Hiện vật ${exhibit.romanNumeral}/X: ${exhibit.title}`;
      currentExhibitBadgeEl.style.display = 'block';
    }
    // Tự động mở modal chi tiết khi camera bước đến gần
    modalManager.show(exhibit);
  }
);

// ── ĐIỀU HƯỚNG HIỆN VẬT ───────────────────────────────────────
function navigateExhibit(direction) {
  let nextIdx = currentActiveIndex + direction;
  if (nextIdx < 0) nextIdx = EXHIBITS_DATA.length - 1;
  if (nextIdx >= EXHIBITS_DATA.length) nextIdx = 0;
  goToExhibit(nextIdx);
}

function goToExhibit(index) {
  currentActiveIndex = index;
  quickSelectEl.value = index;
  cameraController.approachExhibit(index);
}

btnPrevEl.addEventListener('click', () => navigateExhibit(-1));
btnNextEl.addEventListener('click', () => navigateExhibit(1));
quickSelectEl.addEventListener('change', (e) => goToExhibit(parseInt(e.target.value)));
btnInspectEl.addEventListener('click', () => cameraController.startInspectMode(currentActiveIndex));
btnStepBackEl.addEventListener('click', () => {
  cameraController.stepBackOverview();
  modalManager.hide();
  if (currentExhibitBadgeEl) currentExhibitBadgeEl.style.display = 'none';
});

// Tour tự động
btnAutoTourEl.addEventListener('click', () => {
  if (isTourRunning) {
    stopAutoTour();
  } else {
    startAutoTour();
  }
});

function startAutoTour() {
  isTourRunning = true;
  btnAutoTourEl.textContent = 'Dừng Tour';
  btnAutoTourEl.classList.add('active');
  runTourStep(0);
}

function stopAutoTour() {
  isTourRunning = false;
  btnAutoTourEl.textContent = 'Tự động tham quan';
  btnAutoTourEl.classList.remove('active');
  if (tourTimer) clearTimeout(tourTimer);
}

function runTourStep(index) {
  if (!isTourRunning) return;
  goToExhibit(index);
  tourTimer = setTimeout(() => {
    if (!isTourRunning) return;
    const next = (index + 1) % EXHIBITS_DATA.length;
    runTourStep(next);
  }, 9000);
}

// ── RAYCASTING: CLICK HIỆN VẬT HOẶC MŨI TÊN DƯỚI SÀN ──────────
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

canvas.addEventListener('click', (e) => {
  if (cameraController.dragDistance > 6) return;

  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);

  // 1. Click Waypoint mũi tên dưới sàn
  const wpIntersects = raycaster.intersectObjects(waypointGroup.children, true);
  for (const hit of wpIntersects) {
    let p = hit.object;
    while (p) {
      if (p.userData && (p.userData.isWaypoint || p.userData.isWaypointCollider)) {
        const idx = p.userData.exhibitIndex;
        goToExhibit(idx);
        return;
      }
      p = p.parent;
    }
  }

  // 2. Click Hiện vật 3D
  const exIntersects = raycaster.intersectObjects(exhibitObjects, true);
  for (const hit of exIntersects) {
    let p = hit.object;
    while (p) {
      if (p.userData && (p.userData.isExhibit || p.userData.isExhibitCollider)) {
        const idx = p.userData.exhibitIndex;
        goToExhibit(idx);
        return;
      }
      p = p.parent;
    }
  }
});

window.addEventListener('pointermove', (e) => {
  if (cameraController.isDragging) return;
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);

  const hits = raycaster.intersectObjects([...waypointGroup.children, ...exhibitObjects], true);
  canvas.style.cursor = hits.length > 0 ? 'pointer' : 'default';
});

// Ẩn loading khi sẵn sàng
const loadingOverlay = document.getElementById('loadingOverlay');
if (loadingOverlay) {
  setTimeout(() => {
    loadingOverlay.style.opacity = '0';
    setTimeout(() => {
      loadingOverlay.style.display = 'none';
    }, 600);
  }, 400);
}

// ── RENDER LOOP ───────────────────────────────────────────────
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  const elapsed = clock.getElapsedTime();

  cameraController.update(dt);
  exhibitAnimators.forEach((anim) => anim(elapsed));
  waypointAnimators.forEach((anim) => anim(elapsed));

  renderer.render(scene, camera);
}

animate();
