import { schoolData, chapterNotes } from './data/data.js';  // One import statement

class NotesApp {
  constructor() {
    this.currentClass = null;
    this.currentStream = null;
    this.currentSubject = null;
    this.searchableContent = [];
    this.init();
  }

  init() {
    this.checkLogin();
    this.bindEvents();
    this.initTheme();
  }

  // Since you want no login required, just show UI
  checkLogin() {
    const classGrid = document.getElementById('classGrid');
    const classSelector = document.getElementById('classSelector');
    const searchContainer = document.getElementById('searchContainer');

    if (classGrid) classGrid.style.display = 'block';
    if (classSelector) classSelector.style.display = 'block';  // optional dropdown
    if (searchContainer) searchContainer.style.display = 'block';

    this.populateClassSelector();
  }

  bindEvents() {
    // Theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    // Class card clicks
    document.querySelectorAll('.class-card').forEach(card => {
      card.addEventListener('click', e => this.selectClass(e.currentTarget.dataset.class));
    });

    // Class selector dropdown change
    const classSelect = document.getElementById('selectedClass');
    if (classSelect) {
      classSelect.addEventListener('change', e => {
        if (e.target.value) this.selectClass(e.target.value);
      });
    }

    // Stream card clicks (delegated)
    document.addEventListener('click', e => {
      const streamCard = e.target.closest('.stream-card');
      if (streamCard) this.selectStream(streamCard.dataset.stream);
    });

    // Subject card clicks (delegated)
    document.addEventListener('click', e => {
      const subjectCard = e.target.closest('.subject-card');
      if (subjectCard) {
        const subjectName = subjectCard.querySelector('h3').textContent.trim();
        this.selectSubject(subjectName);
      }
    });

    // Chapter link clicks (delegated)
    document.addEventListener('click', e => {
      const chapterLink = e.target.closest('.chapter-link');
      if (chapterLink && !chapterLink.classList.contains('disabled')) {
        e.preventDefault();
        this.openNotes(
          chapterLink.dataset.chapter,
          chapterLink.dataset.subject,
          chapterLink.dataset.class
        );
      }
    });

    // Back buttons
    const backToClass = document.getElementById('backToClass');
    if (backToClass) backToClass.addEventListener('click', () => this.showClassGrid());

    const backToClassFromSubjects = document.getElementById('backToClassFromSubjects');
    if (backToClassFromSubjects) {
      backToClassFromSubjects.addEventListener('click', () => {
        if (this.currentClass === '11' || this.currentClass === '12') this.showStreamSelection();
        else this.showClassGrid();
      });
    }

    const backToSubjects = document.getElementById('backToSubjects');
    if (backToSubjects) backToSubjects.addEventListener('click', () => this.showSubjects());

    // Search input
    const searchBar = document.getElementById('searchBar');
    if (searchBar) {
      searchBar.addEventListener('input', e => this.enhancedSearch(e.target.value));
    }

    // Search result clicks (delegated)
    document.addEventListener('click', e => {
      const resultItem = e.target.closest('.result-item');
      if (resultItem) {
        const action = resultItem.dataset.action;
        const subject = resultItem.dataset.subject;
        const section = resultItem.dataset.section;
        if (action === 'view-subject') {
          this.selectSubject(subject);
        } else if (action === 'view-section') {
          this.selectSubject(subject);
          // You can extend to select section if needed
        }
      }
    });

    // Accordion toggling
    document.addEventListener('click', e => {
      const accordionHeader = e.target.closest('.accordion-header');
      if (accordionHeader) this.toggleAccordion(accordionHeader.parentElement);
    });
  }

  // Theme toggle methods
  initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }

  // Populate the class selector dropdown in navbar
  populateClassSelector() {
    const select = document.getElementById('selectedClass');
    if (!select) return;
    select.innerHTML = '<option value="">Select Your Class</option>';
    Object.keys(schoolData).forEach(classNum => {
      const option = document.createElement('option');
      option.value = classNum;
      option.textContent = `Class ${classNum}`;
      select.appendChild(option);
    });
  }

  selectClass(classNum) {
    this.currentClass = classNum;
    this.currentStream = null;
    this.currentSubject = null;
    const select = document.getElementById('selectedClass');
    if (select) select.value = classNum;

    if (classNum === '11' || classNum === '12') {
      this.showStreamSelection();
    } else {
      this.showSubjects();
    }
  }

  selectStream(stream) {
    this.currentStream = stream;
    this.showSubjects();
  }

  selectSubject(subjectName) {
    this.currentSubject = subjectName;
    this.showChapters();
  }

  showClassGrid() {
    this.hideAllSections();
    const grid = document.getElementById('classGrid');
    if (grid) {
      grid.style.display = 'block';
      grid.classList.add('fade-in');
    }
    this.currentClass = null;
    this.currentStream = null;
    this.currentSubject = null;
    const select = document.getElementById('selectedClass');
    if (select) select.value = '';
    const searchBar = document.getElementById('searchBar');
    if (searchBar) searchBar.value = '';
  }

  showStreamSelection() {
    this.hideAllSections();
    const streamSection = document.getElementById('streamSelection');
    if (streamSection) {
      streamSection.style.display = 'block';
      streamSection.classList.add('fade-in');
    }
  }

  showSubjects() {
    this.hideAllSections();
    const container = document.getElementById('subjectsContainer');
    const grid = document.getElementById('subjectsGrid');
    const title = document.getElementById('subjectsTitle');
    if (!container || !grid || !title) return;

    let subjects;
    if (this.currentClass === '11' || this.currentClass === '12') {
      if (!this.currentStream) return;
      subjects = schoolData[this.currentClass]?.[this.currentStream]?.subjects;
      title.textContent = `Class ${this.currentClass} - ${this.currentStream.charAt(0).toUpperCase() + this.currentStream.slice(1)} Subjects`;
    } else {
      subjects = schoolData[this.currentClass]?.subjects;
      title.textContent = `Class ${this.currentClass} Subjects`;
    }
    if (!subjects) {
      grid.innerHTML = '<p>No subjects found.</p>';
      container.style.display = 'block';
      return;
    }

    grid.innerHTML = '';
    Object.entries(subjects).forEach(([subjectName, subjectData]) => {
      const card = this.createSubjectCard(subjectName, subjectData);
      grid.appendChild(card);
    });

    container.style.display = 'block';
    container.classList.add('fade-in');

    this.updateSearchableContent();
  }

  createSubjectCard(subjectName, subjectData) {
    const card = document.createElement('div');
    card.className = 'subject-card';

    let sectionsHTML = '';
    if (subjectData.sections && subjectData.sections.length > 0) {
      sectionsHTML = `<div class="subject-sections">${subjectData.sections.map(s => `<span class="section-tag">${s}</span>`).join('')}</div>`;
    }

    card.innerHTML = `
      <h3>${subjectName}</h3>
      <p>${subjectData.chapters.length} Chapters</p>
      ${sectionsHTML}
    `;
    return card;
  }

  showChapters() {
    this.hideAllSections();
    const container = document.getElementById('chaptersContainer');
    const accordion = document.getElementById('chaptersAccordion');
    const title = document.getElementById('chaptersTitle');
    if (!container || !accordion || !title) return;

    let subjectData;
    if (this.currentClass === '11' || this.currentClass === '12') {
      subjectData = schoolData[this.currentClass]?.[this.currentStream]?.subjects?.[this.currentSubject];
    } else {
      subjectData = schoolData[this.currentClass]?.subjects?.[this.currentSubject];
    }
    if (!subjectData) {
      accordion.innerHTML = '<p>No chapters found.</p>';
      container.style.display = 'block';
      return;
    }

    title.textContent = `${this.currentSubject} - Chapters`;
    accordion.innerHTML = '';

    if (subjectData.sections && subjectData.sections.length > 1) {
      this.createSectionedChapters(accordion, subjectData);
    } else {
      this.createSingleAccordion(accordion, subjectData.chapters, 'All Chapters');
    }

    container.style.display = 'block';
    container.classList.add('fade-in');
  }

  createSectionedChapters(accordion, subjectData) {
    const chaptersPerSection = Math.ceil(subjectData.chapters.length / subjectData.sections.length);

    subjectData.sections.forEach((section, index) => {
      const start = index * chaptersPerSection;
      const end = Math.min(start + chaptersPerSection, subjectData.chapters.length);
      const sectionChapters = subjectData.chapters.slice(start, end);
      this.createSingleAccordion(accordion, sectionChapters, section);
    });
  }

  createSingleAccordion(accordion, chapters, title) {
    const item = document.createElement('div');
    item.className = 'accordion-item';

    const chaptersHTML = chapters.map(chapter => {
      const chapterName = typeof chapter === 'string' ? chapter : chapter.name;
      const chapterId = typeof chapter === 'string' ? this.getChapterId(chapter) : chapter.id;
      const hasNotes = typeof chapter === 'string' ? false : chapter.hasNotes;

      return `
        <div class="chapter-item">
          <span class="chapter-name">${chapterName}</span>
          <a href="#" class="chapter-link ${hasNotes ? '' : 'disabled'}" 
             data-chapter="${chapterId}" 
             data-subject="${this.currentSubject}" 
             data-class="${this.currentClass}"
             ${!hasNotes ? 'title="Notes coming soon!"' : ''}>
            ${hasNotes ? 'View Notes' : 'Coming Soon'}
          </a>
        </div>`;
    }).join('');

    item.innerHTML = `
      <div class="accordion-header">
        <h3>${title} (${chapters.length} chapters)</h3>
        <svg class="accordion-icon" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z"/>
        </svg>
      </div>
      <div class="accordion-content">
        <div class="chapter-list">${chaptersHTML}</div>
      </div>
    `;

    accordion.appendChild(item);
  }

  getChapterId(chapterName) {
    if (!this.currentSubject || !this.currentClass) return '';
    const subjectData = (this.currentClass === '11' || this.currentClass === '12')
      ? schoolData[this.currentClass]?.[this.currentStream]?.subjects?.[this.currentSubject]
      : schoolData[this.currentClass]?.subjects?.[this.currentSubject];
    if (!subjectData) return '';
    const chapter = subjectData.chapters.find(ch => (typeof ch === 'string' ? ch : ch.name) === chapterName);
    if (!chapter) return '';
    return typeof chapter === 'string' ? chapter.toLowerCase().replace(/\s+/g, '-') : chapter.id;
  }

  openNotes(chapterId, subject, classNum) {
    localStorage.setItem('currentNotes', JSON.stringify({
      chapterId,
      subject,
      class: classNum,
      stream: this.currentStream
    }));
    window.location.href = 'notes.html';
  }

  updateSearchableContent() {
    this.searchableContent = [];

    let subjects;
    if (this.currentClass === '11' || this.currentClass === '12') {
      if (!this.currentStream) return;
      subjects = schoolData[this.currentClass]?.[this.currentStream]?.subjects;
    } else {
      subjects = schoolData[this.currentClass]?.subjects;
    }
    if (!subjects) return;

    Object.entries(subjects).forEach(([subjectName, subjectData]) => {
      this.searchableContent.push({
        type: 'subject',
        name: subjectName,
        subject: subjectName,
        sections: subjectData.sections || [],
        chapters: subjectData.chapters
      });

      if (subjectData.sections && subjectData.sections.length > 0) {
        subjectData.sections.forEach(section => {
          this.searchableContent.push({
            type: 'section',
            name: section,
            subject: subjectName,
            section: section,
            chapters: this.getChaptersForSection(subjectData, section)
          });
        });
      }

      subjectData.chapters.forEach(chapter => {
        this.searchableContent.push({
          type: 'chapter',
          name: typeof chapter === 'string' ? chapter : chapter.name,
          subject: subjectName,
          chapter: typeof chapter === 'string' ? chapter : chapter.id
        });
      });
    });
  }

  getChaptersForSection(subjectData, sectionName) {
    if (!subjectData.sections || subjectData.sections.length <= 1) {
      return subjectData.chapters;
    }

    const idx = subjectData.sections.indexOf(sectionName);
    const perSection = Math.ceil(subjectData.chapters.length / subjectData.sections.length);
    const start = idx * perSection;
    const end = Math.min(start + perSection, subjectData.chapters.length);

    return subjectData.chapters.slice(start, end);
  }

  enhancedSearch(query) {
    if (!query.trim() || this.searchableContent.length === 0) {
      this.clearSearch();
      return;
    }

    const normalizedQuery = query.toLowerCase();

    let results = [];

    this.searchableContent.forEach(item => {
      const score = this.calculateRelevanceScore(item, normalizedQuery);
      if (score > 0) {
        results.push({
          ...item,
          score,
          matchType: this.getMatchType(item, normalizedQuery)
        });
      }
    });

    results.sort((a, b) => b.score - a.score);

    if (results.length === 0) {
      this.showNoResults(query);
      return;
    }

    this.displayEnhancedSearchResults(results, query);
  }

  calculateRelevanceScore(item, query) {
    let score = 0;

    if (item.name.toLowerCase() === query) score += 100;
    else if (item.name.toLowerCase().startsWith(query)) score += 80;
    else if (item.name.toLowerCase().includes(query)) score += 50;

    if (item.subject.toLowerCase().includes(query)) score += 30;
    if (item.section && item.section.toLowerCase().includes(query)) score += 40;

    switch (item.type) {
      case 'subject': score += 20; break;
      case 'section': score += 15; break;
      case 'chapter': score += 10; break;
    }

    return score;
  }

  getMatchType(item, query) {
    if (item.name.toLowerCase() === query) return 'exact';
    if (item.name.toLowerCase().startsWith(query)) return 'starts';
    if (item.name.toLowerCase().includes(query)) return 'contains';
    if (item.subject.toLowerCase().includes(query)) return 'subject';
    if (item.section && item.section.toLowerCase().includes(query)) return 'section';
    return 'partial';
  }

  displayEnhancedSearchResults(results, query) {
    if (results.length === 0) {
      this.showNoResults(query);
      return;
    }

    this.hideAllSections();

    const container = document.getElementById('chaptersContainer');
    const accordion = document.getElementById('chaptersAccordion');
    const title = document.getElementById('chaptersTitle');

    if (!container || !accordion || !title) return;

    title.textContent = `Search Results for "${query}" (${results.length} found)`;
    
    accordion.innerHTML = '';

    // Group results by type and subject
    const groupedResults = results.reduce((grouped, result) => {
      let groupKey;
      let groupTitle;

      switch (result.type) {
        case 'subject':
          groupKey = `subject_${result.subject}`;
          groupTitle = `📚 ${result.subject} (Subject)`;
          break;
        case 'section':
          groupKey = `section_${result.subject}_${result.section}`;
          groupTitle = `📖 ${result.section} - ${result.subject}`;
          break;
        case 'chapter':
          groupKey = `chapter_${result.subject}`;
          groupTitle = `📄 Chapters in ${result.subject}`;
          break;
      }

      if (!grouped[groupKey]) {
        grouped[groupKey] = {
          title: groupTitle,
          type: result.type,
          items: []
        };
      }

      grouped[groupKey].items.push(result);

      return grouped;
    }, {});

    Object.entries(groupedResults).forEach(([key, group]) => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'accordion-item search-result-group';

      let contentHTML = '';

      if (group.type === 'subject') {
        contentHTML = `
          <div class="search-result-content">
            <div class="result-item subject-result" data-action="view-subject" data-subject="${group.items[0].subject}">
              <div class="result-info">
                <h4>${group.items[0].subject}</h4>
                <p class="result-meta">
                  <span class="result-type">Subject</span>
                  <span class="result-count">${group.items[0].chapters.length} chapters</span>
                  ${group.items[0].sections.length > 0 ? `<span class="result-sections">${group.items[0].sections.join(', ')}</span>` : ''}
                </p>
              </div>
              <button class="result-action">View Subject</button>
            </div>
          </div>
        `;
      } else if (group.type === 'section') {
        contentHTML = `
          <div class="search-result-content">
            <div class="result-item section-result" data-action="view-section" data-subject="${group.items[0].subject}" data-section="${group.items[0].section}">
              <div class="result-info">
                <h4>${group.items[0].section}</h4>
                <p class="result-meta">
                  <span class="result-type">Book/Section</span>
                  <span class="result-subject">in ${group.items[0].subject}</span>
                  <span class="result-count">${group.items[0].chapters.length} chapters</span>
                </p>
              </div>
              <button class="result-action">View Chapters</button>
            </div>
            <div class="section-chapters">
              ${group.items[0].chapters.map(chapter => `
                <div class="chapter-item">
                  <span class="chapter-name">${chapter}</span>
                  <a href="#" class="chapter-link" onclick="alert('Opening PDF for: ${chapter}')">View PDF</a>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      } else {
        contentHTML = `
          <div class="search-result-content">
            ${group.items.map(ch => `
              <div class="chapter-item">
                <span class="chapter-name">${ch.name}</span>
                <a href="#" class="chapter-link" onclick="alert('Opening PDF for: ${ch.name}')">View PDF</a>
              </div>
            `).join('')}
          </div>
        `;
      }

      itemDiv.innerHTML = `
        <div class="accordion-header">
          <h3>${group.title} (${group.items.length} results)</h3>
          <svg class="accordion-icon" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
        <div class="accordion-content">${contentHTML}</div>
      `;

      accordion.appendChild(itemDiv);
    });

    container.style.display = 'block';
    container.classList.add('fade-in');

    // Optionally auto-expand first accordion group
    const firstAccordionItem = accordion.querySelector('.accordion-item');
    if (firstAccordionItem) this.toggleAccordion(firstAccordionItem);
  }

  clearSearch() {
    const title = document.getElementById('chaptersTitle');
    if (!title) return;
    if (!title.textContent.includes('Search Results') && !title.textContent.includes('No results')) return;

    if (this.currentSubject) {
      this.showChapters();
    } else if (this.currentClass) {
      this.showSubjects();
    } else {
      this.showClassGrid();
    }
  }

  showNoResults(query) {
    this.hideAllSections();

    const container = document.getElementById('chaptersContainer');
    const accordion = document.getElementById('chaptersAccordion');
    const title = document.getElementById('chaptersTitle');

    if (!container || !accordion || !title) return;

    title.textContent = `No results found for "${query}"`;
    accordion.innerHTML = `
      <div style="text-align:center; padding: 2rem; color: var(--text-secondary);">
        <p>No chapters, subjects, or books found matching your search.</p>
        <p>Try searching with different keywords like:</p>
        <ul style="list-style:none; padding:0; margin-top:1rem;">
          <li>• Subject names (Mathematics, English, Science)</li>
          <li>• Book names (Honeydew, Beehive, It So Happened)</li>
          <li>• Chapter names (Rational Numbers, The Fun They Had)</li>
        </ul>
      </div>
    `;

    container.style.display = 'block';
    container.classList.add('fade-in');
  }

  toggleAccordion(item, forceOpen = false) {
    if (!item) return;

    const isActive = item.classList.contains('active');

    if (!isActive || forceOpen) {
      document.querySelectorAll('.accordion-item.active').forEach(activeItem => {
        if (activeItem !== item) activeItem.classList.remove('active');
      });
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  }

  hideAllSections() {
    ['classGrid', 'streamSelection', 'subjectsContainer', 'chaptersContainer'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.style.display = 'none';
        el.classList.remove('fade-in');
      }
    });
  }

  capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new NotesApp();
});
