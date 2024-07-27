import React from 'react'
import '../../App.scss'
import styles from './AboutMe.module.scss'

const AboutMe = () => {

  return (
    <div className={`container  d-flex mt-2  `}  >
      <div className={` row ${styles["description-info"]}  justify-content-center  `} >
        <div className={`col-sm-12 col-lg-6  d-flex align-items-center  `} >
          <img src="./perfil-img.jpg" alt="Imagen de perfil no se cargo correctamente" className={`${styles["about-img"]} `} />
        </div>
        <div className={`col-sm-12 col-lg-7`} id="about-me" >
          <h2 className={'h-color '}>About me</h2>
          <p className={` font-sm font-lg text-color`}> 
          <a href="https://www.linkedin.com/in/francisco-toro-goitea-475b71277/" className='text-center'><strong>Linkedln</strong></a><br/>
          Hi! I'm Francisco, a <strong>Web Developer</strong> and <strong>Software Development</strong> student at ISPC Córdoba (Terciary).<br/> <br/> As a Web Developer, I have knowledge in <strong>Front-End</strong> (HTML, CSS [Bootstrap, Tailwind, Sass], JavaScript, ReactJS, Redux), <strong>Back-End</strong> (Node.js, Express), and <strong>Databases</strong> (MySQL, Firebase). As a student, I am currently pursuing Software Development (Terciary), where I am continually training in Python, databases (MySQL), and other important subjects such as Mathematics, etc.<br/> <br/> I really enjoy <strong>English</strong> and practice it daily to improve. Currently, I have a B2 level in Listening and Speaking and a C2 level in Reading. I am excited about obtaining opportunities to grow professionally as a developer, as it is something I am very passionate about. However, I am also open to roles such as Data Entry or similar, as I possess the necessary skills.<br/> <br/>I invite you to visit my <strong><a href="https://github.com/frantoro10">Github</a></strong> where I will be uploading new projects!  Gmail: <strong>torofrancisco13@gmail.com</strong> 
             </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe

// style={{border: "2px solid red"}}