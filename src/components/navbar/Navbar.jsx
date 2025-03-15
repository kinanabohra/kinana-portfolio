import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { logo } from '../../assets/index.jsx';
import { navLinkData } from '../../constants/index.jsx';
import { IoMenu, IoClose } from 'react-icons/io5';
import { FaXTwitter, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdHome, MdWork, MdContactMail, MdInfo, MdDashboard } from 'react-icons/md';
import { FaFileAlt } from "react-icons/fa";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const iconMap = {
    Home: <MdHome />,
    About: <MdInfo />,
    Features: <MdDashboard />,
    Projects: <MdWork />,
    Resume:<FaFileAlt />,
    Contact: <MdContactMail />,
  };

  return (
    <nav className="w-full h-16 sticky top-0 bg-bodyColor z-20 flex justify-between items-center px-4 border-b border-gray-700">
      <div className="flex items-center gap-3">
        <img className="w-10" src={logo} alt="logo" />
        <span className="text-xl font-semibold text-white">Kinana Bohra</span>
      </div>

      <ul className="hidden xmdl:flex items-center gap-8">
        {navLinkData.map(({ _id, title, link }) => (
          <li key={_id} className="text-base font-normal text-gray-400 cursor-pointer hover:text-designColor transition duration-300">
            <Link activeClass="active" to={link} spy={true} smooth={true} offset={-70} duration={500}>
              {title}
            </Link>
          </li>
        ))}
      </ul>


      <span
        onClick={() => setShowMenu(true)}
        className="xmdl:hidden w-10 h-10 flex items-center justify-center text-2xl text-white bg-black/20 rounded-xl cursor-pointer hover:bg-black/30 hover:text-white transition"
      >
        <IoMenu />
      </span>

 
      <div
        className={`fixed top-0 left-0 w-[260px] h-screen bg-bodyColor border-r border-gray-700 p-5 shadow-lg transform ${
          showMenu ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-500 ease-in-out flex flex-col`}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img className="w-10" src={logo} alt="logo" />
            <span className="text-xl font-semibold text-white">Kinana Bohra</span>
          </div>

          <ul className="flex flex-col gap-4 mt-2">
            {navLinkData.map(({ _id, title, link }) => (
              <li key={_id} className="text-lg font-medium text-gray-400 hover:text-designColor transition duration-300 flex items-center gap-3">
                <span className="text-2xl text-designColor">{iconMap[title] || <MdDashboard /> }</span>
                <Link
                  onClick={() => setShowMenu(false)}
                  activeClass="sidebarActive"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex justify-center gap-6 text-gray-400 border-t border-gray-700 pt-4 pb-6">
          <a href="https://github.com/kinanabohra" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-designColor transition duration-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/kinanabohra" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-designColor transition duration-300">
            <FaLinkedin />
          </a>
          <a href="https://x.com/kinanabohra?t=5E1oIbt7IA-caTVkgsObRg&s=09" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-designColor transition duration-300">
            <FaXTwitter />
          </a>
        </div>

        <span
          onClick={() => setShowMenu(false)}
          className="absolute top-6 right-4 text-gray-400 hover:text-designColor text-3xl cursor-pointer transition duration-300"
        >
          <IoClose />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
