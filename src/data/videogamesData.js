// Import images
import videogames3 from '../images/projects/videogames//create.png';
import videogames1 from '../images/projects/videogames/detalle videogames.png';
import videogames2 from '../images/projects/videogames/home.png';

// Import icons
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export const data = {
  ProjectHeader: {
    title: 'Videojuegos',
    publishDate: 'Septiembre, 2023',
    tags: 'Aplicacion web',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'Detalle Videgames',
      img: videogames1,
    },
    {
      id: 2,
      title: 'Home',
      img: videogames2,
    },
    {
      id: 3,
      title: 'Creacion',
      img: videogames3,
    },
  ],
  ProjectInfo: {
    ClientHeading: 'Institucion',
    CompanyInfo: [
      {
        id: 1,
        title: 'Nombre',
        details: 'Henry Bootcamp',
      },
      {
        id: 2,
        title: 'Servicios',
        details: 'Diseño UI/UX - Desarrollo web',
      },
      {
        id: 3,
        title: 'Encuentrala en',
        details: 'https://rogeliomenco.github.io/videogames',
      },
    ],
    ObjectivesHeading: 'Objetivo',
    ObjectivesDetails:
      'Desarrollar una aplicación que permita a los usuarios explorar un catálogo de juegos, mostrando la portada, descripción y ranking de cada juego. Además, la aplicación permitirá a los usuarios crear un nuevo juego, proporcionando la información necesaria como portada, descripción y asignando un ranking.',
    Technologies: [
      {
        title: 'Herramientas & Tecnologías',
        techs: [
          'HTML',
          'CSS',
          'JavaScript',
          'React.js',
          'Redux',
          'Express',
          'PostgreSQL',
          'Sequalize',
          'RAWG API',
        ],
      },
    ],
    ProjectDetailsHeading: 'Acerca de',
    ProjectDetails: [
      {
        id: 1,
        details:
          'La aplicación actualmente desarrollada permite a los usuarios explorar un catálogo de juegos, mostrando la portada, descripción y ranking de cada juego. Utilizando tecnologías como HTML, CSS y JavaScript para la estructura, diseño y funcionalidad del cliente en el navegador, respectivamente, junto con React.js y Redux para la gestión del estado de la aplicación, la aplicación ofrece una experiencia fluida y receptiva para navegar por el catálogo de juegos. Además, se integra la RAWG API para obtener datos actualizados y precisos sobre los juegos disponibles.',
      },
      {
        id: 2,
        details:
          'Para la implementación del backend, se utiliza Express.js como framework para manejar las solicitudes del cliente y la lógica de negocio, mientras que PostgreSQL se emplea como base de datos relacional para almacenar información sobre los juegos y su información asociada. Se utiliza Sequelize como ORM para facilitar la interacción con la base de datos y realizar operaciones CRUD de manera eficiente.',
      },
    ],
    SocialSharingHeading: 'Links',
    SocialSharing: [
      {
        id: 1,
        name: 'GitHub',
        icon: <FiGithub />,
        url: 'https://github.com/RogelioMenco/videogames',
      },
      {
        id: 2,
        name: 'Facebook',
        icon: <FiExternalLink />,
        url: 'https://rogeliomenco.github.io/videogames',
      },
    ],
  },
};
