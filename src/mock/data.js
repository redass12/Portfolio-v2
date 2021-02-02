import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'MRT | Software Engineer', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: 'This is my personal portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello , I\'m',
  name: 'Mohamed Reda TARAOUI',
  subtitle: 'I\'m a Software engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilemd.jpg',
  paragraphOne: 'Hi my name is Mohamed Reda TARAOUI , I\'m currently a Master student at supinfo international university.',
  paragraphTwo: 'I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.',
  paragraphThree: 'My goal is to always build products that provide pixel-perfect, performant experiences.',
  resume: 'https://resumee.blob.core.windows.net/resume/cv%20(5).pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '#', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'paletMusic.png',
    title: '',
    info: '',
    info2: '',
    url: 'https://redass12.github.io/PaletMusic/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'e-comerce.png',
    title: '',
    info: '',
    info2: '',
    url: 'https://crwn-clothing2.vercel.app/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
