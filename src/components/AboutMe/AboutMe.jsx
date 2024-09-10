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
          Hi! I'm Francisco, a <strong>Software Developer</strong> specialized in Python and currently a student in the Software Development program at ISPC in Córdoba (Technical Degree). I have experience in Front-End development, primarily using JavaScript and React, as well as basic skills in Back-End development with Python and Node.js. <br/>I am passionate about learning and constantly improving. I also enjoy practicing English daily to perfect my skills. Currently, I have a B2 level in Listening and Speaking, and a C2 level in Reading. Certificate: https://cert.efset.org/m8aPVz. <br/>I am looking for opportunities to apply my technical skills and effective communication in software development roles or related fields.
             </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe

// style={{border: "2px solid red"}}