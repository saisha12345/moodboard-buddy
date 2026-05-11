const form = document.querySelector('#journalForm');
const chips = document.querySelectorAll('.chip');
const colorDots = document.querySelectorAll('.color-dot');
const palette = document.querySelector('#palette');
const bookGrid = document.querySelector('#bookGrid');

let selectedVibe = 'gentle';
let selectedColors = ['#fff1f6', '#f6c7d8'];
let currentScrap = null;

const vibeContent = {
  gentle: {
    title: 'Soft Landing',
    mascot: '🐰📓',
    caption: 'You can move gently and still move forward.',
    reflection: 'This moment is asking for patience, not pressure.',
    nextStep: 'Pick one small action and give yourself credit for starting.'
  },
  dreamy: {
    title: 'Little Dream Archive',
    mascot: '🌙🧸',
    caption: 'Save the feeling before it floats away.',
    reflection: 'There is something tender here worth noticing and keeping.',
    nextStep: 'Write one sentence you want your future self to remember.'
  },
  brave: {
    title: 'Brave Little Page',
    mascot: '🐯✨',
    caption: 'Tiny courage still counts.',
    reflection: 'You are allowed to feel nervous and still choose the next step.',
    nextStep: 'Name the thing you are avoiding, then make it 10% smaller.'
  },
  cozy: {
    title: 'Cozy Focus Scrap',
    mascot: '🐻☕',
    caption: 'Comfort can be part of the plan.',
    reflection: 'Your energy does not need to be perfect to be useful.',
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
  document.querySelector('#mascot').textContent = scrap.mascot;
  document.querySelector('#caption').textContent = `“${scrap.caption}”`;
  document.querySelector('#journalPreview').textContent = scrap.entry;
  document.querySelector('#reflection').textContent = scrap.reflection;
  document.querySelector('#nextStep').textContent = scrap.nextStep;
  renderPalette(scrap.colors);
}

function makeScrap(entry) {
  const vibe = vibeContent[selectedVibe];
  const trimmedEntry = entry.trim();
  const personalReflection = trimmedEntry.length > 0
    ? `${vibe.reflection} I noticed this from your entry: “${trimmedEntry.slice(0, 95)}${trimmedEntry.length > 95 ? '...' : ''}”`
    : vibe.reflection;

  return {
    id: Date.now(),
    date: todayLabel(),
    title: vibe.title,
    mascot: vibe.mascot,
    caption: vibe.caption,
    entry: trimmedEntry || 'A quiet little moment worth saving.',
    reflection: personalReflection,
    nextStep: vibe.nextStep,
    colors: [...selectedColors]
  };
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

    card.innerHTML = `
      <h3>${scrap.mascot} ${scrap.title}</h3>
      <p><strong>${scrap.date}</strong></p>
      <div class="mini-palette">${miniPalette}</div>
      <p>${scrap.entry.slice(0, 120)}${scrap.entry.length > 120 ? '...' : ''}</p>
    `;

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
  book.push(currentScrap);
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

document.querySelector('#clearBook').addEventListener('click', () => {
  localStorage.removeItem('journalScrapBook');
  renderBook();
});

currentScrap = makeScrap('Start by writing what you are carrying today.');
renderScrap(currentScrap);
renderBook();
