import classNames from 'classnames';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const contacts = [
  {
    id: 1,
    name: 'https://linkedin.com/in/rogelio-menco',
    icon: <FiLinkedin />,
  },
  {
    id: 2,
    name: 'https://github.com/RogelioMenco',
    icon: <FiGithub />,
  },
  {
    id: 3,
    name: 'rogeliomenco4@gmail.com',
    icon: <FiMail />,
  },
];

const contactsWithLinks = [1, 2];

const ContactDetails = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="text-left max-w-xl px-6">
        <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
          Contactame
        </h2>
        <ul className="font-general-regular">
          {contacts.map((contact) => (
            <li className="flex " key={contact.id}>
              <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                {contact.icon}
              </i>
              <span
                className={classNames(
                  'text-lg mb-4 text-ternary-dark dark:text-ternary-light',
                  {
                    'cursor-pointer': contactsWithLinks.includes(contact.id),
                  },
                )}
                onClick={() => {
                  if (contactsWithLinks.includes(contact.id)) {
                    window.open(contact.name, '_blank');
                  }
                }}
              >
                {contact.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
