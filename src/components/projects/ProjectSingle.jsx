import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSingleProject } from '../../context/SingleProjectContext';
import { AllProjectsData } from '../../data/allProjectsData';

const ProjectSingle = ({ title, category, image, id }) => {
  const { setSingleProjectData } = useSingleProject();

  const handleProjectClick = () => {
    setSingleProjectData(AllProjectsData[id]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link to="/proyectos/single" aria-label="Proyecto">
        <div
          className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
          onClick={handleProjectClick}
        >
          <div
            id="image-container"
            className="flex justify-center items-center rounded-t-xl p-3 bg-ternary-light dark:bg-secondary-dark min-h-[295] max-h-[295]"
            style={{
              minHeight: '270px',
              maxHeight: '270px',
            }}
          >
            <img
              src={image}
              className="rounded-xl border-none"
              alt="Proyecto"
            />
          </div>
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;
