const pages = [
  { title: 'Overview', url: '/', description: 'What Advanced Fabrics is and where to begin' },
  { title: 'Quick start', url: '/quick-start/', description: 'Evaluate from source and verify artifacts' },
  { title: 'Concepts', url: '/concepts/', description: 'Topology, observation, policy and providers' },
  { title: 'Architecture', url: '/architecture/', description: 'Contracts, providers and reference runtime' },
  { title: 'Security and safety', url: '/security/', description: 'Read-only defaults and controlled apply' },
  { title: 'Specifications', url: '/specifications/', description: 'AFEPs, API contracts and conformance' },
  { title: 'Community', url: '/community/', description: 'Governance, roadmap and contribution' }
];

const input = document.querySelector('#site-search');
const results = document.querySelector('#search-results');
if (input && results) {
  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    results.replaceChildren();
    if (!query) return;
    const matches = pages.filter(page => (page.title + ' ' + page.description).toLowerCase().includes(query));
    for (const page of matches) {
      const link = document.createElement('a');
      link.href = page.url;
      link.textContent = page.title;
      const detail = document.createElement('small');
      detail.textContent = page.description;
      link.append(detail);
      results.append(link);
    }
    if (!matches.length) {
      const message = document.createElement('p');
      message.textContent = 'No matching page';
      results.append(message);
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      event.preventDefault();
      input.focus();
    }
  });
}

const toggle = document.querySelector('#menu-toggle');
const sidebar = document.querySelector('#sidebar');
if (toggle && sidebar) {
  toggle.addEventListener('click', () => {
    const open = sidebar.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close documentation menu' : 'Open documentation menu');
  });
}
