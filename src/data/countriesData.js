// Import images
import Countries2 from '../images/projects/countries/create.png';
import Countries1 from '../images/projects/countries/landing.png';
import Countries3 from '../images/projects/countries/quiz.png';

// Import icons
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export const data = {
  ProjectHeader: {
    title: 'Paises & Mas',
    publishDate: 'Diciembre, 2023',
    tags: 'Aplicacion web',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'Paises & Mas',
      img: Countries1,
    },
    {
      id: 2,
      title: 'Paises & Mas',
      img: Countries2,
    },
    {
      id: 3,
      title: 'Paises & Mas',
      img: Countries3,
    },
  ],
  ProjectInfo: {
    ClientHeading: 'Institución',
    CompanyInfo: [
      {
        id: 1,
        title: 'Nombre',
        details: 'Henry',
      },
      {
        id: 2,
        title: 'Servicios',
        details: 'Diseño UI - Desarrollo web - Responsive',
      },
      {
        id: 3,
        title: 'Encuentrala en',
        details: 'https://rogeliomenco.github.io/countries',
      },
    ],
    ObjectivesHeading: 'Objetivo',
    ObjectivesDetails:
      'Desarrollar una aplicación web que presente un catálogo interactivo de países, permitiendo a los usuarios filtrar la lista según sus preferencias. Además, incluirá un cuestionario sobre información relevante de los países para brindar una experiencia educativa y entretenida.',
    Technologies: [
      {
        title: 'Herramientas & Tecnologías',
        techs: [
          'HTML',
          'CSS',
          'JavaScript',
          'React.js',
          'Express',
          'PostgreSQL',
          'Sequalize',
          'Vite'
        ],
      },
    ],
    ProjectDetailsHeading: 'Acerca de',
    ProjectDetails: [
      {
        id: 1,
        details:
          'Este proyecto consiste en el desarrollo de una aplicación web que ofrece a los usuarios un catálogo interactivo de países junto con un quiz educativo. Utilizando tecnologías como HTML, CSS y JavaScript para la interfaz de usuario, React.js para la creación de componentes dinámicos, Express para el backend, y PostgreSQL con Sequelize para la gestión de la base de datos, la aplicación permitirá a los usuarios explorar información detallada sobre cada país, filtrarlos según sus preferencias, y participar en un quiz que pondrá a prueba su conocimiento sobre diferentes aspectos de los países.',
      },
      {
        id: 2,
        details:
          'El catálogo de países ofrecerá una experiencia de navegación intuitiva, con opciones de filtrado para facilitar la búsqueda de países específicos. Además, el quiz educativo proporcionará preguntas desafiantes sobre diversos temas relacionados con los países, brindando a los usuarios una experiencia educativa y entretenida mientras exploran el mundo a través de la aplicación web.',
      },
    ],
    SocialSharingHeading: 'Links',
    SocialSharing: [
      {
        id: 1,
        name: 'GitHub',
        icon: <FiGithub />,
        url: 'https://github.com/RogelioMenco/countries',
      },
      {
        id: 2,
        name: 'Facebook',
        icon: <FiExternalLink />,
        url: 'https://rogeliomenco.github.io/countries',
      },
    ],
  },
};
