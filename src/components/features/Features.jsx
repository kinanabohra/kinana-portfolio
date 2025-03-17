import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { CgWebsite } from "react-icons/cg";
import { FaBrain, FaServer } from "react-icons/fa";

const Features = () => {
  return (
    <section id='features' className='w-full pt-20 pb-10'>
      <div className='flex justify-center items-center text-center'> 
        <Title title="Services" des="What I DO"/>
      </div> 
      <div className='grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-3 gap-10'>
        <Card
         title="Full-Stack Web Development"
         des="Building modern, scalable, and responsive web applications using MERN stack with seamless API integration."
         icon={<CgWebsite />}
        />
        <Card
          title="Back-end Development"
          des="Building robust server-side applications, APIs, and database management for seamless functionality and scalability."
          icon={<FaServer />}
        />

        <Card
         title="AI & ML Solutions"
         des="Developing AI-driven applications, predictive analytics, and data visualization using Python, R, and Power BI."
         icon={<FaBrain />}
        />
      </div>
    </section>
  )
}

export default Features
