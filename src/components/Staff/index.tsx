import styles from './Staff.module.scss'

export function Staff() {
    return (
        <section className={styles.staff}>
            <header className={styles.bgHeaderBlack}>
                <span className={styles.bgHeaderTitleBlack}>
                    Staff
                </span>
            </header>

            <div className={styles.staffContent}>
                <div className={styles.staffList}>
                    <ul>
                        <li>1 Mile Run</li>
                        <li>100 Pull-Ups</li>
                        <li>200 Push-Ups</li>
                        <li>300 Squats</li>
                        <li>1 Mile Run</li>
                    </ul>
                    <span>"MURPH"</span>
                </div>

                <div className={styles.staffText}>
                    <span>Coloque seus limites à prova</span>
                    <p className={styles.staffPar}>
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