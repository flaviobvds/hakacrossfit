import style from './Header.module.scss'

export function Header() {
    return (
        <div className={style.headerContent}>
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