// Import images
import warranties3 from '../images/projects/warranties/deliver.png';
import warranties2 from '../images/projects/warranties/home.png';
import warranties1 from '../images/projects/warranties/receive-toast.png';

export const data = {
  ProjectHeader: {
    title: 'Administrador de Garantias',
    publishDate: 'Noviembre, 2023',
    tags: 'Aplicacion web',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'Detail',
      img: warranties1,
    },
    {
      id: 2,
      title: 'Create',
      img: warranties2,
    },
    {
      id: 3,
      title: 'Recibe',
      img: warranties3,
    },
  ],
  ProjectInfo: {
    ClientHeading: 'Cliente',
    CompanyInfo: [
      {
        id: 1,
        title: 'Nombre',
        details: 'Love & Secret Boutique',
      },
      {
        id: 2,
        title: 'Servicios',
        details: 'Desarrollo web',
      },
    ],
    ObjectivesHeading: 'Objetivo',
    ObjectivesDetails:
      'Desarrollar un sistema con el cual se diera manejo a las garantías entrantes al almacén para llevar un registro detallado de estas.',
    Technologies: [
      {
        title: 'Herramientas & Tecnologías',
        techs: [
          'HTML',
          'CSS',
          'JavaScript',
          'Next.js',
          'PrimeReact',
          'TailwindCSS',
          'SQLite',
          'GraphQL',
        ],
      },
    ],
    ProjectDetailsHeading: 'Acerca de',
    ProjectDetails: [
      {
        id: 1,
        details:
          'Un software cuya principal finalidad es administrar y tener un historial de las garantías. La aplicación fue construida usando Next.js, para la parte de UI se usó la librería de componentes PrimeReact, y para el servidor se hizo uso de GraphQL para facilitar las operaciones CRUD.',
      },
      {
        id: 2,
        details:
          'La aplicación consta de una tabla principal donde se listan las garantías existentes, su estado y más detalles. Desde allí se podrán acceder también a los detalles de la misma. Cuenta con la opción de manejar las garantías como cambios por producto nuevo, de igual manera llevando registros. El módulo de vendedores se maneja por códigos de vendedor, lo cual ayuda a conocer a quién atiende las garantías. Cuenta también con la opción de imprimir un comprobante de recepción que puede ser entregado al cliente, el cual puede ser reimpreso por el administrador del punto únicamente con una clave personal que él poseerá.',
      },
    ],
    SocialSharingHeading: '',
    SocialSharing: [],
  },
};
