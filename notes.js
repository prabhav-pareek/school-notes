class NotesViewer {
    constructor() {
        this.currentChapter = null;
        this.currentSection = 'introduction';
        this.subjectContext = null; // Store for back navigation
        this.init();
    }

    init() {
        this.initTheme();
        this.loadChapterData();
        this.bindEvents();
        this.setupSmoothScrolling();
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

    loadChapterData() {
        // Read chapter info from localStorage (or fallback)
        const notesInfo = JSON.parse(localStorage.getItem('currentNotes') || '{}');

        if (!notesInfo.chapterId) {
            notesInfo.chapterId = 'rational-numbers'; // default
            notesInfo.subject = 'Mathematics';
            notesInfo.class = '8';
        }

        // Store subject context for navigation
        this.subjectContext = {
            class: notesInfo.class,
            subject: notesInfo.subject
        };

        this.currentChapter = chapterNotes[notesInfo.chapterId];

        if (!this.currentChapter) {
            this.showError('Chapter notes not found!');
            return;
        }

        // Set page title and header
        document.title = `${this.currentChapter.title} - Learn Ledger`;
        const chapterTitleElement = document.getElementById('chapterTitle');
        if (chapterTitleElement) {
            chapterTitleElement.textContent = `Class ${this.currentChapter.class} ${this.currentChapter.subject} - ${this.currentChapter.title}`;
        }

        // Load initial section content
        this.loadSection('introduction');
        this.updateMenuHighlight('introduction');
    }

    loadSection(sectionName) {
        const content = this.currentChapter.content[sectionName];
        if (!content) {
            this.showError(`Section '${sectionName}' not found!`);
            return;
        }
        const contentContainer = document.getElementById('notesContent');
        if (contentContainer) {
            contentContainer.innerHTML = `
                <div class="section-header">
                    <h1>${content.title}</h1>
                </div>
                <div class="section-content">${content.content}</div>
            `;
            this.currentSection = sectionName;
            this.addInteractivity();
            this.scrollToTop();
        }
    }

    addInteractivity() {
        // MCQ answer toggling
        document.querySelectorAll('.answer').forEach(answer => {
            const questionCard = answer.closest('.question-card');
            if (questionCard && !questionCard.querySelector('.show-answer-btn')) {
                const btn = document.createElement('button');
                btn.textContent = 'Show Answer';
                btn.className = 'show-answer-btn';
                btn.onclick = () => {
                    answer.classList.toggle('hidden');
                    btn.textContent = answer.classList.contains('hidden') ? 'Show Answer' : 'Hide Answer';
                };
                questionCard.appendChild(btn);
            }
        });

        // Solution reveal
        document.querySelectorAll('.solution').forEach(solution => {
            const question = solution.closest('.question');
            if (question && !question.querySelector('.show-solution-btn')) {
                const btn = document.createElement('button');
                btn.textContent = 'Show Solution';
                btn.className = 'show-solution-btn';
                btn.onclick = () => {
                    solution.classList.toggle('hidden');
                    btn.textContent = solution.classList.contains('hidden') ? 'Show Solution' : 'Hide Solution';
                };
                question.appendChild(btn);
            }
        });

        // Guide reveal
        document.querySelectorAll('.answer-guide').forEach(guide => {
            const question = guide.closest('.question');
            if (question && !question.querySelector('.show-guide-btn')) {
                const btn = document.createElement('button');
                btn.textContent = 'Show Answer Guide';
                btn.className = 'show-guide-btn';
                btn.onclick = () => {
                    guide.classList.toggle('hidden');
                    btn.textContent = guide.classList.contains('hidden') ? 'Show Answer Guide' : 'Hide Answer Guide';
                };
                question.appendChild(btn);
            }
        });
    }

    updateMenuHighlight(sectionName) {
        document.querySelectorAll('.menu-link').forEach(link => link.classList.remove('active'));
        const currentLink = document.querySelector(`a[href="#${sectionName}"]`);
        if (currentLink) {
            currentLink.classList.add('active');
        }
    }

    setupSmoothScrolling() {
        document.documentElement.style.scrollBehavior = 'smooth';
    }

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navigateBack() {
        if (this.subjectContext) {
            localStorage.setItem('backToSubject', JSON.stringify({
                class: this.subjectContext.class,
                subject: this.subjectContext.subject,
                returnToSubject: true
            }));
            window.location.href = 'index.html';
        } else {
            window.location.href = 'index.html';
        }
    }

    bindEvents() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        const backBtn = document.getElementById('backToHub');
        if (backBtn) {
            backBtn.addEventListener('click', () => this.navigateBack());
        }

        const downloadBtn = document.getElementById('downloadNotes');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => this.downloadNotes());
        }

        document.querySelectorAll('.menu-link').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const section = link.getAttribute('href').substring(1);
                this.loadSection(section);
                this.updateMenuHighlight(section);
            });
        });
    }

    downloadNotes() {
        const chapterTitle = this.currentChapter.title.replace(/[^a-z0-9]/gi, '_');
        alert(`Download functionality would generate PDF for: ${chapterTitle}.pdf\n\nNote: This is a demo.`);
    }

    showError(message) {
        const container = document.getElementById('notesContent');
        if (container) {
            container.innerHTML = `
                <div class="error-section">
                    <h2>⚠️ Error</h2>
                    <p>${message}</p>
                    <button onclick="window.location.href='index.html'" class="back-btn">← Back to Home</button>
                </div>`;
        }
    }
}

// Initialize when DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    window.notesViewer = new NotesViewer();
});
