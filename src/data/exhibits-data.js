/**
 * Dữ liệu 10 Hiện vật Triển lãm Bảo tàng 3D
 * Môn học: Chủ nghĩa xã hội khoa học (MLN131)
 * Chủ đề: Chương 6 - Vấn đề Dân tộc và Tôn giáo trong thời kỳ quá độ lên Chủ nghĩa xã hội
 */

export const HALLS_INFO = [
  {
    id: 0,
    name: "Sảnh I: Cội nguồn & Khối Đại đoàn kết 54 Dân tộc",
    shortName: "Đại đoàn kết Dân tộc",
    color: 0xc89b3c,
    description: "Khái niệm dân tộc, cương lĩnh dân tộc của V.I.Lênin và tư tưởng Hồ Chí Minh về khối đại đoàn kết toàn dân tộc.",
    zRange: [-5, 22]
  },
  {
    id: 1,
    name: "Sảnh II: Tín ngưỡng - Tôn giáo & Sự Hòa hợp Dân tộc",
    shortName: "Tôn giáo & Hòa hợp",
    color: 0x4a90e2,
    description: "Bản chất, nguồn gốc tôn giáo và truyền thống đồng hành cùng dân tộc của các tôn giáo tại Việt Nam.",
    zRange: [22, 52]
  },
  {
    id: 2,
    name: "Sảnh III: Văn hóa Tộc người & Chính sách Phát triển KT-XH",
    shortName: "Văn hóa & Chính sách",
    color: 0x27ae60,
    description: "Chính sách phát triển toàn diện kinh tế, văn hóa, xã hội vùng đồng bào dân tộc thiểu số trong thời kỳ quá độ.",
    zRange: [52, 78]
  },
  {
    id: 3,
    name: "Sảnh IV: Thể chế Pháp quyền & Lá chắn Bảo vệ Đoàn kết",
    shortName: "Pháp quyền & An ninh",
    color: 0xe74c3c,
    description: "Chính sách tôn giáo của Nhà nước pháp quyền XHCN và tinh thần cảnh giác chống diễn biến hòa bình.",
    zRange: [78, 108]
  }
];

export const EXHIBITS_DATA = [
  // ── SẢNH I: HIỆN VẬT 1, 2, 3 ──────────────────────────────
  {
    id: 1,
    hallId: 0,
    romanNumeral: "I",
    title: "Trống đồng Đông Sơn & Quả cầu 54 Dân tộc",
    subtitle: "Biểu tượng cội nguồn và sức mạnh trường tồn của cộng đồng 54 dân tộc anh em",
    modelFile: "/models/exhibit_1.glb",
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
      description: "Trống đồng Đông Sơn cổ (Loại I Heger) đúc bằng hợp kim đồng phong hóa ánh xanh patina. Mặt trống chạm khắc hình sao 14 tia, chim Lạc bay ngược chiều kim đồng hồ, cảnh giã gạo, lễ hội. Phía trên trống đồng lơ lửng quả cầu hologram 3D xoay chậm chiếu bản đồ chữ S và 54 hoa văn thổ cẩm đại diện 54 dân tộc.",
      materials: "Đồng cổ phong hóa (Bronze Patina), Đá Granite đen bóng, Holographic Shader",
      lighting: "Spotlight vàng ấm 3000K từ trên cao và dải LED âm sàn hắt sáng viền bục"
    },
    historicalImages: [
      {
        title: "Bảo vật Quốc gia: Trống đồng Đông Sơn",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Dong_Son_drum_-_Vietnam_National_Museum_of_History_-_Hanoi%2C_Vietnam_-_DSC05477.JPG/800px-Dong_Son_drum_-_Vietnam_National_Museum_of_History_-_Hanoi%2C_Vietnam_-_DSC05477.JPG",
        caption: "Hiện vật gốc lưu giữ tại Bảo tàng Lịch sử Quốc gia (Hà Nội), biểu trưng cho đỉnh cao văn minh kim khí Đông Sơn của người Việt cổ.",
        tag: "Bảo tàng Lịch sử Quốc gia"
      },
      {
        title: "Bác Hồ tại Đền Hùng (19/9/1954)",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Ho_Chi_Minh_at_Den_Hung.jpg/640px-Ho_Chi_Minh_at_Den_Hung.jpg",
        caption: "Bác Hồ căn dặn các chiến sĩ Đại đoàn Quân Tiên Phong: 'Các Vua Hùng đã có công dựng nước, Bác cháu ta phải cùng nhau giữ lấy nước'.",
        tag: "Tư liệu Lịch sử Cách mạng"
      }
    ],
    videoData: {
      title: "Trống đồng Đông Sơn - Tiếng vọng từ ngàn xưa",
      channel: "Đài Truyền hình Việt Nam (VTV1)",
      duration: "14 phút 20 giây",
      youtubeId: "bN6N7s5bS9c",
      youtubeUrl: "https://www.youtube.com/watch?v=bN6N7s5bS9c",
      description: "Phóng sự chuyên sâu của Ban Khoa giáo về biểu tượng trống đồng Đông Sơn gắn liền với cội nguồn ý thức quốc gia dân tộc và khối đại đoàn kết muôn đời của người Việt."
    }
  },

  {
    id: 2,
    hallId: 0,
    romanNumeral: "II",
    title: "Cương lĩnh Dân tộc của V.I. Lênin (1913 - 1914)",
    subtitle: "Nền tảng lý luận Mác - Lênin về quyền bình đẳng, tự quyết và liên hiệp giai cấp vô sản",
    modelFile: "/models/exhibit_2.glb",
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
      description: "Bục trưng bày pha lê quang học viền titan, bên trong mở cuốn sách vàng ghi tác phẩm bất hủ của V.I.Lênin. Bên cạnh là tượng bán thân Lênin bằng đồng mạ bóng. Phía trên có 3 dải dải sáng phát sáng lơ lửng khắc 3 nguyên tắc vàng bằng tiếng Việt và tiếng Nga.",
      materials: "Pha lê quang học, Da thuộc bọc vàng, Đồng đỏ tượng Lênin",
      lighting: "Tia spotlight sắc nét chùm hẹp tập trung vào trang sách mở"
    },
    historicalImages: [
      {
        title: "V.I. Lênin tại Đại hội II Quốc tế Cộng sản (1920)",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Lenin_in_1920.jpg/640px-Lenin_in_1920.jpg",
        caption: "Nơi Lênin trình bày Luận cương về vấn đề dân tộc và thuộc địa - văn kiện đã làm Nguyễn Ái Quốc xúc động rơi lệ khi tìm thấy con đường cứu nước.",
        tag: "Tư liệu Lịch sử Quốc tế"
      },
      {
        title: "V.I. Lênin diễn thuyết trước quần chúng công nhân (1919)",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Lenin_clapping.jpg/640px-Lenin_clapping.jpg",
        caption: "Lênin khẳng định giai cấp vô sản toàn thế giới và các dân tộc bị áp bức phải đoàn kết chặt chẽ trong cuộc đấu tranh chống chủ nghĩa đế quốc.",
        tag: "Lưu trữ Quốc tế"
      }
    ],
    videoData: {
      title: "Luận cương Lênin và bước ngoặt cứu nước của Nguyễn Ái Quốc",
      channel: "Truyền hình Quốc phòng Việt Nam (QPVN)",
      duration: "18 phút 45 giây",
      youtubeId: "8qC5mD6vC6U",
      youtubeUrl: "https://www.youtube.com/watch?v=8qC5mD6vC6U",
      description: "Bộ phim tài liệu làm sáng tỏ tác động vĩ đại của Cương lĩnh dân tộc Lênin đối với tư tưởng cứu nước của Chủ tịch Hồ Chí Minh năm 1920 tại Pháp."
    }
  },

  {
    id: 3,
    hallId: 0,
    romanNumeral: "III",
    title: "Tượng Bác Hồ với Đồng bào DTTS & Thư 1946",
    subtitle: "Tư tưởng Hồ Chí Minh: 'Sông có thể cạn, núi có thể mòn, nhưng lòng đoàn kết của chúng ta không bao giờ giảm bớt'",
    modelFile: "/models/exhibit_3.glb",
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
        title: "Bác Hồ và đồng bào các dân tộc tại Chiến khu Việt Bắc",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Ho_Chi_Minh_1950s.jpg/800px-Ho_Chi_Minh_1950s.jpg",
        caption: "Bác Hồ luôn gắn bó máu thịt với đồng bào các dân tộc thiểu số nơi căn cứ địa kháng chiến Việt Bắc trong những năm kháng chiến trường kỳ.",
        tag: "Bảo tàng Hồ Chí Minh"
      },
      {
        title: "Chủ tịch Hồ Chí Minh năm 1946",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Ho_Chi_Minh_1946.jpg/640px-Ho_Chi_Minh_1946.jpg",
        caption: "Thời điểm Người viết bức thư lịch sử gửi Đại hội các dân tộc thiểu số miền Nam khẳng định tình đoàn kết anh em một nhà.",
        tag: "Tư liệu Lịch sử 1946"
      }
    ],
    videoData: {
      title: "Bác Hồ với đồng bào các dân tộc thiểu số",
      channel: "Ban Truyền hình Đối ngoại (VTV4)",
      duration: "21 phút 10 giây",
      youtubeId: "wX5hVj1S8jM",
      youtubeUrl: "https://www.youtube.com/watch?v=wX5hVj1S8jM",
      description: "Thước phim tư liệu quý giá ghi lại những chuyến công tác của Bác lên vùng cao, lắng nghe tâm tư và chỉ đạo phát triển kinh tế cho đồng bào các dân tộc anh em."
    }
  },

  // ── SẢNH II: HIỆN VẬT 4, 5, 6, 7 ──────────────────────────────
  {
    id: 4,
    hallId: 1,
    romanNumeral: "IV",
    title: "Không gian Tín ngưỡng Thờ cúng Hùng Vương",
    subtitle: "Tín ngưỡng bản địa thuần Việt kết nối hàng triệu trái tim 'Uống nước nhớ nguồn'",
    modelFile: "/models/exhibit_4.glb",
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
        title: "Đền Thượng trên đỉnh Nghĩa Lĩnh (Đền Hùng)",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Den_Thuong_Den_Hung.jpg/800px-Den_Thuong_Den_Hung.jpg",
        caption: "Nơi các Vua Hùng lập đàn tế trời đất, cầu cho quốc thái dân an, mưa thuận gió hòa, mùa màng tươi tốt.",
        tag: "Di tích Quốc gia Đặc biệt"
      },
      {
        title: "Đại lễ Giỗ Tổ Hùng Vương (10/3 Âm lịch)",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Le_hoi_Den_Hung.jpg/800px-Le_hoi_Den_Hung.jpg",
        caption: "Hàng triệu đồng bào từ khắp mọi miền Tổ quốc và kiều bào ở nước ngoài hành hương về Đền Hùng dâng hương tưởng nhớ các Vua Hùng.",
        tag: "UNESCO Di sản Nhân loại"
      }
    ],
    videoData: {
      title: "Tín ngưỡng Thờ cúng Hùng Vương - Cội nguồn sức mạnh dân tộc",
      channel: "Truyền hình Nhân Dân",
      duration: "16 phút 30 giây",
      youtubeId: "e1fWzQ0E5Zc",
      youtubeUrl: "https://www.youtube.com/watch?v=e1fWzQ0E5Zc",
      description: "Phim tài liệu chuyên đề phân tích chiều sâu tâm linh và sức mạnh cố kết khối đại đoàn kết toàn dân của tín ngưỡng thờ Tổ trong thời kỳ quá độ."
    }
  },

  {
    id: 5,
    hallId: 1,
    romanNumeral: "V",
    title: "Chùa Một Cột & Tượng Phật hoàng Trần Nhân Tông",
    subtitle: "Phật giáo Việt Nam: Tinh thần 'Hộ quốc an dân' và phương châm 'Đạo pháp - Dân tộc - CNXH'",
    modelFile: "/models/exhibit_5.glb",
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
        title: "Chùa Một Cột (Diên Hựu tự - Hà Nội)",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Chua_Mot_Cot_2013.jpg/800px-Chua_Mot_Cot_2013.jpg",
        caption: "Kiệt tác kiến trúc đóa hoa sen ngàn năm tuổi giữa lòng thủ đô Hà Nội, biểu trưng cho sự an lạc và thịnh vượng của dân tộc.",
        tag: "Kiến trúc Cổ truyền Việt Nam"
      },
      {
        title: "Tượng Phật hoàng Trần Nhân Tông trên đỉnh Yên Tử",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Tuong_Phat_hoang_Tran_Nhan_Tong_Yen_Tu.jpg/800px-Tuong_Phat_hoang_Tran_Nhan_Tong_Yen_Tu.jpg",
        caption: "Tượng đồng nguyên khối tưởng niệm vị vua anh minh hai lần đánh thắng quân Nguyên Mông rồi lên núi tu hành khai sáng Thiền phái Trúc Lâm.",
        tag: "Di tích Yên Tử Quảng Ninh"
      }
    ],
    videoData: {
      title: "Chùa Một Cột - Thông điệp ngàn năm từ quá khứ",
      channel: "Đài Truyền hình Việt Nam (VTV)",
      duration: "25 phút 10 giây",
      youtubeId: "vVjV6LqR3tM",
      youtubeUrl: "https://www.youtube.com/watch?v=vVjV6LqR3tM",
      description: "Phim tài liệu đặc sắc về dòng chảy ngót 2000 năm của Phật giáo tại Việt Nam và những đóng góp to lớn của tăng ni, phật tử cho sự nghiệp bảo vệ và xây dựng đất nước."
    }
  },

  {
    id: 6,
    hallId: 1,
    romanNumeral: "VI",
    title: "Chuông đồng & Thánh giá Nhà thờ Phát Diệm",
    subtitle: "Công giáo Việt Nam: 'Kính Chúa yêu nước' và 'Sống Phúc âm giữa lòng dân tộc'",
    modelFile: "/models/exhibit_6.glb",
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
        title: "Toàn cảnh Quần thể Nhà thờ đá Phát Diệm",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Phat_Diem_Cathedral_2013.jpg/800px-Phat_Diem_Cathedral_2013.jpg",
        caption: "Kiến trúc Gothic phương Tây kết hợp mái ngói cong đình chùa Á Đông do Linh mục Trần Lục xây dựng cuối thế kỷ XIX.",
        tag: "Nghệ thuật Kiến trúc Tôn giáo"
      },
      {
        title: "Phương Đình Phát Diệm với quả chuông đồng 2 tấn",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Phuong_Dinh_Phat_Diem.jpg/800px-Phuong_Dinh_Phat_Diem.jpg",
        caption: "Tháp Phương Đình bằng đá nguyên khối đồ sộ, nơi lưu giữ quả chuông đồng lớn đúc năm 1890.",
        tag: "Di tích Lịch sử Văn hóa"
      }
    ],
    videoData: {
      title: "Nhà thờ đá Phát Diệm - Tuyệt tác giao thoa văn hóa Đông Tây",
      channel: "Đài Truyền hình Việt Nam (VTV)",
      duration: "15 phút 40 giây",
      youtubeId: "mGfT4QyQ9qI",
      youtubeUrl: "https://www.youtube.com/watch?v=mGfT4QyQ9qI",
      description: "Phóng sự khám phá kiến trúc đá độc đáo và chiều sâu tư tưởng giao lưu văn hóa giữa tôn giáo và bản sắc Việt Nam tại quần thể Phát Diệm."
    }
  },

  {
    id: 7,
    hallId: 1,
    romanNumeral: "VII",
    title: "Cụm Đa tôn giáo: Thiên Nhãn Cao Đài & Vòm Hồi giáo Chăm",
    subtitle: "Bức tranh tôn giáo phong phú, hòa hợp, không có xung đột của Tổ quốc Việt Nam",
    modelFile: "/models/exhibit_7.glb",
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
        title: "Tòa thánh Tây Ninh (Đạo Cao Đài)",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Tay_Ninh_Holy_See.jpg/800px-Tay_Ninh_Holy_See.jpg",
        caption: "Công trình tôn giáo độc đáo của tôn giáo nội sinh Cao Đài ra đời tại Nam Bộ năm 1926.",
        tag: "Tôn giáo Nội sinh Nam Bộ"
      },
      {
        title: "Thánh đường Hồi giáo Mubarak (An Giang)",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Mubarak_Mosque_Phu_Tan_An_Giang.jpg/800px-Mubarak_Mosque_Phu_Tan_An_Giang.jpg",
        caption: "Nơi sinh hoạt tín ngưỡng tôn giáo của cộng đồng người Chăm theo Hồi giáo Islam tại vùng sông nước Tây Nam Bộ.",
        tag: "Cộng đồng Chăm Islam"
      }
    ],
    videoData: {
      title: "Việt Nam - Đất nước của tự do tôn giáo và sự hòa hợp",
      channel: "Kênh Truyền hình Đối ngoại (VTV4)",
      duration: "19 phút 25 giây",
      youtubeId: "4Y0q3H8xK7A",
      youtubeUrl: "https://www.youtube.com/watch?v=4Y0q3H8xK7A",
      description: "Chương trình phóng sự đối ngoại phản ánh đời sống tâm linh tự do, phong phú của các tín đồ tôn giáo tại Việt Nam dưới sự bảo hộ của pháp luật."
    }
  },

  // ── SẢNH III: HIỆN VẬT 8 ──────────────────────────────────────
  {
    id: 8,
    hallId: 2,
    romanNumeral: "VIII",
    title: "Mô hình Nhà rông Tây Nguyên & Dàn Cồng chiêng",
    subtitle: "Chính sách phát triển toàn diện KT-XH và bảo tồn Di sản văn hóa phi vật thể nhân loại",
    modelFile: "/models/exhibit_8.glb",
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
      description: "Mô hình Nhà rông Tây Nguyên cao vút hình lưỡi rìu ngửa lên trời với mái cỏ tranh dày và vách nứa đan hoa văn chim muông. Dưới sân nhà rông là bếp lửa buôn làng bập bùng tia lửa hồng và giá treo bộ cồng chiêng 12 chiếc bằng đồng đen chạm hoa văn mắt chim.",
      materials: "Gỗ rừng tự nhiên, Cỏ tranh khô, Đồng đen cồng chiêng, Bếp lửa particle",
      lighting: "Ánh lửa bập bùng ấm áp từ bếp lửa buôn làng rọi sáng chân nhà rông"
    },
    historicalImages: [
      {
        title: "Nhà rông Kon Klor (Kon Tum)",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Nha_rong_Kon_Klor.jpg/800px-Nha_rong_Kon_Klor.jpg",
        caption: "Nhà rông truyền thống lớn nhất Tây Nguyên, nơi hội tụ ý chí cộng đồng và sinh hoạt văn hóa của buôn làng Ba Na.",
        tag: "Kiến trúc Nhà rông Tây Nguyên"
      },
      {
        title: "Không gian Văn hóa Cồng chiêng Tây Nguyên",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Cong_chieng_Tay_Nguyen.jpg/800px-Cong_chieng_Tay_Nguyen.jpg",
        caption: "Nghệ nhân Tây Nguyên trình diễn cồng chiêng - Kiệt tác di sản truyền khẩu và phi vật thể của nhân loại được UNESCO vinh danh năm 2005.",
        tag: "UNESCO Kiệt tác Di sản"
      }
    ],
    videoData: {
      title: "Âm vang Cồng chiêng Tây Nguyên - Giữ lửa hồn thiêng đại ngàn",
      channel: "Đài Truyền hình Việt Nam (VTV1)",
      duration: "28 phút 15 giây",
      youtubeId: "gT8w5H6xJ8M",
      youtubeUrl: "https://www.youtube.com/watch?v=gT8w5H6xJ8M",
      description: "Phim tài liệu nghệ thuật ghi lại nỗ lực truyền dạy cồng chiêng cho thế hệ trẻ và sự đổi thay kỳ diệu trên quê hương các buôn làng Tây Nguyên nhờ chính sách dân tộc đúng đắn của Đảng, Nhà nước."
    }
  },

  // ── SẢNH IV: HIỆN VẬT 9, 10 ──────────────────────────────────
  {
    id: 9,
    hallId: 3,
    romanNumeral: "IX",
    title: "Bản khắc Hiến pháp 2013 & Luật Tín ngưỡng, Tôn giáo",
    subtitle: "Cơ sở pháp lý tối cao bảo đảm quyền tự do tín ngưỡng, tôn giáo và quyền bình đẳng giữa các dân tộc",
    modelFile: "/models/exhibit_9.glb",
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
        title: "Tòa nhà Quốc hội Việt Nam (Hà Nội)",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/National_Assembly_Building_of_Vietnam.jpg/800px-National_Assembly_Building_of_Vietnam.jpg",
        caption: "Trụ sở cơ quan quyền lực nhà nước cao nhất của nước Cộng hòa XHCN Việt Nam tại Quảng trường Ba Đình.",
        tag: "Nhà Quốc hội Việt Nam"
      },
      {
        title: "Hội trường Diên Hồng thông qua Hiến pháp 2013",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Hoi_truong_Dien_Hong.jpg/800px-Hoi_truong_Dien_Hong.jpg",
        caption: "Thời khắc lịch sử các đại biểu Quốc hội biểu quyết thông qua bản Hiến pháp 2013 khẳng định các quyền cơ bản của công dân.",
        tag: "Hiến pháp Việt Nam"
      }
    ],
    videoData: {
      title: "Quyền tự do tín ngưỡng, tôn giáo trong Hiến pháp và pháp luật Việt Nam",
      channel: "Truyền hình Quốc hội Việt Nam",
      duration: "24 phút 00 giây",
      youtubeId: "jW9uVq5pZ8s",
      youtubeUrl: "https://www.youtube.com/watch?v=jW9uVq5pZ8s",
      description: "Tọa đàm chuyên sâu với các chuyên gia luật pháp và đại diện tôn giáo về các bước tiến vượt bậc của Luật Tín ngưỡng, tôn giáo năm 2016 trong việc bảo hộ quyền con người."
    }
  },

  {
    id: 10,
    hallId: 3,
    romanNumeral: "X",
    title: "Trận tuyến 'Lá chắn thép' chống 'Diễn biến hòa bình'",
    subtitle: "Vạch trần âm mưu chia rẽ, bảo vệ vững chắc độc lập chủ quyền và khối đại đoàn kết toàn dân tộc",
    modelFile: "/models/exhibit_10.glb",
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
        title: "Lực lượng Công an Nhân dân giữ vững an ninh trật tự",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Vietnam_People%27s_Public_Security.jpg/640px-Vietnam_People%27s_Public_Security.jpg",
        caption: "Lực lượng Công an Nhân dân Việt Nam luôn là thanh bảo kiếm và lá chắn bảo vệ Đảng, bảo vệ nhân dân và khối đại đoàn kết dân tộc.",
        tag: "Công an Nhân dân Việt Nam"
      },
      {
        title: "Bộ đội Biên phòng sát cánh cùng đồng bào biên cương",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Border_Guard_of_Vietnam.jpg/800px-Border_Guard_of_Vietnam.jpg",
        caption: "Thầy thuốc quân y và chiến sĩ biên phòng khám bệnh, tuyên truyền pháp luật và củng cố thế trận lòng dân tại các thôn bản vùng biên giới.",
        tag: "Thế trận Lòng dân"
      }
    ],
    videoData: {
      title: "Vạch trần âm mưu lợi dụng vấn đề dân tộc, tôn giáo chống phá Nhà nước",
      channel: "Truyền hình Công an Nhân dân (ANTV) & VTV1",
      duration: "32 phút 10 giây",
      youtubeId: "3nC9X0jZ4q0",
      youtubeUrl: "https://www.youtube.com/watch?v=3nC9X0jZ4q0",
      description: "Phóng sự điều tra chuyên sâu bóc trần chân tướng các tổ chức phản động lưu vong và khẳng định sức mạnh đại đoàn kết không thể lay chuyển của nhân dân Việt Nam."
    }
  }
];
