import React from 'react'
import '../../App.scss'

const Projects = () => {
    return (
        <div className={`container mt-5  `} id="projects">
            <div className={`row justify-content-center`}>
                <h2 className={`  h-color mb-4 col-lg-7`}>My projects</h2>
                <div className={`col-lg-7`}>
                    <img src="./projects-img.webp" alt="" className={`w-100`} />
                    <p className={`font-sm font-lg text-color `}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis iste nesciunt officiis? Aut voluptatem necessitatibus libero iste dolore veritatis perferendis cupiditate, quibusdam voluptate ut doloribus non et distinctio? Eaque, nihil.</p>
                </div>

                <div className={`col-lg-7`}>
                    <img src="./projects-img.webp" alt="" className={`w-100`} />
                    <p className={`font-sm font-lg text-color `}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis iste nesciunt officiis? Aut voluptatem necessitatibus libero iste dolore veritatis perferendis cupiditate, quibusdam voluptate ut doloribus non et distinctio? Eaque, nihil.</p>
                </div>

                <div className={`col-lg-7 `}>
                    <img src="./projects-img.webp" alt="" className={`w-100`} />
                    <p className={`font-sm font-lg text-color `}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis iste nesciunt officiis? Aut voluptatem necessitatibus libero iste dolore veritatis perferendis cupiditate, quibusdam voluptate ut doloribus non et distinctio? Eaque, nihil.</p>
                </div>

            </div>

        </div>
    )
}

export default Projects