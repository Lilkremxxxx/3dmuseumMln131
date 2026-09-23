# -*- coding: utf-8 -*-
"""
Script tạo tài liệu thuyết minh và kịch bản thuyết trình bảo tàng 3D môn MLN131
Chuyên đề: Chương 6 - Vấn đề Dân tộc và Tôn giáo trong Thời kỳ Quá độ lên Chủ nghĩa Xã hội
"""

import os
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

def set_cell_background(cell, fill_hex):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=120, bottom=120, left=180, right=180):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = parse_xml(
        f'<w:tcMar {nsdecls("w")}>'
        f'<w:top w:w="{top}" w:type="dxa"/>'
        f'<w:bottom w:w="{bottom}" w:type="dxa"/>'
        f'<w:left w:w="{left}" w:type="dxa"/>'
        f'<w:right w:w="{right}" w:type="dxa"/>'
        f'</w:tcMar>'
    )
    tcPr.append(tcMar)

def add_callout(doc, text, title="LUẬN ĐIỂM CỐT LÕI", border_color="C89B3C", bg_color="FDFBF7"):
    tbl = doc.add_table(rows=1, cols=1)
    tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl.autofit = False
    
    cell = tbl.cell(0, 0)
    cell.width = Inches(6.5)
    set_cell_background(cell, bg_color)
    set_cell_margins(cell, top=160, bottom=160, left=240, right=200)
    
    tcPr = cell._tc.get_or_add_tcPr()
    borders = parse_xml(
        f'<w:tcBorders {nsdecls("w")}>'
        f'<w:top w:val="none"/>'
        f'<w:left w:val="single" w:sz="36" w:space="0" w:color="{border_color}"/>'
        f'<w:bottom w:val="none"/>'
        f'<w:right w:val="none"/>'
        f'</w:tcBorders>'
    )
    tcPr.append(borders)
    
    p = cell.paragraphs[0]
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after = Pt(4)
    run_title = p.add_run(f"★ {title}\n")
    run_title.bold = True
    run_title.font.name = "Arial"
    run_title.font.size = Pt(10.5)
    run_title.font.color.rgb = RGBColor(0x8A, 0x1B, 0x24)
    
    run_text = p.add_run(text)
    run_text.font.name = "Arial"
    run_text.font.size = Pt(10)
    run_text.font.italic = True
    run_text.font.color.rgb = RGBColor(0x2D, 0x37, 0x48)
    
    p_after = doc.add_paragraph()
    p_after.paragraph_format.space_after = Pt(4)

def format_row(row, heights=None):
    trPr = row._tr.get_or_add_trPr()
    trPr.append(parse_xml(f'<w:cantSplit {nsdecls("w")}/>'))

def create_document():
    doc = docx.Document()
    
    # Thiết lập lề trang chuẩn A4
    for section in doc.sections:
        section.top_margin = Inches(0.9)
        section.bottom_margin = Inches(0.9)
        section.left_margin = Inches(1.0)
        section.right_margin = Inches(1.0)
        section.header_distance = Inches(0.5)
        section.footer_distance = Inches(0.5)
        
        # Header / Footer
        header_p = section.header.paragraphs[0]
        header_p.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        h_run = header_p.add_run("BẢO TÀNG ẢO 3D: VẤN ĐỀ DÂN TỘC & TÔN GIÁO — CHƯƠNG 6 MLN131")
        h_run.font.name = "Arial"
        h_run.font.size = Pt(8.5)
        h_run.font.color.rgb = RGBColor(0x71, 0x80, 0x96)
        
        footer_p = section.footer.paragraphs[0]
        footer_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        f_run = footer_p.add_run("Trường Đại học FPT • Tài liệu thuyết minh & Kịch bản báo cáo môn Chủ nghĩa xã hội khoa học")
        f_run.font.name = "Arial"
        f_run.font.size = Pt(8.5)
        f_run.font.color.rgb = RGBColor(0xA0, 0xAE, 0xC0)

    # ════════════════════════════════════════════════════════════════════
    # TRANG BÌA SANG TRỌNG
    # ════════════════════════════════════════════════════════════════════
    p_fpt = doc.add_paragraph()
    p_fpt.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_fpt = p_fpt.add_run("TRƯỜNG ĐẠI HỌC FPT\nBỘ MÔN LÝ LUẬN CHÍNH TRỊ\n")
    r_fpt.bold = True
    r_fpt.font.name = "Arial"
    r_fpt.font.size = Pt(13)
    r_fpt.font.color.rgb = RGBColor(0x1A, 0x36, 0x5D)
    
    r_line = p_fpt.add_run("──────── ◆ ────────\n\n\n")
    r_line.font.color.rgb = RGBColor(0xC8, 0x9B, 0x3C)
    
    p_doc_type = doc.add_paragraph()
    p_doc_type.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_doc_type = p_doc_type.add_run("TÀI LIỆU THUYẾT MINH DỰ ÁN & KỊCH BẢN THUYẾT TRÌNH BẢO TÀNG ẢO\n")
    r_doc_type.font.name = "Arial"
    r_doc_type.font.size = Pt(12)
    r_doc_type.font.color.rgb = RGBColor(0x8A, 0x1B, 0x24)
    r_doc_type.bold = True
    
    p_title = doc.add_paragraph()
    p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_title.paragraph_format.line_spacing = 1.3
    r_title = p_title.add_run("KHÔNG GIAN TRIỂN LÃM BẢO TÀNG 3D\nVẤN ĐỀ DÂN TỘC VÀ TÔN GIÁO\nTRONG THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI\n")
    r_title.bold = True
    r_title.font.name = "Arial"
    r_title.font.size = Pt(21)
    r_title.font.color.rgb = RGBColor(0x0F, 0x25, 0x37)
    
    p_sub = doc.add_paragraph()
    p_sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_sub = p_sub.add_run("Ứng dụng công nghệ 3D Web tương tác phục vụ đổi mới phương pháp dạy - học\nmôn Chủ nghĩa xã hội khoa học (Mã môn: MLN131)\n\n\n")
    r_sub.font.name = "Arial"
    r_sub.font.size = Pt(11)
    r_sub.font.italic = True
    r_sub.font.color.rgb = RGBColor(0x4A, 0x55, 0x68)

    # Khung thông tin tác giả / đề tài
    info_table = doc.add_table(rows=5, cols=2)
    info_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    info_table.autofit = False
    
    col_widths = [Inches(2.2), Inches(4.0)]
    info_data = [
        ("Môn học:", "Chủ nghĩa xã hội khoa học (MLN131)"),
        ("Chuyên đề nghiên cứu:", "Chương 6: Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ"),
        ("Nền tảng kỹ thuật:", "Three.js WebGL, 3D Art Gallery Frame, Dark Mode"),
        ("Đơn vị đào tạo:", "Trường Đại học FPT"),
        ("Năm học thực hiện:", "Học kỳ Spring / Summer / Fall — 2026")
    ]
    
    for row_idx, (label, val) in enumerate(info_data):
        row = info_table.rows[row_idx]
        set_cell_background(row.cells[0], "F7FAFC")
        set_cell_background(row.cells[1], "FFFFFF")
        set_cell_margins(row.cells[0], top=80, bottom=80, left=140, right=140)
        set_cell_margins(row.cells[1], top=80, bottom=80, left=140, right=140)
        
        row.cells[0].width = col_widths[0]
        row.cells[1].width = col_widths[1]
        
        p0 = row.cells[0].paragraphs[0]
        r0 = p0.add_run(label)
        r0.bold = True
        r0.font.name = "Arial"
        r0.font.size = Pt(10)
        r0.font.color.rgb = RGBColor(0x2D, 0x37, 0x48)
        
        p1 = row.cells[1].paragraphs[0]
        r1 = p1.add_run(val)
        r1.font.name = "Arial"
        r1.font.size = Pt(10)
        r1.font.color.rgb = RGBColor(0x1A, 0x20, 0x2C)
        
    doc.add_page_break()

    # ════════════════════════════════════════════════════════════════════
    # MỤC LỤC & TỔNG QUAN
    # ════════════════════════════════════════════════════════════════════
    h1 = doc.add_heading(level=1)
    r = h1.add_run("TỔNG QUAN DỰ ÁN & MỤC TIÊU SƯ PHẠM")
    r.font.name = "Arial"
    r.font.size = Pt(16)
    r.bold = True
    r.font.color.rgb = RGBColor(0x0F, 0x25, 0x37)

    p_intro = doc.add_paragraph()
    p_intro.paragraph_format.line_spacing = 1.25
    p_intro.paragraph_format.space_after = Pt(8)
    p_intro.add_run(
        "Môn học Chủ nghĩa xã hội khoa học (MLN131) là một trong những môn học nền tảng bắt buộc thuộc khối kiến thức "
        "Lý luận chính trị tại các trường đại học nói chung và Đại học FPT nói riêng. Trong đó, Chương 6 — 'Vấn đề dân tộc và tôn giáo "
        "trong thời kỳ quá độ lên chủ nghĩa xã hội' là một trong những chương có hàm lượng lý luận sâu sắc, gắn kết mật thiết nhất "
        "với lịch sử dựng nước, giữ nước của dân tộc Việt Nam, cũng như thực tiễn bảo vệ Tổ quốc trong tình hình mới.\n\n"
        "Tuy nhiên, phương pháp giảng dạy và tiếp cận truyền thống qua giáo trình bản in và slide thuyết trình thông thường thường khiến "
        "sinh viên cảm thấy trừu tượng, khó hình dung tính sinh động của các sự kiện lịch sử, bản sắc văn hóa tộc người và đời sống tôn giáo. "
        "Xuất phát từ thực tiễn đó, dự án Bảo tàng Ảo 3D Chương 6 MLN131 được xây dựng nhằm mục tiêu chuyển đổi số toàn diện phương thức "
        "truyền tải tri thức lý luận, biến các nguyên lý hàn lâm thành một không gian tham quan bảo tàng 3D điện ảnh, sống động, chân thực "
        "và có tính tương tác cao."
    )

    add_callout(
        doc,
        "Mục tiêu cốt lõi của bảo tàng 3D không chỉ dừng lại ở tính năng thị giác, mà là phương tiện học thuật trực quan "
        "giúp người học nắm vững bản chất dân tộc, tôn giáo, cội nguồn sức mạnh đại đoàn kết và nâng cao ý thức cảnh giác trước các thủ đoạn "
        "lợi dụng dân tộc, tôn giáo chống phá đất nước.",
        title="MỤC TIÊU HỌC THUẬT CỐT LÕI"
    )

    # ════════════════════════════════════════════════════════════════════
    # PHẦN I: CƠ SỞ KHOA HỌC & GIÁO TRÌNH CHUẨN
    # ════════════════════════════════════════════════════════════════════
    h1 = doc.add_heading(level=1)
    r = h1.add_run("PHẦN I: CƠ SỞ KHOA HỌC & HỆ THỐNG KIẾN THỨC CHƯƠNG 6")
    r.font.name = "Arial"
    r.font.size = Pt(16)
    r.bold = True
    r.font.color.rgb = RGBColor(0x0F, 0x25, 0x37)

    doc.add_paragraph(
        "Nội dung trưng bày trong bảo tàng được đối chiếu, chuẩn hóa tuyệt đối 100% dựa trên Giáo trình Chủ nghĩa Xã hội Khoa học "
        "(Dành cho bậc đại học hệ không chuyên lý luận chính trị, Chương 6, trang 195 - 238, Nhà xuất bản Chính trị Quốc gia Sự thật). "
        "Hệ thống kiến thức được cấu trúc chặt chẽ thành 4 cụm chuyên đề tương ứng với 4 Sảnh triển lãm:"
    )

    # Bảng 4 sảnh
    tbl_halls = doc.add_table(rows=5, cols=4)
    tbl_halls.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl_halls.autofit = False

    widths = [Inches(1.0), Inches(2.2), Inches(2.1), Inches(1.2)]
    headers = ["Sảnh", "Chủ đề Chuyên môn", "Cơ sở Lý luận trong Giáo trình", "Hiện vật"]
    
    # Header row
    hdr_row = tbl_halls.rows[0]
    set_cell_background(hdr_row.cells[0], "0F2537")
    set_cell_background(hdr_row.cells[1], "0F2537")
    set_cell_background(hdr_row.cells[2], "0F2537")
    set_cell_background(hdr_row.cells[3], "0F2537")
    for i, h in enumerate(headers):
        hdr_row.cells[i].width = widths[i]
        p = hdr_row.cells[i].paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        run = p.add_run(h)
        run.bold = True
        run.font.name = "Arial"
        run.font.size = Pt(9.5)
        run.font.color.rgb = RGBColor(0xFF, 0xD7, 0x00)

    halls_table_data = [
        ("Sảnh I", "Cội nguồn & Khối Đại đoàn kết 54 Dân tộc", "Khái niệm dân tộc, 2 xu hướng quan hệ dân tộc, Cương lĩnh Lênin, Tư tưởng Hồ Chí Minh (Trang 196 - 211)", "Hiện vật I, II, III"),
        ("Sảnh II", "Tín ngưỡng - Tôn giáo & Sự Hòa hợp Dân tộc", "Bản chất, nguồn gốc tôn giáo; đặc điểm tôn giáo VN; nguyên tắc giải quyết (Trang 214 - 232)", "Hiện vật IV, V, VI, VII"),
        ("Sảnh III", "Văn hóa Tộc người & Chính sách Toàn diện", "Nội dung chính sách dân tộc toàn diện về chính trị, kinh tế, văn hóa, quốc phòng (Trang 211 - 214)", "Hiện vật VIII"),
        ("Sảnh IV", "Thể chế Pháp quyền & Bảo vệ An ninh Tổ quốc", "Hiến định hóa quyền bình đẳng, tự do tín ngưỡng; cảnh giác 'diễn biến hòa bình' (Trang 203, 226, 233 - 238)", "Hiện vật IX, X")
    ]

    for row_idx, row_data in enumerate(halls_table_data, start=1):
        row = tbl_halls.rows[row_idx]
        format_row(row)
        bg = "FFFFFF" if row_idx % 2 != 0 else "F8FAFC"
        for col_idx, text in enumerate(row_data):
            cell = row.cells[col_idx]
            cell.width = widths[col_idx]
            set_cell_background(cell, bg)
            set_cell_margins(cell, top=100, bottom=100, left=120, right=120)
            p = cell.paragraphs[0]
            if col_idx in [0, 3]:
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            run = p.add_run(text)
            run.font.name = "Arial"
            run.font.size = Pt(9)
            if col_idx == 0:
                run.bold = True
                run.font.color.rgb = RGBColor(0x8A, 0x1B, 0x24)

    doc.add_paragraph().paragraph_format.space_after = Pt(8)

    # ════════════════════════════════════════════════════════════════════
    # PHẦN II: KIẾN TRÚC KHÔNG GIAN BẢO TÀNG & GIẢI PHÁP NGHỆ THUẬT
    # ════════════════════════════════════════════════════════════════════
    h1 = doc.add_heading(level=1)
    r = h1.add_run("PHẦN II: THIẾT KẾ KHÔNG GIAN KIẾN TRÚC & GIẢI PHÁP 3D")
    r.font.name = "Arial"
    r.font.size = Pt(16)
    r.bold = True
    r.font.color.rgb = RGBColor(0x0F, 0x25, 0x37)

    doc.add_paragraph(
        "Không gian bảo tàng 3D được nghiên cứu và thiết kế dựa trên phong cách nghệ thuật triển lãm hàn lâm cao cấp, "
        "kết hợp các giải pháp công nghệ đồ họa tiên tiến:"
    )

    doc.add_heading("1. Phong cách Dark Mode & Nghệ thuật Chiếu sáng 3 Tầng", level=2)
    doc.add_paragraph(
        "• Tone màu chủ đạo: Tông nâu than ấm (Dark Amber / Mahogany 0x130e0a) tạo nên không gian trang nghiêm, thanh tịnh "
        "nhưng không bị đen kịt hay u tối. Sương mù chiều sâu (Fog 26m - 110m) giúp sảnh triển lãm có chiều sâu vô tận.\n"
        "• Hệ thống chiếu sáng 3 tầng: Đèn môi trường vàng kem (Ambient Light 0.78), giếng trời lấy sáng tự nhiên qua vòm kính trần "
        "(Directional Sun 1.05), hệ thống đèn rọi trần chạy dọc sảnh (Track PointLights 1.65) và đèn hắt vàng ấm hai bên tường.\n"
        "• Spotlight nghệ thuật hội tụ (Highlight Spotlight): Khi người tham quan di chuyển hoặc chọn một hiện vật, chùm đèn spotlight vàng kim "
        "công suất lớn (6.5 lux) sẽ tự động lướt mượt mà (smooth lerp) đến và tỏa nhịp thở ánh sáng, tôn vinh trọn vẹn hiện vật đó."
    )

    doc.add_heading("2. Thiết kế Bệ đỡ Bảo tàng & Khung tranh Nghệ thuật 3D Đồng bộ", level=2)
    doc.add_paragraph(
        "Để khắc phục việc thiếu vắng các mô hình 3D nguyên bản và tránh sử dụng ảnh do AI tự sinh thiếu tính chính xác lịch sử, "
        "dự án đã nghiên cứu và phát triển giải pháp Bệ đỡ bảo tàng đồng bộ kết hợp Khung tranh nghệ thuật 3D:\n"
        "• Bục trưng bày: Chân đế đá sẫm vát gờ kết hợp thân bục gỗ mun/gụ sẫm bóng mờ bảo tàng (0x1e1611), viền nẹp phào chỉ mạ vàng hoàng gia (0xd4af37), "
        "trên mặt bục là tấm đệm nhung đỏ trang trọng (0x730e16).\n"
        "• Biển tên hiện vật bằng đồng (Brass Plaque): Gắn trước mặt bục, khắc số La Mã và tên hiện vật, được thiết kế ngửa lên 14° đúng tầm mắt người xem.\n"
        "• Hàng rào barie bảo vệ (Velvet Rope Stanchions): 4 cột đồng mạ vàng ở 4 góc kết hợp 4 đoạn dây nhung đỏ uốn cong võng mềm mại tự nhiên.\n"
        "• Khung tranh 3D: Được đặt nghiêng góc 15° trên đệm nhung đỏ, viền phào chỉ mạ vàng, mặt kính bảo tàng phản quang mờ, "
        "phía trên đỉnh vươn chóa đèn rọi tranh kim loại ngang rọi ánh sáng vàng ấm trực tiếp vào mặt tranh in ảnh tư liệu thật."
    )

    doc.add_heading("3. Hiệu ứng Thị giác Điện ảnh (Cinematic Visual Effects)", level=2)
    doc.add_paragraph(
        "• Hạt bụi vàng lơ lửng (Golden Dust Sparkles): Hệ thống 480 hạt bụi vàng kim chuyển động nhấp nhô lững lờ trong không gian phản chiếu ánh đèn vàng, "
        "tái hiện chính xác cảm giác đứng giữa một bảo tàng quốc gia thực thụ.\n"
        "• Vòng hào quang sàn (Breathing Floor Glow Ring): Dưới chân mỗi bệ đỡ là vòng tròn ánh sáng vàng kim tỏa nhịp thở nhẹ nhàng.\n"
        "• Lớp phủ quang sai (Cinematic Vignette): Lớp phủ radial gradient tối êm dịu ở 4 góc màn hình giúp mắt người xem luôn tập trung vào trung tâm hiện vật."
    )

    # ════════════════════════════════════════════════════════════════════
    # PHẦN III: CHI TIẾT 10 HIỆN VẬT TRƯNG BÀY
    # ════════════════════════════════════════════════════════════════════
    h1 = doc.add_heading(level=1)
    r = h1.add_run("PHẦN III: DANH MỤC & THUYẾT MINH CHI TIẾT 10 HIỆN VẬT")
    r.font.name = "Arial"
    r.font.size = Pt(16)
    r.bold = True
    r.font.color.rgb = RGBColor(0x0F, 0x25, 0x37)

    exhibits_details = [
        {
            "num": "I",
            "title": "Trống đồng Đông Sơn & Quả cầu 54 Dân tộc",
            "hall": "Sảnh I: Cội nguồn & Khối Đại đoàn kết 54 Dân tộc",
            "theme": "Khái niệm Dân tộc & Đặc trưng Dân tộc Việt Nam (Trang 196 - 210)",
            "photo": "Trống đồng Đông Sơn (Bảo tàng Lịch sử Quốc gia) & Bác Hồ thăm Đền Hùng 1954",
            "theory": "Làm rõ dân tộc theo nghĩa rộng (Quốc gia - Dân tộc) và nghĩa hẹp (Tộc người). Khẳng định đặc trưng dân tộc Việt Nam: cư trú xen kẽ, địa bàn chiến lược, chênh lệch số dân nhưng có truyền thống đoàn kết keo sơn từ cội nguồn một bọc trăm trứng Mẹ Âu Cơ.",
            "takeaway": "Đoàn kết dân tộc là truyền thống quý báu, là quy luật sinh tồn và động lực quyết định đưa dân tộc Việt Nam vượt qua mọi biến cố lịch sử."
        },
        {
            "num": "II",
            "title": "Cương lĩnh Dân tộc của V.I. Lênin (1913 - 1914)",
            "hall": "Sảnh I: Cội nguồn & Khối Đại đoàn kết 54 Dân tộc",
            "theme": "Cương lĩnh Dân tộc của Chủ nghĩa Mác - Lênin (Trang 203 - 207)",
            "photo": "V.I. Lênin tại Đại hội II Quốc tế Cộng sản (1920) & Diễn thuyết trước công nhân (1919)",
            "theory": "Phân tích 3 nguyên tắc vàng: (1) Các dân tộc hoàn toàn bình đẳng; (2) Các dân tộc được quyền tự quyết; (3) Liên hiệp công nhân tất cả các dân tộc lại. Soi rọi con đường cứu nước của Nguyễn Ái Quốc năm 1920.",
            "takeaway": "Cương lĩnh dân tộc Lênin là nền tảng lý luận khoa học định hướng cho đường lối giải phóng dân tộc của phong trào cộng sản quốc tế."
        },
        {
            "num": "III",
            "title": "Tượng Bác Hồ với Đồng bào DTTS & Thư Pleiku 1946",
            "hall": "Sảnh I: Cội nguồn & Khối Đại đoàn kết 54 Dân tộc",
            "theme": "Tư tưởng Hồ Chí Minh về Đại đoàn kết Toàn dân tộc (Trang 209 - 211)",
            "photo": "Bác Hồ tại Chiến khu Việt Bắc (1950) & Chân dung Chủ tịch Hồ Chí Minh (1946)",
            "theory": "Khắc họa bức thư lịch sử gửi Đại hội các DTTS miền Nam tại Pleiku (19/4/1946): 'Sông có thể cạn, núi có thể mòn, nhưng lòng đoàn kết của chúng ta không bao giờ giảm bớt'. Vấn đề dân tộc là chiến lược lâu dài và cấp bách.",
            "takeaway": "Đại đoàn kết toàn dân tộc là đường lối chiến lược của cách mạng Việt Nam, là nguồn sức mạnh và động lực chủ yếu xây dựng và bảo vệ Tổ quốc."
        },
        {
            "num": "IV",
            "title": "Không gian Tín ngưỡng Thờ cúng Hùng Vương",
            "hall": "Sảnh II: Tín ngưỡng - Tôn giáo & Sự Hòa hợp Dân tộc",
            "theme": "Bản chất Tôn giáo & Tín ngưỡng Bản địa Truyền thống (Trang 214 - 220, 229 - 231)",
            "photo": "Lăng Vua Hùng trên núi Nghĩa Lĩnh & Không gian Tín ngưỡng Thờ cúng Hùng Vương",
            "theory": "Phân tích bản chất tôn giáo (hình thái ý thức xã hội phản ánh hư ảo), nguồn gốc tự nhiên, KT-XH, nhận thức, tâm lý. Làm nổi bật tín ngưỡng thờ cúng Hùng Vương (Di sản UNESCO 2012) kết nối triệu trái tim 'Uống nước nhớ nguồn'.",
            "takeaway": "Tín ngưỡng thờ cúng tổ tiên và thờ Hùng Vương là mạch nguồn tâm linh thuần Việt, biểu tượng trường tồn của ý thức tự tôn giống nòi."
        },
        {
            "num": "V",
            "title": "Chùa Một Cột & Tượng Phật hoàng Trần Nhân Tông",
            "hall": "Sảnh II: Tín ngưỡng - Tôn giáo & Sự Hòa hợp Dân tộc",
            "theme": "Tôn giáo Đồng hành cùng Lịch sử Dân tộc (Trang 223 - 226, 229 - 232)",
            "photo": "Di tích Chùa Một Cột (Diên Hựu Tự) & Tượng Phật hoàng Trần Nhân Tông (Trúc Lâm)",
            "theory": "Đặc điểm Phật giáo Việt Nam nhập thế, 'Cư trần lạc đạo' và tinh thần 'Hộ quốc an dân'. Trong thời kỳ quá độ, Giáo hội Phật giáo Việt Nam kiên định phương châm: 'Đạo pháp - Dân tộc - Chủ nghĩa xã hội'.",
            "takeaway": "Phật giáo Việt Nam là tấm gương tiêu biểu cho tinh thần gắn bó máu thịt giữa đạo pháp và vận mệnh độc lập của dân tộc."
        },
        {
            "num": "VI",
            "title": "Chuông đồng & Thánh giá Nhà thờ Phát Diệm",
            "hall": "Sảnh II: Tín ngưỡng - Tôn giáo & Sự Hòa hợp Dân tộc",
            "theme": "Công giáo Đồng hành cùng Dân tộc (Trang 224 - 227)",
            "photo": "Quần thể Nhà thờ Chính tòa Phát Diệm (Ninh Bình) & Đời sống Giáo dân Yêu nước",
            "theory": "Đường hướng mục vụ chiến lược: 'Sống Phúc âm giữa lòng dân tộc để phục vụ hạnh phúc của đồng bào' (Thư chung 1980) và 'Người Công giáo tốt cũng là người công dân tốt'. Kiến trúc đình chùa kết hợp gothic phương Tây.",
            "takeaway": "Đồng bào Công giáo là bộ phận không thể tách rời của khối đại đoàn kết toàn dân tộc, luôn đồng hành cùng sự nghiệp xây dựng đất nước."
        },
        {
            "num": "VII",
            "title": "Cụm Đa tôn giáo: Thiên Nhãn Cao Đài & Vòm Hồi giáo Chăm",
            "hall": "Sảnh II: Tín ngưỡng - Tôn giáo & Sự Hòa hợp Dân tộc",
            "theme": "Sự Phong phú & Hòa hợp Tôn giáo ở Việt Nam (Trang 223 - 225, 228 - 231)",
            "photo": "Tòa Thánh Tây Ninh (Đạo Cao Đài) & Bản sắc Văn hóa - Tôn giáo người Chăm",
            "theory": "Việt Nam có 43 tổ chức thuộc 16 tôn giáo được công nhận. Các tôn giáo chung sống hòa bình, không có xung đột, chiến tranh tôn giáo. Đạo Cao Đài dung hợp tam giáo; Hồi giáo Chăm hòa quyện văn hóa phương Nam.",
            "takeaway": "Sự tôn trọng, đan xen và chung sống hòa bình của các tôn giáo là nét đẹp nhân văn tiêu biểu của nền văn hiến Việt Nam."
        },
        {
            "num": "VIII",
            "title": "Mô hình Nhà rông Tây Nguyên & Dàn Cồng chiêng",
            "hall": "Sảnh III: Văn hóa Tộc người & Chính sách Phát triển Toàn diện",
            "theme": "Chính sách Dân tộc Toàn diện của Đảng và Nhà nước (Trang 211 - 213)",
            "photo": "Nhà rông Truyền thống Ba Na & Không gian Văn hóa Cồng chiêng Tây Nguyên (UNESCO)",
            "theory": "Chính sách dân tộc toàn diện trên các lĩnh vực: Chính trị (bình đẳng, đào tạo cán bộ DTTS), Kinh tế (đầu tư hạ tầng, xóa đói giảm nghèo), Văn hóa (bảo tồn bản sắc, di sản cồng chiêng), Xã hội (y tế, giáo dục), Quốc phòng an ninh.",
            "takeaway": "Chính sách dân tộc đúng đắn là nền tảng vững chắc rút ngắn khoảng cách phát triển, củng cố thế trận lòng dân vùng phên dậu Tổ quốc."
        },
        {
            "num": "IX",
            "title": "Bản khắc Hiến pháp 2013 & Luật Tín ngưỡng, Tôn giáo",
            "hall": "Sảnh IV: Thể chế Pháp quyền & Bảo vệ An ninh Tổ quốc",
            "theme": "Thể chế Pháp quyền XHCN về Dân tộc & Tôn giáo (Trang 211, 226 - 227)",
            "photo": "Tòa nhà Quốc hội Việt Nam & Bản khắc Hiến pháp 2013, Luật Tín ngưỡng 2016",
            "theory": "Pháp chế hóa nguyên tắc dân tộc, tôn giáo: Điều 5 Hiến pháp 2013 (bình đẳng, đoàn kết, nghiêm cấm kỳ thị chia rẽ), Điều 24 Hiến pháp 2013 & Luật Tín ngưỡng, tôn giáo 2016 (bảo đảm quyền tự do tín ngưỡng, bình đẳng trước pháp luật).",
            "takeaway": "Hệ thống pháp luật Việt Nam luôn tôn trọng, bảo đảm quyền con người và quyền tự do tín ngưỡng phù hợp với các công ước quốc tế."
        },
        {
            "num": "X",
            "title": "Trận tuyến 'Lá chắn thép' chống 'Diễn biến hòa bình'",
            "hall": "Sảnh IV: Thể chế Pháp quyền & Bảo vệ An ninh Tổ quốc",
            "theme": "Đấu tranh Ngăn chặn Lợi dụng Dân tộc & Tôn giáo (Trang 203, 226, 233 - 236)",
            "photo": "Lực lượng Công an Nhân dân & Bộ đội Biên phòng sát cánh cùng đồng bào",
            "theory": "Vạch trần âm mưu của các thế lực thù địch lợi dụng dân tộc, tôn giáo để kích động ly khai (Nhà nước Đề ga, Vương quốc Mông, tà đạo Hà Mòn, vụ việc khủng bố Đắk Lắk 11/6/2023). Giữ vững 'thế trận lòng dân' và chủ quyền biên cương.",
            "takeaway": "Giữ vững khối đại đoàn kết toàn dân tộc là nhiệm vụ chiến lược sống còn, là lá chắn thép bảo vệ vững chắc Tổ quốc Việt Nam XHCN."
        }
    ]

    for ex in exhibits_details:
        h2 = doc.add_heading(level=2)
        r = h2.add_run(f"Hiện vật {ex['num']}: {ex['title']}")
        r.font.name = "Arial"
        r.bold = True
        r.font.size = Pt(13)
        r.font.color.rgb = RGBColor(0x8A, 0x1B, 0x24)

        p_meta = doc.add_paragraph()
        p_meta.paragraph_format.space_after = Pt(4)
        r_meta1 = p_meta.add_run("Vị trí: ")
        r_meta1.bold = True
        p_meta.add_run(f"{ex['hall']}   |   ")
        r_meta2 = p_meta.add_run("Chuyên đề: ")
        r_meta2.bold = True
        p_meta.add_run(ex['theme'])

        p_photo = doc.add_paragraph()
        p_photo.paragraph_format.space_after = Pt(4)
        r_p = p_photo.add_run("Tư liệu hình ảnh thật 100%: ")
        r_p.bold = True
        p_photo.add_run(ex['photo'])

        p_desc = doc.add_paragraph()
        p_desc.paragraph_format.space_after = Pt(4)
        p_desc.add_run(f"• Nội dung lý luận: {ex['theory']}")

        add_callout(doc, ex['takeaway'], title=f"LUẬN ĐIỂM TRỌNG TÂM — HIỆN VẬT {ex['num']}")

    # ════════════════════════════════════════════════════════════════════
    # PHẦN IV: KỊCH BẢN THUYẾT TRÌNH BẢO TÀNG MẪU (TOUR GUIDE SCRIPT)
    # ════════════════════════════════════════════════════════════════════
    h1 = doc.add_heading(level=1)
    r = h1.add_run("PHẦN IV: KỊCH BẢN THUYẾT TRÌNH BẢO TÀNG MẪU (15 - 20 PHÚT)")
    r.font.name = "Arial"
    r.font.size = Pt(16)
    r.bold = True
    r.font.color.rgb = RGBColor(0x0F, 0x25, 0x37)

    doc.add_paragraph(
        "Kịch bản sau đây được thiết kế sẵn từng câu từng chữ dành cho nhóm sinh viên khi thuyết trình trước Giảng viên và lớp học, "
        "kết hợp đồng bộ với thao tác điều khiển camera trong không gian bảo tàng 3D:"
    )

    scripts = [
        (
            "1. LỜI MỞ ĐẦU & GIỚI THIỆU KHÔNG GIAN BẢO TÀNG (Thời lượng: 2 phút)",
            "Thao tác 3D: Camera đứng tại vị trí cửa vào sảnh (z = -4), xoay nhẹ góc nhìn toàn cảnh sảnh hành lang dài với ánh đèn vàng ấm và các hạt bụi vàng lấp lánh.",
            "Kính thưa Thầy/Cô và toàn thể các bạn sinh viên!\n\n"
            "Hôm nay, nhóm chúng em vô cùng vinh dự được đại diện báo cáo sản phẩm nghiên cứu và ứng dụng chuyển đổi số "
            "trong môn học Chủ nghĩa xã hội khoa học (MLN131). Trước mắt Thầy Cô và các bạn là Không gian Triển lãm Bảo tàng 3D chuyên đề "
            "Chương 6: 'Vấn đề Dân tộc và Tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội'.\n\n"
            "Thay vì những trang sách lý luận hàn lâm, chúng em đã tái hiện toàn bộ nội dung chương học thành một bảo tàng nghệ thuật điện ảnh "
            "với phong cách Dark Mode sang trọng, ánh đèn vàng ấm áp và 480 hạt bụi vàng bay lơ lửng. Bảo tàng gồm 4 Sảnh lớn với 10 Bệ đỡ hiện vật chuẩn mực, "
            "trên đó mỗi hiện vật được đặt trang trọng trong một khung tranh nghệ thuật 3D mạ vàng nghiêng 15°, trưng bày những bức ảnh tư liệu lịch sử có thật 100% "
            "lưu giữ tại các bảo tàng quốc gia. Ngay sau đây, kính mời Thầy Cô và các bạn cùng bước vào hành trình khám phá Sảnh thứ nhất!"
        ),
        (
            "2. THUYẾT MINH SẢNH I: CỘI NGUỒN & ĐẠI ĐOÀN KẾT 54 DÂN TỘC (Thời lượng: 4 phút)",
            "Thao tác 3D: Nhấp mũi tên hoặc bấm nút 'Tiếp theo' để camera lướt đến Hiện vật I, sau đó chuyển sang Hiện vật II và Hiện vật III. Chú ý chỉ vào biển tên đồng nghiêng 14° và mở tab 'Nội dung lý luận'.",
            "Kính thưa Thầy Cô, chúng ta đang dừng chân trước Hiện vật I: 'Trống đồng Đông Sơn & Khối đại đoàn kết 54 dân tộc'. "
            "Trống đồng là biểu tượng kim khí đỉnh cao của nền văn minh sông Hồng, là cội nguồn của ý thức cộng đồng 'đồng bào' chung một bọc trăm trứng. "
            "Theo Giáo trình trang 196, dân tộc Việt Nam có đặc thù là các dân tộc cư trú xen kẽ, địa bàn có vị trí chiến lược, tuy có sự chênh lệch về kinh tế nhưng keo sơn gắn bó.\n\n"
            "Bước sang Hiện vật II, chúng ta bắt gặp Cương lĩnh Dân tộc của V.I. Lênin (1913 - 1914). Đây là kim chỉ nam với 3 nguyên tắc bất hủ: "
            "'Các dân tộc hoàn toàn bình đẳng; Các dân tộc được quyền tự quyết; Liên hiệp công nhân tất cả các dân tộc lại'. Văn kiện này đã trực tiếp soi rọi "
            "con đường cứu nước của Bác Hồ tại Paris năm 1920.\n\n"
            "Tiếp tục tiến sang Hiện vật III, hình ảnh Bác Hồ quàng khăn cho thiếu nhi vùng cao cùng bức Thư Pleiku năm 1946: "
            "'Sông có thể cạn, núi có thể mòn, nhưng lòng đoàn kết của chúng ta không bao giờ giảm bớt'. Tư tưởng Hồ Chí Minh khẳng định đại đoàn kết toàn dân tộc "
            "là đường lối chiến lược sống còn, là cội nguồn mọi thắng lợi của cách mạng Việt Nam."
        ),
        (
            "3. THUYẾT MINH SẢNH II: TÍN NGƯỠNG, TÔN GIÁO & SỰ HÒA HỢP (Thời lượng: 5 phút)",
            "Thao tác 3D: Camera bước qua vòm cổng Sảnh II (với biển tên Sảnh II màu vàng kim sắc nét), lần lượt dừng trước Hiện vật IV (Đền Hùng), Hiện vật V (Chùa Một Cột), Hiện vật VI (Phát Diệm) và Hiện vật VII (Cao Đài & Hồi giáo).",
            "Bước qua cổng vòm Sảnh II, chúng ta đến với chuyên đề Tôn giáo và Tín ngưỡng. Giáo trình trang 214 chỉ rõ: Tôn giáo là một hình thái ý thức xã hội "
            "phản ánh hư ảo hiện thực khách quan. Nhưng tại Việt Nam, tôn giáo và tín ngưỡng truyền thống luôn hòa quyện sâu sắc.\n\n"
            "Hiện vật IV là Không gian Thờ cúng Hùng Vương — Di sản UNESCO 2012, minh chứng cho đạo lý 'Uống nước nhớ nguồn' cố kết triệu người như một.\n\n"
            "Hiện vật V là Chùa Một Cột và Thiền phái Trúc Lâm Yên Tử của Phật hoàng Trần Nhân Tông, đại diện cho Phật giáo Việt Nam với tinh thần 'Hộ quốc an dân' "
            "và phương châm thời kỳ quá độ: 'Đạo pháp - Dân tộc - Chủ nghĩa xã hội'.\n\n"
            "Hiện vật VI là Chuông đồng Nhà thờ đá Phát Diệm, minh chứng cho tinh thần Công giáo Việt Nam: 'Sống Phúc âm giữa lòng dân tộc để phục vụ hạnh phúc của đồng bào'. "
            "Và Hiện vật VII là bức tranh đa tôn giáo tuyệt đẹp với Thiên Nhãn Cao Đài và Thánh đường Hồi giáo Chăm. Việt Nam là quốc gia đa tôn giáo nhưng chung sống hòa bình, "
            "chưa từng xảy ra chiến tranh tôn giáo — một giá trị nhân văn đáng tự hào của văn hiến dân tộc!"
        ),
        (
            "4. THUYẾT MINH SẢNH III & SẢNH IV: CHÍNH SÁCH, PHÁP QUYỀN & BẢO VỆ AN NINH (Thời lượng: 5 phút)",
            "Thao tác 3D: Camera tiến vào Sảnh III dừng tại Hiện vật VIII (Nhà rông), sau đó qua cổng vòm Sảnh IV đến Hiện vật IX (Hiến pháp 2013) và Hiện vật X (Lá chắn thép an ninh).",
            "Đến với Sảnh III, Hiện vật VIII — Nhà rông và Cồng chiêng Tây Nguyên đại diện cho Chính sách dân tộc toàn diện của Đảng và Nhà nước ta: "
            "phát triển kinh tế, nâng cao dân trí, y tế, và đặc biệt là bảo tồn Không gian văn hóa Cồng chiêng — Kiệt tác di sản nhân loại năm 2005.\n\n"
            "Cuối cùng, chúng ta tiến vào Sảnh IV — Thể chế Pháp quyền & Bảo vệ An ninh Tổ quốc. "
            "Hiện vật IX ghi nhận Bản khắc Hiến pháp 2013: Điều 5 khẳng định các dân tộc bình đẳng, đoàn kết, nghiêm cấm mọi hành vi kỳ thị, chia rẽ; "
            "Điều 24 và Luật Tín ngưỡng 2016 bảo đảm mọi người có quyền tự do tín ngưỡng, tôn giáo.\n\n"
            "Và trang trọng tại Hiện vật X là Trận tuyến 'Lá chắn thép' chống âm mưu 'Diễn biến hòa bình'. Giáo trình trang 233 cảnh báo các thế lực thù địch "
            "luôn dùng dân tộc, tôn giáo làm ngòi nổ chia rẽ (như âm mưu lập Nhà nước Đề ga, tà đạo Hà Mòn hay vụ việc khủng bố tại Đắk Lắk ngày 11/6/2023). "
            "Lực lượng Công an, Biên phòng cùng đồng bào các dân tộc chính là lá chắn thép bảo vệ vững chắc biên cương và bình yên bờ cõi Tổ quốc!"
        ),
        (
            "5. LỜI KẾT BÀI & THÔNG ĐIỆP GỬI GẮM (Thời lượng: 2 phút)",
            "Thao tác 3D: Bấm nút 'Toàn cảnh' để camera lùi lại góc nhìn rộng chiêm ngưỡng toàn bộ hành lang triển lãm rực rỡ ánh vàng.",
            "Kính thưa Thầy Cô và các bạn!\n\n"
            "Qua 10 điểm dừng chân trong Bảo tàng 3D, chúng em muốn gửi gắm một thông điệp mạnh mẽ: Đại đoàn kết toàn dân tộc và hòa hợp tôn giáo "
            "không chỉ là bài học lý luận trong giáo trình MLN131, mà là dòng máu cội nguồn, là tài sản vô giá và là trách nhiệm thiêng liêng của thế hệ sinh viên FPT hôm nay. "
            "Chúng em xin chân thành cảm ơn Thầy Cô và các bạn đã lắng nghe. Nhóm chúng em rất mong nhận được những góp ý quý báu từ Thầy Cô!"
        )
    ]

    for title, action, speech in scripts:
        h2 = doc.add_heading(level=2)
        r = h2.add_run(title)
        r.font.name = "Arial"
        r.bold = True
        r.font.size = Pt(12)
        r.font.color.rgb = RGBColor(0x1A, 0x36, 0x5D)

        p_act = doc.add_paragraph()
        p_act.paragraph_format.space_after = Pt(2)
        r_a = p_act.add_run(f"► {action}")
        r_a.italic = True
        r_a.font.size = Pt(9.5)
        r_a.font.color.rgb = RGBColor(0xC8, 0x9B, 0x3C)

        add_callout(doc, speech, title="LỜI THUYẾT MINH TRỰC TIẾP (SPEECH)", border_color="0F2537", bg_color="F7FAFC")

    # ════════════════════════════════════════════════════════════════════
    # PHẦN V: BỘ CÂU HỎI & TRẢ LỜI Q&A DỰ PHÒNG
    # ════════════════════════════════════════════════════════════════════
    h1 = doc.add_heading(level=1)
    r = h1.add_run("PHẦN V: BỘ CÂU HỎI VÀ ĐÁP ÁN Q&A VỚI GIẢNG VIÊN")
    r.font.name = "Arial"
    r.font.size = Pt(16)
    r.bold = True
    r.font.color.rgb = RGBColor(0x0F, 0x25, 0x37)

    qas = [
        (
            "Câu 1: Tại sao nhóm lại lựa chọn hình thức Khung tranh nghệ thuật 3D thay vì dùng model 3D dựng tự động bằng AI?",
            "Thưa Thầy Cô, việc tự sinh mô hình 3D bằng AI hiện nay rất dễ tạo ra các chi tiết giả mạo, sai lệch về mặt lịch sử, văn hóa (ví dụ: hoa văn trống đồng hay trang phục dân tộc có thể bị méo mó, lai căng). Do đó, nhóm kiên quyết sử dụng giải pháp Khung tranh 3D bảo tàng kết hợp ảnh tư liệu lịch sử có thật 100% từ các bảo tàng quốc gia và UNESCO. Điều này đảm bảo tính trung thực, chuẩn xác và giá trị học thuật cao nhất của môn Lý luận chính trị."
        ),
        (
            "Câu 2: Cơ sở nào khẳng định ở Việt Nam các tôn giáo chung sống hòa bình, không có xung đột tôn giáo?",
            "Thưa Thầy Cô, theo Giáo trình trang 223 - 225, lịch sử hàng nghìn năm của Việt Nam chứng minh các tôn giáo du nhập vào đều tiếp biến với tín ngưỡng bản địa và hòa hợp cùng truyền thống yêu nước của nhân dân. Tín đồ các tôn giáo trước hết là người con đất Việt, có chung lợi ích dân tộc. Hiện nay, 43 tổ chức thuộc 16 tôn giáo đều cùng tham gia Mặt trận Tổ quốc Việt Nam, đồng hành phụng sự Tổ quốc theo phương châm tốt đời đẹp đạo."
        ),
        (
            "Câu 3: Bản chất của các vụ việc kích động ly khai dưới chiêu bài tôn giáo ở Tây Nguyên là gì?",
            "Thưa Thầy Cô, theo Giáo trình trang 233 - 236, đây hoàn toàn không phải là vấn đề tôn giáo hay tín ngưỡng thuần túy, mà là âm mưu chính trị nằm trong chiến lược 'diễn biến hòa bình' của các thế lực thù địch lưu vong. Chúng lợi dụng trình độ nhận thức và phong tục tập quán của một bộ phận đồng bào để kích động tư tưởng hẹp hòi, thành lập cái gọi là 'Nhà nước Đề ga'. Đảng và Nhà nước ta phân biệt rõ nhu cầu tôn giáo chính đáng của nhân dân với hành vi lợi dụng tôn giáo phá hoại khối đại đoàn kết để nghiêm trị theo pháp luật."
        )
    ]

    for q, a in qas:
        p_q = doc.add_paragraph()
        p_q.paragraph_format.space_before = Pt(6)
        p_q.paragraph_format.space_after = Pt(2)
        r_q = p_q.add_run(q)
        r_q.bold = True
        r_q.font.name = "Arial"
        r_q.font.size = Pt(11)
        r_q.font.color.rgb = RGBColor(0x8A, 0x1B, 0x24)

        p_a = doc.add_paragraph()
        p_a.paragraph_format.space_after = Pt(6)
        r_a = p_a.add_run(f"Trả lời: {a}")
        r_a.font.name = "Arial"
        r_a.font.size = Pt(10)
        r_a.font.color.rgb = RGBColor(0x2D, 0x37, 0x48)

    output_path = "Thuyet_Minh_Bao_Tang_3D_MLN131.docx"
    doc.save(output_path)
    print(f"Document saved successfully to {output_path}")

if __name__ == "__main__":
    create_document()
