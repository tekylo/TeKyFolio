/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';
import cv from './assets/pdf/CV diciembre 2020.pdf';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  /* Your Summary And Greeting Section */
  username: 'TeKyLo',
  title: 'Hola, Soy José Antonio',
  subTitle: emoji('Desde pequeño me apasionaba el mundo de la informática y ahora puedo trabajar de lo que disfruto 🤘 Tengo experiencia construyendo Web y Aplicaciones con JavaScript / React / PHP y algunas otras bibliotecas y frameworks.'),
  resumeLink: cv,
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/tekylo',
  linkedin: 'https://www.linkedin.com/in/jos%C3%A9-antonio-lopez-molina-9881a8aa/',
  gmail: 'lopezmolinaja@gmail.com',
  gitlab: 'https://gitlab.com/TeKyLo',
  stackoverflow: 'https://stackoverflow.com/users/7821148/jose-antonio',
  twitter: 'https://twitter.com/tekylo',
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'Full Stack Developer',
  subTitle: 'Algunas tecnologías usadas',
  skills: [
    emoji(
      '⚡ Siempre queriendo explorar nuevas tecnologías.',
    ),
    emoji('⚡ En mi tiempo libre desarrollo de páginas web a medida.',),
    emoji(
      '⚡ Aplico buenas prácticas, estándares de código, TDD, metodologías ágiles y WPO.',
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'HTML5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'CSS3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'PHP',
      fontAwesomeClassname: 'fab fa-php',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'React',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'Node.js',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'Angular',
      fontAwesomeClassname: 'fab fa-angular',
    },
    {
      skillName: 'Symfony',
      fontAwesomeClassname: 'fab fa-symfony',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'SQL-MongoDB',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'Jenkins',
      fontAwesomeClassname: 'fab fa-jenkins',
    },
    {
      skillName: 'R Project',
      fontAwesomeClassname: 'fab fa-r-project',
    },
    {
      skillName: 'Python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'Docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
    {
      skillName: 'Git',
      fontAwesomeClassname: 'fab fa-git-alt',
    },
    {
      skillName: 'Jira',
      fontAwesomeClassname: 'fab fa-jira',
    },
    {
      skillName: 'Bitbucket',
      fontAwesomeClassname: 'fab fa-bitbucket',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Universidad de Jaén',
      logo: require('./assets/images/Escudo UJA br17.gif'),
      subHeader: 'Grado en Ingeniería informática',
      duration: '2012 - 2017',
      desc: '',
      descBullets: [],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend', // Insert stack or technology you have experience in
      progressPercentage: '70%', // Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '80%',
    },
    {
      Stack: 'Programación',
      progressPercentage: '90%',
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Full-Stack Developer',
      company: 'Meytel S.L.',
      companylogo: require('./assets/images/Meytel.png'),
      date: 'Abril 2018 – Actualidad',
      desc:
          'Actualmente Senior Developer Team Leader de publicidad del grupo Vocento.',
      descBullets: [
        'Backend: Framework Symfony 2.7 – 3.4. Frontend: React.',
        'Librería de publicidad en JS.',
        'Desarrollo PHP 7.2, HTML, CSS, Twig, JavaScript, ES6, JQuery, MySQL, mongoDB.',
        'Desarrollo aplicaciones y plugins web en WordPress.',
        'Maquetación en CSS, amp.',
        'Control de versiones Bitbucket, GIT, SVN.',
        'Metodología SCRUM, Git Flow, Jenkis, Clean Code, Testing.',
        'Resolución de incidencias JIRAS.',
      ],
    },
    {
      role: 'Full-Stack Developer',
      company: 'Pulsar Technologies, S.A.',
      companylogo: require('./assets/images/pulsar.png'),
      date: 'Noviembre 2018 – Abril 2018',
      desc:
          'Formé parte del equipo de desarrollo para el cliente NetApp.',
      descBullets: [
        'Desarrollo aplicación web con framework propio para NetApp.',
        'Desarrollo PHP 5.6, HTML, JavaScript, Angular 5, MySQL.',
        'Desarrollo Base de Datos.',
        'Resolución de incidencias en inglés con Redmine.',
      ],
    },
    {
      role: 'Desarrollador de software y hardware',
      company: 'QUANTION S.L.',
      companylogo: require('./assets/images/quantion.png'),
      date: 'Julio 2016 – Febrero 2017',
      desc:
          'Formé parte del equipo de I+D en los desarrollos a medidas de software y hardware',
      descBullets: [
        'Desarrollo en AngularJS.',
        'Desarrollo de ATM para los hospitales Sanitas La Moraleja y Sanitas La zarzuela de Madrid.',
        'Desarrollo de sistema multimedia en Hotel Ciudad de Úbeda y Hotel Anibal de Linares.',
        'Desarrollo de software para interconexión con equipos.',
        'Desarrollo API REST.',
        'Desarrollo Base de Datos.',
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'tekylo', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Proyectos',
  subtitle: 'ALGUNOS PROYECTOS EN LOS QUE PARTICIPÉ',
  projects: [
    {
      image: require('./assets/images/pablo-vi-logo.png'),
      link: 'http://pablovi.es/',
    },
    {
      image: require('./assets/images/hanares.png'),
      link: 'https://clinicahenares.com/',
    },
    {
      image: require('./assets/images/pinar.png'),
      link: 'https://centromedicopinar.es//',
    },
    {
      image: require('./assets/images/logo-ujaen.png'),
      link: 'https://simidat-apps.ujaen.es/nefele/#/Nefele',
    },
    {
      image: require('./assets/images/historiate.png'),
      link: 'http://historiate.com/',
    },
    {
      image: require('./assets/images/comparativas.png'),
      link: 'https://www.topcomparativas.com/',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Cursos y Certificaciones'),
  subtitle:
      'Cursos, certificaciones, cartas de reconocimiento y algunas cosas interesantes que he hecho',

  achievementsCards: [
    {
      title: 'React + Redux',
      subtitle:
          'Curso presencial de 30 horas impartido por Fictizia.',
      image: require('./assets/images/react-redux.svg'),
      footerLink: [
        {
          name: 'Certificación',
          url:
              'https://www.dropbox.com/s/ndf5xtl68ocowjf/DIPLOMA%20REACT%20Jos%C3%A9%20Antonio%20L%C3%B3pez%20Molina.pdf?dl=0',
        }
      ],
    },
    {
      title: 'Magento 2',
      subtitle:
          'Curso presencial de 40 horas impartido por Training IT.',
      image: require('./assets/images/magento.svg'),
      footerLink: [
        {
          name: 'Certificación',
          url:
              '',
        }
      ],
    },
    {
      title: 'Mongo DB + Node.js',
      subtitle: 'Curso presencial de 20 horas impartido por Training IT.',
      image: require('./assets/images/node.png'),
      footerLink: [
        { name: 'Certificación', url: 'https://www.dropbox.com/s/sxnzmul7p16zncz/Certificado_Jose.pdf?dl=0' },
      ],
    },
    {
      title: 'Git + GitHub',
      subtitle: 'Curso online de 7 horas impartido por Udemy.',
      image: require('./assets/images/git.png'),
      footerLink: [
        { name: 'Certificación', url: 'https://www.dropbox.com/s/97cqq7adcexsafz/UC-OI7D5T86.pdf?dl=0' },
      ],
    },
    {
      title: 'New Relic',
      subtitle: 'Certificación New Relic Certified Performance Pro obtenida en New Relic University.',
      image: require('./assets/images/new relic.png'),
      footerLink: [
        { name: 'Certificación', url: 'https://www.dropbox.com/s/0v9twsk1u37ivvn/new%20relic.pdf?dl=0' },
      ],
    },
    {
      title: 'Curso el Futuro del Desarrollo Web: HTML 5',
      subtitle: 'Curso online de 50 horas impartido por la Escuela Superior Ingeniería Informática.',
      image: require('./assets/images/html.png'),
      footerLink: [
        { name: 'Certificación', url: 'https://www.dropbox.com/s/pf3x43p4kpqfoph/El%20futuro%20del%20desarrollo%20web%3A%20HTML5.pdf?dl=0' },
        { name: 'Certificación', url: 'https://www.dropbox.com/s/87hgsqk90euh5al/Maquetaci%C3%B3n%20web%20HTML-CSS.pdf?dl=0' },
      ],
    },
    {
      title: 'Programa de alfabetización informacional',
      subtitle: 'Curso online de 36 horas impartido por la biblioteca de la Universidad de Jaén.',
      image: require('./assets/images/Escudo UJA br17.gif'),
      footerLink: [
        { name: 'Certificación', url: 'https://www.dropbox.com/s/4748nde46cmp15x/Curso%20Biblioteca.pdf?dl=0' },
      ],
    },
    {
      title: 'Carta recomendación Ilocad',
      subtitle: '',
      image: require('./assets/images/ilocad.png'),
      footerLink: [
        { name: 'Carta', url: 'https://www.dropbox.com/s/q1e5ob05v1cx4qn/Certificado%20ILOCAD.pdf?dl=0' },
      ],
    },
    {
      title: 'Carta recomendación Fibgar',
      subtitle: '',
      image: require('./assets/images/fibgar.png'),
      footerLink: [
        { name: 'Carta', url: 'https://www.dropbox.com/s/y1h1l3xp5q8updn/CERTIFICADO%20FIBGAR.pdf?dl=0' },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
      'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
          'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
          'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
          'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'Charlas',
  subtitle: emoji(
    'A VECES IMPARTO FORMACIONES 😅',
  ),

  talks: [
    {
      title: 'Clean Code, git-flow & git',
      subtitle: 'Ponéncia sobre buenas prácticas y estándares',
      slides_url: 'https://www.dropbox.com/s/kcn3nfhtzgpwku8/Clean%20Code.pdf?dl=0',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contáctame'),
  subtitle:
      'Si tiene alguna pregunta sobre un proyecto o solo quiere saludar, por favor escríbame y contestaré lo antes posible.',
  number: '687873208',
  emailAddress: 'lopezmolinaja@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'tekylo', // Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
