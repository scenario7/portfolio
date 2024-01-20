import React from 'react'
import ExperienceCard from './ExperienceCard'

const Experiences = () => {

  const experiences = [
    {
      imageURL : "https://pbs.twimg.com/community_banner_img/1500174443616018432/lkQd6Gob?format=jpg&name=medium",
      company : "F1ndia",
      role : "Graphic Designer",
      years : "Aug 2020 - March 2023",
      location : "Bengaluru • Remote",
      description : "Designed merchandise for a leading sports fan community in India. Helped generate a 6-figure annual revenue through merchandise sales.",
      projectURL : "https://koodook.com/product-category/official-merchandise/f1ndia/"
    },
    {
      imageURL : "https://media.licdn.com/dms/image/C4E0BAQF85HgcygiRFQ/company-logo_200_200/0/1630636966967/derivainc_logo?e=1712188800&v=beta&t=E-ltIv9ENRRLVOB2PlrulFmqjKfSaq0y91Vh4WlUd-0",
      company : "Deriva",
      role : "iOS Engineering Intern",
      years : "Jun 2021 - Oct 2021",
      location : "Jaipur • Remote",
      description : "Worked on developing the iOS counterpart of a fintech app founded by IIT & NIT graduates.",
      projectURL : "https://www.linkedin.com/company/derivainc/"
    },
    {
      imageURL : "https://media.licdn.com/dms/image/D4D0BAQF-7Mw7Wo9ycQ/company-logo_200_200/0/1683399756507?e=1712188800&v=beta&t=EU10cqLgG-8Uh-o40GV1Qz6e4QTDZfRLMV_FsE-QrZ0",
      company : "LT IT Solutions",
      role : "Website Developer",
      years : "Oct 2023 - Dec 2023",
      location : "Dubai • Remote",
      description : "Designed and developed the website for an IT Solutions company bases in Dubai. Worked on SEO optimization as well.",
      projectURL : "https://ltitsolutions.com"
    },
    {
      imageURL : "https://panoskin.s3.us-east-2.amazonaws.com/SVE/59c8b621cc94dd7a54b876ae/themes/5f1aef0682139e27dd2272c3/logo/d1f968b3-eb4a-42f1-aa45-a70e53f957d4.png",
      company : "ICRAFMN-24 MAHE",
      role : "Website Developer",
      years : "Dec 2023 - Jan 2024",
      location : "Bengaluru • Remote",
      description : "Developed the website for the International Conference on Recent Advances in Fluid Mechanics and Nanoelectronics held by Manipal University Jaipur, MIT Bengaluru and NIT Uttarakhand.",
      projectURL : ""
    }
  ]

  const reversedExperiences = experiences.slice().reverse();

  return (
    <div className='flex flex-col items-center w-full pb-10'>
        <h1 className='text-stone-400 font-bold text-center pb-10 text-2xl font-dgs'>EXPERIENCES</h1>
        <div className="flex flex-col w-full gap-3">
          {reversedExperiences.map((experience) => {
            return(
              <ExperienceCard params={experience}/>
            )
          })}
        </div>
    </div>
  )
}

export default Experiences