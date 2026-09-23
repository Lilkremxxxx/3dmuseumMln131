# Bảo tàng Ảo 3D: Vấn đề Dân tộc và Tôn giáo trong Thời kỳ Quá độ lên Chủ nghĩa Xã hội
**Chủ đề:** Giáo trình Chủ nghĩa xã hội khoa học — Chương 6  
**Đơn vị:** Đại học FPT  
**Công nghệ:** Three.js, WebGL, Vite 5, JavaScript ES Modules

---

## Giới thiệu Dự án

Bảo tàng ảo 3D tương tác đa phương tiện tái hiện không gian triển lãm sống động phục vụ nghiên cứu, học tập và trực quan hóa nội dung **Chương 6: Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội** (theo Giáo trình Chủ nghĩa xã hội khoa học chuẩn).

Dự án gồm **4 Sảnh triển lãm kiến trúc trang nghiêm** và **10 Hiện vật 3D tương tác độc bản**:
1. **Trống đồng Đông Sơn & Quả cầu 54 Dân tộc** (Cội nguồn & Sức mạnh đại đoàn kết toàn dân tộc).
2. **Bục sách Cương lĩnh Dân tộc của V.I. Lênin (1913 - 1914)** (Nền tảng lý luận Mác - Lênin về dân tộc).
3. **Tượng Bác Hồ với đồng bào các DTTS & Bức thư Pleiku 1946** (Tư tưởng Hồ Chí Minh về đại đoàn kết dân tộc).
4. **Không gian Tín ngưỡng Thờ cúng Hùng Vương & Bàn thờ Tổ tiên** (Bản sắc tâm linh thuần Việt, cội nguồn đại đoàn kết).
5. **Mô hình Chùa Một Cột & Tượng Phật hoàng Trần Nhân Tông** (Phật giáo "Hộ quốc an dân", "Đạo pháp - Dân tộc - CNXH").
6. **Chuông đồng & Thánh giá Nhà thờ Phát Diệm** (Công giáo "Kính Chúa yêu nước", "Sống Phúc âm giữa lòng dân tộc").
7. **Cụm Đa tôn giáo: Thiên Nhãn Cao Đài & Vòm Hồi giáo Chăm** (Bức tranh tôn giáo đa dạng, hòa hợp ở Việt Nam).
8. **Mô hình Nhà rông Tây Nguyên & Dàn Cồng chiêng Di sản** (Chính sách phát triển toàn diện KT-XH vùng đồng bào DTTS).
9. **Bản khắc Hiến pháp 2013 & Luật Tín ngưỡng, Tôn giáo 2016** (Cơ sở pháp quyền XHCN bảo đảm quyền tự do tín ngưỡng).
10. **Trận tuyến "Lá chắn thép" chống "Diễn biến hòa bình"** (Đấu tranh phòng, chống âm mưu lợi dụng vấn đề dân tộc, tôn giáo).

---

## Tính năng Nổi bật (Đã cải tiến từ repo tham khảo)

- **Mũi tên Waypoint 3D dưới sàn**: Dưới chân mỗi hiện vật có vòng tròn phát sáng và mũi tên 3D nhấp nhô. Click vào mũi tên dưới sàn là camera tự động bước đến trước mặt hiện vật.
- **Chuyển động Camera Lerp mượt mà (Smooth Approach Transition)**: Tự động tính toán quỹ đạo, lướt êm dịu đến cự ly quan sát tối ưu (ngang tầm mắt 1.65m, cách hiện vật ~2m) và xoay hướng nhìn vào tâm vật thể.
- **Bộ nút mũi tên điều hướng UI**: `[ Trước ]` và `[ Tiếp theo ]` trên thanh điều khiển dưới màn hình cho phép người dùng chuyển nhanh qua từng hiện vật theo thứ tự.
- **Menu chọn nhanh 10 hiện vật**: Nhảy tức thì đến hiện vật bất kỳ.
- **Chế độ ngắm 360° (Inspect Mode)**: Kéo chuột xoay tròn xung quanh đồ vật 3D để chiêm ngưỡng mọi góc cạnh.
- **Modal Chi tiết Đa phương tiện 4 Tab**:
  - Tab 1: **Nội dung lý luận** (Nội dung giáo trình đối chiếu chuẩn trang, luận điểm cốt lõi, trích dẫn văn kiện).
  - Tab 2: **Mô hình 3D** (Mô tả hình khối, cấu trúc, chất liệu PBR, thông số kỹ thuật).
  - Tab 3: **Tranh ảnh tư liệu** (Bộ ảnh lịch sử và chú thích chi tiết).
  - Tab 4: **Phim tư liệu & Phóng sự** (Tư liệu lịch sử và phóng sự chính luận).
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
