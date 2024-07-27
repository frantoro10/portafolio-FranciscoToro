import React from 'react'
import styles from './NavBar.module.scss'
import '../../App.scss'

const NavBar = () => {

  
    return (
        <div className={` text-center ${styles["header-container"]} `}>
            <header className={`mt-3`}>
                <h1 className={'h-color'}>Francisco Toro</h1>
                <p className={'h-color'}>Web Developer</p>
                <p className={'text-color'}> HTML, CSS, JavaScript, React, Redux, Node, Express, Firebase, MySQL <br />Visit my <a href="https://www.linkedin.com/in/francisco-toro-goitea-475b71277/"><strong>Linkedln</strong></a> and my <a href="https://github.com/frantoro10"><strong>Github</strong></a>!<br /> <strong>Gmail:</strong> torofrancisco13@gmail.com </p>
            </header>
            <nav className="navbar navbar-expand-sm ">
                <div className="container  d-flex justify-content-start">
                    <ul className="navbar-nav flex-column ms-5 mt-4 ">
                        <li className="nav-item">
                            <a 
                            href="#about-me" className="nav-link text-color ">
                                <span className={`text-color ${styles.navBarItem}  `} > ABOUT</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link">
                                <span className={`text-color ${styles.navBarItem} `} > PROJECTS</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#about-me" className={` nav-link `}>
                                <span className={`text-color ${styles.navBarItem} `} > CONTACT</span>
                            </a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default NavBar