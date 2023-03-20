import style from './Title.module.scss'

export function Title() {
    return (
        <main className={style.main}>
            <div className={style.titleImage}>
                {/*<img className={style.fire} src="/images/fire.jpg" alt="" />*/}
                {/*<img className={style.logo} src="/images/logos/logo.svg" alt="logo" />*/}
            </div>

            <section className={style.headTitles}>
                <span className={style.title1}>Transforme seu corpo.</span>
                <span className={style.title2}>Mude sua vida.</span>
                <button type='button'>
                    Comece hoje
                </button>
            </section>
        </main>
    )
}