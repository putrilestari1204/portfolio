/* ============================================
   PORTFOLIO — IMAGE SLIDER SCRIPT
   ============================================ */

document.querySelectorAll('[data-slider]').forEach(wrap => {
  const track      = wrap.querySelector('.slider-track');
  const prevBtn    = wrap.querySelector('.slider-btn.prev');
  const nextBtn    = wrap.querySelector('.slider-btn.next');
  const dotsEl     = wrap.querySelector('.slider-dots');
  const countEl    = wrap.querySelector('.slider-count');
  const uploadZone = wrap.querySelector('.upload-zone');
  const fileInput  = wrap.querySelector('input[type=file]');

  let current = 0;

  function getSlides() {
    return Array.from(track.querySelectorAll('.slide'));
  }

  function render() {
    const slides = getSlides();
    const n = slides.length;

    if (uploadZone) uploadZone.style.display = n === 0 ? 'flex' : 'none';

    dotsEl.innerHTML = '';
    wrap.classList.toggle('has-multiple', n > 1);

    if (current >= n) current = n - 1;
    if (current < 0) current = 0;

    track.style.transform = `translateX(-${current * 100}%)`;

    prevBtn.classList.toggle('hidden', n <= 1 || current === 0);
    nextBtn.classList.toggle('hidden', n <= 1 || current === n - 1);
    countEl.textContent = n > 1 ? (current + 1) + ' / ' + n : '';

    if (n > 1) {
      slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'dot' + (i === current ? ' active' : '');
        dot.onclick = () => goTo(i);
        dotsEl.appendChild(dot);
      });
    }
  }

  function goTo(idx) {
    current = idx;
    render();
  }

  prevBtn.addEventListener('click', e => {
    e.stopPropagation();
    if (current > 0) goTo(current - 1);
  });

  nextBtn.addEventListener('click', e => {
    e.stopPropagation();
    if (current < getSlides().length - 1) goTo(current + 1);
  });

  if (fileInput) {
    fileInput.addEventListener('change', e => {
      const files = Array.from(e.target.files);
      let loaded = 0;
      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = ev => {
          const slide = document.createElement('div');
          slide.className = 'slide';
          const img = document.createElement('img');
          img.src = ev.target.result;
          img.alt = 'Project screenshot';
          slide.appendChild(img);
          track.appendChild(slide);
          loaded++;
          if (loaded === files.length) {
            current = getSlides().length - files.length;
            render();
          }
        };
        reader.readAsDataURL(file);
      });
      fileInput.value = '';
    });
  }

  // Swipe support
  let startX = 0;
  track.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    const slides = getSlides();
    if (Math.abs(diff) > 40) {
      if (diff > 0 && current < slides.length - 1) goTo(current + 1);
      else if (diff < 0 && current > 0) goTo(current - 1);
    }
  });

  render();
});