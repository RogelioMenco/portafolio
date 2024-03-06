// Import images
import weather1 from '../images/projects/weather/home.png';
import weather2 from '../images/projects/weather/mobile.png';
import weather3 from '../images/projects/weather/not-found.png';

// Import icons
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export const data = {
  ProjectHeader: {
    title: 'Aplicacion del clima',
    publishDate: 'Septiembre, 2023',
    tags: 'Aplicacion web',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'mobile',
      img: weather1,
    },
    {
      id: 2,
      title: 'home-sun',
      img: weather2,
    },
    {
      id: 3,
      title: 'not-found',
      img: weather3,
    },
  ],
  ProjectInfo: {
    ClientHeading: 'Cliente',
    CompanyInfo: [
      {
        id: 1,
        title: 'Nombre',
        details: 'Proyecto Personal',
      },
      {
        id: 2,
        title: 'Servicios',
        details: 'Diseño UI/UX - Desarrollo web - Responsive',
      },
      {
        id: 3,
        title: 'Encuentrala en',
        details: 'https://rogeliomenco.github.io/weather',
      },
    ],
    ObjectivesHeading: 'Objetivo',
    ObjectivesDetails:
      'Desarrollar una aplicación web con una interfaz intuitiva y atractiva para consultar el clima de diferentes ciudades en tiempo real.',
    Technologies: [
      {
        title: 'Herramientas & Tecnologías',
        techs: [
          'HTML',
          'CSS',
          'JavaScript',
          'React.js',
          'TailwindCSS',
          'OpenWeatherAPI',
          'Vite',
        ],
      },
    ],
    ProjectDetailsHeading: 'Objetivo',
    ProjectDetails: [
      {
        id: 1,
        details:
          'Este proyecto personal tiene como objetivo principal el desarrollo de una aplicación web para consultar el clima en tiempo real de diferentes ciudades. Utilizando tecnologías como React.js y TailwindCSS para la estructura, lógica y diseño, para crear una interfaz de usuario moderna y atractiva, la aplicación permitirá a los usuarios obtener información precisa sobre el clima de cualquier ubicación seleccionada, la integración de la API de OpenWeather proporcionará datos meteorológicos actualizados.',
      },
      {
        id: 2,
        details:
          'La aplicación ofrecerá una experiencia de usuario intuitiva y atractiva, con una interfaz diseñada para facilitar la consulta del clima de manera rápida y sencilla. Los usuarios podrán ingresar el nombre de una ciudad para ver el pronóstico del tiempo actual y futuro, incluyendo detalles como temperatura, condiciones climáticas, velocidad del viento y más. La aplicación también proporcionará la opcion para personalizar unidades de medida',
      },
    ],
    SocialSharingHeading: 'Links',
    SocialSharing: [
      {
        id: 1,
        name: 'GitHub',
        icon: <FiGithub />,
        url: 'https://github.com/RogelioMenco/weather',
      },
      {
        id: 2,
        name: 'Facebook',
        icon: <FiExternalLink />,
        url: 'https://rogeliomenco.github.io/weather',
      },
    ],
  },
};
