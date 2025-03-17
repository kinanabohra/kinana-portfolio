import React from 'react'
import { FaXTwitter,FaGithub,FaLinkedin} from 'react-icons/fa6';


const Footer = () => {
  return (
    <footer className="w-full  text-white py-6  border-t-[1px] border-t-gray-600">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sml:gap-8">
      <p className="text-lg font-medium">Developed by <span className="italic font-semibold text-designColor">Kinana Bohra</span></p>

        <div className="flex space-x-2 sml:space-x-4">
          <a 
            href="https://github.com/kinanabohra" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl sml:text-2xl hover:text-designColor transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/kinanabohra" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl sml:text-2xl hover:text-designColor transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://x.com/kinanabohra?t=5E1oIbt7IA-caTVkgsObRg&s=09" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl sml:text-2xl hover:text-designColor transition duration-300"
            aria-label="Twitter"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer