import React from 'react'
import '../../App.scss'
import styles from './AboutMe.module.scss'

const AboutMe = () => {

  return (
    <div className={`container  d-flex mt-5  `} id="about-me" >
      <div className={` row ${styles.descriptionInfo}  justify-content-center  `} >
        <div className={`col-sm-12 col-lg-7  d-flex align-items-center `} >
          <img src="./perfil-img.jpg" alt="Imagen de perfil no se cargo correctamente" className={`${styles.aboutImg} `} />
        </div>
        <div className={`col-sm-12 col-lg-7  `}>
          <h1 className={'h-color '}>About me</h1>
          <p className={` font-sm font-lg text-color`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In at sed dolore eos numquam nihil asperiores vel beatae quisquam nam odio vero qui eius sit nostrum, aspernatur assumenda reiciendis porro. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, ut tempora inventore perspiciatis provident, error, alias nihil aut pariatur reprehenderit corporis cupiditate cum consequuntur repellat tenetur.  </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe

// style={{border: "2px solid red"}}