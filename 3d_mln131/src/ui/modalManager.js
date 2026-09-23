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

      case 'images':
        html = `
          <div class="images-grid">
            ${ex.historicalImages.map(img => `
              <div class="image-card">
                <div class="image-wrapper" style="cursor:pointer;" onclick="window.open('${img.imageUrl}', '_blank')" title="Nhấp để xem ảnh kích thước gốc">
                  <img src="${img.imageUrl}" alt="${img.title}" loading="lazy" />
                  <span class="image-tag">${img.tag}</span>
                </div>
                <div class="image-title">${img.title}</div>
                <div class="image-desc">${img.caption}</div>
              </div>
            `).join('')}
          </div>
        `;
        break;
    }

    this.bodyEl.innerHTML = html;
  }
}
