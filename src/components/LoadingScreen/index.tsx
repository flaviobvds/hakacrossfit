import { ThreeCircles } from 'react-loader-spinner'
import styles from './LoadingScreen.module.scss'

export function LoadingScreen() {
    return (
        <div className={styles.content}>
            <ThreeCircles
                height="100"
                width="100"
                color='#145a04'
            />
        </div>
    )
}