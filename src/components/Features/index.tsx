import styles from './Features.module.scss'
import { GiTeacher } from 'react-icons/gi'
import { FeatureCards } from '../FeatureCards'

export function Features() {
    return (
        <div className={styles.features}>
            <div className={styles.featuresSection}>
                <FeatureCards />

                <div className={styles.featuresContent}>
                    <div className={styles.crossfitForYou}>
                        <h1 className={styles.featuresTitle}>
                            <header className={styles.bgHeader}>
                                <span className={styles.bgHeaderTitle}>
                                    SIM
                                </span>
                            </header>
                            Crossfit é para você
                        </h1>

                        <div className={styles.textContainer}>
                            Nossa metodologia não escolhe público. Funciona com todos.
                            Não é com mágica, mas sim com <span>resultados</span>.
                            Através do Crossfit, conseguimos entregar evolução mais
                            rápida e de forma mais segura.
                            Conheça a revolução do mundo fitness que já mudou <span>milhões </span>
                            de vidas por todo o mundo.

                        </div>
                    </div>

                    <div className={styles.featureImages}>
                    <img
                                src="./images/murph.gif"
                                alt="murph"
                                className={styles.gif}
                            />
                    </div>

                </div>

            </div>
        </div>
    )
}