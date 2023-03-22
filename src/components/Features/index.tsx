import styles from './Features.module.scss'
import { GiTeacher } from 'react-icons/gi'
import { FeatureCards } from '../FeatureCards'

export function Features() {
    return (
        <div className={styles.featuresContent}>
            <FeatureCards />
            <h1 className={styles.featuresTitle}>
                <header className={styles.bgHeader}>
                    <span>SIM</span>
                </header>
                Crossfit é para você
            </h1>

            <div className={styles.textContainer}>
                Nossa metodologia não escolhe público. Funciona com todos.
                Não trata-se de mágica, mas sim de <span>resultados</span>.
                <br/>
                Através do Crossfit, conseguimos entregar evolução mais
                rápida e de forma mais segura.
                Conheça a revolução do mundo fitness que já mudou <span>milhões </span>
                de vidas por todo o mundo.

            </div>
        </div>
    )
}