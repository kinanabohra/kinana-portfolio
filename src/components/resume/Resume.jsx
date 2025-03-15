import React, { useState } from 'react'
import Title from '../layouts/Title'
import Education from './Education'
import Skills from './Skills'
import Research from './Research'
import Achievement from './Achievement'

const Resume = () => {
  const [educationData,setEducationData] = useState(true);
  const [skillData,setSkillData] = useState(false);
  const [researchData,setResearchData] = useState(false);
  const [achievementData,setAchievementData] = useState(false);

 

  return (
    <section id="resume" className='w-full pt-20 pb-10'>
        <div className='flex justify-center items-center text-center'> 
          <Title title="My Resume" des="2+ years of Experience"/> 
        </div>
      <div>
          <ul className='w-full grid grid-cols-1 sm:grid-cols-2 gap-1 md:gap-2 xl:grid-cols-4'>
              <li onClick={()=>
                setEducationData(true) & 
                setSkillData(false) &
                setResearchData(false) &
                setAchievementData(false)
              } className={`resume_li ${educationData ? "border-[2px] border-designColor rounded-lg" : 
               "border-transparent"}`}>
                Education</li>
            
              <li onClick={()=>
                setEducationData(false) & 
                setSkillData(true) &
                setResearchData(false) &
                setAchievementData(false)
              } className={`resume_li ${skillData ? "border-[2px] border-designColor rounded-lg" : 
                "border-transparent"}`}>
                Professional Skills</li>

              <li onClick={()=>
                setEducationData(false) & 
                setSkillData(false) &
                setResearchData(true) &
                setAchievementData(false)
              } className={`resume_li ${researchData ? "border-[2px] border-designColor rounded-lg" : 
                "border-transparent"}`}>
                Research</li>

              <li onClick={()=>
                setEducationData(false) & 
                setSkillData(false) &
                setResearchData(false) &
                setAchievementData(true)
              } className={`resume_li ${achievementData ? "border-[2px] border-designColor rounded-lg" : 
                "border-transparent"}`}>
                Achievements</li>

          </ul>
      </div>
      {
        educationData && <Education/>
      }
      {
        skillData && <Skills/>
      }
      {
        researchData && <Research/>
      }
      {
        achievementData && <Achievement/>
      }
      

      
      
    </section>
  )
}

export default Resume