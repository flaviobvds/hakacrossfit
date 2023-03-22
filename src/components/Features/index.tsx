import styles from './Features.module.scss'
import { GiTeacher } from 'react-icons/gi'
import { FeatureCards } from '../FeatureCards'

export function Features() {
    return (
        <div className={styles.featuresContent}>
            <FeatureCards/>
            <h1 className={styles.featuresTitle}>
                <span>SIM,</span> <br/>
                O Crossfit é para você
            </h1>
        </div>
    )
}