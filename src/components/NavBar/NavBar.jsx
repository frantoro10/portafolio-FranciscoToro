import React from 'react'
import styles from './NavBar.module.scss'
import '../../App.scss'

const NavBar = () => {
    return (
        <div className={` text-center ${styles.headerContainer} `}>
            <header className={`mt-3`}>
                <h1 className={'h-color'}>Francisco Toro</h1>
                <p className={'h-color'}>Developer Web Front-End | Aprendiendo Back-End</p>
                <p className={'text-color'}>Aprendiendo cada dia nuevas cosas, <br/> desarrollandome en este mundo!</p>
            </header>
            <nav className="navbar navbar-expand-sm ">
                <div className="container  d-flex justify-content-start">
                    <ul className="navbar-nav flex-column ms-5 mt-4 ">
                        <li className="nav-item">
                            <a href="#about-me" className="nav-link text-color ">
                                <span className={`text-color ${styles.navBarItem}  `} > ABOUT</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link">
                                <span className={`text-color ${styles.navBarItem} `} > PROJECTS</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contacto" className="nav-link">
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