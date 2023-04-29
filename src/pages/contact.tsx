import { ScheduleAttempt } from '@/components/ScheduleAttempt'

import styles from '../styles/Contact.module.scss'

export default function Contact() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.form}>
                    <div className={styles.scheduleTitleContainer}>
                        <span className={styles.scheduleTitle}>Agende sua Aula Experimental</span>
                    </div>

                    <ScheduleAttempt />
                </div>

                <div className={styles.contactInfo}>

                </div>
            </div>
        </>
    )
}
