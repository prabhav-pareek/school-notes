import { schoolData, chapterNotes } from './data/data.js';
console.log('schoolData:', schoolData);
console.log('chapterNotes:', chapterNotes);

import { schoolData, chapterNotes } from './data/data.js';

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

    checkLogin() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        const loginPrompt = document.getElementById('loginPrompt');
        const classGrid = document.getElementById('classGrid');
        const classSelector = document.getElementById('classSelector');
        const searchContainer = document.getElementById('searchContainer');

        if (isLoggedIn) {
            loginPrompt.style.display = 'none';
            classGrid.style.display = 'block';
            classSelector.style.display = 'block';
            searchContainer.style.display = 'block';
            this.populateClassSelector();
        } else {
            loginPrompt.style.display = 'flex';
            classGrid.style.display = 'none';
            classSelector.style.display = 'none';
            searchContainer.style.display = 'none';
        }
    }

    openNotes(chapterId, subject, classNum) {
    // Store current context in localStorage for notes page
    localStorage.setItem('currentNotes', JSON.stringify({
        chapterId: chapterId,
        subject: subject,
        class: classNum,
        stream: this.currentStream
    }));
    
    // Redirect to notes page
    window.location.href = 'notes.html';
}
    populateClassSelector() {
        const select = document.getElementById('selectedClass');
        select.innerHTML = '<option value="">Select Your Class</option>';
        
        Object.keys(schoolData).forEach(classNum => {
            const option = document.createElement('option');
            option.value = classNum;
            option.textContent = `Class ${classNum}`;
            select.appendChild(option);
        });
    }

    bindEvents() {
        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => {
            this.toggleTheme();
        });

        // Class selection from grid
        document.querySelectorAll('.class-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const classNum = e.currentTarget.dataset.class;
                this.selectClass(classNum);
            });
        });

        // Class selection from dropdown
        document.getElementById('selectedClass').addEventListener('change', (e) => {
            if (e.target.value) {
                this.selectClass(e.target.value);
            }
        });

        // Stream selection
        document.addEventListener('click', (e) => {
            if (e.target.closest('.stream-card')) {
                const stream = e.target.closest('.stream-card').dataset.stream;
                this.selectStream(stream);
            }
        });
        document.addEventListener('click', (e) => {
        if (e.target.classList.contains('chapter-link')) {
            e.preventDefault();
            const chapterId = e.target.dataset.chapter;
            const subject = e.target.dataset.subject;
            const classNum = e.target.dataset.class;
            this.openNotes(chapterId, subject, classNum);
        }
     });
        // Subject selection
        document.addEventListener('click', (e) => {
            if (e.target.closest('.subject-card')) {
                const subjectName = e.target.closest('.subject-card').querySelector('h3').textContent;
                this.selectSubject(subjectName);
            }
        });

        // Back buttons
        document.getElementById('backToClass').addEventListener('click', () => {
            this.showClassGrid();
        });

        document.getElementById('backToClassFromSubjects').addEventListener('click', () => {
            if (this.currentClass === '11' || this.currentClass === '12') {
                this.showStreamSelection();
            } else {
                this.showClassGrid();
            }
        });

        document.getElementById('backToSubjects').addEventListener('click', () => {
            this.showSubjects();
        });

        // Enhanced search functionality
        document.getElementById('searchBar').addEventListener('input', (e) => {
            this.enhancedSearch(e.target.value);
        });

        // Handle search result actions
        document.addEventListener('click', (e) => {
            if (e.target.closest('.result-item')) {
                const resultItem = e.target.closest('.result-item');
                const action = resultItem.dataset.action;
                const subject = resultItem.dataset.subject;
                const section = resultItem.dataset.section;
                
                if (action === 'view-subject') {
                    this.selectSubject(subject);
                } else if (action === 'view-section') {
                    this.selectSubject(subject);
                    // Could add specific section filtering here
                }
            }
        });

        // Accordion functionality
        document.addEventListener('click', (e) => {
            if (e.target.closest('.accordion-header')) {
                this.toggleAccordion(e.target.closest('.accordion-item'));
            }
        });
    }

    initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    selectClass(classNum) {
        this.currentClass = classNum;
        document.getElementById('selectedClass').value = classNum;

        if (classNum === '11' || classNum === '12') {
            this.showStreamSelection();
        } else {
            this.currentStream = null;
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
        document.getElementById('classGrid').style.display = 'block';
        document.getElementById('classGrid').classList.add('fade-in');
        this.currentClass = null;
        this.currentStream = null;
        document.getElementById('selectedClass').value = '';
        document.getElementById('searchBar').value = '';
    }

    showStreamSelection() {
        this.hideAllSections();
        document.getElementById('streamSelection').style.display = 'block';
        document.getElementById('streamSelection').classList.add('fade-in');
    }

    showSubjects() {
        this.hideAllSections();
        
        const container = document.getElementById('subjectsContainer');
        const grid = document.getElementById('subjectsGrid');
        const title = document.getElementById('subjectsTitle');
        
        let subjects;
        if (this.currentClass === '11' || this.currentClass === '12') {
            subjects = schoolData[this.currentClass][this.currentStream];
            title.textContent = `Class ${this.currentClass} - ${this.currentStream.charAt(0).toUpperCase() + this.currentStream.slice(1)} Subjects`;
        } else {
            subjects = schoolData[this.currentClass].subjects;
            title.textContent = `Class ${this.currentClass} Subjects`;
        }

        grid.innerHTML = '';
        
        Object.entries(subjects).forEach(([subjectName, subjectData]) => {
            const card = this.createSubjectCard(subjectName, subjectData);
            grid.appendChild(card);
        });

        container.style.display = 'block';
        container.classList.add('fade-in');
        
        // Update searchable content with enhanced search capabilities
        this.updateSearchableContent();
    }

    createSubjectCard(subjectName, subjectData) {
        const card = document.createElement('div');
        card.className = 'subject-card';
        
        let sectionsHTML = '';
        if (subjectData.sections && subjectData.sections.length > 0) {
            sectionsHTML = `
                <div class="subject-sections">
                    ${subjectData.sections.map(section => `<span class="section-tag">${section}</span>`).join('')}
                </div>
            `;
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
        
        let subjectData;
        if (this.currentClass === '11' || this.currentClass === '12') {
            subjectData = schoolData[this.currentClass][this.currentStream][this.currentSubject];
        } else {
            subjectData = schoolData[this.currentClass].subjects[this.currentSubject];
        }

        title.textContent = `${this.currentSubject} - Chapters`;
        accordion.innerHTML = '';

        if (subjectData.sections && subjectData.sections.length > 1) {
            // Group chapters by sections for subjects like English
            this.createSectionedChapters(accordion, subjectData);
        } else {
            // Create single accordion for all chapters
            this.createSingleAccordion(accordion, subjectData.chapters, 'All Chapters');
        }

        container.style.display = 'block';
        container.classList.add('fade-in');
    }

    createSectionedChapters(accordion, subjectData) {
        const chaptersPerSection = Math.ceil(subjectData.chapters.length / subjectData.sections.length);
        
        subjectData.sections.forEach((section, index) => {
            const startIndex = index * chaptersPerSection;
            const endIndex = Math.min(startIndex + chaptersPerSection, subjectData.chapters.length);
            const sectionChapters = subjectData.chapters.slice(startIndex, endIndex);
            
            this.createSingleAccordion(accordion, sectionChapters, section);
        });
    }

    createSingleAccordion(accordion, chapters, title) {
    const item = document.createElement('div');
    item.className = 'accordion-item';
    
    // Handle both string and object chapter formats
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
            </div>
        `;
    }).join('');

    item.innerHTML = `
        <div class="accordion-header">
            <h3>${title} (${chapters.length} chapters)</h3>
            <svg class="accordion-icon" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z"/>
            </svg>
        </div>
        <div class="accordion-content">
            <div class="chapter-list">
                ${chaptersHTML}
            </div>
        </div>
    `;

    accordion.appendChild(item);
}


    updateSearchableContent() {
        this.searchableContent = [];
        
        let subjects;
        if (this.currentClass === '11' || this.currentClass === '12') {
            subjects = schoolData[this.currentClass][this.currentStream];
        } else {
            subjects = schoolData[this.currentClass].subjects;
        }

        Object.entries(subjects).forEach(([subjectName, subjectData]) => {
            // Add subject to searchable content
            this.searchableContent.push({
                type: 'subject',
                name: subjectName,
                subject: subjectName,
                sections: subjectData.sections || [],
                chapters: subjectData.chapters
            });

            // Add sections/books to searchable content
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

            // Add chapters to searchable content
            subjectData.chapters.forEach(chapter => {
                this.searchableContent.push({
                    type: 'chapter',
                    name: chapter,
                    subject: subjectName,
                    chapter: chapter
                });
            });
        });
    }

    getChaptersForSection(subjectData, sectionName) {
        if (!subjectData.sections || subjectData.sections.length <= 1) {
            return subjectData.chapters;
        }
        
        const sectionIndex = subjectData.sections.indexOf(sectionName);
        const chaptersPerSection = Math.ceil(subjectData.chapters.length / subjectData.sections.length);
        const startIndex = sectionIndex * chaptersPerSection;
        const endIndex = Math.min(startIndex + chaptersPerSection, subjectData.chapters.length);
        
        return subjectData.chapters.slice(startIndex, endIndex);
    }

    enhancedSearch(query) {
        if (!query.trim() || this.searchableContent.length === 0) {
            this.clearSearch();
            return;
        }

        const normalizedQuery = query.toLowerCase();
        const results = [];

        // Search through all content types
        this.searchableContent.forEach(item => {
            const score = this.calculateRelevanceScore(item, normalizedQuery);
            if (score > 0) {
                results.push({
                    ...item,
                    score: score,
                    matchType: this.getMatchType(item, normalizedQuery)
                });
            }
        });

        // Sort by relevance score (highest first)
        results.sort((a, b) => b.score - a.score);

        this.displayEnhancedSearchResults(results, query);
    }

    calculateRelevanceScore(item, query) {
        let score = 0;
        
        // Exact match gets highest score
        if (item.name.toLowerCase() === query) {
            score += 100;
        }
        // Starts with query gets high score
        else if (item.name.toLowerCase().startsWith(query)) {
            score += 80;
        }
        // Contains query gets medium score
        else if (item.name.toLowerCase().includes(query)) {
            score += 50;
        }
        
        // Subject name matches
        if (item.subject.toLowerCase().includes(query)) {
            score += 30;
        }
        
        // Section name matches (for chapters)
        if (item.section && item.section.toLowerCase().includes(query)) {
            score += 40;
        }
        
        // Boost score based on content type priority
        switch (item.type) {
            case 'subject':
                score += 20;
                break;
            case 'section':
                score += 15;
                break;
            case 'chapter':
                score += 10;
                break;
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
        
        title.textContent = `Search Results for "${query}" (${results.length} found)`;
        accordion.innerHTML = '';

        // Group results by type and subject
        const groupedResults = this.groupSearchResults(results);
        
        Object.entries(groupedResults).forEach(([groupKey, items]) => {
            this.createSearchResultAccordion(accordion, groupKey, items);
        });

        container.style.display = 'block';
        container.classList.add('fade-in');

        // Auto-expand first result if it's highly relevant
        const firstAccordion = accordion.querySelector('.accordion-item');
        if (firstAccordion && results[0].score > 70) {
            this.toggleAccordion(firstAccordion, true);
        }
    }

    groupSearchResults(results) {
        const grouped = {};
        
        results.forEach(result => {
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
        });
        
        return grouped;
    }

    createSearchResultAccordion(accordion, groupKey, group) {
        const item = document.createElement('div');
        item.className = 'accordion-item search-result-group';
        
        let contentHTML = '';
        
        if (group.type === 'subject') {
            // Show subject overview with option to view all chapters
            const subjectItem = group.items[0];
            contentHTML = `
                <div class="search-result-content">
                    <div class="result-item subject-result" data-action="view-subject" data-subject="${subjectItem.subject}">
                        <div class="result-info">
                            <h4>${subjectItem.subject}</h4>
                            <p class="result-meta">
                                <span class="result-type">Subject</span>
                                <span class="result-count">${subjectItem.chapters.length} chapters</span>
                                ${subjectItem.sections.length > 0 ? `<span class="result-sections">${subjectItem.sections.join(', ')}</span>` : ''}
                            </p>
                        </div>
                        <button class="result-action">View Subject</button>
                    </div>
                </div>
            `;
        } else if (group.type === 'section') {
            // Show section with its chapters
            const sectionItem = group.items[0];
            contentHTML = `
                <div class="search-result-content">
                    <div class="result-item section-result" data-action="view-section" data-subject="${sectionItem.subject}" data-section="${sectionItem.section}">
                        <div class="result-info">
                            <h4>${sectionItem.section}</h4>
                            <p class="result-meta">
                                <span class="result-type">Book/Section</span>
                                <span class="result-subject">in ${sectionItem.subject}</span>
                                <span class="result-count">${sectionItem.chapters.length} chapters</span>
                            </p>
                        </div>
                        <button class="result-action">View Chapters</button>
                    </div>
                    <div class="section-chapters">
                        ${sectionItem.chapters.map(chapter => `
                            <div class="chapter-item">
                                <span class="chapter-name">${chapter}</span>
                                <a href="#" class="chapter-link" onclick="alert('Opening PDF for: ${chapter}')">View PDF</a>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        } else {
            // Show chapters grouped by subject
            contentHTML = `
                <div class="search-result-content">
                    ${group.items.map(chapterItem => `
                        <div class="chapter-item">
                            <span class="chapter-name">${chapterItem.chapter}</span>
                            <a href="#" class="chapter-link" onclick="alert('Opening PDF for: ${chapterItem.chapter}')">View PDF</a>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        item.innerHTML = `
            <div class="accordion-header">
                <h3>${group.title} (${group.items.length} ${group.items.length === 1 ? 'result' : 'results'})</h3>
                <svg class="accordion-icon" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z"/>
                </svg>
            </div>
            <div class="accordion-content">
                ${contentHTML}
            </div>
        `;

        accordion.appendChild(item);
    }

    showNoResults(query) {
        this.hideAllSections();
        
        const container = document.getElementById('chaptersContainer');
        const accordion = document.getElementById('chaptersAccordion');
        const title = document.getElementById('chaptersTitle');
        
        title.textContent = `No results found for "${query}"`;
        accordion.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                <p>No chapters, subjects, or books found matching your search.</p>
                <p>Try searching with different keywords like:</p>
                <ul style="list-style: none; padding: 0; margin-top: 1rem;">
                    <li>• Subject names (Mathematics, English, Science)</li>
                    <li>• Book names (Honeydew, Beehive, It So Happened)</li>
                    <li>• Chapter names (Rational Numbers, The Fun They Had)</li>
                </ul>
            </div>
        `;
        
        container.style.display = 'block';
        container.classList.add('fade-in');
    }

    clearSearch() {
        // Don't clear if we're not in a search state
        const currentTitle = document.getElementById('chaptersTitle').textContent;
        if (!currentTitle.includes('Search Results') && !currentTitle.includes('No results found')) {
            return;
        }

        if (this.currentSubject) {
            this.showChapters();
        } else if (this.currentClass) {
            this.showSubjects();
        }
    }

    toggleAccordion(item, forceOpen = false) {
        const isActive = item.classList.contains('active');
        
        if (!isActive || forceOpen) {
            // Close all other accordions
            document.querySelectorAll('.accordion-item.active').forEach(activeItem => {
                if (activeItem !== item) {
                    activeItem.classList.remove('active');
                }
            });
            
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    }

    hideAllSections() {
        const sections = [
            'classGrid',
            'streamSelection', 
            'subjectsContainer',
            'chaptersContainer'
        ];
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            section.style.display = 'none';
            section.classList.remove('fade-in');
        });
    }
}


// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NotesApp();
});
