import React from 'react'
import ExperienceCard from './ExperienceCard'
import ltitsolutionslogo from '../images/ltitlogo.jpeg'

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
      imageURL : "https://media.licdn.com/dms/image/C4E0BAQF85HgcygiRFQ/company-logo_200_200/0/1630636966967/derivainc_logo?e=2147483647&v=beta&t=WpV-EP3DgVjfyO52NJSSMzxPgFacToZEF3qK4akPk5U",
      company : "Deriva",
      role : "iOS Engineering Intern",
      years : "Jun 2021 - Oct 2021",
      location : "Jaipur • Remote",
      description : "Worked on developing the iOS counterpart of a fintech app founded by IIT & NIT graduates.",
      projectURL : "https://www.linkedin.com/company/derivainc/"
    },
    {
      imageURL : 'https://firebasestorage.googleapis.com/v0/b/vistara-website.appspot.com/o/ltitlogo.jpeg?alt=media&token=7b1cb859-1f90-428b-8a81-2eaf234d05f6',
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
      projectURL : "https://icrafmn2024.com"
    },
    {
      imageURL : "https://firebasestorage.googleapis.com/v0/b/vistara-website.appspot.com/o/logo_whitepebble.jpeg?alt=media&token=3a2f38f4-8fee-4727-b0ca-2c2d4a21a79b",
      company : "White Pebble Law LLP",
      role : "Website Developer",
      years : "Mar 2024 - Jun 2024",
      location : "Mumbai • Remote",
      description : "Designed and developed a website for a full service IP Law firm in Mumbai. Worked on improving SEO with backlinks, keywords and more",
      projectURL : "https://whitepebble-website.vercel.app"
    },
    {
      imageURL : "https://firebasestorage.googleapis.com/v0/b/vistara-website.appspot.com/o/logo_soundview.webp?alt=media&token=f62d6457-5b27-4a54-97d2-5290c01d2385",
      company : "Soundview Broadcasting LLC",
      role : "Website Developer",
      years : "Jun 2024 - Jul 2024",
      location : "Long Island, NY • Remote",
      description : "Designed and developed a website for a media/broadcasting company in the US. Used Next.js and Tailwind CSS to build a modern looking UI which is also SEO friendly",
      projectURL : "https://soundview-broadcasting.vercel.app"
    },
  ]

  const reversedExperiences = experiences.slice().reverse();

  return (
    <div className='flex flex-col items-center w-full pb-10'>
        <h1 className='text-stone-400 font-bold text-center pb-10 text-2xl font-dgs'>EXPERIENCE</h1>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5 w-full gap-3">
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