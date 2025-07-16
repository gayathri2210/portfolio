// Sample projects data
const projects = [
    {
        title: "Project One",
        description: "A brief description of what this project is about and what technologies were used.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "assets/project1.jpg",
        demo: "#",
        code: "#"
    },
    {
        title: "Project Two",
        description: "Another project description highlighting key features and challenges.",
        technologies: ["React", "Node.js", "MongoDB"],
        image: "assets/project2.jpg",
        demo: "#",
        code: "#"
    },
    {
        title: "Project Three",
        description: "A third project to showcase your versatility as a developer.",
        technologies: ["Python", "Django", "PostgreSQL"],
        image: "assets/project3.jpg",
        demo: "#",
        code: "#"
    }
];

// DOM Elements
const projectsGrid = document.querySelector('.projects-grid');
const themeToggle = document.querySelector('.theme-toggle');

// Render projects
function renderProjects() {
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-stack">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.demo}" target="_blank">Live Demo</a>
                    <a href="${project.code}" target="_blank">View Code</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Theme toggle
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    
    // Save preference to localStorage
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDark);
    
    // Update button icon
    themeToggle.textContent = isDark ? '☀️' : '🌙';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    
    // Check for saved theme preference
    const darkTheme = localStorage.getItem('darkTheme') === 'true';
    if (!darkTheme) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeToggle.textContent = '🌙';
    }
    
    // Event listeners
    themeToggle.addEventListener('click', toggleTheme);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});