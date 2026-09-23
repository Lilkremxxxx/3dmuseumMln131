# Bảo tàng Ảo 3D: Vấn đề Dân tộc và Tôn giáo trong Thời kỳ Quá độ lên Chủ nghĩa Xã hội
**Môn học:** Chủ nghĩa xã hội khoa học (MLN131) — Chương 6  
**Đơn vị:** Đại học FPT  
**Công nghệ:** Three.js, WebGL, Vite 5, JavaScript ES Modules

---

## 🏛️ Giới thiệu Dự án

Bảo tàng ảo 3D tương tác đa phương tiện tái hiện không gian triển lãm sống động phục vụ học tập, nghiên cứu và thuyết trình môn **Chủ nghĩa xã hội khoa học (MLN131) — Chương 6**.

Dự án gồm **4 Sảnh triển lãm kiến trúc tân cổ điển trang nghiêm** và **10 Hiện vật 3D tương tác độc bản**:
1. **Trống đồng Đông Sơn & Quả cầu 54 Dân tộc** (Cội nguồn & Sức mạnh đại đoàn kết toàn dân).
2. **Bục sách Cương lĩnh Dân tộc của V.I. Lênin (1913 - 1914)** (Nền tảng lý luận Mác - Lênin).
3. **Tượng Bác Hồ với đồng bào các DTTS & Bức thư Pleiku 1946** (Tư tưởng Hồ Chí Minh về đoàn kết).
4. **Không gian Tín ngưỡng Thờ cúng Hùng Vương & Bàn thờ Tổ tiên** (Bản sắc tâm linh thuần Việt).
5. **Mô hình Chùa Một Cột & Tượng Phật hoàng Trần Nhân Tông** (Phật giáo "Hộ quốc an dân", "Đạo pháp - Dân tộc - CNXH").
6. **Chuông đồng & Thánh giá Nhà thờ Phát Diệm** (Công giáo "Kính Chúa yêu nước", "Sống Phúc âm giữa lòng dân tộc").
7. **Cụm Đa tôn giáo: Thiên Nhãn Cao Đài & Vòm Hồi giáo Chăm** (Bức tranh tôn giáo hòa hợp ở Việt Nam).
8. **Mô hình Nhà rông Tây Nguyên & Dàn Cồng chiêng Di sản** (Chính sách phát triển KT-XH & bảo tồn văn hóa DTTS).
9. **Bản khắc Hiến pháp 2013 & Luật Tín ngưỡng, Tôn giáo 2016** (Cơ sở pháp quyền XHCN).
10. **Trận tuyến "Lá chắn thép" chống "Diễn biến hòa bình"** (Đấu tranh chống lợi dụng dân tộc, tôn giáo).

---

## 🚀 Tính năng Nổi bật (Đã cải tiến từ repo tham khảo)

- **Mũi tên Waypoint 3D dưới sàn**: Dưới chân mỗi hiện vật có vòng tròn phát sáng và mũi tên 3D nhấp nhô. Click vào mũi tên dưới sàn là camera tự động bước đến trước mặt hiện vật!
- **Chuyển động Camera Lerp mượt mà (Smooth Approach Transition)**: Tự động tính toán quỹ đạo, lướt êm dịu đến cự ly quan sát tối ưu (ngang tầm mắt 1.65m, cách hiện vật ~2m) và xoay hướng nhìn vào tâm vật thể.
- **Bộ nút mũi tên điều hướng UI**: `[ ◀ Trước ]` và `[ Tiếp ▶ ]` trên thanh điều khiển dưới màn hình cho phép người dùng chuyển nhanh qua từng hiện vật theo thứ tự.
- **Menu chọn nhanh 10 hiện vật**: Nhảy tức thì đến hiện vật bất kỳ.
- **Chế độ ngắm 360° (Inspect Mode)**: Kéo chuột xoay tròn xung quanh đồ vật 3D để chiêm ngưỡng mọi góc cạnh.
- **Modal Chi tiết Đa phương tiện 4 Tab**:
  - Tab 1: **📖 Lý luận MLN131** (Nội dung giáo trình, trích dẫn văn kiện, key takeaway).
  - Tab 2: **🏛️ Thiết kế 3D** (Mô tả hình khối, chất liệu PBR, ánh sáng).
  - Tab 3: **🖼️ Tranh ảnh tư liệu** (Bộ ảnh lịch sử và chú thích chi tiết).
  - Tab 4: **🎥 Video & Phóng sự** (Tư liệu từ VTV1, Truyền hình Nhân Dân, ANTV, QPVN).
- **Chế độ Tour Tự động (Auto Tour)**: Tự động dẫn khách tham quan lần lượt qua 10 hiện vật (mỗi hiện vật dừng 9 giây).

---

## 💻 Hướng dẫn Chạy ứng dụng

1. Mở terminal tại thư mục này:
```bash
npm run dev
```

2. Truy cập đường link xuất hiện trong terminal (thường là `http://localhost:3000`).

3. Để build bản release chạy offline:
```bash
npm run build
npm run preview
```
