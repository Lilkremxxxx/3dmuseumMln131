/**
 * Script tự động hóa sinh 10 Model 3D bằng Meshy AI API / MCP
 * Dành cho 10 Hiện vật Triển lãm Chương 6
 * 
 * Cách dùng:
 * 1. Thiết lập API Key trong file .env hoặc command line:
 *    export MESHY_API_KEY="msy_..." (hoặc $env:MESHY_API_KEY="msy_...")
 * 2. Chạy:
 *    node scripts/generate_meshy_models.js
 */

import fs from 'fs';
import path from 'path';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env
dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config({ path: path.resolve('C:/Users/NhatBang/.gemini/meshy-mcp-server/.env') });

const API_KEY = process.env.MESHY_API_KEY;
const API_BASE = 'https://api.meshy.ai/openapi/v2';
const OUTPUT_DIR = path.resolve(__dirname, '../public/models');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Danh sách prompt 3D tối ưu cho 10 hiện vật bảo tàng
export const EXHIBITS_PROMPTS = [
  {
    id: 1,
    name: "Trong_dong_Dong_Son",
    filename: "exhibit_1.glb",
    previewPrompt: "Ancient Vietnamese Dong Son bronze drum, ornate national treasure artifact, circular bronze drum with intricate bird and sun geometric engravings on top and sides, aged patina verdigris texture, museum display pedestal, PBR realistic, high detail",
    artStyle: "realistic"
  },
  {
    id: 2,
    name: "Buc_sach_Cuong_linh_Lenin",
    filename: "exhibit_2.glb",
    previewPrompt: "Open antique leather bound book on an elegant carved dark mahogany podium stand, golden quill pen beside it, historical thesis manifesto document, museum artifact, highly detailed, realistic",
    artStyle: "realistic"
  },
  {
    id: 3,
    name: "Tuong_Bac_Ho",
    filename: "exhibit_3.glb",
    previewPrompt: "Bronze monument statue of President Ho Chi Minh in traditional khaki suit standing warmly, peaceful expression, historical memorial sculpture, museum grade, realistic bronze material",
    artStyle: "realistic"
  },
  {
    id: 4,
    name: "Ban_tho_To_tien_Hung_Vuong",
    filename: "exhibit_4.glb",
    previewPrompt: "Traditional Vietnamese ancestor worship altar table, red lacquer and gilded gold, ancient bronze incense burner, bronze candle holders, sacred historical altar, realistic",
    artStyle: "realistic"
  },
  {
    id: 5,
    name: "Chua_Mot_Cot",
    filename: "exhibit_5.glb",
    previewPrompt: "Hanoi One Pillar Pagoda Dien Huu Tu, single stone pillar supporting lotus shaped wooden temple pagoda pavilion with curved tiled roof, ancient Vietnamese Buddhist architecture, realistic",
    artStyle: "realistic"
  },
  {
    id: 6,
    name: "Chuong_Thanh_gia_Phat_Diem",
    filename: "exhibit_6.glb",
    previewPrompt: "Historic carved stone bell tower Phuong Dinh of Phat Diem Cathedral, carved limestone cross monument with traditional Asian curved eaves, ornate stone carving, realistic",
    artStyle: "realistic"
  },
  {
    id: 7,
    name: "Cum_Da_ton_giao_Cao_Dai_Cham",
    filename: "exhibit_7.glb",
    previewPrompt: "Sacred all-seeing eye divine eye emblem of Cao Dai religion framed in glowing golden sunburst with traditional minaret dome architectural element, interfaith harmony monument, realistic",
    artStyle: "realistic"
  },
  {
    id: 8,
    name: "Nha_rong_Tay_Nguyen_Cong_chieng",
    filename: "exhibit_8.glb",
    previewPrompt: "Traditional Vietnamese Central Highlands Bahnar Rong communal stilt house with towering steep thatched roof, set of hanging bronze gongs on wooden stand, indigenous ethnic architecture, realistic",
    artStyle: "realistic"
  },
  {
    id: 9,
    name: "Ban_khac_Hien_phap_2013",
    filename: "exhibit_9.glb",
    previewPrompt: "Monumental open tablet of the Constitution of Vietnam carved in polished red and black marble with golden national emblem of Vietnam on top, rule of law monument, realistic",
    artStyle: "realistic"
  },
  {
    id: 10,
    name: "La_chan_thep_An_ninh",
    filename: "exhibit_10.glb",
    previewPrompt: "Modern protective polygonal titanium shield emblem with national security star emblem in center, surrounded by rotating holographic radar rings and border milestone, homeland defense monument, realistic",
    artStyle: "realistic"
  }
];

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function generateModel(item) {
  console.log(`\n======================================================`);
  console.log(`[${item.id}/10] Đang khởi tạo mô hình: ${item.name} (${item.filename})`);
  console.log(`Prompt: "${item.previewPrompt}"`);

  const headers = {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
  };

  // 1. Tạo task Text-to-3D Preview
  console.log(`-> Gửi yêu cầu sinh Preview mesh...`);
  const previewRes = await axios.post(`${API_BASE}/text-to-3d`, {
    mode: 'preview',
    prompt: item.previewPrompt,
    art_style: item.artStyle,
    ai_model: 'meshy-6',
    topology: 'triangle',
    target_polycount: 30000
  }, { headers });

  const previewTaskId = previewRes.data.result;
  console.log(`-> Preview Task ID: ${previewTaskId}. Đang xử lý...`);

  // Đợi Preview hoàn thành
  let previewTask = null;
  while (true) {
    await sleep(5000);
    const statusRes = await axios.get(`${API_BASE}/text-to-3d/${previewTaskId}`, { headers });
    previewTask = statusRes.data;
    process.stdout.write(`   Tiến độ Preview: ${previewTask.progress || 0}%\r`);
    if (previewTask.status === 'SUCCEEDED') {
      console.log(`\n✓ Preview hoàn tất thành công!`);
      break;
    } else if (previewTask.status === 'FAILED') {
      throw new Error(`Preview task failed: ${previewTask.task_error?.message || 'Unknown error'}`);
    }
  }

  // 2. Tạo task Refine (Phủ vân texture PBR chân thực)
  console.log(`-> Gửi yêu cầu Refine phủ chất liệu PBR...`);
  const refineRes = await axios.post(`${API_BASE}/text-to-3d`, {
    mode: 'refine',
    preview_task_id: previewTaskId,
    texture_resolution: '2k'
  }, { headers });

  const refineTaskId = refineRes.data.result;
  console.log(`-> Refine Task ID: ${refineTaskId}. Đang phủ texture...`);

  // Đợi Refine hoàn thành
  let refineTask = null;
  while (true) {
    await sleep(6000);
    const statusRes = await axios.get(`${API_BASE}/text-to-3d/${refineTaskId}`, { headers });
    refineTask = statusRes.data;
    process.stdout.write(`   Tiến độ Refine: ${refineTask.progress || 0}%\r`);
    if (refineTask.status === 'SUCCEEDED') {
      console.log(`\n✓ Refine hoàn tất thành công!`);
      break;
    } else if (refineTask.status === 'FAILED') {
      throw new Error(`Refine task failed: ${refineTask.task_error?.message || 'Unknown error'}`);
    }
  }

  // 3. Tải file .glb về public/models/
  const glbUrl = refineTask.model_urls?.glb;
  if (!glbUrl) {
    throw new Error('Không tìm thấy link file GLB trong kết quả refine!');
  }

  console.log(`-> Đang tải file GLB từ: ${glbUrl}`);
  const glbResponse = await axios.get(glbUrl, { responseType: 'arraybuffer' });
  const targetPath = path.join(OUTPUT_DIR, item.filename);
  fs.writeFileSync(targetPath, Buffer.from(glbResponse.data));
  console.log(`✓ Đã lưu thành công mô hình vào: ${targetPath} (${fs.statSync(targetPath).size} bytes)`);
}

async function main() {
  if (!API_KEY) {
    console.error("\n=======================================================");
    console.error("LỖI: Chưa tìm thấy biến môi trường MESHY_API_KEY!");
    console.error("Vui lòng lấy API Key tại https://www.meshy.ai/settings/api");
    console.error("và cấu hình trong file .env hoặc biến môi trường hệ thống:");
    console.error("  $env:MESHY_API_KEY=\"msy_YOUR_KEY_HERE\"");
    console.error("=======================================================\n");
    process.exit(1);
  }

  console.log("\n=======================================================");
  console.log(" BẮT ĐẦU QUY TRÌNH DỰNG 10 MODEL 3D BẰNG MESHY AI");
  console.log("=======================================================");

  for (const item of EXHIBITS_PROMPTS) {
    try {
      await generateModel(item);
    } catch (err) {
      console.error(`✗ Lỗi khi tạo mô hình ${item.name}:`, err.message);
    }
  }

  console.log("\n Hoàn tất quy trình xử lý mô hình 3D!");
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
