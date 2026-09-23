/**
 * Dữ liệu 10 Hiện vật Triển lãm Bảo tàng 3D
 * Chuyên đề: Vấn đề Dân tộc và Tôn giáo trong Thời kỳ Quá độ lên Chủ nghĩa Xã hội
 * Nguồn tư liệu chuẩn: Giáo trình Chủ nghĩa Xã hội Khoa học (Chương 6, trang 195 - 238)
 */

export const HALLS_INFO = [
  {
    id: 0,
    name: "Sảnh I: Cội nguồn & Khối Đại đoàn kết 54 Dân tộc",
    shortName: "Đại đoàn kết Dân tộc",
    color: 0xc89b3c,
    description: "Khái niệm dân tộc, hai xu hướng phát triển quan hệ dân tộc, Cương lĩnh dân tộc của V.I. Lênin và truyền thống đại đoàn kết dân tộc Việt Nam.",
    zRange: [-5, 22]
  },
  {
    id: 1,
    name: "Sảnh II: Tín ngưỡng - Tôn giáo & Sự Hòa hợp Dân tộc",
    shortName: "Tôn giáo & Hòa hợp",
    color: 0x4a90e2,
    description: "Bản chất, nguồn gốc, tính chất của tôn giáo; các nguyên tắc giải quyết vấn đề tôn giáo và bức tranh đa tôn giáo chung sống hòa bình tại Việt Nam.",
    zRange: [22, 52]
  },
  {
    id: 2,
    name: "Sảnh III: Văn hóa Tộc người & Chính sách Phát triển Toàn diện",
    shortName: "Văn hóa & Chính sách",
    color: 0x27ae60,
    description: "Chính sách dân tộc của Đảng và Nhà nước: bình đẳng, đoàn kết, tương trợ trên các lĩnh vực chính trị, kinh tế, văn hóa, xã hội, quốc phòng - an ninh.",
    zRange: [52, 78]
  },
  {
    id: 3,
    name: "Sảnh IV: Thể chế Pháp quyền & Bảo vệ An ninh Tổ quốc",
    shortName: "Pháp quyền & An ninh",
    color: 0xe74c3c,
    description: "Pháp chế hóa quyền tự do tín ngưỡng, bình đẳng dân tộc trong Hiến pháp và tinh thần cảnh giác cách mạng, bảo vệ vững chắc khối đại đoàn kết.",
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
    subtitle: "Cội nguồn lịch sử và sức mạnh trường tồn của cộng đồng 54 dân tộc anh em",
    modelFile: "/models/exhibit_1.glb",
    position: { x: 0, y: 1.2, z: 4 },
    cameraWaypoint: { x: 0, y: 1.65, z: -0.2 },
    lookAt: { x: 0, y: 1.15, z: 4 },
    theme: "Khái niệm Dân tộc & Đặc trưng Dân tộc Việt Nam",
    theory: {
      chapterTopic: "Khái niệm, đặc trưng cơ bản của dân tộc và đặc điểm dân tộc Việt Nam (Giáo trình, trang 196 - 210)",
      content: `Theo quan điểm của chủ nghĩa Mác - Lênin, dân tộc là quá trình phát triển lâu dài của xã hội loài người, trải qua các hình thức cộng đồng từ thấp đến cao: thị tộc, bộ lạc, bộ tộc, dân tộc. Dân tộc được tiếp cận theo hai nghĩa:

1. Dân tộc theo nghĩa rộng (Quốc gia - Dân tộc / Nation):
Là cộng đồng người ổn định làm thành nhân dân một nước, có lãnh thổ riêng, nền kinh tế thống nhất, có ngôn ngữ chung và có ý thức về sự thống nhất của mình, gắn bó với nhau bởi quyền lợi chính trị, kinh tế, truyền thống văn hóa và truyền thống đấu tranh chung suốt quá trình dựng nước và giữ nước.

2. Dân tộc theo nghĩa hẹp (Tộc người / Ethnie):
Là cộng đồng người được hình thành trong lịch sử, có mối liên hệ chặt chẽ và bền vững, có chung ý thức tự giác tộc người, ngôn ngữ và văn hóa.

Đặc điểm nổi bật của dân tộc Việt Nam:
• Có sự chênh lệch về số dân giữa các tộc người; các dân tộc cư trú xen kẽ nhau; các dân tộc thiểu số phân bố chủ yếu ở địa bàn có vị trí chiến lược quan trọng.
• Các dân tộc có trình độ phát triển kinh tế - xã hội không đều nhau nhưng luôn có truyền thống đoàn kết, gắn bó keo sơn từ cội nguồn lịch sử, cùng chung một bọc trăm trứng Mẹ Âu Cơ.`,
      keyTakeaway: "Đoàn kết dân tộc là truyền thống quý báu, là quy luật sinh tồn và động lực quyết định đưa dân tộc Việt Nam vượt qua mọi biến cố lịch sử."
    },
    design3D: {
      description: "Trống đồng Đông Sơn cổ (Loại I Heger) đúc bằng hợp kim đồng phong hóa ánh xanh patina. Mặt trống chạm khắc hình sao 14 tia, chim Lạc bay ngược chiều kim đồng hồ, cảnh giã gạo, chèo thuyền. Phía trên trống đồng lơ lửng quả cầu hologram 3D xoay chậm chiếu bản đồ chữ S và 54 hoa văn thổ cẩm đại diện 54 dân tộc.",
      materials: "Đồng cổ phong hóa (Bronze Patina), Đá Granite đen bóng, Holographic Shader",
      lighting: "Spotlight vàng ấm 3000K từ trên cao và dải LED âm sàn hắt sáng viền bục",
      conceptImageUrl: "/images/thiet-ke-3d-trong-dong.png"
    },
    historicalImages: [
      {
        title: "Bảo vật Quốc gia: Trống đồng Đông Sơn",
        imageUrl: "/images/exhibits/exhibit_1_1.jpg",
        caption: "Hiện vật gốc lưu giữ tại Bảo tàng Lịch sử Quốc gia (Hà Nội), biểu trưng cho đỉnh cao văn minh kim khí Đông Sơn của người Việt cổ.",
        tag: "Bảo tàng Lịch sử Quốc gia"
      },
      {
        title: "Bác Hồ tại Đền Hùng (19/9/1954)",
        imageUrl: "/images/exhibits/exhibit_1_2.jpg",
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
    subtitle: "Ba nguyên tắc vàng giải quyết vấn đề dân tộc của chủ nghĩa Mác - Lênin",
    modelFile: "/models/exhibit_2.glb",
    position: { x: -4.5, y: 1.3, z: 12 },
    cameraWaypoint: { x: -4.5, y: 1.65, z: 7.8 },
    lookAt: { x: -4.5, y: 1.15, z: 12 },
    theme: "Cương lĩnh Dân tộc của Chủ nghĩa Mác - Lênin",
    theory: {
      chapterTopic: "Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin (Giáo trình, trang 203 - 207)",
      content: `Dựa trên quan điểm của C.Mác và Ph.Ăngghen về mối quan hệ giữa dân tộc với giai cấp, kết hợp phân tích hai xu hướng khách quan trong sự phát triển quan hệ dân tộc, V.I. Lênin đã khái quát Cương lĩnh dân tộc gồm 3 nội dung cốt tử:

1. 'Các dân tộc hoàn toàn bình đẳng':
• Đây là quyền thiêng liêng của các dân tộc, không phân biệt dân tộc lớn hay nhỏ, trình độ phát triển cao hay thấp.
• Các dân tộc đều có nghĩa vụ và quyền lợi ngang nhau trên mọi lĩnh vực của đời sống xã hội; không dân tộc nào có đặc quyền, đặc lợi hoặc đi áp bức, bóc lột dân tộc khác.
• Trong một quốc gia nhiều dân tộc, quyền bình đẳng phải được thể chế hóa bằng hiến pháp và pháp luật, đồng thời phải thực hiện trên thực tế bằng việc giúp đỡ các dân tộc phát triển kinh tế, văn hóa.

2. 'Các dân tộc được quyền tự quyết':
• Quyền của các dân tộc tự quyết định vận mệnh chính trị của mình, quyền tự lựa chọn chế độ chính trị và con đường phát triển kinh tế - xã hội (bao gồm quyền tự do phân lập thành quốc gia độc lập hoặc tự nguyện liên hiệp).
• Quyền tự quyết xuất phát từ lợi ích cơ bản của giai cấp công nhân và nhân dân lao động, kiên quyết chống lại việc lợi dụng quyền tự quyết để kích động chủ nghĩa ly khai dân tộc hẹp hòi.

3. 'Liên hiệp công nhân tất cả các dân tộc lại':
• Phản ánh sự thống nhất giữa sự nghiệp giải phóng dân tộc với sự nghiệp giải phóng giai cấp vô sản.
• Là cơ sở vững chắc để củng cố tình đoàn kết quốc tế của giai cấp công nhân và nhân dân lao động các dân tộc bị áp bức.`,
      keyTakeaway: "Cương lĩnh dân tộc của V.I. Lênin là nền tảng lý luận khoa học định hướng cho đường lối giải quyết vấn đề dân tộc của phong trào cộng sản và công nhân quốc tế."
    },
    design3D: {
      description: "Bục trưng bày pha lê quang học viền titan, bên trong mở cuốn sách vàng ghi tác phẩm bất hủ của V.I.Lênin. Bên cạnh là tượng bán thân Lênin bằng đồng mạ bóng. Phía trên có 3 dải dải sáng phát sáng lơ lửng khắc 3 nguyên tắc vàng bằng tiếng Việt và tiếng Nga.",
      materials: "Pha lê quang học, Da thuộc bọc vàng, Đồng đỏ tượng Lênin",
      lighting: "Tia spotlight sắc nét chùm hẹp tập trung vào trang sách mở"
    },
    historicalImages: [
      {
        title: "V.I. Lênin tại Đại hội II Quốc tế Cộng sản (1920)",
        imageUrl: "/images/exhibits/exhibit_2_1.jpg",
        caption: "Nơi Lênin trình bày Luận cương về vấn đề dân tộc và thuộc địa - văn kiện đã soi rọi con đường cứu nước của đồng chí Nguyễn Ái Quốc.",
        tag: "Tư liệu Lịch sử Quốc tế"
      },
      {
        title: "V.I. Lênin diễn thuyết trước quần chúng công nhân (1919)",
        imageUrl: "/images/exhibits/exhibit_2_2.jpg",
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
      description: "Bộ phim tài liệu làm sáng tỏ tác động mang tính bước ngoặt của Cương lĩnh dân tộc Lênin đối với con đường giải phóng dân tộc của Chủ tịch Hồ Chí Minh năm 1920 tại Paris."
    }
  },

  {
    id: 3,
    hallId: 0,
    romanNumeral: "III",
    title: "Tượng Bác Hồ với Đồng bào DTTS & Thư Pleiku 1946",
    subtitle: "Tư tưởng Hồ Chí Minh: 'Sông có thể cạn, núi có thể mòn, nhưng lòng đoàn kết của chúng ta không bao giờ giảm bớt'",
    modelFile: "/models/exhibit_3.glb",
    position: { x: 4.5, y: 1.4, z: 12 },
    cameraWaypoint: { x: 4.5, y: 1.65, z: 7.8 },
    lookAt: { x: 4.5, y: 1.15, z: 12 },
    theme: "Tư tưởng Hồ Chí Minh về Đại đoàn kết Dân tộc",
    theory: {
      chapterTopic: "Truyền thống đoàn kết và quan điểm của Đảng, Chủ tịch Hồ Chí Minh (Giáo trình, trang 209 - 211)",
      content: `Vận dụng sáng tạo chủ nghĩa Mác - Lênin vào thực tiễn cách mạng Việt Nam, Chủ tịch Hồ Chí Minh và Đảng Cộng sản Việt Nam luôn coi vấn đề dân tộc và đại đoàn kết dân tộc có vị trí chiến lược sống còn.

Bức thư bất hủ gửi Đại hội các dân tộc thiểu số miền Nam tại Pleiku (ngày 19/4/1946), Chủ tịch Hồ Chí Minh viết:
"Đồng bào Kinh hay Thổ, Mường hay Mán, Gia Rai hay Ê Đê, Xê Đăng hay Ba Na và các dân tộc thiểu số khác, đều là con cháu Việt Nam, đều là anh em ruột thịt. Chúng ta sống chết có nhau, sướng khổ cùng nhau, no đói giúp nhau... Sông có thể cạn, núi có thể mòn, nhưng lòng đoàn kết của chúng ta không bao giờ giảm bớt".

Quan điểm nhất quán của Đảng ta:
• Khẳng định vấn đề dân tộc là vấn đề chiến lược cơ bản, lâu dài, đồng thời là vấn đề cấp bách hiện nay của cách mạng Việt Nam.
• Các dân tộc trong đại gia đình Việt Nam bình đẳng, đoàn kết, tương trợ, giúp nhau cùng phát triển, cùng phấn đấu vì mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh.`,
      keyTakeaway: "Đại đoàn kết toàn dân tộc là đường lối chiến lược của cách mạng Việt Nam, là nguồn sức mạnh và động lực chủ yếu để xây dựng và bảo vệ Tổ quốc."
    },
    design3D: {
      description: "Cụm tượng điêu khắc đồng hun Bác Hồ ân cần trò chuyện và quàng khăn cho các em thiếu nhi và đồng bào DTTS. Phía trước là bục nghiêng 45 độ bọc nhung đỏ đặt bức thư Pleiku năm 1946 với nét chữ đánh máy sắc nét và con dấu son Chủ tịch nước.",
      materials: "Đồng hun cổ, Gỗ gụ khảm hoa văn Tây Bắc, Nhung dạ đỏ",
      lighting: "Ánh sáng tỏa dịu màu mật ong ấm cúng, tôn vinh nét mặt nhân hậu của Bác"
    },
    historicalImages: [
      {
        title: "Bác Hồ và đồng bào các dân tộc tại Chiến khu Việt Bắc",
        imageUrl: "/images/exhibits/exhibit_3_1.jpg",
        caption: "Bác Hồ luôn gắn bó máu thịt với đồng bào các dân tộc thiểu số nơi căn cứ địa kháng chiến Việt Bắc trong những năm kháng chiến trường kỳ.",
        tag: "Bảo tàng Hồ Chí Minh"
      },
      {
        title: "Chủ tịch Hồ Chí Minh năm 1946",
        imageUrl: "/images/exhibits/exhibit_3_2.jpg",
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
    cameraWaypoint: { x: -4.5, y: 1.65, z: 25.8 },
    lookAt: { x: -4.5, y: 1.15, z: 30 },
    theme: "Bản chất Tôn giáo & Tín ngưỡng Truyền thống Dân tộc",
    theory: {
      chapterTopic: "Bản chất, nguồn gốc tôn giáo và tín ngưỡng truyền thống (Giáo trình, trang 214 - 220, 229 - 231)",
      content: `Theo quan điểm của chủ nghĩa Mác - Lênin:
• Bản chất của tôn giáo: Tôn giáo là một hình thái ý thức xã hội phản ánh hư ảo hiện thực khách quan vào đầu óc con người. Về phương diện thế giới quan, tôn giáo mang thế giới quan duy tâm.
• Nguồn gốc của tôn giáo: Bắt nguồn từ nguồn gốc tự nhiên, kinh tế - xã hội (sự bất lực trước các lực lượng tự nhiên và áp bức xã hội), nguồn gốc nhận thức và nguồn gốc tâm lý.
• Tính chất của tôn giáo: Mang tính lịch sử, tính quần chúng và tính chính trị.

Mối quan hệ với tín ngưỡng truyền thống ở Việt Nam:
• Ở Việt Nam, tôn giáo và tín ngưỡng truyền thống đan xen, hòa quyện sâu sắc. Tín ngưỡng thờ cúng tổ tiên và thờ cúng Hùng Vương giữ vị trí thiêng liêng tột bậc trong tâm thức người Việt.
• Tín ngưỡng thờ cúng Hùng Vương được UNESCO công nhận là Di sản văn hóa phi vật thể đại diện của nhân loại (2012), là minh chứng cho đạo lý "Uống nước nhớ nguồn", cố kết cá nhân - gia đình - làng xã và Tổ quốc.`,
      keyTakeaway: "Tín ngưỡng thờ cúng tổ tiên và thờ cúng Hùng Vương là mạch nguồn tâm linh thuần Việt, là biểu tượng trường tồn của ý thức tự tôn và khối đại đoàn kết giống nòi."
    },
    design3D: {
      description: "Gian thờ cổ truyền 3 gian thu nhỏ với cột gỗ lim sơn son thếp vàng, mái ngói cong. Bàn thờ tam cấp chạm hoa sen đặt đỉnh hương đồng phát khói trầm tỏa hương uốn lượn, đôi hạc ngự lưng rùa đứng chầu hai bên, mâm bồng ngũ quả và bánh chưng bánh giầy.",
      materials: "Gỗ lim thếp vàng, Đồng đỏ đỉnh trầm, Khói trầm particle effect",
      lighting: "Ánh sáng ngọn nến lung linh đỏ ấm (flickering flame light effect) trang nghiêm"
    },
    historicalImages: [
      {
        title: "Khu Di tích Lịch sử Đền Hùng (Phú Thọ)",
        imageUrl: "/images/exhibits/exhibit_4_1.jpg",
        caption: "Lăng Vua Hùng trên núi Nghĩa Lĩnh, cội nguồn tâm linh của dân tộc Việt Nam qua hàng nghìn năm dựng nước.",
        tag: "Khu Di tích Quốc gia"
      },
      {
        title: "Không gian Thờ cúng Quốc tổ Hùng Vương",
        imageUrl: "/images/exhibits/exhibit_4_2.jpg",
        caption: "Nghi lễ thờ cúng Hùng Vương được UNESCO công nhận là Di sản văn hóa phi vật thể đại diện của nhân loại.",
        tag: "Di sản Thế giới UNESCO"
      }
    ],
    videoData: {
      title: "Tín ngưỡng thờ cúng Hùng Vương — Biểu tượng của tinh thần dân tộc",
      channel: "VTV5 — Đài Truyền hình Việt Nam",
      duration: "16 phút 20 giây",
      youtubeId: "9jjH0IMxMns",
      youtubeUrl: "https://www.youtube.com/watch?v=9jjH0IMxMns",
      description: "Phim tài liệu chuyên đề của VTV5 phân tích chiều sâu văn hóa và sức mạnh gắn kết muôn triệu người Việt của tín ngưỡng thờ Tổ thiêng liêng."
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
    cameraWaypoint: { x: 4.5, y: 1.65, z: 25.8 },
    lookAt: { x: 4.5, y: 1.15, z: 30 },
    theme: "Tôn giáo Đồng hành cùng Lịch sử Dân tộc",
    theory: {
      chapterTopic: "Đặc điểm tôn giáo ở Việt Nam: Tôn giáo đồng hành cùng dân tộc (Giáo trình, trang 223 - 226, 229 - 232)",
      content: `Giáo trình làm rõ đặc điểm tôn giáo ở Việt Nam:
1. Việt Nam là quốc gia đa tôn giáo; các tôn giáo chung sống hòa bình, không có xung đột, chiến tranh tôn giáo.
2. Tín đồ các tôn giáo phần lớn là nhân dân lao động, có lòng yêu nước, tinh thần dân tộc sâu sắc.
3. Các tôn giáo lớn du nhập vào Việt Nam đều tiếp biến văn hóa bản địa và đồng hành cùng tiến trình dựng nước và giữ nước.

Phật giáo Việt Nam:
• Thiền phái Trúc Lâm Yên Tử do Phật hoàng Trần Nhân Tông sáng lập thế kỷ XIII là biểu tượng đỉnh cao của Phật giáo nhập thế Việt Nam với tư tưởng "Cư trần lạc đạo" (ở đời vui đạo) và tinh thần "Hộ quốc an dân".
• Trong thời kỳ quá độ lên chủ nghĩa xã hội, Giáo hội Phật giáo Việt Nam kiên định thực hiện phương châm: "Đạo pháp - Dân tộc - Chủ nghĩa xã hội", tích cực tham gia các phong trào thi đua yêu nước, công tác xã hội từ thiện và bảo vệ chủ quyền biên cương, hải đảo.`,
      keyTakeaway: "Phật giáo Việt Nam là tấm gương tiêu biểu cho tinh thần gắn bó máu thịt giữa đạo pháp và vận mệnh dân tộc."
    },
    design3D: {
      description: "Mô hình Chùa Một Cột (Liên Hoa Đài) đặt trên cột đá giữa hồ sen nước trong vắt phản chiếu gợn sóng lấp lánh và hoa sen hồng nở. Cạnh bên là pho tượng Phật hoàng Trần Nhân Tông ngồi thiền tĩnh tại bằng đồng phát hào quang ánh vàng kim dịu mát.",
      materials: "Gỗ cổ sơn son, Trụ đá sa thạch, Nước hồ sen phản chiếu Shader",
      lighting: "Ánh sáng tinh khiết chiếu từ trên cao và phản quang lấp lánh từ mặt hồ sen"
    },
    historicalImages: [
      {
        title: "Chùa Một Cột (Diên Hựu Tự) — Hà Nội",
        imageUrl: "/images/exhibits/exhibit_5_1.jpg",
        caption: "Kiệt tác kiến trúc đóa sen nghìn năm tuổi, biểu tượng tinh thần Phật giáo hộ quốc an dân của dân tộc.",
        tag: "Di tích Quốc gia Đặc biệt"
      },
      {
        title: "Phật hoàng Trần Nhân Tông (1258 - 1308)",
        imageUrl: "/images/exhibits/exhibit_5_2.jpg",
        caption: "Vị vua anh minh sáng lập Thiền phái Trúc Lâm Yên Tử thuần Việt, gắn kết đạo pháp với sự thịnh suy của đất nước.",
        tag: "Danh nhân Lịch sử"
      }
    ],
    videoData: {
      title: "Chùa Một Cột — Biểu tượng văn hóa ngàn năm của Thăng Long Hà Nội",
      channel: "Truyền hình Báo Nhân Dân",
      duration: "11 phút 15 giây",
      youtubeId: "tYXe1AnQQxk",
      youtubeUrl: "https://www.youtube.com/watch?v=tYXe1AnQQxk",
      description: "Phim tài liệu của Báo Nhân Dân về đóa sen ngàn năm Diên Hựu Tự và truyền thống Phật giáo Việt Nam luôn đồng hành, hộ quốc an dân."
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
    cameraWaypoint: { x: -4.5, y: 1.65, z: 39.8 },
    lookAt: { x: -4.5, y: 1.15, z: 44 },
    theme: "Công giáo Đồng hành cùng Dân tộc",
    theory: {
      chapterTopic: "Chính sách tôn giáo của Đảng và sự hòa nhập tôn giáo (Giáo trình, trang 224 - 227)",
      content: `Đường hướng hành đạo của đồng bào Công giáo Việt Nam:
• Thư chung năm 1980 của Hội đồng Giám mục Việt Nam xác định đường hướng mục vụ chiến lược: "Sống Phúc âm giữa lòng dân tộc để phục vụ hạnh phúc của đồng bào".
• Huấn từ của Giáo hoàng Biển Đức XVI và Giáo hoàng Phanxicô gửi người Công giáo Việt Nam luôn nhấn mạnh: "Người Công giáo tốt cũng là người công dân tốt".

Biểu tượng văn hóa của Nhà thờ đá Phát Diệm (Ninh Bình):
• Quần thể do Linh mục Phêrô Trần Lục (Cụ Sáu) chủ trì xây dựng từ năm 1875 đến năm 1898.
• Là tuyệt tác kiến trúc độc nhất vô nhị kết hợp hài hòa giữa kiến trúc thánh đường Công giáo phương Tây với kiến trúc đình chùa mái cong truyền thống phương Đông.
• Thể hiện sinh động nguyên tắc dung hợp văn hóa, tinh thần gắn kết giữa đức tin tôn giáo và cội nguồn văn hóa dân tộc Việt Nam.`,
      keyTakeaway: "Đồng bào Công giáo là bộ phận không thể tách rời của khối đại đoàn kết toàn dân tộc, luôn đồng hành cùng sự nghiệp xây dựng và bảo vệ Tổ quốc."
    },
    design3D: {
      description: "Tháp Phương Đình nhà thờ đá Phát Diệm thu nhỏ với các đầu đao mái cong chạm rồng phượng, giữa vòm đá treo quả chuông đồng nặng 2 tấn chạm văn tự Nôm và Latinh. Trước tháp là Thánh giá gỗ mun nạm xà cừ hoa sen đặt trên bệ đá cẩm thạch trắng.",
      materials: "Đá xanh Ninh Bình chạm khắc, Chuông đồng cổ, Gỗ mun khảm xà cừ",
      lighting: "Ánh sáng tự nhiên chiếu rọi qua vòm đá tạo hiệu ứng bóng đổ thanh tịnh"
    },
    historicalImages: [
      {
        title: "Quần thể Nhà thờ Chính tòa Phát Diệm (Ninh Bình)",
        imageUrl: "/images/exhibits/exhibit_6_1.jpg",
        caption: "Kiệt tác kiến trúc giao thoa độc đáo giữa Gothic phương Tây và mái ngói cong truyền thống Á Đông.",
        tag: "Quần thể Đá Độc nhất"
      },
      {
        title: "Giáo phận Phát Diệm — Cộng đồng Giáo dân Yêu nước",
        imageUrl: "/images/exhibits/exhibit_6_2.jpg",
        caption: "Đồng bào Công giáo sống tốt đời đẹp đạo, gắn bó đồng hành phụng sự Tổ quốc.",
        tag: "Sống Phúc âm Đồng hành"
      }
    ],
    videoData: {
      title: "Nhà Thờ Phát Diệm: Kiệt tác kiến trúc đá vẹn nguyên sau hơn một thế kỷ",
      channel: "Khám phá và Trải nghiệm Văn hóa",
      duration: "18 phút 50 giây",
      youtubeId: "TbKzhOzXKwk",
      youtubeUrl: "https://www.youtube.com/watch?v=TbKzhOzXKwk",
      description: "Phóng sự khám phá quần thể kiến trúc đá độc đáo Nhà thờ Phát Diệm và đời sống kính Chúa yêu nước của đồng bào Công giáo nơi đây."
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
    cameraWaypoint: { x: 4.5, y: 1.65, z: 39.8 },
    lookAt: { x: 4.5, y: 1.15, z: 44 },
    theme: "Sự Phong phú & Hòa hợp Tôn giáo ở Việt Nam",
    theory: {
      chapterTopic: "Việt Nam là quốc gia đa tôn giáo, chung sống hòa bình (Giáo trình, trang 223 - 225, 228 - 231)",
      content: `Đặc điểm thực tiễn tôn giáo tại Việt Nam:
• Việt Nam là nơi giao thoa của nhiều luồng văn hóa và tôn giáo lớn trên thế giới, đồng thời là cái nôi sản sinh ra các tôn giáo nội sinh độc đáo.
• Hiện nay có 43 tổ chức thuộc 16 tôn giáo đã được Nhà nước công nhận tư cách pháp nhân (gồm Phật giáo, Công giáo, Tin Lành, Hồi giáo, Cao Đài, Phật giáo Hòa Hảo...).

1. Đạo Cao Đài (Đại Đạo Tam Kỳ Phổ Độ):
Ra đời tại Nam Bộ năm 1926, dung hợp giáo lý của Phật giáo, Đạo giáo, Nho giáo và Kitô giáo. Biểu tượng cốt lõi là 'Thiên Nhãn' (Mắt Trời) tượng trưng cho lòng nhân ái, sự giác ngộ và đại đồng.

2. Hồi giáo của cộng đồng người Chăm (Islam & Chăm Bàni):
Gắn bó mật thiết với văn hóa bản địa phương Nam, hướng thiện, đoàn kết cùng cộng đồng các dân tộc xây dựng đời sống ấm no.

Đặc tính hòa hợp độc đáo:
Ở Việt Nam, các tôn giáo chung sống hòa bình, tôn trọng lẫn nhau, không bao giờ xảy ra chiến tranh hay xung đột tôn giáo. Các chức sắc, tín đồ đều là thành viên tích cực của Mặt trận Tổ quốc Việt Nam.`,
      keyTakeaway: "Sự tôn trọng, đan xen và chung sống hòa bình của các tôn giáo là nét đẹp nhân văn tiêu biểu của nền văn hóa Việt Nam."
    },
    design3D: {
      description: "Cụm mô hình đặt trên bục xoay tròn 360 độ: Bên trái là biểu tượng Quả Càn Khôn với Thiên Nhãn rực sáng và cột rồng đắp nổi của Tòa thánh Tây Ninh; bên phải là Mái vòm xanh ngọc bích chạm biểu tượng vầng trăng lưỡi liềm và vì sao của Thánh đường Hồi giáo Mubarak An Giang.",
      materials: "Sơn mài mỹ nghệ, Thủy tinh màu ngọc bích, Vàng dát thủ công",
      lighting: "Dải đèn LED RGB đổi màu pastel êm dịu, tôn vinh vẻ đẹp hài hòa đa sắc"
    },
    historicalImages: [
      {
        title: "Tòa Thánh Tây Ninh — Đạo Cao Đài",
        imageUrl: "/images/exhibits/exhibit_7_1.jpg",
        caption: "Công trình tôn giáo độc đáo của tôn giáo nội sinh Cao Đài ra đời tại Nam Bộ năm 1926.",
        tag: "Tôn giáo Nội sinh"
      },
      {
        title: "Bản sắc Văn hóa và Tôn giáo người Chăm",
        imageUrl: "/images/exhibits/exhibit_7_2.jpg",
        caption: "Cộng đồng người Chăm hòa hợp, bình đẳng, cùng phát triển trong ngôi nhà chung khối đại đoàn kết các dân tộc.",
        tag: "Đa dạng Hòa hợp"
      }
    ],
    videoData: {
      title: "Đạo Cao Đài & Bí Mật Kiến Trúc Tòa Thánh Tây Ninh",
      channel: "Viet Nam Discovery Channel",
      duration: "15 phút 05 giây",
      youtubeId: "VTFRUmxvW4Q",
      youtubeUrl: "https://www.youtube.com/watch?v=VTFRUmxvW4Q",
      description: "Chương trình khám phá kiến trúc độc đáo và triết lý dung hợp tôn giáo cao đẹp của tôn giáo nội sinh Cao Đài tại Tây Ninh."
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
    cameraWaypoint: { x: 0, y: 1.65, z: 60.8 },
    lookAt: { x: 0, y: 1.15, z: 65 },
    theme: "Chính sách Dân tộc Toàn diện của Đảng và Nhà nước",
    theory: {
      chapterTopic: "Nội dung chính sách dân tộc của Đảng và Nhà nước Việt Nam (Giáo trình, trang 211 - 213)",
      content: `Chính sách dân tộc của Đảng, Nhà nước Việt Nam mang tính toàn diện, bao trùm tất cả các lĩnh vực:

• Về chính trị: Thực hiện bình đẳng, đoàn kết, tôn trọng, giúp nhau cùng phát triển giữa các dân tộc. Nâng cao tính tích cực chính trị của công dân, chăm lo xây dựng đội ngũ cán bộ người dân tộc thiểu số.
• Về kinh tế: Ưu tiên đầu tư phát triển kinh tế - xã hội các vùng dân tộc và miền núi; phát triển giao thông và cơ sở hạ tầng, xóa đói, giảm nghèo, khai thác có hiệu quả tiềm năng thế mạnh của từng vùng gắn với bảo vệ môi trường sinh thái.
• Về văn hóa: Giữ gìn và phát huy những giá trị, bản sắc văn hóa truyền thống các dân tộc thiểu số trong sự nghiệp phát triển chung của cộng đồng dân tộc Việt Nam thống nhất.
• Về xã hội: Thực hiện tốt chính sách an sinh xã hội, y tế, giáo dục; nâng cao dân trí, phát triển nguồn nhân lực.
• Về an ninh - quốc phòng: Củng cố thế trận quốc phòng toàn dân và an ninh nhân dân vững chắc trên địa bàn các vùng dân tộc và miền núi.

Bảo tồn Không gian văn hóa Cồng chiêng Tây Nguyên:
Được UNESCO công nhận là Kiệt tác di sản truyền khẩu và phi vật thể của nhân loại năm 2005. Nhà rông và tiếng cồng chiêng là linh hồn buôn làng, là biểu trưng cho tinh thần cộng đồng bất khuất của đồng bào Tây Nguyên.`,
      keyTakeaway: "Chính sách dân tộc đúng đắn của Đảng và Nhà nước là nền tảng vững chắc để rút ngắn khoảng cách phát triển, củng cố khối đại đoàn kết toàn dân tộc."
    },
    design3D: {
      description: "Mô hình Nhà rông Tây Nguyên cao vút hình lưỡi rìu ngửa lên trời với mái cỏ tranh dày và vách nứa đan hoa văn chim muông. Dưới sân nhà rông là bếp lửa buôn làng bập bùng tia lửa hồng và giá treo bộ cồng chiêng 12 chiếc bằng đồng đen chạm hoa văn mắt chim.",
      materials: "Gỗ rừng tự nhiên, Cỏ tranh khô, Đồng đen cồng chiêng, Bếp lửa particle",
      lighting: "Ánh lửa bập bùng ấm áp từ bếp lửa buôn làng rọi sáng chân nhà rông"
    },
    historicalImages: [
      {
        title: "Nhà rông Truyền thống Ba Na — Tây Nguyên",
        imageUrl: "/images/exhibits/exhibit_8_1.jpg",
        caption: "Nhà rông cao vút nơi trung tâm buôn làng, biểu trưng cho sức sống kiên cường và tinh thần cộng đồng Tây Nguyên.",
        tag: "Văn hóa Tây Nguyên"
      },
      {
        title: "Dàn Cồng chiêng Di sản Tây Nguyên",
        imageUrl: "/images/exhibits/exhibit_8_2.jpg",
        caption: "Không gian văn hóa Cồng chiêng Tây Nguyên — Kiệt tác truyền khẩu và phi vật thể của nhân loại.",
        tag: "Di sản Thế giới UNESCO"
      }
    ],
    videoData: {
      title: "Không gian văn hóa Cồng chiêng Tây Nguyên — Di sản phi vật thể nhân loại",
      channel: "Kênh Di sản & Lễ hội Việt Nam",
      duration: "13 phút 30 giây",
      youtubeId: "ZbQBFT6W8Wc",
      youtubeUrl: "https://www.youtube.com/watch?v=ZbQBFT6W8Wc",
      description: "Phim tài liệu nghệ thuật ghi lại âm vang cồng chiêng đại ngàn và không gian nhà rông truyền thống của đồng bào các dân tộc Tây Nguyên."
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
    cameraWaypoint: { x: -4.5, y: 1.65, z: 87.8 },
    lookAt: { x: -4.5, y: 1.15, z: 92 },
    theme: "Thể chế Pháp quyền XHCN về Dân tộc & Tôn giáo",
    theory: {
      chapterTopic: "Pháp chế hóa chính sách dân tộc, tôn giáo của Đảng và Nhà nước (Giáo trình, trang 211, 226 - 227)",
      content: `Nguyên tắc giải quyết vấn đề dân tộc và tôn giáo được pháp chế hóa thành các quy định hiến định và luật định tiến bộ:

Điều 5 Hiến pháp nước Cộng hòa XHCN Việt Nam (2013):
1. Nước Cộng hòa xã hội chủ nghĩa Việt Nam là quốc gia thống nhất của các dân tộc cùng sinh sống trên đất nước Việt Nam.
2. Các dân tộc bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển; nghiêm cấm mọi hành vi kỳ thị, chia rẽ dân tộc.
3. Ngôn ngữ quốc gia là tiếng Việt. Các dân tộc có quyền dùng tiếng nói, chữ viết, giữ gìn bản sắc dân tộc, phát huy phong tục, tập quán, truyền thống và văn hóa tốt đẹp của mình.

Điều 24 Hiến pháp 2013 & Luật Tín ngưỡng, tôn giáo (2016):
1. Mọi người có quyền tự do tín ngưỡng, tôn giáo, theo hoặc không theo một tôn giáo nào. Các tôn giáo bình đẳng trước pháp luật.
2. Nhà nước tôn trọng và bảo hộ quyền tự do tín ngưỡng, tôn giáo. Không ai được xâm phạm tự do tín ngưỡng, tôn giáo hoặc lợi dụng tín ngưỡng, tôn giáo để vi phạm pháp luật.`,
      keyTakeaway: "Hệ thống pháp luật Việt Nam luôn tôn trọng, bảo đảm quyền con người và quyền tự do tín ngưỡng, tôn giáo phù hợp với các công ước quốc tế."
    },
    design3D: {
      description: "Bục đá cẩm thạch trắng nguyên khối tạc hình Quốc huy mạ vàng trang nghiêm. Trên bục đặt hai cuốn sách luật khổ lớn mạ bìa đỏ chữ vàng: 'Hiến pháp năm 2013' và 'Luật Tín ngưỡng, tôn giáo 2016'. Phía trên lơ lửng bảng holographic hiển thị toàn văn các điều luật cốt lõi. Phía sau là lá cờ Tổ quốc vải lụa tung bay.",
      materials: "Đá cẩm thạch Carrara, Mạ vàng 24K Quốc huy, Vải lụa cờ đỏ sao vàng",
      lighting: "Spotlight trắng thanh lịch chiếu hội tụ vào hai cuốn luật pháp"
    },
    historicalImages: [
      {
        title: "Tòa nhà Quốc hội Việt Nam — Ba Đình, Hà Nội",
        imageUrl: "/images/exhibits/exhibit_9_1.jpg",
        caption: "Trụ sở cơ quan quyền lực nhà nước cao nhất, nơi thông qua Hiến pháp 2013 và Luật Tín ngưỡng, tôn giáo 2016.",
        tag: "Cơ quan Lập hiến"
      },
      {
        title: "Bản khắc Hiến pháp Nước Cộng hòa XHCN Việt Nam",
        imageUrl: "/images/exhibits/exhibit_9_2.jpg",
        caption: "Khẳng định nguyên tắc bình đẳng dân tộc và quyền tự do tín ngưỡng, tôn giáo được pháp luật bảo hộ.",
        tag: "Pháp quyền XHCN"
      }
    ],
    videoData: {
      title: "Việt Nam bảo đảm quyền tự do tín ngưỡng, tôn giáo",
      channel: "VTV4 — Ban Truyền hình Đối ngoại VTV",
      duration: "17 phút 25 giây",
      youtubeId: "sMbsR5ccC-w",
      youtubeUrl: "https://www.youtube.com/watch?v=sMbsR5ccC-w",
      description: "Chương trình đối ngoại khẳng định chính sách nhất quán và bước tiến vượt bậc của Nhà nước Việt Nam trong bảo đảm quyền tự do tín ngưỡng của người dân."
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
    cameraWaypoint: { x: 4.5, y: 1.65, z: 87.8 },
    lookAt: { x: 4.5, y: 1.15, z: 92 },
    theme: "Đấu tranh Ngăn chặn Lợi dụng Dân tộc & Tôn giáo",
    theory: {
      chapterTopic: "Đấu tranh chống các thế lực thù địch lợi dụng vấn đề dân tộc, tôn giáo (Giáo trình, trang 203, 226, 233 - 236)",
      content: `Giáo trình chỉ rõ luận điểm cảnh giác cách mạng:
• Các thế lực thù địch trong chiến lược "diễn biến hòa bình" luôn coi dân tộc và tôn giáo là hai ngọn cờ xung kích để kích động chia rẽ nội bộ, phá hoại khối đại đoàn kết dân tộc, can thiệp vào công việc nội bộ của Việt Nam.
• Thủ đoạn tinh vi:
  - Lợi dụng vấn đề đất đai, phong tục tập quán để kích động tư tưởng ly khai, thành lập cái gọi là "Nhà nước Đề ga độc lập" ở Tây Nguyên hay "Vương quốc Mông" ở Tây Bắc.
  - Dựng lên các tổ chức phản động đội lốt tôn giáo như "Tin lành Đề ga", tà đạo "Hà Mòn", "Hội thánh Đức Chúa Trời Mẹ".
  - Vụ việc khủng bố đặc biệt nghiêm trọng xảy ra tại Đắk Lắk ngày 11/6/2023 là minh chứng rõ nét cho âm mưu chống phá manh động của các phần tử phản động lưu vong.

Định hướng giải quyết kiên quyết của Đảng và Nhà nước:
1. Nghiêm trị những âm mưu, hành động chia rẽ, phá hoại khối đại đoàn kết dân tộc; chủ động phòng ngừa, kiên quyết đấu tranh với các hành vi lợi dụng tín ngưỡng, tôn giáo trái pháp luật.
2. Phân biệt rõ nhu cầu tín ngưỡng, tôn giáo chính đáng của đồng bào với mưu đồ chính trị phản động lợi dụng tôn giáo.
3. Không ngừng củng cố "thế trận lòng dân", nâng cao đời sống mọi mặt cho bà con buôn làng, giữ vững an ninh trật tự và chủ quyền quốc gia.`,
      keyTakeaway: "Giữ vững khối đại đoàn kết toàn dân tộc là nhiệm vụ chiến lược, là lá chắn thép bảo vệ vững chắc Tổ quốc Việt Nam xã hội chủ nghĩa."
    },
    design3D: {
      description: "Mô hình biểu tượng 'Lá chắn thép bảo vệ bình yên Tổ quốc' bằng hợp kim titan xước mờ. Trên mặt khiên chạm nổi bản đồ đất nước Việt Nam liền một dải gồm cả hai quần đảo Hoàng Sa và Trường Sa. Cạnh khiên là màn hình tương tác vạch trần các tài liệu phản động bị bóc gỡ và hình ảnh bà con buôn làng sát cánh cùng công an biên phòng giữ yên bờ cõi.",
      materials: "Hợp kim titan chải mờ, Thép tôi luyện, Ánh sáng laser an ninh xanh - đỏ",
      lighting: "Ánh sáng uy nghiêm mạnh mẽ với các dải quét radar laser phòng hộ"
    },
    historicalImages: [
      {
        title: "Lực lượng Công an Nhân dân Việt Nam",
        imageUrl: "/images/exhibits/exhibit_10_1.jpg",
        caption: "Lá chắn thép bảo vệ Đảng, bảo vệ nhân dân và giữ vững an ninh chính trị, trật tự an toàn xã hội.",
        tag: "Lá chắn An ninh"
      },
      {
        title: "Bộ đội Biên phòng Việt Nam",
        imageUrl: "/images/exhibits/exhibit_10_2.jpg",
        caption: "Chiến sĩ Biên phòng kề vai sát cánh cùng đồng bào các dân tộc bảo vệ vững chắc biên cương Tổ quốc.",
        tag: "Biên cương Tổ quốc"
      }
    ],
    videoData: {
      title: "Vạch trần âm mưu lợi dụng tôn giáo kích động ly khai bản làng",
      channel: "VTV24 — Đài Truyền hình Việt Nam",
      duration: "19 phút 10 giây",
      youtubeId: "4U3Ge0ieBLk",
      youtubeUrl: "https://www.youtube.com/watch?v=4U3Ge0ieBLk",
      description: "Phóng sự điều tra của VTV24 vạch trần thủ đoạn của các thế lực thù địch lợi dụng tôn giáo để chia rẽ khối đại đoàn kết, đồng thời ghi nhận bình yên trở lại với buôn làng."
    }
  }
];
