import styles from './Features.module.scss'
import { GiTeacher } from 'react-icons/gi'

export function Features() {
    return (
        <div className={styles.featuresContent}>

            <section className={styles.featureCardsSection}>
                <div className={styles.featureCard}>
                    <img
                        src="./images/icons/health.png"
                        alt="health"
                        height="70"
                        className={styles.healthIcon}
                    />
                    <header className={styles.cardTitle}>
                        <span>Saúde em Primeiro Lugar</span>
                    </header>
                    <p className={styles.cardText}>
                        Priorizamos sua <span>saúde</span> antes de qualquer outro resultado.
                        Nossos treinos são <span>adaptados</span> para você e seu corpo.
                    </p>
                </div>

                <div className={styles.featureCard}>
                    <img
                        src="./images/icons/coach-1.png"
                        alt="coach"
                        height="70"
                        className={styles.healthIcon}
                    />
                    <header className={styles.cardTitle}>
                        <span>Acompanhamento Profissional</span>
                    </header>
                    <p className={styles.cardText}>
                        Conte com o acompanhamento personalizado de profissionais capacitados e <span>credenciados </span> 
                        que buscarão o seu <span>melhor desempenho</span>.

                    </p>
                </div>


                <div className={styles.featureCard}>
                    <img
                        src="./images/icons/health.png"
                        alt="health"
                        height="60"
                        className={styles.healthIcon}
                    />
                    <header className={styles.cardTitle}>
                        <span>SAÚDE EM PRIMEIRO LUGAR</span>
                    </header>
                    <p className={styles.cardText}>
                        Priorizamos sua <span>saúde</span> antes de qualquer outro resultado.
                        Nossos treinos são <span>adaptados</span> para você e seu corpo.
                    </p>
                </div>


            </section>

        </div>
    )
}