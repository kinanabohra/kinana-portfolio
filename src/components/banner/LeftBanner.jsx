import React from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import { FaXTwitter,FaGithub,FaLinkedin} from 'react-icons/fa6';
import { FaJava, FaReact} from 'react-icons/fa6';
import { TbBrandJavascript,TbBrandCpp, TbSql} from "react-icons/tb";
import { SiExpress,SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { BsCCircle } from "react-icons/bs";
import { RiTailwindCssFill } from 'react-icons/ri';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ['MERN Stack Developer.', 'AI & ML Enthusiast.', 'Software Engineer', 'Tech Explorer.'],
        loop: true,
        typeSpeed:40,
        deleteSpeed:30,
        delaySpeed:1000,
      });
  return (
    <div className='mt-6 w-full lgl:w-1/2 flex flex-col gap-16'>
        <div className='flex flex-col gap-5'>
          <h4 className='test-lg font-normal'>WELOME TO MY WORLD</h4>
          <h1 className='text-2xl sm:text-3xl sml:text-4xl md:text-5xl mdl:text-4xl lgl:text-5xl xl:text-6xl
           font-bold text-white'>Hi, I'm {" "}
            <span className='text-designColor capitalize'>Kinana Bohra</span>
          </h1>
          <h2 className='sm:text-2xl sml:text-3xl md:text-4xl mdl:text-3xl lgl:text-4xl font-bold text-white'>a <span>{text}</span>
          <Cursor 
          cursorBlinking="false"
          cursorStyle="|"
          cursorColor='#ff014f' />
          </h2>
        </div>
        
        <div>
          <div>
          <h2 className='text-base uppercase font-titleFont mb-4'>BEST SKILL ON</h2>

          <div className='flex gap-4 mb-3'>
            <span className='bannerIcon shadow-shadowTwo '>
              <SiMongodb/>
            </span>
            <span className='bannerIcon shadow-shadowTwo'>
            <SiExpress/>
            </span>
            <span className='bannerIcon shadow-shadowTwo'>
              <FaReact/>
            </span>
            <span className='bannerIcon shadow-shadowTwo  text-4xl sml:text-5xl mdl:text-4xl xmdl:text-5xl'>
              <DiNodejs/>
            </span>
            <span className='bannerIcon shadow-shadowTwo'>
              <RiTailwindCssFill/>
            </span> 
          </div>

          <div className='flex gap-4 mb-3'>
            <span className='bannerIcon shadow-shadowTwo'>
              <TbBrandJavascript/>
            </span>
            <span className='bannerIcon shadow-shadowTwo'>
              <BsCCircle/>
            </span>
            <span className='bannerIcon shadow-shadowTwo'>
              <TbBrandCpp/>
            </span>
            <span className='bannerIcon shadow-shadowTwo  text-2xl sml:text-3xl mdl:text-2xl xmdl:text-3xl'>
            <FaJava/>
            </span> 
            <span className='bannerIcon shadow-shadowTwo'>
              <TbSql/>
            </span> 
          </div>

          </div>

          <div className='mt-10'>
          <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
          <div className='flex gap-4'>
            <a href="https://github.com/kinanabohra" target="_blank" rel="noopener noreferrer" className='bannerIcon shadow-shadowTwo'>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kinanabohra" target="_blank" rel="noopener noreferrer" className='bannerIcon shadow-shadowTwo'>
              <FaLinkedin />
            </a>
            <a href="https://x.com/kinanabohra?t=5E1oIbt7IA-caTVkgsObRg&s=09" target="_blank" rel="noopener noreferrer" className='bannerIcon shadow-shadowTwo'>
              <FaXTwitter />
            </a>
          </div>
          </div>

        </div>
        </div>
  )
}

export default LeftBanner