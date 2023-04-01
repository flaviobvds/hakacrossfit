import style from './Title.module.scss'

export function Title() {
    
    return (
        <main className={style.main}>

            <div className={style.headTitles}>
                <section className={style.titleContent}>
                    <h1 className={style.title1}>
                        Transforme <span>seu corpo.</span>
                    </h1>
                    <h2 className={style.title2}>
                        Mude <span>sua vida.</span>
                    </h2>

                    <button
                        className={style.mainButton}
                        type='button'
                        onClick={() => {
                            window.open(
                                'https://api.whatsapp.com/send?phone=5595991245752&text=Ol%C3%A1.%20Gostaria%20de%20marcar%20uma%20aula%20experimental%20gratuita.',
                                '_blank'
                             )
                        }}
                    >
                        Comece hoje
                    </button>
                </section>
            </div>

        </main>
    )
}