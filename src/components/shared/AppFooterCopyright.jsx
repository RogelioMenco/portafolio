import { Links } from '../../data/constants/Links';

function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        &copy; {new Date().getFullYear()}
        <a
          href={Links.GITHUB}
          target="__blank"
          className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
        >
          Rogelio Menco
        </a>
      </div>
    </div>
  );
}

export default AppFooterCopyright;
