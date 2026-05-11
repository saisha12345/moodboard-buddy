const form = document.querySelector('#journalForm');
const chips = document.querySelectorAll('.chip');
const colorDots = document.querySelectorAll('.color-dot');
const stickerButtons = document.querySelectorAll('.sticker');
const palette = document.querySelector('#palette');
const bookGrid = document.querySelector('#bookGrid');

let selectedVibe = 'gentle';
let selectedColors = ['#fff1f6', '#f6c7d8'];
let selectedStickers = ['🌷', '⭐'];
let currentScrap = null;

const vibeContent = {
  gentle: {
    title: 'Soft Landing',
    caption: 'You can move gently and still move forward.',
    pageNote: 'This page is a soft place to put the feeling down.',
    nextStep: 'Pick one small action and give yourself credit for starting.'
  },
  dreamy: {
    title: 'Little Dream Archive',
    caption: 'Save the feeling before it floats away.',
    pageNote: 'This page holds the tiny details your future self might want to remember.',
    nextStep: 'Write one sentence you want your future self to keep.'
  },
  brave: {
    title: 'Brave Little Page',
    caption: 'Tiny courage still counts.',
    pageNote: 'This page can hold both the nerves and the courage at the same time.',
    nextStep: 'Name the thing you are avoiding, then make it 10% smaller.'
  },
  cozy: {
    title: 'Cozy Focus Scrap',
    caption: 'Comfort can be part of the plan.',
    pageNote: 'This page is for making the day feel softer without giving up on it.',
    nextStep: 'Set a small timer, make your space soft, and begin with one task.'
  }
};

function todayLabel() {
  return new Date().toLocaleDateString(undefined, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

function getBook() {
  return JSON.parse(localStorage.getItem('journalScrapBook') || '[]');
}

function saveBook(book) {
  localStorage.setItem('journalScrapBook', JSON.stringify(book));
}

function renderPalette(colors) {
  palette.innerHTML = '';
  colors.forEach((color) => {
    const swatch = document.createElement('div');
    swatch.className = 'swatch';
    swatch.style.background = color;
    swatch.title = color;
    palette.appendChild(swatch);
  });
}

function renderScrap(scrap) {
  document.querySelector('#scrapDate').textContent = scrap.date;
  document.querySelector('#scrapTitle').textContent = scrap.title;
  document.querySelector('#caption').textContent = `“${scrap.caption}”`;
  document.querySelector('#journalPreview').textContent = scrap.entry;
  document.querySelector('#pageNote').textContent = scrap.pageNote;
  document.querySelector('#nextStep').textContent = scrap.nextStep;
  document.querySelector('#stickerStrip').textContent = scrap.stickers.join(' ');
  renderPalette(scrap.colors);
}

function makeScrap(entry) {
  const vibe = vibeContent[selectedVibe];
  const trimmedEntry = entry.trim();

  return {
    id: Date.now(),
    date: todayLabel(),
    title: vibe.title,
    caption: vibe.caption,
    entry: trimmedEntry || 'A quiet little moment worth saving.',
    pageNote: vibe.pageNote,
    nextStep: vibe.nextStep,
    colors: [...selectedColors],
    stickers: [...selectedStickers]
  };
}

function deleteScrap(id) {
  const book = getBook().filter((scrap) => scrap.id !== id);
  saveBook(book);
  renderBook();
}

function renderBook() {
  const book = getBook();
  bookGrid.innerHTML = '';

  if (book.length === 0) {
    const empty = document.createElement('article');
    empty.className = 'book-card';
    empty.innerHTML = '<h3>No scraps saved yet</h3><p>Create a journal scrap and save it to start your book.</p>';
    bookGrid.appendChild(empty);
    return;
  }

  book.slice().reverse().forEach((scrap) => {
    const card = document.createElement('article');
    card.className = 'book-card';

    const miniPalette = scrap.colors.map((color) => `<span class="mini-swatch" style="background:${color}"></span>`).join('');
    const stickers = (scrap.stickers || []).join(' ');

    card.innerHTML = `
      <h3>${scrap.title}</h3>
      <p><strong>${scrap.date}</strong></p>
      <div class="mini-palette">${miniPalette}</div>
      <div class="mini-stickers">${stickers}</div>
      <p>${scrap.entry.slice(0, 100)}${scrap.entry.length > 100 ? '...' : ''}</p>
      <div class="card-actions">
        <button class="view-button" type="button" data-action="view">View</button>
        <button class="danger-button" type="button" data-action="delete">Delete</button>
      </div>
    `;

    card.querySelector('[data-action="view"]').addEventListener('click', () => {
      currentScrap = scrap;
      renderScrap(scrap);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    card.querySelector('[data-action="delete"]').addEventListener('click', () => {
      deleteScrap(scrap.id);
    });

    bookGrid.appendChild(card);
  });
}

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((item) => item.classList.remove('active'));
    chip.classList.add('active');
    selectedVibe = chip.dataset.vibe;
  });
});

colorDots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const color = dot.dataset.color;

    if (selectedColors.includes(color)) {
      if (selectedColors.length > 1) {
        selectedColors = selectedColors.filter((item) => item !== color);
        dot.classList.remove('active');
      }
    } else {
      selectedColors.push(color);
      dot.classList.add('active');
    }

    renderPalette(selectedColors);
  });
});

stickerButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const sticker = button.dataset.sticker;

    if (selectedStickers.includes(sticker)) {
      if (selectedStickers.length > 1) {
        selectedStickers = selectedStickers.filter((item) => item !== sticker);
        button.classList.remove('active');
      }
    } else {
      selectedStickers.push(sticker);
      button.classList.add('active');
    }
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  currentScrap = makeScrap(document.querySelector('#journalText').value);
  renderScrap(currentScrap);
});

document.querySelector('#saveScrap').addEventListener('click', () => {
  if (!currentScrap) {
    currentScrap = makeScrap(document.querySelector('#journalText').value);
    renderScrap(currentScrap);
  }

  const book = getBook();
  book.push({ ...currentScrap, id: Date.now() });
  saveBook(book);
  renderBook();

  document.querySelector('#saveScrap').textContent = 'Saved to book!';
  setTimeout(() => {
    document.querySelector('#saveScrap').textContent = 'Save to my book';
  }, 1400);
});

document.querySelector('#downloadPdf').addEventListener('click', () => {
  window.print();
});

currentScrap = makeScrap('Start by writing what you are carrying today.');
renderScrap(currentScrap);
renderBook();
