// Skills search + accessible expandable-card behavior.
// Pure helpers are exported for the Node test harness; browser startup is
// guarded so importing this module under `node --test` is side-effect free.

export const STATUS_LABELS = {
  stable: '稳定',
  'in-progress': '开发中',
  misc: '杂项',
  personal: '个人专用',
  deprecated: '已弃用',
};

export function normalizeQuery(value) {
  return String(value ?? '').trim().toLocaleLowerCase();
}

// Empty normalized query returns the original skills array (no copy).
// Otherwise matches the normalized query against every documented field.
export function filterSkills(skills, query) {
  const normalized = normalizeQuery(query);
  if (normalized === '') return skills;
  return skills.filter((skill) => {
    const fields = [
      skill.name,
      skill.author,
      skill.collection,
      skill.status,
      skill.description,
      skill.recommended,
      skill.notRecommended,
    ];
    return fields.some((field) =>
      String(field ?? '').toLocaleLowerCase().includes(normalized)
    );
  });
}

const COLLAPSED_TEXT = '查看详情';
const EXPANDED_TEXT = '收起详情';

function statusLabel(status) {
  return STATUS_LABELS[status] ?? String(status ?? '');
}

function createCard(skill, openDetail) {
  const article = document.createElement('article');
  article.className = 'skill-card';

  const heading = document.createElement('h3');
  heading.textContent = skill.name;
  article.appendChild(heading);

  const meta = document.createElement('p');
  meta.className = 'skill-meta';
  meta.textContent = `${skill.author ?? ''} / ${skill.collection ?? ''}`;
  article.appendChild(meta);

  const status = document.createElement('span');
  status.className = 'skill-status';
  status.textContent = statusLabel(skill.status);
  article.appendChild(status);

  const description = document.createElement('p');
  description.className = 'skill-description';
  description.textContent = skill.description ?? '';
  article.appendChild(description);

  const recommendation = document.createElement('p');
  recommendation.className = 'skill-recommendation';
  recommendation.textContent = skill.recommended ?? '';
  article.appendChild(recommendation);

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'expand-button';
  const detailsId = `details-${skill.id}`;
  button.setAttribute('aria-controls', detailsId);
  button.setAttribute('aria-expanded', 'false');
  button.textContent = COLLAPSED_TEXT;

  const details = document.createElement('div');
  details.id = detailsId;
  details.className = 'skill-details';
  details.hidden = true;

  const fullDescription = document.createElement('p');
  fullDescription.textContent = skill.description ?? '';
  details.appendChild(fullDescription);

  const recommended = document.createElement('p');
  recommended.textContent = `推荐：${skill.recommended ?? ''}`;
  details.appendChild(recommended);

  const notRecommended = document.createElement('p');
  notRecommended.textContent = `不推荐：${skill.notRecommended ?? ''}`;
  details.appendChild(notRecommended);

  const sourceLink = document.createElement('a');
  sourceLink.href = skill.sourceUrl ?? '';
  sourceLink.target = '_blank';
  sourceLink.rel = 'noopener noreferrer';
  sourceLink.textContent = '查看 GitHub 原文';
  details.appendChild(sourceLink);

  button.addEventListener('click', () => openDetail(button, details));

  article.appendChild(button);
  article.appendChild(details);
  return article;
}

function startApp() {
  const searchInput = document.getElementById('skill-search');
  const clearButton = document.getElementById('clear-search');
  const resultsContainer = document.getElementById('skills-results');
  const resultCount = document.getElementById('result-count');
  const emptyState = document.getElementById('empty-state');
  const errorState = document.getElementById('error-state');

  let allSkills = [];
  let openButton = null;
  let openDetails = null;

  function closeOpenDetail() {
    if (openDetails) {
      openDetails.hidden = true;
    }
    if (openButton) {
      openButton.setAttribute('aria-expanded', 'false');
      openButton.textContent = COLLAPSED_TEXT;
    }
    openDetails = null;
    openButton = null;
  }

  function openDetail(button, details) {
    if (openDetails === details) {
      closeOpenDetail();
      return;
    }
    closeOpenDetail();
    details.hidden = false;
    button.setAttribute('aria-expanded', 'true');
    button.textContent = EXPANDED_TEXT;
    openDetails = details;
    openButton = button;
  }

  function render(skills) {
    // The list is fully rebuilt, so any previously open detail node is gone.
    openButton = null;
    openDetails = null;
    resultsContainer.replaceChildren();
    skills.forEach((skill) => {
      resultsContainer.appendChild(createCard(skill, openDetail));
    });
    if (skills.length === 0) {
      emptyState.hidden = false;
      resultCount.textContent = '找到 0 个技能';
    } else {
      emptyState.hidden = true;
      resultCount.textContent = `找到 ${skills.length} 个技能`;
    }
  }

  function showError(error) {
    // eslint-disable-next-line no-console
    console.error(error);
    errorState.hidden = false;
    emptyState.hidden = true;
    resultsContainer.replaceChildren();
    resultCount.textContent = '无法加载技能数据';
  }

  function applySearch() {
    closeOpenDetail();
    render(filterSkills(allSkills, searchInput.value));
  }

  searchInput.addEventListener('input', applySearch);
  clearButton.addEventListener('click', () => {
    searchInput.value = '';
    searchInput.focus();
    render(allSkills);
  });

  fetch('./data/skills.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((skills) => {
      allSkills = Array.isArray(skills) ? skills : [];
      render(allSkills);
    })
    .catch((error) => {
      showError(error);
    });
}

if (typeof document !== 'undefined') {
  startApp();
}
