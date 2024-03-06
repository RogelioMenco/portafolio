// Import images

import dogs3 from '../images/projects/dogs/create.png';
import dogs2 from '../images/projects/dogs/home2.png';
import dogs1 from '../images/projects/dogs/landing.png';

// Import icons
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export const data = {
  ProjectHeader: {
    title: 'Gestor de razas',
    publishDate: 'Agosto, 2023',
    tags: 'Aplicacion web',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'dogs',
      img: dogs1,
    },
    {
      id: 2,
      title: 'dogs',
      img: dogs2,
    },
    {
      id: 3,
      title: 'dogs',
      img: dogs3,
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
        details: 'https://rogeliomenco.github.io/dogs',
      },
    ],
    ObjectivesHeading: 'Objetivo',
    ObjectivesDetails:
      'Desarrollar una aplicación que permita a los usuarios explorar una variedad de razas de perros, mostrando una imagen ilustrativa y proporcionando información detallada sobre cada raza. Además, la aplicación permitirá a los usuarios crear una nueva raza de perro, incluyendo la opción de adjuntar una imagen ilustrativa y agregar información personalizada.',
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
          'DogsAPI',
        ],
      },
    ],
    ProjectDetailsHeading: 'Acerca de',
    ProjectDetails: [
      {
        id: 1,
        details:
          'La aplicación permite a los usuarios explorar una variedad de razas de perros, mostrando una imagen ilustrativa y proporcionando información detallada sobre cada raza. Utilizando tecnologías como HTML, CSS y JavaScript para la estructura, diseño y funcionalidad del cliente en el navegador, respectivamente, junto con React.js para la creación de una interfaz de usuario interactiva y atractiva, la aplicación ofrece una experiencia intuitiva para explorar y aprender sobre diferentes razas de perros. Además, se integra la DogsAPI para obtener datos actualizados y precisos sobre las razas de perros disponibles.',
      },
      {
        id: 2,
        details:
          'Para la implementación del backend, se utiliza Express.js como framework para manejar las solicitudes del cliente y la lógica de negocio, mientras que PostgreSQL se emplea como base de datos relacional para almacenar información sobre las razas de perros y su información asociada. Se utiliza Sequelize como ORM para facilitar la interacción con la base de datos y realizar operaciones de manera eficiente.',
      },
    ],
    SocialSharingHeading: 'Share This',
    SocialSharing: [
      {
        id: 1,
        name: 'GitHub',
        icon: <FiGithub />,
        url: 'https://github.com/RogelioMenco/dogs',
      },
      {
        id: 2,
        name: 'Facebook',
        icon: <FiExternalLink />,
        url: 'https://rogeliomenco.github.io/dogs',
      },
    ],
  },
};
