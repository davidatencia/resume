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
const ontopLink = document.querySelector('#ontop-link');
const freelanceLink = document.querySelector('#feelance-link');
const skillsContainer = document.querySelector('.skills-container');

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
