'use strict';

const ONTOP_WEB_URL = 'https://www.getontop.com/';
const SOLCIVILES_WEB_URL = 'https://solciviles.com/';
const SKILLS_LIST = [
  { title: 'Github', src: 'github' },
  { title: 'Gitlab', src: 'gitlab' },
  { title: 'HTML', src: 'html-5' },
  { title: 'CSS', src: 'css-3' },
  { title: 'SASS', src: 'scss2' },
  { title: 'JavaScript', src: 'javascript' },
  { title: 'Typescript', src: 'typescript' },
  { title: 'JQuery', src: 'jquery' },
  { title: 'Angular', src: 'angular' },
  { title: 'Ionic', src: 'ionic-icon' },
  {
    title: 'NodeJS',
    src: 'nodejs-icon-logo',
  },
  { title: 'Java', src: 'java' },
  { title: 'SCRUM', src: 'brand-scrum' },
];
const PROJECTS_LIST = [
  {
    title: 'MUSÉ (FE) - marketplace and ADMV for products',
    description:
      'This is a project I built to practice React while also boosting a business I run with my wife. The idea is to allow our customers to browse a catalog and put together their orders more easily; for us, it also makes it simpler to manage and verify our product stock.',
    technologies: ['JavaScript', 'React'],
    repositoryUrl: 'https://github.com/davidatencia/muse-marketplace-fe',
    demoUrl: 'https://muse-accesories.netlify.app/',
  },
  {
    title: 'MUSÉ (BE) - marketplace and ADMV for products',
    description:
      'This is a project I built to practice React while also boosting a business I run with my wife. The idea is to allow our customers to browse a catalog and put together their orders more easily; for us, it also makes it simpler to manage and verify our product stock.',
    technologies: ['NodeJS', 'Express', 'MySQL'],
    repositoryUrl: 'https://github.com/davidatencia/muse-marketplace-be',
  },
];
const ontopLink = document.querySelector('#ontop-link');
const freelanceLink = document.querySelector('#freelance-link');
const skillsContainer = document.querySelector('.skills-container');
const projectsGrid = document.querySelector('.projects-grid');

// Add Skills
const addSkillsOnTemplate = () => {
  SKILLS_LIST.forEach(({ src, title }) => {
    skillsContainer.innerHTML += `
      <div class="skill-animation">
        <span class="tooltip">${title}</span>
        <span class="svg-container">
          <img
            width="60px"
            src="./assets/icons/skills/${src}-svgrepo-com.svg"
            alt="${title}"
          />
        </span>
        <span class="BG"></span>
      </div>
      `;
  });
};
addSkillsOnTemplate();

// Add Projects
const addProjectsOnTemplate = () => {
  if (!PROJECTS_LIST.length) {
    projectsGrid.innerHTML = '<p class="projects-empty">Próximamente...</p>';
    return;
  }

  projectsGrid.innerHTML = PROJECTS_LIST.map(
    ({ title, description, technologies = [], repositoryUrl, demoUrl }) => `
      <article class="project-card">
        <div class="project-card-content">
          <h3 class="project-title">${title}</h3>
          <p class="project-description">${description}</p>
          <ul class="project-technologies" aria-label="Tecnologías utilizadas">
            ${technologies.map((technology) => `<li>${technology}</li>`).join('')}
          </ul>
        </div>
        <div class="project-links">
          ${repositoryUrl ? `<a href="${repositoryUrl}" target="_blank" rel="noopener noreferrer">Ver repositorio <span aria-hidden="true">↗</span></a>` : ''}
          ${demoUrl ? `<a href="${demoUrl}" target="_blank" rel="noopener noreferrer">Ver demo <span aria-hidden="true">↗</span></a>` : ''}
        </div>
      </article>
    `,
  ).join('');
};
addProjectsOnTemplate();

// Open external web
const openExternalWeb = (url) => {
  window.open(url, '_blank');
};

ontopLink.addEventListener('click', () => {
  openExternalWeb(ONTOP_WEB_URL);
});
freelanceLink.addEventListener('click', () => {
  openExternalWeb(SOLCIVILES_WEB_URL);
});

// Animation
document.addEventListener('DOMContentLoaded', () => {
  const homeTitle = document.querySelector('.home-title');

  const desktopMediaQuery = (screenSize) => {
    return window.matchMedia(`(min-width: ${screenSize}px)`);
  };

  const applyAnimation = (mediaQuery) => {
    if (mediaQuery.matches) {
      homeTitle.classList.remove('zoom-animation');
      homeTitle.classList.add('typing-effect');
    } else {
      homeTitle.classList.remove('typing-effect');
      homeTitle.classList.add('zoom-animation');
    }
  };

  const mediaQuery = desktopMediaQuery(1130);
  applyAnimation(mediaQuery);

  mediaQuery.addEventListener('change', (event) => {
    applyAnimation(event);
  });
});
