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
                        height="60"
                        className={styles.healthIcon}
                    />
                    <h1 className={styles.cardTitle}>
                        SAÚDE EM PRIMEIRO LUGAR
                    </h1>
                    <p className={styles.cardText}>
                        Priorizamos sua <span>saúde</span> antes de qualquer outro resultado.
                        Nossos treinos são <span>adaptados</span> para você e seu corpo.
                    </p>
                </div>

                <div className={styles.featureCard}>
                    <img 
                        src="./images/icons/health.png" 
                        alt="health" 
                        height="60"
                        className={styles.healthIcon}
                    />
                    <h1 className={styles.cardTitle}>
                        SAÚDE EM PRIMEIRO LUGAR
                    </h1>
                    <p className={styles.cardText}>
                        Priorizamos sua <span>saúde</span> antes de qualquer outro resultado.
                        Nossos treinos são <span>adaptados</span> para você e seu corpo.
                    </p>
                </div>


                <div className={styles.featureCard}>
                    <img 
                        src="./images/icons/health.png" 
                        alt="health" 
                        height="60"
                        className={styles.healthIcon}
                    />
                    <h1 className={styles.cardTitle}>
                        SAÚDE EM PRIMEIRO LUGAR
                    </h1>
                    <p className={styles.cardText}>
                        Priorizamos sua <span>saúde</span> antes de qualquer outro resultado.
                        Nossos treinos são <span>adaptados</span> para você e seu corpo.
                    </p>
                </div>


            </section>

        </div>
    )
}