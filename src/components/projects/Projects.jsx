import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard'

import { project1, project2, project3, project4, project5, project6, project7 } from '../../assets'

const Projects = () => {
  return (
    <section id="projects" className='w-full pt-20 pb-10'>
      <div className='flex justify-center items-center text-center'> 
        <Title title="Explore My Work" des="A showcase of my development journey" />  
      </div> 
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>

        <ProjectsCard 
          title="StayOrbit" 
          des="A full-stack platform inspired by Airbnb that connects travelers with hosts worldwide. It allows users to browse, book, and review stays, while hosts can list properties and manage reservations effortlessly."
          img={project1}
          tag="Personal Project" 
          live="https://stayorbit.onrender.com/"
          github="https://github.com/kinanabohra/StayOrbit"

        />

        <ProjectsCard 
          title="Smart Master" 
          des="An educational platform designed to enhance learning through interactive courses, personalized study plans, and real-time analytics. It helps students master concepts efficiently."
          img={project2} 
          tag="Personal Project"
          live=""
          github="https://github.com/kinanabohra/Smart-master"
        />

        <ProjectsCard 
          title="Vote-TechX" 
          des="A blockchain-based voting system ensuring secure and transparent elections. It authenticates voters using Aadhaar, voter ID, face recognition, and passwords, recording votes on the blockchain to prevent tampering."
          img={project3}
          tag="Hackathon Project"
          live="https://kinanabohra.github.io/Vote-TechX"
          github="https://github.com/kinanabohra/Vote-TechX"
        /> 

        <ProjectsCard 
          title="Election Voting" 
          des="A decentralized voting system leveraging blockchain for secure, transparent elections. Voters log in using cryptographic keys, cast encrypted votes, and verify results independently, ensuring election integrity."
          img={project4}
          tag="Hackathon Project"
          live="https://kinanabohra.github.io/Hack-A-Mania"
          github="https://github.com/kinanabohra/Hack-A-Mania"
        /> 

        <ProjectsCard 
          title="Fund Riser" 
          des="A unique crowdfunding platform that enables global donors to contribute directly to NGO needs. It ensures transparency and impact by connecting donors with specific causes, fostering trust and collaboration."
          img={project5} 
          tag="Hackathon Project"
          live="https://kinanabohra.github.io/Fund-Riser"
          github="https://github.com/kinanabohra/Fund-Riser"
        /> 

        <ProjectsCard 
          title="Responsive Viewer (Chrome Extension)" 
          des="A developer-friendly Chrome extension for testing website responsiveness across multiple devices. It provides a seamless way to preview layouts, ensuring optimal user experience across screen sizes."
          img={project6}
          tag="Personal Project" 
          live=""
          github="https://github.com/kinanabohra/Responsive-Viewer" 
        /> 

        <ProjectsCard 
          title="Simon Says Game" 
          des="A classic memory-based game that challenges players to repeat an increasingly complex sequence of colors. Designed to improve concentration and reflexes in a fun and engaging way."
          img={project7} 
          tag="Personal Project" 
          live="https://kinanabohra.github.io/Simon-Says"
          github="https://github.com/kinanabohra/Simon-Says"
        /> 

      </div>
    </section>
  )
}

export default Projects
