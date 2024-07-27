import React from 'react'
import styles from './Projects.module.scss'
import '../../App.scss'

const Projects = () => {

    const projects = [
        {
            id: 1,
            title: "E-commerce",
            img: "/projects/ecommerce-react.jpg",
            description: "Responsive E-commerce App: JavaScript - React + Vite - CSS-SASS - Bootstrap - Firebase (Database)",
            github: "https://github.com/frantoro10/Ecommerce-ReactJS",
            url: "https://ecommerce-react-js-umber.vercel.app/"
        },
        {
            id: 2,
            title: "Mini Business (Kiosco)",
            img: "/projects/mini-business-app.jpg",
            description: "Responsive Mini Business App: JavaScript - React + Vite - CSS - Bootstrap - Firebase (Database)",
            github: "https://github.com/frantoro10/Kiosco-Familiar",
            url: "https://mini-business.vercel.app/"
        }
    ]

    return (
        <div className={`container mt-4 mb-5 `} id="projects">
            <div className={`row justify-content-center`}>
                <h2 className={`  h-color mb-4 col-lg-7`}>My projects</h2>
                {projects.map((project) => {
                    return (
                        <div className={`row justify-content-center`} >

                            <div className={`col-lg-7 ${styles["card-project"]}`} key={project.id}>
                                <a href={project.github} target="_blank" rel='noopener noreferrer' className={`${styles["github-text"]}`} ><span>GitHub</span></a>
                                <p className={`font-sm font-lg text-color text-center `}><strong>{project.description}</strong></p>
                                <a href={project.url} target="_blank" rel='noopener noreferrer'><img src={project.img} alt="Project" className={`${styles["img-project"]}  `} /></a>
                            </div>

                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default Projects