import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Stiverson Portifólio', // e.g: 'Name | Developer'
  lang: 'pt-br', // e.g: en, es, fr, jp
  description: 'Seja Bem vindo ao meu Portifólio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Stiverson Machado',
  subtitle: ' Analista e Desenvolvedor de Sistemas ',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  paragraphFour: '',
  paragraphFive: '',
  resume: 'https://personal-yo2edup4.outsystemscloud.com/curriculodigital/Entry1.aspx?_ts=637407799884550242'
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'happy.png',
    title: ' Happy',
    info: 'Projeto Construido na Next level week da Rocketseat ',
    info2: 'O Happy é uma aplicação que conecta pessoas à casas de acolhimento institucional para fazer o dia de muitas crianças mais feliz 💜',
    url: 'https://github.com/Stiverson/Nlw-03-Happy',
    repo: 'https://github.com/Stiverson/Nlw-03-Happy', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'appp.jpg',
    title: 'TivesFlix',
    info: 'Projeto Criado na primeira edição da imersão react da Alura',
    info2: 'O Mesmo Projeto foi utilizado como instrumento de Avaliação do meu TCC',
    url: 'https://tivesflix.vercel.app/',
    repo: 'https://github.com/Stiverson/tivesflix', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'todolist.jpg',
    title: 'To do List Codare',
    info: 'Gerenciador de Tarefas é um projeto desenvolvido com base no projeto da semana Level tech O objetivo é criar um gerenciador de tarefas, conforme a solução apresentada pelo instrutor Gabriel Limoni.',
    info2: 'Este projeto foi desenvolvido com as seguintes tecnologias: Html , Css e Javascript',
    url: 'https://projetotodolistcodare.vercel.app/',
    repo: 'https://github.com/Stiverson/todolistcodare', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fundo.jpg',
    title: 'Tives quiz',
    info: 'Projeto construido durante a Imersão React edição NextJS da Alura!',
    info2: 'Este projeto ainda esta em construção no momento.',
    url: 'https://tivesquiz-base-git-main.stiverson.vercel.app/',
    repo: 'https://github.com/Stiverson/tivesquiz-base', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'href="mailto:stiverson.machado@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Tives_away',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/tives_stiverson/?hl=pt-br',
    },
    {
      id: nanoid(),
      name: 'whatsapp',
      url: 'https://wa.me/5519982273244',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/stiverson-rodrigues-machado-518b2159/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Stiverson',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
   // set to false to disable the GitHub stars/fork buttons
};
