/**
 * Quản lý Modal thông tin chi tiết Đa phương tiện cho 10 Hiện vật Triển lãm
 */
export class ModalManager {
  constructor(onInspectClick, onPrevClick, onNextClick) {
    this.onInspectClick = onInspectClick;
    this.onPrevClick = onPrevClick;
    this.onNextClick = onNextClick;
    this.currentExhibit = null;
    this.currentTab = 'theory'; // 'theory' | 'design' | 'images' | 'video'

    this.modalEl = document.getElementById('exhibitModal');
    this.titleEl = document.getElementById('modalTitle');
    this.subEl = document.getElementById('modalSub');
    this.hallTagEl = document.getElementById('modalHallTag');
    this.bodyEl = document.getElementById('modalTabContent');

    this.initEventListeners();
  }

  initEventListeners() {
    // Nút đóng modal
    const closeBtn = document.getElementById('modalCloseBtn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.hide());
    }

    // Chuyển tab
    document.querySelectorAll('.modal-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.currentTarget.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    // Nút Inspect 360
    const inspectBtn = document.getElementById('btnModalInspect');
    if (inspectBtn) {
      inspectBtn.addEventListener('click', () => {
        this.hide();
        if (this.onInspectClick && this.currentExhibit) {
          this.onInspectClick(this.currentExhibit.id - 1);
        }
      });
    }

    // Nút Prev/Next
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

    // Đóng khi bấm phím Escape
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isVisible()) {
        this.hide();
      }
    });
  }

  show(exhibit) {
    this.currentExhibit = exhibit;
    this.titleEl.innerHTML = `${exhibit.icon} ${exhibit.title}`;
    this.subEl.textContent = exhibit.subtitle;
    this.hallTagEl.textContent = `Chủ đề: ${exhibit.theme}`;

    this.switchTab('theory');
    this.modalEl.classList.add('active');
  }

  hide() {
    this.modalEl.classList.remove('active');
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
            <div class="theory-topic">📌 ${ex.theory.chapterTopic}</div>
            <div class="theory-text">${ex.theory.content.replace(/\n/g, '<br/>')}</div>
            <div class="theory-takeaway">
              <strong>💡 Điểm cốt lõi MLN131:</strong> ${ex.theory.keyTakeaway}
            </div>
          </div>
        `;
        break;

      case 'design':
        html = `
          <div class="design-box">
            <h4 style="color:#00d4ff; margin-bottom:8px;">🎨 Ý tưởng Thiết kế 3D trong Bảo tàng:</h4>
            <p style="margin-bottom:12px; line-height:1.7;">${ex.design3D.description}</p>
            <div class="design-specs">
              <div><strong>Vật liệu PBR:</strong> ${ex.design3D.materials}</div>
              <div><strong>Ánh sáng & Hiệu ứng:</strong> ${ex.design3D.lighting}</div>
            </div>
          </div>
        `;
        break;

      case 'images':
        html = `
          <div class="images-grid">
            ${ex.historicalImages.map(img => `
              <div class="image-card">
                <div class="image-placeholder">
                  <div class="image-icon">🖼️</div>
                  <div class="image-tag">${img.tag}</div>
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
              <span class="video-channel">📺 ${vid.channel}</span>
              <span class="video-duration">⏱ ${vid.duration}</span>
            </div>
            <h3 class="video-title">🎥 ${vid.title}</h3>
            <p class="video-desc">${vid.description}</p>
            <div class="video-action">
              <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(vid.youtubeQuery)}" target="_blank" class="video-link-btn">
                ▶ Xem Phim Tài Liệu Trên Kênh Tư Liệu (YouTube)
              </a>
            </div>
          </div>
        `;
        break;
    }

    this.bodyEl.innerHTML = html;
  }
}
