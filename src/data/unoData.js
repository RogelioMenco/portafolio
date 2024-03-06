// Import images
import uno2 from '../images/projects/uno/select-color.png';
import uno1 from '../images/projects/uno/uno-playing.png';
import uno3 from '../images/projects/uno/uno-wins.png';

// Import icons
import { FiGithub } from 'react-icons/fi';

export const data = {
  ProjectHeader: {
    title: 'UNO',
    publishDate: 'Noviembre, 2022',
    tags: 'Aplicacion web',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'jugar',
      img: uno1,
    },
    {
      id: 2,
      title: 'Select',
      img: uno3,
    },
    {
      id: 3,
      title: 'wins',
      img: uno2,
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
        details: 'Diseño UI - Desarrollo web - Sockets',
      },
      {
        id: 3,
        title: 'Encuentrala en',
        details: 'https://rogeliomenco.github.io/uno',
      },
    ],
    ObjectivesHeading: 'Objetivo',
    ObjectivesDetails:
      'Desarrollar una aplicación basada en el juego UNO que permita a múltiples jugadores conectarse en tiempo real desde diferentes dispositivos para disfrutar de partidas interactivas y dinámicas.',
    Technologies: [
      {
        title: 'Herramientas & Tecnologías',
        techs: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'Socket.io'],
      },
    ],
    ProjectDetailsHeading: 'Acerca de',
    ProjectDetails: [
      {
        id: 1,
        details:
          'Este proyecto tuvo como objetivo principal desarrollar una aplicación web basada en el juego de cartas UNO, que permitiera a varios jugadores conectarse en tiempo real desde diferentes dispositivos para disfrutar de partidas interactivas y dinámicas. La aplicación se construyó utilizando tecnologías como HTML, CSS y JavaScript para la estructura, diseño y funcionalidad del cliente en el navegador, mientras que Python se utilizó junto con el framework Flask para el desarrollo del servidor backend. Además, se implementó la biblioteca Socket.io para facilitar la comunicación bidireccional en tiempo real entre el servidor y los clientes, lo que permitió una experiencia de juego fluida y colaborativa.',
      },
      {
        id: 2,
        details:
          'La aplicación permite a los jugadores crear y unirse a salas de juego virtuales, donde pueden enfrentarse en partidas de UNO con reglas personalizables. Durante el juego, los jugadores pueden disfrutar de funciones como el cambio de color de las cartas y la funcionalidad de cartas +2 y +4. Se visualiza el estado del juego en tiempo real, incluyendo el número de cartas en la mano de cada jugador y la carta actual en juego. Se implementan funciones para gestionar el flujo del juego, como el reparto de cartas, el cambio de turno, la aplicación de penalizaciones y la detección de ganadores. En resumen, la aplicación proporciona una experiencia de juego social y entretenida para los usuarios, combinando la emoción del juego de cartas UNO con la conveniencia de jugar en línea con amigos y familiares desde cualquier lugar.',
      },
    ],
    SocialSharingHeading: 'Links',
    SocialSharing: [
      {
        id: 1,
        name: 'GitHub',
        icon: <FiGithub />,
        url: 'https://github.com/RogelioMenco/uno',
      },
    ],
  },
};
