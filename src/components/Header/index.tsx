import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi'
import { useLanguage } from '@/hooks/language'
import { translatedText } from '@/hooks/translatedText';

import style from './Header.module.scss'
import Link from 'next/link';

export function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const { language, changeLanguage } = useLanguage();

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
            <Link className={style.logoLink} href='/'>
                <img className={style.logo} src="./images/full-logos/full-white-logo.png" alt="" />
            </Link>

            <nav className={style.links}>
                <Link href='/'>
                    {translatedText.home[language as keyof typeof translatedText.home]}
                </Link>
                <Link href='/hakaway'>
                    {translatedText.hakaway[language as keyof typeof translatedText.home]}
                </Link>
                <Link href='/classes'>
                    {translatedText.classes[language as keyof typeof translatedText.home]}
                </Link>
                <Link href='/plans'>
                    {translatedText.plans[language as keyof typeof translatedText.home]}
                </Link>
                <Link href='/gallery'>
                    {translatedText.gallery[language as keyof typeof translatedText.home]}
                </Link>
                <Link href='/contact'>
                    {translatedText.contact[language as keyof typeof translatedText.home]}
                </Link>
            </nav>

            <nav className={style.langs}>
                <button onClick={() => changeLanguage('br')}>
                    <img src='./images/flags/br-flag.svg' alt="" />
                </button>

                <button onClick={() => changeLanguage('en')}>
                    <img src='./images/flags/uk-flag.svg' alt="" />
                </button>
            </nav>

            <div className={style.menu} onClick={toggleMenu}>
                <FiMenu size={25} />
            </div>


            {/* When sidebar is active */}
            <div className={`${style.sideBar} ${isSidebarOpen ? style.activeSidebar : style.inactiveSidebar}`}>
                <div className={style.sidebarContent}>
                    <nav className={style.sidebarLangs}>
                        <button onClick={() => changeLanguage('br')}>
                            <img src='./images/flags/br-flag.svg' alt="" />
                        </button>

                        <button onClick={() => changeLanguage('en')}>
                            <img src='./images/flags/uk-flag.svg' alt="" />
                        </button>
                    </nav>

                    <nav className={style.sidebarLinks}>
                        <Link href='/' onClick={toggleMenu}>
                            {translatedText.home[language as keyof typeof translatedText.home]}
                        </Link>
                        <Link href='/hakaway' onClick={toggleMenu}>
                            {translatedText.hakaway[language as keyof typeof translatedText.home]}
                        </Link>
                        <Link href='/classes' onClick={toggleMenu}>
                            {translatedText.classes[language as keyof typeof translatedText.home]}
                        </Link>
                        <Link href='/plans' onClick={toggleMenu}>
                            {translatedText.plans[language as keyof typeof translatedText.home]}
                        </Link>
                        <Link href='/gallery' onClick={toggleMenu}>
                            {translatedText.gallery[language as keyof typeof translatedText.home]}
                        </Link>
                        <Link href='/contact' onClick={toggleMenu}>
                            {translatedText.contact[language as keyof typeof translatedText.home]}
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}