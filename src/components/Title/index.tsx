import style from './Title.module.scss'

export function Title() {
    return (
        <main className={style.main}>
            {
                // <div className={style.titleImage}>
                //     {/*<img className={style.fire} src="/images/fire.jpg" alt="" />*/}
                //     {/*<img className={style.logo} src="/images/logos/logo.svg" alt="logo" />*/}
                // </div>
            }

            <div className={style.headTitles}>
                <section className={style.titleContent}>
                    <h1 className={style.title1}>
                        Transforme <span>seu corpo.</span>
                    </h1>
                    <h2 className={style.title2}>
                        Mude <span>sua vida.</span>
                    </h2>

                    <button type='button'>
                        Comece hoje
                    </button>
                </section>
            </div>

        </main>
    )
}