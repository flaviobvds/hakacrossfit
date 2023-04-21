import { TailSpin } from 'react-loader-spinner'
import styles from './LoadingScreen.module.scss'

export function LoadingScreen() {
    return (
        <div className={styles.content}>
            <TailSpin
                height="70"
                width="70"
                color='#145a04'
            />
        </div>
    )
}