import { useState } from 'react';

import style from './Header.module.scss'

export function Header() {
    const [isSticky, setIsSticky] = useState(false);

    // sticky Header - bg black
    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsSticky(true)
        } else {
            setIsSticky(false)
        }
    }
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", handleScroll);
    }


    return (
        <div className={isSticky ? style.stickyHeader : style.headerContent}>
            <a className={style.logoLink} href='https://www.hakacrossfit.com.br'>
                <img className={style.logo} src="./images/full-logos/full-white-logo.png" alt="" />
            </a>

            <nav className={style.links}>
                <a href=''>Início</a>
                <a href=''>Padrão Haka</a>
                <a href=''>Horários</a>
                <a href=''>Planos</a>
                <a href=''>Galeria</a>
                <a href=''>Contato</a>
            </nav>

            <nav className={style.langs}>
                <button>
                    <img src='./images/flags/br-flag.svg' alt="" />
                </button>

                <button>
                    <img src='./images/flags/uk-flag.svg' alt="" />
                </button>
            </nav>
        </div>
    )
}