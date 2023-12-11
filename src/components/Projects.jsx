import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {

    const projects = [
        {
            title : "Mumbai Metro",
            description : "An app I made for the metro train network in Mumbai. The app features station maps, a fare calculator, bus information for every single station, emergency contact info, train timetables and the ability to top-up your travel card.",
            techonologies : ["SwiftUI", "Firebase", "Google AdMob"],
            numbers : "30,000 Downloads",
            icon : "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/4d/95/f5/4d95f513-43ab-e11d-c5b1-6f5d5252f409/AppIcon-0-1x_U007emarketing-0-10-0-85-220.png/492x0w.webp",
            url : "https://apps.apple.com/in/app/mumbai-metro/id1621720810",
            github: ""
        },
        {
            title : "BunkMate",
            description : "An attendance tracking companion for lazy students like me. The app features class timetables, lecture notifications and a good 'ol attendance tracker that lets you know when you can skip a class, keeping in mind the attendnace requirement. The app also shows you the classes you have attended and missed in the past.",
            techonologies : ["SwiftUI", "CoreData", "StoreKit"],
            numbers : "3 Figure MRR",
            icon : "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/ce/fa/ea/cefaea9c-d701-801f-6ed8-ac01155376f2/AppIcon-1x_U007emarketing-0-10-0-85-220-0.png/492x0w.webp",
            url : "https://apps.apple.com/in/app/bunkmate-attendance-tracker/id6452119916",
            github: ""
        },
        {
            title : "Manipal Bangalore Notice Board",
            description : "An app I made in collaboration with a coding club in my college. It is a digital notice board for all events in our college that is completely open sourced and is built in Flutter.",
            techonologies : ["Flutter", "Strapi", "Sanity"],
            numbers : "",
            icon : "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/0e/45/5c/0e455c4b-435f-e6ff-0b2a-9fbb3a6b27e2/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/492x0w.webp",
            url : "https://apps.apple.com/in/app/manipal-bangalore-notice-board/id6447073761",
            github: "https://github.com/mitblr-club/noticeboard"
        }
    ]

  return (
    <div className=''>
        <h1 className='text-stone-400 font-bold text-center pb-10 text-2xl font-dgs'>PROJECTS</h1>
        <div className="flex flex-col items-center space-y-10">
            {projects.map((project) => {
                return(<ProjectCard title={project.title} icon={project.icon} numbers={project.numbers} description={project.description} technologies={project.techonologies} url={project.url} github={project.github}/>);
            })}
        </div>
    </div>
  )
}

export default Projects