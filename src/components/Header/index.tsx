import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi'

import style from './Header.module.scss'

export function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    
    // When scrolling, set sticky Header - solid black bg
    const handleScroll = () => {
        if (window.scrollY > 1) {
            setIsSticky(true)
        } else {
            setIsSticky(false)
        }
    }
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", handleScroll);
    }


    function toggleMenu() {
        setSidebarOpen(!isSidebarOpen);
    }

    useEffect(() => {
        isSidebarOpen ? setIsSticky(true) : setIsSticky(false)
    }, [isSidebarOpen])

    return (
        <div className={isSticky ? style.stickyHeader : style.headerContent}>
            <a className={style.logoLink} href='https://www.hakacrossfit.com.br'>
                <img className={style.logo} src="./images/full-logos/full-white-logo.png" alt="" />
            </a>

            <nav className={style.links}>
                <a href='/'>Início</a>
                <a href='/hakaway'>Padrão Haka</a>
                <a href='/classes'>Aulas</a>
                <a href='/plans'>Planos</a>
                <a href='/gallery'>Galeria</a>
                <a href='/contact'>Contato</a>
            </nav>

            <nav className={style.langs}>
                <button>
                    <img src='./images/flags/br-flag.svg' alt="" />
                </button>

                <button>
                    <img src='./images/flags/uk-flag.svg' alt="" />
                </button>
            </nav>

            <div
                className={style.menu}
                onClick={toggleMenu}
            >
                <FiMenu
                    size={25}
                />
            </div>


            {/* When sidebar is active */}
            <div className={`${style.sideBar} ${isSidebarOpen ? style.activeSidebar : style.inactiveSidebar}`}>
                <div className={style.sidebarContent}>
                    <nav className={style.sidebarLangs}>
                        <button>
                            <img src='./images/flags/br-flag.svg' alt="" />
                        </button>

                        <button>
                            <img src='./images/flags/uk-flag.svg' alt="" />
                        </button>
                    </nav>

                    <nav className={style.sidebarLinks}>
                        <a href=''>Início</a>
                        <a href=''>Padrão Haka</a>
                        <a href=''>Aulas</a>
                        <a href=''>Planos</a>
                        <a href=''>Galeria</a>
                        <a href=''>Contato</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}