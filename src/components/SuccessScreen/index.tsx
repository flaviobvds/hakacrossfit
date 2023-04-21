import { FaCheck } from 'react-icons/fa'
import styles from './SuccessScreen.module.scss'

interface SuccessScreenProps {
    email: string
}

export function SuccessScreen({ email }: SuccessScreenProps) {
    return (
        <div className={styles.content}>
            <FaCheck
                size='80'
                color='#145a04'
            />

            <div className={styles.text}>
                <div className={styles.success}>
                    Sucesso!
                </div>

                <div className={styles.par}>
                    Enviamos um email de confirmação para <span className={styles.email}>{email}</span> <br />
                    Se você não encontrar, verifique na sua página de Spam.
                </div>

            </div>
        </div>
    )
}