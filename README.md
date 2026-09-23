# Dự Án Triển Lãm & Bảo Tàng Số: Chương 6 - Chủ Nghĩa Xã Hội Khoa Học (MLN131)
**Học phần:** Chủ nghĩa xã hội khoa học (MLN131) — Đại học FPT  
**Chuyên đề nghiên cứu:** *Chương 6: Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội*  
**Tài liệu thuyết minh:** [`Thuyet_Minh_Bao_Tang_3D_MLN131.docx`](./Thuyet_Minh_Bao_Tang_3D_MLN131.docx)

---

## 🏛️ Cấu Trúc Dự Án (Repository Architecture)

Hệ thống được tổ chức thành 2 phân hệ độc lập, cùng cấp phục vụ trải nghiệm đa nền tảng:

```
MLN131/
├── 3d_mln131/                         # Phân hệ Bảo tàng Ảo 3D Không gian tương tác
│   ├── src/                           # Three.js, WebGL scene, Camera controller, UI
│   ├── public/                        # Tư liệu ảnh lịch sử, textures, models
│   ├── scripts/                       # Script tạo mô hình và xuất bản tài liệu docx
│   ├── Thuyet_Minh_Bao_Tang_3D_MLN131.docx # Bản thuyết minh chi tiết cho giảng viên
│   ├── package.json
│   └── vite.config.js
│
├── 2d_mln131/                         # Phân hệ Triển lãm Trực tuyến 2D Hiện đại
│   ├── src/                           # React, Tailwind CSS, components bản đồ & trắc nghiệm
│   ├── public/                        # Tài nguyên hình ảnh, biểu tượng
│   ├── package.json
│   └── vite.config.js
│
├── Thuyet_Minh_Bao_Tang_3D_MLN131.docx # Tài liệu thuyết trình và chấm điểm học phần (DOCX)
├── MLN131 - Giao trinh CNXHKH.pdf     # Giáo trình chuẩn Bộ GD&ĐT (đối chiếu nội dung)
└── AI_AGENT_TUTOR.md                  # Hướng dẫn và quy chuẩn học tập
```

---

## 1. Phân hệ Bảo tàng Ảo 3D (`3d_mln131`)

- **Công nghệ**: Three.js, WebGL, Vite 5, JavaScript ES Modules, Canvas 2D Texturing.
- **Không gian kiến trúc**: 4 Sảnh lớn theo trục thẳng đứng, ánh sáng Dark Mode bảo tàng sang trọng với vòm mái Gothic & Baroque cách điệu, bệ đỡ đá hoa cương đen viền vàng, hiệu ứng ánh sáng hội tụ (Spotlight), hạt bụi ánh sáng vàng (Golden Sparkles) và Vignette điện ảnh.
- **Hệ thống 10 Hiện vật 3D**:
  1. *Trống đồng Đông Sơn & Quả cầu 54 Dân tộc* (Sảnh I - Dân tộc)
  2. *Bục sách Cương lĩnh Dân tộc của V.I. Lênin* (Sảnh I)
  3. *Tượng Bác Hồ với đồng bào DTTS & Thư Pleiku 1946* (Sảnh I)
  4. *Không gian Tín ngưỡng Thờ cúng Hùng Vương* (Sảnh II - Tôn giáo)
  5. *Mô hình Chùa Một Cột & Tượng Phật hoàng Trần Nhân Tông* (Sảnh II)
  6. *Chuông đồng & Thánh giá Nhà thờ Phát Diệm* (Sảnh II)
  7. *Cụm Đa tôn giáo: Thiên Nhãn Cao Đài & Vòm Hồi giáo Chăm* (Sảnh II)
  8. *Mô hình Nhà rông Tây Nguyên & Dàn Cồng chiêng Di sản* (Sảnh III - Quan hệ DT & TG)
  9. *Bản khắc Hiến pháp 2013 & Luật Tín ngưỡng, Tôn giáo 2016* (Sảnh III)
  10. *Trận tuyến "Lá chắn thép" chống "Diễn biến hòa bình"* (Sảnh IV - Tổng kết)
- **Tương tác**: Di chuyển tự do WASD/mũi tên, bấm waypoint sàn để tiếp cận mượt mà, chế độ xoay 360° kiểm tra chi tiết, bảng thuyết minh tư liệu song song hình ảnh có thật.

### Hướng dẫn chạy 3D:
```bash
cd 3d_mln131
npm install
npm run dev
```

---

## 2. Phân hệ Triển lãm Số 2D (`2d_mln131`)

- **Công nghệ**: React 18, Tailwind CSS, Lucide Icons, Canvas Visuals.
- **Nội dung & Tính năng**:
  - Dòng thời gian cuộn điện ảnh (Cinematic Auto-Scroll).
  - Bản đồ tương tác phân bố 54 dân tộc và các vùng tôn giáo trọng điểm tại Việt Nam.
  - Thư viện tư liệu ảnh lưu trữ độ phân giải cao kèm trích dẫn văn kiện.
  - Module trắc nghiệm kiến thức củng cố nội dung Chương 6.

### Hướng dẫn chạy 2D:
```bash
cd 2d_mln131
npm install
npm run dev
```

---

## 3. Bản Thuyết Minh Dự Án (DOCX)

File [`Thuyet_Minh_Bao_Tang_3D_MLN131.docx`](./Thuyet_Minh_Bao_Tang_3D_MLN131.docx) được biên soạn chuẩn học thuật theo khung chương trình Đại học FPT gồm 5 phần:
- **Phần I**: Cơ sở lý luận khoa học bám sát Giáo trình CNXHKH Chương 6 (Trang 195–238).
- **Phần II**: Ý tưởng thiết kế không gian kiến trúc và giải pháp công nghệ WebGL.
- **Phần III**: Hồ sơ chi tiết 10 hiện vật trưng bày (Lý luận, hàm ý sư phạm, tư liệu ảnh thật).
- **Phần IV**: Kịch bản thuyết trình từng bước (Tour Guide Script) đồng bộ chuyển động camera.
- **Phần V**: Bộ câu hỏi phản biện & định hướng trả lời dành cho Hội đồng giảng viên.
