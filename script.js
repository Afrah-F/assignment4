const userChip = document.getElementById('userChip');
const gate = document.getElementById('nameGate');
const gateForm = document.getElementById('nameGateForm');
const nameInput = document.getElementById('nameInput');

function updateGreetingAndChip() {
    const name = localStorage.getItem('username') || 'there';
    if (userChip) userChip.textContent = `Hi, ${name}`;
}

(function initGate() {
    const saved = localStorage.getItem('username');
    if (!saved) {
        gate?.classList.add('show');
        setTimeout(() => nameInput?.focus(), 100);
    } else {
        updateGreetingAndChip();
    }
})();

gateForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = nameInput?.value.trim();
    if (!value) return;
    localStorage.setItem('username', value);
    gate?.classList.remove('show');
    updateGreetingAndChip();
    nameInput.value = '';
});

/* Theme Toggle */
const themeBtn = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-mode');
    themeBtn.textContent = 'Light Mode';
} else {
    themeBtn.textContent = 'Dark Mode';
}
themeBtn?.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    const isDark = document.documentElement.classList.contains('dark-mode');
    themeBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

/* Custom Cursor */
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});


const githubListEl = document.getElementById('githubRepos');
const githubSpinnerEl = document.getElementById('githubSpinner');
const githubErrorEl = document.getElementById('githubError');

async function loadGitHubRepos() {
    githubSpinnerEl.style.display = 'flex';
    githubErrorEl.classList.add('hidden');
    githubListEl.innerHTML = '';

    try {
        // 
        const response = await fetch(`https://api.allorigins.ml/get?url=${encodeURIComponent('https://api.github.com/users/Afrah-F/repos?sort=updated&per_page=6')}`);
        
        if (!response.ok) throw new Error();

        const data = await response.json();
        const repos = JSON.parse(data.contents);

        repos.slice(0, 6).forEach(repo => {
            const card = document.createElement('article');
            card.className = 'project-card fade-in';
            card.innerHTML = `
                <div class="project-body">
                    <h3>${repo.name.replace(/-/g, ' ')}</h3>
                    <div class="project-meta">
                        ${repo.language || 'Various'} • ${new Date(repo.updated_at).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}
                    </div>
                    <p>${repo.description || 'No description available.'}</p>
                    <a href="${repo.html_url}" target="_blank" class="btn small">View on GitHub</a>
                </div>
            `;
            githubListEl.appendChild(card);
        });

    } catch (err) {
        githubListEl.innerHTML = `
            <div style="grid-column: 1/-1; text-align:center; padding:40px; background:var(--bg-soft); border-radius:16px;">
                <p style="font-size:1.1rem; color:var(--muted); margin-bottom:16px;">
                    GitHub API limit reached (normal for public demos)
                </p>
                <p style="color:var(--text);">
                    Visit my GitHub directly: 
                    <a href="https://github.com/Afrah-F" target="_blank" style="color:var(--primary); font-weight:700;">
                        github.com/Afrah-F
                    </a>
                </p>
            </div>
        `;
    } finally {
        githubSpinnerEl.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', loadGitHubRepos);

/* Projects */
const projects = [
    { title: 'CLUBZONE Platform', category: 'Web', date: '2025-01-10', img: 'assets/club.png', summary: 'A web platform to manage and join student clubs.', details: 'SWE206 - using figma.' },
    { title: 'Online Gaming Data Analysis', category: 'Data', date: '2024-04-01', img: 'assets/online.png', summary: 'Collected and analyzed player data with visual insights.', details: 'Python, Pandas, Matplotlib & Power BI.' },
    { title: 'Saudi Electricity Investment', category: 'Presentation', date: '2024-05-16', img: 'assets/elec.png', summary: 'English presentation on investment benefits.', details: 'Research, writing, and public speaking skills.' }
];

const listEl = document.getElementById('projectsList');
const emptyEl = document.getElementById('emptyState');
const chips = [...document.querySelectorAll('.chip')];
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');

let activeFilter = 'all', query = '', sortBy = 'date-desc';

function compare(a, b) {
    if (sortBy === 'date-desc') return new Date(b.date) - new Date(a.date);
    if (sortBy === 'date-asc') return new Date(a.date) - new Date(b.date);
    if (sortBy === 'title-asc') return a.title.localeCompare(b.title);
    if (sortBy === 'title-desc') return b.title.localeCompare(a.title);
    return 0;
}

function match(p) {
    const passFilter = activeFilter === 'all' || p.category === activeFilter;
    const q = query.toLowerCase();
    return passFilter && (
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
}

function render() {
    const filtered = projects.filter(match).sort(compare);
    listEl.innerHTML = '';
    if (filtered.length === 0) return emptyEl.classList.remove('hidden');
    emptyEl.classList.add('hidden');

    filtered.forEach(p => {
        const card = document.createElement('article');
        card.className = 'project-card';
        card.innerHTML = `
      <img src="${p.img}" alt="${p.title}" loading="lazy">
      <div class="project-body">
        <h3>${p.title}</h3>
        <div class="project-meta" data-tag="${p.category}">${p.category} • ${new Date(p.date).toLocaleDateString()}</div>
        <p>${p.summary}</p>
        <details><summary>More Details</summary><p>${p.details}</p></details>
      </div>
    `;
        listEl.appendChild(card);
    });
}

chips.forEach(btn => btn.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    render();
}));
searchInput?.addEventListener('input', e => { query = e.target.value; render(); });
sortSelect?.addEventListener('change', e => { sortBy = e.target.value; render(); });
render();

/* Contact Form */
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function displayError(field, msg) {
    const el = document.querySelector(`.field-error[data-for="${field}"]`);
    if (el) el.textContent = msg;
    contactForm.querySelector(`[name="${field}"]`)?.classList.add('error-input');
}

function clearErrors() {
    document.querySelectorAll('.field-error').forEach(el => el.textContent = '');
    document.querySelectorAll('.error-input').forEach(el => el.classList.remove('error-input'));
    if (formStatus) formStatus.textContent = '';
}

contactForm?.addEventListener('submit', e => {
    e.preventDefault();
    clearErrors();
    const data = Object.fromEntries(new FormData(contactForm));
    let valid = true;

    if (!data.name.trim()) valid = false;
    if (!data.email.trim() || !validateEmail(data.email)) valid = false;
    if (!data.message.trim() || data.message.trim().length < 10) valid = false;

    if (valid) {
        formStatus.innerHTML = '<span class="spinner"></span> Sending...';
        setTimeout(() => {
            formStatus.textContent = 'Thank you! Message sent successfully.';
            formStatus.style.color = 'var(--primary)';
            contactForm.reset();
            setTimeout(() => formStatus.textContent = '', 5000);
        }, 1500);
    } else {
        formStatus.textContent = 'Please fill all fields correctly';
        formStatus.style.color = '#ef4444';
    }
});

/* Back to Top */
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    backToTopBtn.style.display = (window.scrollY > 300) ? 'block' : 'none';
});
backToTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
