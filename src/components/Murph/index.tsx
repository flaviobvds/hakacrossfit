import styles from './Murph.module.scss'

export function Murph() {
    return (
        <section className={styles.murph}>
            <a className={styles.anchorMurph} id="murph" />
            <header className={styles.bgHeaderBlack}>
                <span className={styles.bgHeaderTitleBlack}>
                    Murph
                </span>
            </header>

            <div className={styles.murphContent}>
                <div className={styles.murphList}>
                    <ul>
                        <li>1 Mile Run</li>
                        <li>100 Pull-Ups</li>
                        <li>200 Push-Ups</li>
                        <li>300 Squats</li>
                        <li>1 Mile Run</li>
                    </ul>
                    <span>"MURPH"</span>
                </div>

                <div className={styles.murphText}>
                    <span>Coloque seus limites à prova</span>
                    <p className={styles.murphPar}>
                        Uma vez por ano temos um treino que vai testar seus
                        limites. O <span>Murph</span> é um WOD longo que irá desafiar você
                        e serve como <span>benchmark</span> no mundo do Crossfit.
                        No Haka tratamos o Murph como um evento anual para 
                        o qual você irá se preparar e ao final terá a satisfação
                        de ter superado este imenso desafio.
                    </p>
                </div>
            </div>
        </section>
    )
}