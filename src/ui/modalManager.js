/**
 * Quản lý Modal thông tin chi tiết Đa phương tiện cho 10 Hiện vật Triển lãm
 * Tích hợp ảnh tư liệu thật và nhúng video YouTube chính thống
 */
export class ModalManager {
  constructor(onInspectClick, onPrevClick, onNextClick) {
    this.onInspectClick = onInspectClick;
    this.onPrevClick = onPrevClick;
    this.onNextClick = onNextClick;
    this.currentExhibit = null;
    this.currentTab = 'theory';

    this.modalEl = document.getElementById('exhibitModal');
    this.titleEl = document.getElementById('modalTitle');
    this.subEl = document.getElementById('modalSub');
    this.hallTagEl = document.getElementById('modalHallTag');
    this.bodyEl = document.getElementById('modalTabContent');

    this.initEventListeners();
  }

  initEventListeners() {
    const closeBtn = document.getElementById('modalCloseBtn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.hide());
    }

    document.querySelectorAll('.modal-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.currentTarget.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    const inspectBtn = document.getElementById('btnModalInspect');
    if (inspectBtn) {
      inspectBtn.addEventListener('click', () => {
        this.hide();
        if (this.onInspectClick && this.currentExhibit) {
          this.onInspectClick(this.currentExhibit.id - 1);
        }
      });
    }

    const prevBtn = document.getElementById('btnModalPrev');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.onPrevClick) this.onPrevClick();
      });
    }

    const nextBtn = document.getElementById('btnModalNext');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (this.onNextClick) this.onNextClick();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isVisible()) {
        this.hide();
      }
    });
  }

  show(exhibit) {
    this.currentExhibit = exhibit;
    this.titleEl.textContent = `Hiện vật ${exhibit.romanNumeral}: ${exhibit.title}`;
    this.subEl.textContent = exhibit.subtitle;
    this.hallTagEl.textContent = `Chuyên đề: ${exhibit.theme}`;

    this.switchTab('theory');
    this.modalEl.classList.add('active');
  }

  hide() {
    this.modalEl.classList.remove('active');
    // Dừng video đang phát khi đóng modal
    if (this.bodyEl) {
      const iframes = this.bodyEl.querySelectorAll('iframe');
      iframes.forEach(iframe => iframe.src = iframe.src);
    }
  }

  isVisible() {
    return this.modalEl.classList.contains('active');
  }

  switchTab(tabKey) {
    this.currentTab = tabKey;
    document.querySelectorAll('.modal-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabKey);
    });

    if (!this.currentExhibit) return;

    let html = '';
    const ex = this.currentExhibit;

    switch (tabKey) {
      case 'theory':
        html = `
          <div class="theory-box">
            <div class="theory-topic">Trọng tâm: ${ex.theory.chapterTopic}</div>
            <div class="theory-text">${ex.theory.content.replace(/\n/g, '<br/>')}</div>
            <div class="theory-takeaway">
              <strong>Luận điểm cốt lõi:</strong> ${ex.theory.keyTakeaway}
            </div>
          </div>
        `;
        break;

      case 'design':
        html = `
          <div class="design-box">
            <h4 style="color:#d4af37; margin-bottom:10px; font-size:15px;">Ý tưởng Thiết kế 3D Hiện vật:</h4>
            <p style="margin-bottom:14px; line-height:1.8; color:#e0e0e0;">${ex.design3D.description}</p>
            ${ex.design3D.conceptImageUrl ? `
              <div style="margin:16px 0; border-radius:8px; overflow:hidden; border:1px solid rgba(212,175,55,0.4); box-shadow:0 6px 20px rgba(0,0,0,0.5);">
                <img src="${ex.design3D.conceptImageUrl}" alt="Bản vẽ Thiết kế 3D" style="width:100%; height:auto; display:block; cursor:pointer;" onclick="window.open('${ex.design3D.conceptImageUrl}', '_blank')" />
                <div style="padding:8px 12px; background:rgba(16,21,30,0.9); font-size:12px; color:#c89b3c; display:flex; justify-content:space-between; align-items:center;">
                  <span>Bản vẽ kỹ thuật 3D Concept (Mặt trước, Mặt sau, Mặt trên, Mặt dưới, Wireframe, Shader vật liệu)</span>
                  <span style="font-size:11px; color:#a0aec0;">Click để phóng to ảnh</span>
                </div>
              </div>
            ` : ''}
            <div class="design-specs">
              <div><strong>Vật liệu PBR:</strong> ${ex.design3D.materials}</div>
              <div><strong>Ánh sáng & Hiệu ứng:</strong> ${ex.design3D.lighting}</div>
            </div>
            <div style="margin-top:16px; padding:12px; background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.25); border-radius:6px; font-size:12px;">
              <strong>Hướng dẫn thay thế 3D Model:</strong> Bạn có thể copy file 3D tùy chỉnh định dạng <code>.glb</code> vào thư mục <code>public/models/exhibit_${ex.id}.glb</code> để ứng dụng tự động hiển thị mô hình thực tế.
            </div>
          </div>
        `;
        break;

      case 'images':
        html = `
          <div class="images-grid">
            ${ex.historicalImages.map(img => `
              <div class="image-card">
                <div class="image-wrapper">
                  <img src="${img.imageUrl}" alt="${img.title}" loading="lazy" 
                       onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&auto=format&fit=crop&q=80';" />
                  <span class="image-tag">${img.tag}</span>
                </div>
                <div class="image-title">${img.title}</div>
                <div class="image-desc">${img.caption}</div>
              </div>
            `).join('')}
          </div>
        `;
        break;

      case 'video':
        const vid = ex.videoData;
        html = `
          <div class="video-box">
            <div class="video-header">
              <span class="video-channel">Kênh tư liệu: ${vid.channel}</span>
              <span class="video-duration">Thời lượng: ${vid.duration}</span>
            </div>
            <h3 class="video-title">${vid.title}</h3>
            
            <!-- Trình phát video YouTube nhúng trực tiếp -->
            <div class="video-embed-container">
              <iframe 
                src="https://www.youtube-nocookie.com/embed/${vid.youtubeId}?rel=0" 
                title="${vid.title}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </div>

            <p class="video-desc">${vid.description}</p>
            <div class="video-action">
              <a href="${vid.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="video-link-btn">
                Mở xem trực tiếp trên YouTube
              </a>
            </div>
          </div>
        `;
        break;
    }

    this.bodyEl.innerHTML = html;
  }
}
