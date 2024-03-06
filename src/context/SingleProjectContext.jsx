import { useState, createContext, useContext } from 'react';
import { data as singleProjectDataJson } from '../data/countriesData';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
  const [singleProjectData, setSingleProjectData] = useState(
    singleProjectDataJson,
  );

  return (
    <SingleProjectContext.Provider
      value={{ singleProjectData, setSingleProjectData }}
    >
      {children}
    </SingleProjectContext.Provider>
  );
};

export const useSingleProject = () => {
  const context = useContext(SingleProjectContext);
  if (!context) throw new Error('No context for single project');

  return context;
};

export default SingleProjectContext;
