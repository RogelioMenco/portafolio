import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'

const ProjectGallery = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
      {singleProjectData.ProjectImages.map((project) => {
        return (
          <div className="mb-10 sm:mb-0" key={project.id}>
            <Zoom overlayBgColorStart='rgba(0,0,0,0.5)' overlayBgColorEnd='rgba(0,0,0,0.5)'>
              <img
                src={project.img}
                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none bg-secondary-light dark:bg-ternary-dark"
                alt={project.title}
                key={project.id}
              />
            </Zoom>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectGallery;
