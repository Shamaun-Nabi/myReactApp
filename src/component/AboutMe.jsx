import React from 'react'
import SmallCard from './SmallCard'
import { FcAbout } from "react-icons/fc";
import { FcAlarmClock} from "react-icons/fc";



const AboutMe = () => {

  const aboutmeData = [
    {
      id: 1,
      title: "Experience",
      year: "2+ years",
      workArea: "Frontend Development",
      icon: <FcAbout/>
    },
    {
      id: 2,
      title: "Education",
      year: "B.Sc. Bachelors Degree",
      workArea: "M.Sc. Masters Degree",
      icon: <FcAlarmClock/>
    },
  ]

  return (
    <div className='containter mx-auto'>
      <div className='grid grid-cols-2 justify-items-center'>
        <div>
          <img className='w-96 rounded-lg' src="https://thriving-dragon-a3fcd9.netlify.app/assets/about-pic.png" alt="" />
        </div>
        <div>
          <div className='flex gap-3'>
            {
              aboutmeData.map((aboutMe, i) => <SmallCard key={i} title={aboutMe.title} year={aboutMe.year} work={aboutMe.workArea} icon={aboutMe.icon} />)

            }
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, distinctio modi! Blanditiis inventore vitae placeat qui quidem obcaecati, ad soluta!</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe