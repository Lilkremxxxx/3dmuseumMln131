/**
 * Dữ liệu chi tiết 10 Hiện vật Triển lãm Bảo tàng 3D
 * Môn học: Chủ nghĩa xã hội khoa học (MLN131)
 * Chủ đề: Chương 6 - Vấn đề Dân tộc và Tôn giáo trong thời kỳ quá độ lên Chủ nghĩa xã hội
 */

export const HALLS_INFO = [
  {
    id: 0,
    name: "Sảnh 1: Cội nguồn & Khối Đại đoàn kết 54 Dân tộc",
    shortName: "Đại đoàn kết Dân tộc",
    color: 0xc89b3c,
    description: "Khái niệm dân tộc, cương lĩnh dân tộc của V.I.Lênin và tư tưởng Hồ Chí Minh về khối đại đoàn kết toàn dân tộc.",
    zRange: [-5, 22]
  },
  {
    id: 1,
    name: "Sảnh 2: Tín ngưỡng - Tôn giáo & Sự Hòa hợp Dân tộc",
    shortName: "Tôn giáo & Hòa hợp",
    color: 0x4a90e2,
    description: "Bản chất, nguồn gốc tôn giáo và truyền thống đồng hành cùng dân tộc của các tôn giáo tại Việt Nam.",
    zRange: [22, 52]
  },
  {
    id: 2,
    name: "Sảnh 3: Văn hóa Tộc người & Chính sách Phát triển KT-XH",
    shortName: "Văn hóa & Chính sách",
    color: 0x27ae60,
    description: "Chính sách phát triển toàn diện kinh tế, văn hóa, xã hội vùng đồng bào dân tộc thiểu số trong thời kỳ quá độ.",
    zRange: [52, 78]
  },
  {
    id: 3,
    name: "Sảnh 4: Thể chế Pháp quyền & Lá chắn Bảo vệ Đoàn kết",
    shortName: "Pháp quyền & An ninh",
    color: 0xe74c3c,
    description: "Chính sách tôn giáo của Nhà nước pháp quyền XHCN và tinh thần cảnh giác chống 'diễn biến hòa bình'.",
    zRange: [78, 108]
  }
];

export const EXHIBITS_DATA = [
  // ── SẢNH 1: HIỆN VẬT 1, 2, 3 ──────────────────────────────
  {
    id: 1,
    hallId: 0,
    title: "Trống đồng Đông Sơn & Quả cầu 54 Dân tộc",
    subtitle: "Biểu tượng cội nguồn và sức mạnh trường tồn của cộng đồng 54 dân tộc anh em",
    icon: "🥁",
    position: { x: 0, y: 1.2, z: 4 },
    cameraWaypoint: { x: 0, y: 1.65, z: 0.8 },
    lookAt: { x: 0, y: 1.3, z: 4 },
    theme: "Cội nguồn Dân tộc & Khối Đại đoàn kết",
    theory: {
      chapterTopic: "1. Vấn đề dân tộc trong thời kỳ quá độ lên chủ nghĩa xã hội",
      content: `Trong giáo trình Chủ nghĩa xã hội khoa học (Chương 6), khái niệm 'dân tộc' được tiếp cận dưới hai góc độ:
1. Dân tộc theo nghĩa rộng (Quốc gia - Dân tộc / Nation): Là cộng đồng người ổn định, có chung lãnh thổ, kinh tế, ngôn ngữ, văn hóa và thể chế chính trị. Việt Nam là một quốc gia dân tộc thống nhất gồm 54 dân tộc anh em.
2. Dân tộc theo nghĩa hẹp (Tộc người / Ethnie): Là cộng đồng người có chung nguồn gốc, tiếng nói, phong tục tập quán và ý thức tự giác tộc người.

Đặc trưng cốt lõi của dân tộc Việt Nam:
• Có truyền thống đoàn kết lâu đời, gắn bó keo sơn chống giặc ngoại xâm và chinh phục thiên nhiên. Truyền thuyết trăm trứng Mẹ Âu Cơ nhắc nhở muôn đời hai tiếng 'Đồng bào'.
• 54 dân tộc có sự chênh lệch về trình độ phát triển kinh tế - xã hội nhưng hoàn toàn bình đẳng, tôn trọng và giúp nhau cùng tiến bộ trong thời kỳ quá độ lên CNXH.`,
      keyTakeaway: "Đoàn kết dân tộc là nguồn sức mạnh nội sinh, là quy luật tồn tại và phát triển của dân tộc Việt Nam."
    },
    design3D: {
      description: "Trống đồng Đông Sơn cổ đúc bằng hợp kim đồng patina ánh xanh xỉn, mặt trống chạm khắc hình sao 14 cánh, chim Lạc bay và cảnh sinh hoạt cộng đồng. Phía trên trống đồng lơ lửng quả cầu hologram 3D xoay chậm chiếu bản đồ chữ S và 54 hoa văn dệt thổ cẩm đại diện 54 dân tộc.",
      materials: "Bronze cổ phong hóa, Granite đen bóng, Holographic cyan/gold shader",
      lighting: "Spotlight vàng ấm 3000K từ trên cao và dải LED âm sàn hắt viền chân bục"
    },
    historicalImages: [
      {
        title: "Bác Hồ tại Đền Hùng (19/9/1954)",
        caption: "Bác Hồ nói chuyện với các chiến sĩ Đại đoàn Quân Tiên Phong: 'Các Vua Hùng đã có công dựng nước, Bác cháu ta phải cùng nhau giữ lấy nước'.",
        type: "history",
        tag: "Tư liệu lịch sử Đền Hùng"
      },
      {
        title: "Bộ ảnh 54 Dân tộc Việt Nam (TTXVN)",
        caption: "Bộ sưu tập sắc phục truyền thống rực rỡ của 54 dân tộc anh em do Thông tấn xã Việt Nam ghi lại qua nhiều thời kỳ.",
        type: "culture",
        tag: "Di sản sắc phục dân tộc"
      }
    ],
    videoData: {
      title: "Trống đồng Đông Sơn - Biểu tượng hồn thiêng sông núi",
      channel: "VTV1 — Đài Truyền hình Việt Nam",
      duration: "14:20",
      description: "Phóng sự chuyên đề của Ban Khoa giáo về biểu tượng trống đồng Đông Sơn gắn liền với cội nguồn ý thức quốc gia dân tộc và sức mạnh cố kết muôn đời của dân tộc Việt Nam.",
      youtubeQuery: "Trong dong Dong Son bieu tuong hon thieng song nui VTV1"
    }
  },

  {
    id: 2,
    hallId: 0,
    title: "Cương lĩnh Dân tộc của V.I. Lênin (1913 - 1914)",
    subtitle: "Nền tảng lý luận Mác - Lênin về quyền bình đẳng, tự quyết và liên hiệp giai cấp vô sản",
    icon: "📜",
    position: { x: -4.5, y: 1.3, z: 12 },
    cameraWaypoint: { x: -4.5, y: 1.65, z: 9.0 },
    lookAt: { x: -4.5, y: 1.4, z: 12 },
    theme: "Cương lĩnh Dân tộc của Chủ nghĩa Mác - Lênin",
    theory: {
      chapterTopic: "Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin",
      content: `Dựa trên quan điểm của C.Mác và Ph.Ăngghen cùng thực tiễn phong trào cách mạng giải phóng dân tộc đầu thế kỷ XX, V.I.Lênin đã khái quát Cương lĩnh dân tộc với 3 nội dung cơ bản:

1. 'Các dân tộc hoàn toàn bình đẳng':
   - Tất cả các dân tộc, không phân biệt lớn hay nhỏ, phát triển hay chưa phát triển, đều có nghĩa vụ và quyền lợi ngang nhau trong mọi lĩnh vực của đời sống xã hội.
   - Không dân tộc nào có đặc quyền, đặc lợi hoặc đi áp bức dân tộc khác.

2. 'Các dân tộc được quyền tự quyết':
   - Quyền tự quyết định vận mệnh chính trị của dân tộc mình, tự lựa chọn chế độ chính trị và con đường phát triển (bao gồm quyền tự do phân lập thành quốc gia độc lập hoặc tự nguyện liên hiệp).
   - Quyền tự quyết không đồng nhất với chủ nghĩa ly khai dân tộc hẹp hòi do các thế lực đế quốc xúi giục.

3. 'Liên hiệp công nhân tất cả các dân tộc lại':
   - Đây là tư tưởng cốt lõi, là sợi chỉ đỏ xuyên suốt, bảo đảm sự gắn bó giữa phong trào giải phóng dân tộc với phong trào cách mạng vô sản quốc tế.`,
      keyTakeaway: "Cương lĩnh dân tộc của Lênin là vũ khí lý luận sắc bén để các dân tộc bị áp bức đứng lên giành độc lập và xây dựng CNXH."
    },
    design3D: {
      description: "Bục trưng bày pha lê quang học viền titan, bên trong mở cuốn sách vàng ghi tác phẩm bất hủ của V.I.Lênin. Bên cạnh là tượng bán thân Lênin bằng đồng mạ bóng. Phía trên có 3 dải sáng lơ lửng khắc 3 nguyên tắc vàng bằng tiếng Việt và tiếng Nga.",
      materials: "Pha lê xuyên sáng, Da thuộc bọc vàng, Đồng đỏ tượng Lênin",
      lighting: "Tia spotlight sắc nét chùm hẹp tập trung vào trang sách mở"
    },
    historicalImages: [
      {
        title: "V.I. Lênin tại Đại hội II Quốc tế Cộng sản (1920)",
        caption: "Nơi Lênin trình bày Luận cương về vấn đề dân tộc và thuộc địa - tài liệu đã làm Nguyễn Ái Quốc xúc động rơi lệ khi tìm thấy con đường cứu nước.",
        type: "history",
        tag: "Ảnh lịch sử quốc tế"
      },
      {
        title: "Bản thảo 'Về quyền dân tộc tự quyết' (1914)",
        caption: "Bản chụp lưu trữ tài liệu trước tác kinh điển của V.I.Lênin về giải quyết mối quan hệ giữa các dân tộc.",
        type: "document",
        tag: "Tư liệu lưu trữ Nga"
      }
    ],
    videoData: {
      title: "Luận cương Lênin và bước ngoặt cứu nước của Bác Hồ",
      channel: "Truyền hình Quốc phòng Việt Nam (QPVN)",
      duration: "18:45",
      description: "Bộ phim tài liệu làm sáng tỏ tác động vĩ đại của Cương lĩnh dân tộc Lênin đối với tư tưởng cứu nước của Chủ tịch Hồ Chí Minh năm 1920 tại Paris.",
      youtubeQuery: "Luan cuong Lenin va buoc ngoat cuu nuoc Ho Chi Minh QPVN"
    }
  },

  {
    id: 3,
    hallId: 0,
    title: "Tượng Bác Hồ với Đồng bào DTTS & Thư 1946",
    subtitle: "Tư tưởng Hồ Chí Minh: 'Sông có thể cạn, núi có thể mòn, nhưng lòng đoàn kết của chúng ta không bao giờ giảm bớt'",
    icon: "⭐",
    position: { x: 4.5, y: 1.4, z: 12 },
    cameraWaypoint: { x: 4.5, y: 1.65, z: 9.0 },
    lookAt: { x: 4.5, y: 1.4, z: 12 },
    theme: "Tư tưởng Hồ Chí Minh về Đại đoàn kết Dân tộc",
    theory: {
      chapterTopic: "Dân tộc và quan hệ dân tộc ở Việt Nam",
      content: `Chủ tịch Hồ Chí Minh luôn khẳng định đồng bào các dân tộc thiểu số là một bộ phận ruột thịt không thể tách rời của dân tộc Việt Nam.

Trong Thư gửi Đại hội các dân tộc thiểu số miền Nam tại Pleiku (ngày 19/4/1946), Người viết:
'Đồng bào Kinh hay Thổ, Mường hay Mán, Gia Rai hay Ê Đê, Xê Đăng hay Ba Na và các dân tộc thiểu số khác, đều là con cháu Việt Nam, đều là anh em ruột thịt. Chúng ta sống chết có nhau, sướng khổ cùng nhau, no đói giúp nhau... Sông có thể cạn, núi có thể mòn, nhưng lòng đoàn kết của chúng ta không bao giờ giảm bớt'.

Chính sách dân tộc của Đảng và Nhà nước trong thời kỳ quá độ:
• Thực hiện nguyên tắc: 'Bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển'.
• Nâng cao đời sống vật chất và tinh thần cho đồng bào, xóa đói giảm nghèo bền vững, giữ gìn và phát huy bản sắc văn hóa tốt đẹp của từng tộc người.`,
      keyTakeaway: "Đại đoàn kết toàn dân tộc vừa là mục tiêu chiến lược, vừa là động lực quyết định thắng lợi của cách mạng Việt Nam."
    },
    design3D: {
      description: "Cụm tượng điêu khắc đồng hun Bác Hồ ân cần trò chuyện và quàng khăn cho các em thiếu nhi và đồng bào DTTS. Phía trước là bục nghiêng 45 độ bọc nhung đỏ đặt bức thư Pleiku năm 1946 với nét chữ đánh máy sắc nét và con dấu son Chủ tịch nước.",
      materials: "Đồng hun cổ, Gỗ gụ khảm hoa văn Tây Bắc, Nhung dạ đỏ",
      lighting: "Ánh sáng tỏa dịu màu mật ong ấm cúng, tôn vinh nét mặt nhân hậu của Bác"
    },
    historicalImages: [
      {
        title: "Bác Hồ và đồng bào Tây Bắc tại Chiến khu Việt Bắc",
        caption: "Bác Hồ hòa mình trong điệu xòe hoa và sinh hoạt cùng đồng bào các dân tộc vùng căn cứ địa kháng chiến.",
        type: "history",
        tag: "Bảo tàng Lịch sử Quốc gia"
      },
      {
        title: "Bản gốc Thư gửi Đại hội các DTTS miền Nam (19/4/1946)",
        caption: "Văn bản thiêng liêng lưu trữ tại Cục Lưu trữ Văn phòng Trung ương Đảng khẳng định tình anh em một nhà.",
        type: "document",
        tag: "Bảo vật lưu trữ quốc gia"
      }
    ],
    videoData: {
      title: "Bác Hồ với đồng bào các dân tộc thiểu số",
      channel: "VTV4 — Ban Truyền hình Đối ngoại",
      duration: "21:10",
      description: "Thước phim tư liệu quý giá ghi lại những chuyến công tác của Bác lên vùng cao, lắng nghe tâm tư và chỉ đạo phát triển kinh tế cho đồng bào các dân tộc anh em.",
      youtubeQuery: "Bac Ho voi dong bao cac dan toc thieu so VTV4"
    }
  },

  // ── SẢNH 2: HIỆN VẬT 4, 5, 6, 7 ──────────────────────────────
  {
    id: 4,
    hallId: 1,
    title: "Không gian Tín ngưỡng Thờ cúng Hùng Vương",
    subtitle: "Tín ngưỡng bản địa thuần Việt kết nối hàng triệu trái tim 'Uống nước nhớ nguồn'",
    icon: "🕯️",
    position: { x: -4.5, y: 1.3, z: 30 },
    cameraWaypoint: { x: -4.5, y: 1.65, z: 26.8 },
    lookAt: { x: -4.5, y: 1.4, z: 30 },
    theme: "Bản chất Tín ngưỡng, Tôn giáo & Văn hóa Dân tộc",
    theory: {
      chapterTopic: "2. Vấn đề tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội",
      content: `Giáo trình Chủ nghĩa xã hội khoa học làm rõ:
• Bản chất tôn giáo: Là một hình thái ý thức xã hội phản ánh hư ảo hiện thực khách quan vào đầu óc con người. Tôn giáo do con người sáng tạo ra, phản ánh ước vọng về cuộc sống tốt đẹp hoặc sự bất lực trước sức mạnh tự nhiên và xã hội.
• Nguồn gốc tôn giáo: Gồm nguồn gốc tự nhiên, kinh tế - xã hội, nhận thức và tâm lý.

Phân biệt 'Tín ngưỡng truyền thống' với 'Tôn giáo' và 'Mê tín dị đoan':
• Tín ngưỡng thờ cúng Hùng Vương và thờ cúng tổ tiên là tín ngưỡng thuần Việt, biểu hiện lòng tri ân sâu sắc cội nguồn, gắn kết gia đình, dòng họ, làng xóm và Tổ quốc.
• Năm 2012, UNESCO chính thức vinh danh 'Tín ngưỡng thờ cúng Hùng Vương ở Phú Thọ' là Di sản văn hóa phi vật thể đại diện của nhân loại.
• Đảng và Nhà nước luôn trân trọng, bảo tồn tín ngưỡng tiến bộ lành mạnh, đồng thời bài trừ mê tín dị đoan, buôn thần bán thánh.`,
      keyTakeaway: "Tín ngưỡng thờ cúng Hùng Vương là sợi chỉ đỏ thiêng liêng cố kết muôn triệu người con đất Việt trong và ngoài nước."
    },
    design3D: {
      description: "Gian thờ cổ truyền 3 gian thu nhỏ với cột gỗ lim sơn son thếp vàng, mái ngói cong. Bàn thờ tam cấp chạm hoa sen đặt đỉnh hương đồng phát khói trầm tỏa hương uốn lượn, đôi hạc ngự lưng rùa đứng chầu hai bên, mâm bồng ngũ quả và bánh chưng bánh giầy.",
      materials: "Gỗ lim thếp vàng, Đồng đỏ đỉnh trầm, Khói trầm particle effect",
      lighting: "Ánh sáng ngọn nến lung linh đỏ ấm (flickering flame light effect) trang nghiêm"
    },
    historicalImages: [
      {
        title: "Đại lễ Giỗ Tổ Hùng Vương ngày mùng 10 tháng 3 âm lịch",
        caption: "Hàng triệu đồng bào từ khắp mọi miền Tổ quốc và kiều bào ở nước ngoài hành hương về Đền Hùng dâng hương tưởng nhớ các Vua Hùng.",
        type: "culture",
        tag: "Lễ hội Đền Hùng Phú Thọ"
      },
      {
        title: "Bằng vinh danh Di sản Nhân loại của UNESCO (2012)",
        caption: "Chứng nhận giá trị độc nhất vô nhị của Tín ngưỡng thờ cúng Hùng Vương trên trường quốc tế.",
        type: "document",
        tag: "UNESCO Heritage"
      }
    ],
    videoData: {
      title: "Hùng Vương - Cội nguồn sức mạnh đại đoàn kết dân tộc",
      channel: "Truyền hình Nhân Dân",
      duration: "16:30",
      description: "Phim tài liệu chuyên đề phân tích sức mạnh tâm linh của ngày Giỗ Tổ Hùng Vương và ý thức tự tôn giống nòi trong thời kỳ quá độ lên chủ nghĩa xã hội.",
      youtubeQuery: "Hung Vuong coi nguon suc manh dai doan ket dan toc Truyen hinh Nhan Dan"
    }
  },

  {
    id: 5,
    hallId: 1,
    title: "Chùa Một Cột & Tượng Phật hoàng Trần Nhân Tông",
    subtitle: "Phật giáo Việt Nam: Tinh thần 'Hộ quốc an dân' và phương châm 'Đạo pháp - Dân tộc - CNXH'",
    icon: "🪷",
    position: { x: 4.5, y: 1.3, z: 30 },
    cameraWaypoint: { x: 4.5, y: 1.65, z: 26.8 },
    lookAt: { x: 4.5, y: 1.4, z: 30 },
    theme: "Phật giáo Đồng hành cùng Dân tộc",
    theory: {
      chapterTopic: "Tôn giáo ở Việt Nam và đặc điểm tôn giáo ở Việt Nam",
      content: `Đặc điểm tôn giáo ở Việt Nam:
1. Việt Nam là quốc gia đa tôn giáo, các tôn giáo chung sống hòa bình, không có xung đột, chiến tranh tôn giáo đẫm máu như nhiều khu vực trên thế giới.
2. Các tôn giáo lớn đều du nhập và gắn bó sâu sắc với tiến trình lịch sử dựng nước và giữ nước.

Phật giáo Việt Nam:
• Thiền phái Trúc Lâm Yên Tử do Phật hoàng Trần Nhân Tông sáng lập thế kỷ XIII là đỉnh cao Phật giáo nhập thế Việt Nam với tư tưởng 'Cư trần lạc đạo' (sống giữa trần thế mà vẫn an lạc theo đạo), 'Hộ quốc an dân'.
• Trong thời kỳ quá độ lên CNXH, Giáo hội Phật giáo Việt Nam kiên định thực hiện phương châm: 'Đạo pháp - Dân tộc - Chủ nghĩa xã hội', tích cực tham gia công tác thiện nguyện, giáo dục, bảo vệ chủ quyền biển đảo.`,
      keyTakeaway: "Phật giáo Việt Nam là tấm gương tiêu biểu cho tinh thần gắn bó máu thịt giữa đạo pháp và sự thịnh suy của đất nước."
    },
    design3D: {
      description: "Mô hình Chùa Một Cột (Liên Hoa Đài) đặt trên cột đá giữa hồ sen nước trong vắt phản chiếu gợn sóng lấp lánh và hoa sen hồng nở. Cạnh bên là pho tượng Phật hoàng Trần Nhân Tông ngồi thiền tĩnh tại bằng đồng phát hào quang ánh vàng kim dịu mát.",
      materials: "Gỗ cổ sơn son, Trụ đá sa thạch, Nước hồ sen phản chiếu Shader",
      lighting: "Ánh sáng tinh khiết chiếu từ trên cao và phản quang lấp lánh từ mặt hồ sen"
    },
    historicalImages: [
      {
        title: "Bức họa cổ 'Trúc Lâm Đại sĩ xuất sơn đồ' (TK XIV)",
        caption: "Bức họa quốc bảo miêu tả Thượng hoàng Trần Nhân Tông sau khi đắc đạo trên non thiêng Yên Tử trở về thăm vua con và nhân dân.",
        type: "history",
        tag: "Bảo vật quốc gia"
      },
      {
        title: "Đại hội Đại biểu Phật giáo Toàn quốc Việt Nam",
        caption: "Quang cảnh trang nghiêm của các kỳ Đại hội Phật giáo với khẩu hiệu 'Đạo pháp - Dân tộc - Chủ nghĩa xã hội'.",
        type: "culture",
        tag: "Giáo hội Phật giáo Việt Nam"
      }
    ],
    videoData: {
      title: "Phật giáo Việt Nam đồng hành cùng dân tộc",
      channel: "VTV1 — Đài Truyền hình Việt Nam",
      duration: "25:10",
      description: "Phim tài liệu đặc sắc về dòng chảy ngót 2000 năm của Phật giáo tại Việt Nam và những đóng góp to lớn của tăng ni, phật tử cho sự nghiệp xây dựng đất nước.",
      youtubeQuery: "Phat giao Viet Nam dong hanh cung dan toc VTV1"
    }
  },

  {
    id: 6,
    hallId: 1,
    title: "Chuông đồng & Thánh giá Nhà thờ Phát Diệm",
    subtitle: "Công giáo Việt Nam: 'Kính Chúa yêu nước' và 'Sống Phúc âm giữa lòng dân tộc'",
    icon: "🔔",
    position: { x: -4.5, y: 1.3, z: 44 },
    cameraWaypoint: { x: -4.5, y: 1.65, z: 40.8 },
    lookAt: { x: -4.5, y: 1.4, z: 44 },
    theme: "Công giáo Đồng hành cùng Dân tộc",
    theory: {
      chapterTopic: "Chính sách tôn giáo của Đảng và Nhà nước Việt Nam",
      content: `Đường hướng mục vụ của người Công giáo Việt Nam:
• Thư chung năm 1980 của Hội đồng Giám mục Việt Nam xác định đường hướng: 'Sống Phúc âm giữa lòng dân tộc để phục vụ hạnh phúc của đồng bào'.
• Huấn từ của Giáo hoàng Biển Đức XVI và Giáo hoàng Phanxicô gửi người Công giáo Việt Nam luôn nhấn mạnh: 'Người Công giáo tốt cũng là người công dân tốt'.

Giá trị biểu trưng của Nhà thờ đá Phát Diệm (Ninh Bình):
• Do Linh mục Phêrô Trần Lục (Cụ Sáu) chủ trì xây dựng từ năm 1875 - 1898.
• Là tuyệt tác kiến trúc độc nhất vô nhị trên thế giới kết hợp hài hòa giữa kiến trúc thánh đường Công giáo phương Tây với kiến trúc đình chùa mái cong truyền thống phương Đông.
• Thể hiện sự tôn trọng và hội nhập sâu sắc giữa văn hóa dân tộc bản địa và tôn giáo du nhập.`,
      keyTakeaway: "Đồng bào Công giáo là bộ phận không thể tách rời của khối đại đoàn kết toàn dân tộc, cùng chung tay dựng xây quê hương giàu đẹp."
    },
    design3D: {
      description: "Tháp Phương Đình nhà thờ đá Phát Diệm thu nhỏ với các đầu đao mái cong chạm rồng phượng, giữa vòm đá treo quả chuông đồng nặng 2 tấn chạm văn tự Nôm và Latinh. Trước tháp là Thánh giá gỗ mun nạm xà cừ hoa sen đặt trên bệ đá cẩm thạch trắng.",
      materials: "Đá xanh Ninh Bình chạm khắc, Chuông đồng cổ, Gỗ mun khảm xà cừ",
      lighting: "Ánh sáng tự nhiên chiếu rọi qua vòm đá tạo hiệu ứng bóng đổ thanh tịnh"
    },
    historicalImages: [
      {
        title: "Bác Hồ tiếp đón các chức sắc và linh mục yêu nước (1946)",
        caption: "Chủ tịch Hồ Chí Minh gặp gỡ Giám mục Lê Hữu Từ và các linh mục bày tỏ lòng yêu nước và tinh thần kháng chiến kiến quốc.",
        type: "history",
        tag: "Bảo tàng Hồ Chí Minh"
      },
      {
        title: "Đại lễ Giáng sinh an lành tại các giáo phận Việt Nam",
        caption: "Hình ảnh bà con giáo dân và nhân dân khắp mọi miền cùng chia sẻ niềm vui Giáng sinh trong hòa bình, hạnh phúc.",
        type: "culture",
        tag: "Đời sống tôn giáo"
      }
    ],
    videoData: {
      title: "Nhà thờ đá Phát Diệm - Tuyệt tác giao thoa văn hóa Đông - Tây",
      channel: "VTV Travels / Ban Khoa giáo VTV",
      duration: "15:40",
      description: "Phóng sự khám phá kiến trúc đá độc đáo và chiều sâu tư tưởng giao lưu văn hóa giữa tôn giáo và bản sắc Việt Nam tại quần thể Phát Diệm.",
      youtubeQuery: "Nha tho da Phat Diem giao thoa van hoa Dong Tay VTV"
    }
  },

  {
    id: 7,
    hallId: 1,
    title: "Cụm Đa tôn giáo: Thiên Nhãn Cao Đài & Vòm Hồi giáo Chăm",
    subtitle: "Bức tranh tôn giáo phong phú, hòa hợp, không có xung đột của Tổ quốc Việt Nam",
    icon: "🕊️",
    position: { x: 4.5, y: 1.3, z: 44 },
    cameraWaypoint: { x: 4.5, y: 1.65, z: 40.8 },
    lookAt: { x: 4.5, y: 1.4, z: 44 },
    theme: "Bức tranh Đa tôn giáo Hòa hợp ở Việt Nam",
    theory: {
      chapterTopic: "Sự phong phú và chung sống hòa bình của các tôn giáo ở Việt Nam",
      content: `Việt Nam có 43 tổ chức thuộc 16 tôn giáo đã được Nhà nước công nhận tư cách pháp nhân (gồm Phật giáo, Công giáo, Tin Lành, Hồi giáo, Cao Đài, Phật giáo Hòa Hảo, Baha'i, Minh Lý đạo...):

1. Đạo Cao Đài (Đại Đạo Tam Kỳ Phổ Độ):
   - Là tôn giáo nội sinh xuất hiện tại Nam Bộ năm 1926, dung hợp giáo lý của Phật giáo, Đạo giáo, Nho giáo và Kito giáo. Biểu tượng cốt lõi là 'Thiên Nhãn' (Mắt Trời) tượng trưng cho sự công bằng, bác ái và giác ngộ.

2. Hồi giáo của cộng đồng người Chăm (Islam & Chăm Bàni):
   - Đậm đà bản sắc phương Nam, bảo lưu phong tục truyền thống tốt đẹp, gắn kết buôn làng và hướng thiện.

Đặc tính hòa hợp tôn giáo:
• Ở Việt Nam, các thành viên trong cùng một gia đình có thể theo các tôn giáo khác nhau hoặc người theo tôn giáo, người không theo tôn giáo mà vẫn hòa thuận, hạnh phúc.`,
      keyTakeaway: "Sự tôn trọng, đan xen và hòa hợp tôn giáo là nét đẹp văn hóa độc đáo hiếm có của dân tộc Việt Nam."
    },
    design3D: {
      description: "Cụm mô hình đặt trên bục xoay tròn 360 độ: Bên trái là biểu tượng Quả Càn Khôn với Thiên Nhãn rực sáng và cột rồng đắp nổi của Tòa thánh Tây Ninh; bên phải là Mái vòm xanh ngọc bích chạm biểu tượng vầng trăng lưỡi liềm và vì sao của Thánh đường Hồi giáo Mubarak An Giang.",
      materials: "Sơn mài mỹ nghệ, Thủy tinh màu ngọc bích, Vàng dát thủ công",
      lighting: "Dải đèn LED RGB đổi màu pastel êm dịu, tôn vinh vẻ đẹp hài hòa đa sắc"
    },
    historicalImages: [
      {
        title: "Lãnh đạo Mặt trận Tổ quốc gặp mặt chức sắc các tôn giáo",
        caption: "Hình ảnh đại diện Phật giáo, Công giáo, Tin Lành, Hồi giáo, Cao Đài, Hòa Hảo cùng tề tựu trong khối đại đoàn kết toàn dân tộc.",
        type: "history",
        tag: "Mặt trận Tổ quốc Việt Nam"
      },
      {
        title: "Lễ hội văn hóa của đồng bào Chăm Hồi giáo An Giang",
        caption: "Không khí rộn ràng ngày hội Roya Phrok của cộng đồng người Chăm tại vùng sông nước An Giang.",
        type: "culture",
        tag: "Đồng bào Chăm Islam"
      }
    ],
    videoData: {
      title: "Việt Nam - Đất nước của tự do tôn giáo và sự hòa hợp",
      channel: "Kênh Truyền hình Đối ngoại VTV4",
      duration: "19:25",
      description: "Chương trình phóng sự đối ngoại phản ánh đời sống tâm linh tự do, phong phú của các tín đồ tôn giáo tại Việt Nam dưới sự bảo hộ của pháp luật.",
      youtubeQuery: "Viet Nam dat nuoc cua tu do ton giao va su hoa hop VTV4"
    }
  },

  // ── SẢNH 3: HIỆN VẬT 8 ──────────────────────────────────────
  {
    id: 8,
    hallId: 2,
    title: "Mô hình Nhà rông Tây Nguyên & Dàn Cồng chiêng",
    subtitle: "Chính sách phát triển toàn diện KT-XH và bảo tồn Di sản văn hóa phi vật thể nhân loại",
    icon: "🪵",
    position: { x: 0, y: 1.5, z: 65 },
    cameraWaypoint: { x: 0, y: 1.65, z: 61.5 },
    lookAt: { x: 0, y: 1.5, z: 65 },
    theme: "Chính sách Dân tộc & Bản sắc Văn hóa",
    theory: {
      chapterTopic: "3. Chính sách dân tộc và tôn giáo của Đảng, Nhà nước Việt Nam",
      content: `Chính sách dân tộc của Đảng và Nhà nước trong thời kỳ quá độ:
• Chính trị: Thực hiện bình đẳng thực sự giữa các dân tộc, nâng cao tỷ lệ đại biểu người dân tộc thiểu số trong các cơ quan quyền lực nhà nước từ Trung ương đến địa phương.
• Kinh tế: Triển khai các Chương trình mục tiêu quốc gia (Chương trình 135, Chương trình giảm nghèo bền vững, Nông thôn mới vùng DTTS), xây dựng hạ tầng giao thông, điện lưới, viễn thông.
• Văn hóa - Xã hội: Xóa mù chữ, nâng cao dân trí, bảo tồn ngôn ngữ, chữ viết và lễ hội truyền thống; củng cố mạng lưới y tế thôn bản.

Không gian văn hóa Cồng chiêng Tây Nguyên:
• Được UNESCO công nhận là Kiệt tác di sản truyền khẩu và phi vật thể của nhân loại năm 2005.
• Cồng chiêng gắn liền với vòng đời con người và lễ hội buôn làng, là linh hồn của đồng bào các dân tộc Gia Rai, Ba Na, Ê Đê, M'Nông, Xê Đăng.`,
      keyTakeaway: "Giữ gìn bản sắc văn hóa các dân tộc thiểu số là giữ gìn cội nguồn sức mạnh và tính đa dạng phong phú của nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc."
    },
    design3D: {
      description: "Mô hình Nhà rông Tây Nguyên cao vút hình lưỡi rìu ngửa lên trời với mái cỏ tranh dày và vách nứa đan hoa văn chim muông. Dưới sân nhà rông là bếp lửa bập bùng tia lửa hồng và giá treo bộ cồng chiêng 12 chiếc bằng đồng đen chạm hoa văn mắt chim.",
      materials: "Gỗ rừng tự nhiên, Cỏ tranh khô, Đồng đen cồng chiêng, Bếp lửa particle",
      lighting: "Ánh lửa bập bùng ấm áp từ bếp lửa buôn làng rọi sáng chân nhà rông"
    },
    historicalImages: [
      {
        title: "Đêm hội Di sản Cồng chiêng bên ánh lửa bập bùng",
        caption: "Các nghệ nhân Tây Nguyên say sưa tấu lên giai điệu đại ngàn trong ngày hội văn hóa các dân tộc Việt Nam.",
        type: "culture",
        tag: "UNESCO Masterpiece"
      },
      {
        title: "Điện lưới và trường học kiên cố về buôn làng vùng sâu",
        caption: "Thành quả cụ thể từ chính sách chăm lo phát triển kinh tế - xã hội của Đảng và Nhà nước đối với đồng bào dân tộc thiểu số.",
        type: "development",
        tag: "Đổi mới nông thôn"
      }
    ],
    videoData: {
      title: "Âm vang Cồng chiêng Tây Nguyên - Giữ lửa hồn thiêng đại ngàn",
      channel: "VTV1 — Ban Chuyên đề Đài Truyền hình Việt Nam",
      duration: "28:15",
      description: "Phim tài liệu nghệ thuật ghi lại nỗ lực truyền dạy cồng chiêng cho thế hệ trẻ và sự đổi thay kỳ diệu trên quê hương các buôn làng Tây Nguyên.",
      youtubeQuery: "Am vang Cong chieng Tay Nguyen giu lua hon thieng VTV1"
    }
  },

  // ── SẢNH 4: HIỆN VẬT 9, 10 ──────────────────────────────────
  {
    id: 9,
    hallId: 3,
    title: "Bản khắc Hiến pháp 2013 & Luật Tín ngưỡng, Tôn giáo",
    subtitle: "Cơ sở pháp lý tối cao bảo đảm quyền tự do tín ngưỡng, tôn giáo và quyền bình đẳng giữa các dân tộc",
    icon: "⚖️",
    position: { x: -4.5, y: 1.4, z: 92 },
    cameraWaypoint: { x: -4.5, y: 1.65, z: 88.8 },
    lookAt: { x: -4.5, y: 1.4, z: 92 },
    theme: "Thể chế Pháp quyền XHCN về Dân tộc & Tôn giáo",
    theory: {
      chapterTopic: "Pháp chế hóa chính sách dân tộc, tôn giáo của Đảng và Nhà nước",
      content: `Nguyên tắc giải quyết vấn đề dân tộc, tôn giáo được thể chế hóa trong Hiến pháp và pháp luật:

Điều 5 Hiến pháp nước CHXHCN Việt Nam (2013):
1. Nước Cộng hòa xã hội chủ nghĩa Việt Nam là quốc gia thống nhất của các dân tộc cùng sinh sống trên đất nước Việt Nam.
2. Các dân tộc bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển; nghiêm cấm mọi hành vi kỳ thị, chia rẽ dân tộc.
3. Ngôn ngữ quốc gia là tiếng Việt. Các dân tộc có quyền dùng tiếng nói, chữ viết, giữ gìn bản sắc dân tộc, phát huy phong tục, tập quán, truyền thống và văn hóa tốt đẹp của mình.

Điều 24 Hiến pháp 2013 & Luật Tín ngưỡng, tôn giáo (2016):
1. Mọi người có quyền tự do tín ngưỡng, tôn giáo, theo hoặc không theo một tôn giáo nào. Các tôn giáo bình đẳng trước pháp luật.
2. Nhà nước tôn trọng và bảo hộ quyền tự do tín ngưỡng, tôn giáo. Không ai được xâm phạm tự do tín ngưỡng, tôn giáo hoặc lợi dụng tín ngưỡng, tôn giáo để vi phạm pháp luật.`,
      keyTakeaway: "Pháp luật Việt Nam hoàn toàn tương thích với các công ước quốc tế về quyền con người và quyền tự do tín ngưỡng, tôn giáo."
    },
    design3D: {
      description: "Bục đá cẩm thạch trắng nguyên khối tạc hình Quốc huy mạ vàng trang nghiêm. Trên bục đặt hai cuốn sách luật khổ lớn mạ bìa đỏ chữ vàng: 'Hiến pháp năm 2013' và 'Luật Tín ngưỡng, tôn giáo 2016'. Phía trên lơ lửng bảng holographic hiển thị toàn văn các điều luật cốt lõi. Phía sau là lá cờ Tổ quốc vải lụa tung bay.",
      materials: "Đá cẩm thạch Carrara, Mạ vàng 24K Quốc huy, Vải lụa cờ đỏ sao vàng",
      lighting: "Spotlight trắng thanh lịch chiếu hội tụ vào hai cuốn luật pháp"
    },
    historicalImages: [
      {
        title: "Quốc hội khóa XIII thông qua Hiến pháp 2013",
        caption: "Thời khắc lịch sử tại Hội trường Diên Hồng, Nhà Quốc hội khi 100% đại biểu biểu quyết thông qua bản Hiến pháp của thời kỳ đẩy mạnh công nghiệp hóa, hiện đại hóa.",
        type: "history",
        tag: "Nhà Quốc hội Việt Nam"
      },
      {
        title: "Bìa Sách Trắng 'Tôn giáo và chính sách tôn giáo ở Việt Nam'",
        caption: "Ấn phẩm đối ngoại do Ban Tôn giáo Chính phủ công bố minh bạch các dữ liệu và chính sách tôn giáo với cộng đồng quốc tế.",
        type: "document",
        tag: "Sách Trắng Tôn giáo"
      }
    ],
    videoData: {
      title: "Quyền tự do tín ngưỡng, tôn giáo trong Hiến pháp và pháp luật Việt Nam",
      channel: "Truyền hình Quốc hội Việt Nam",
      duration: "24:00",
      description: "Tọa đàm chuyên sâu với các chuyên gia luật pháp và đại diện tôn giáo về các bước tiến vượt bậc của Luật Tín ngưỡng, tôn giáo năm 2016 trong việc bảo hộ quyền con người.",
      youtubeQuery: "Quyen tu do tin nguong ton giao trong Hien phap va phap luat Truyen hinh Quoc hoi"
    }
  },

  {
    id: 10,
    hallId: 3,
    title: "Trận tuyến 'Lá chắn thép' chống 'Diễn biến hòa bình'",
    subtitle: "Vạch trần âm mưu chia rẽ, bảo vệ vững chắc độc lập chủ quyền và khối đại đoàn kết toàn dân tộc",
    icon: "🛡️",
    position: { x: 4.5, y: 1.4, z: 92 },
    cameraWaypoint: { x: 4.5, y: 1.65, z: 88.8 },
    lookAt: { x: 4.5, y: 1.4, z: 92 },
    theme: "Đấu tranh chống Lợi dụng Dân tộc & Tôn giáo",
    theory: {
      chapterTopic: "Đấu tranh phòng, chống các thế lực thù địch lợi dụng vấn đề dân tộc, tôn giáo",
      content: `Nội dung cốt lõi của Chương 6 về cảnh giác cách mạng:
• Chiến lược 'Diễn biến hòa bình' của các thế lực thù địch: Luôn triệt để lợi dụng những khó khăn kinh tế, sơ hở trong quản lý hoặc sự khác biệt tộc người, tôn giáo để kích động ly khai, bạo loạn, phá hoại khối đại đoàn kết dân tộc.
• Điển hình:
  - Chiêu bài thành lập 'Nhà nước Đề ga độc lập' ở Tây Nguyên, tổ chức phản động FULRO, 'Tin lành Đề ga'.
  - Chiêu bài lập 'Vương quốc Mông' ở Tây Bắc.
  - Tà đạo 'Hà Mòn', 'Hội thánh Đức Chúa Trời Mẹ' truyền bá mê tín, phá hoại nếp sống thuần phong mỹ tục.
  - Vụ khủng bố nghiêm trọng nhằm vào trụ sở chính quyền tại Đắk Lắk ngày 11/6/2023.

Quan điểm và giải pháp kiên quyết của Đảng ta:
1. Phân biệt rõ ràng giữa nhu cầu tín ngưỡng, tôn giáo chính đáng của quần chúng với mưu đồ chính trị phản động lợi dụng tôn giáo.
2. Xử lý nghiêm minh theo pháp luật các đối tượng cầm đầu, bạo loạn, khủng bố; đồng thời khoan hồng, giáo dục, cảm hóa những người bị lừa phỉnh lôi kéo.
3. Chăm lo nâng cao đời sống bà con, củng cố 'thế trận lòng dân' vững chắc làm thất bại mọi âm mưu chống phá.`,
      keyTakeaway: "Giữ vững độc lập, chủ quyền và khối đại đoàn kết toàn dân tộc là mệnh lệnh thiêng liêng của toàn Đảng, toàn quân và toàn dân ta."
    },
    design3D: {
      description: "Mô hình biểu tượng 'Lá chắn thép bảo vệ bình yên Tổ quốc' bằng hợp kim titan xước mờ. Trên mặt khiên chạm nổi bản đồ đất nước Việt Nam liền một dải gồm cả hai quần đảo Hoàng Sa và Trường Sa. Cạnh khiên là màn hình tương tác vạch trần các tài liệu phản động bị bóc gỡ và hình ảnh bà con buôn làng sát cánh cùng công an biên phòng giữ yên bờ cõi.",
      materials: "Hợp kim titan chải mờ, Thép tôi luyện, Ánh sáng laser an ninh xanh - đỏ",
      lighting: "Ánh sáng uy nghiêm mạnh mẽ với các dải quét radar laser phòng hộ"
    },
    historicalImages: [
      {
        title: "Già làng, trưởng bản vận động bà con từ bỏ tà đạo",
        caption: "Hình ảnh xúc động khi các già làng Tây Nguyên dùng uy tín và tiếng nói chính nghĩa để giải thích, vạch mặt kẻ xấu, đưa bà con trở lại cuộc sống bình yên.",
        type: "history",
        tag: "Bình yên buôn làng"
      },
      {
        title: "Phiên tòa xét xử các đối tượng khủng bố tại Đắk Lắk",
        caption: "Bản án nghiêm minh của Tòa án nhân dân tỉnh Đắk Lắk trừng trị thích đáng nhóm khủng bố ngày 11/6/2023, thể hiện sự thượng tôn pháp luật.",
        type: "security",
        tag: "Công lý và Pháp luật"
      }
    ],
    videoData: {
      title: "Vạch trần âm mưu lợi dụng vấn đề dân tộc, tôn giáo chống phá Nhà nước",
      channel: "Kênh Truyền hình Công an Nhân dân (ANTV) / VTV1",
      duration: "32:10",
      description: "Phóng sự điều tra chuyên sâu bóc trần chân tướng các tổ chức phản động lưu vong và khẳng định sức mạnh đại đoàn kết không thể lay chuyển của nhân dân Việt Nam.",
      youtubeQuery: "Vach tran am muu loi dung dan toc ton giao ANTV VTV1"
    }
  }
];
