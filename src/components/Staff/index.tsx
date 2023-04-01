import styles from './Staff.module.scss'

export function Staff() {
    return (
        <section className={styles.staff}>
            <a className={styles.anchorStaff} id="staff" />
            <header className={styles.bgHeaderBlack}>
                <span className={styles.bgHeaderTitleBlack}>
                    Staff
                </span>
            </header>

            <div className={styles.staffContent}>
                <div className={styles.coachInfo}>
                    <div className={styles.roundImg}>
                        <img src="/images/neozito2.jpg" alt="coach1" />
                    </div>
                    <span className={styles.coachName}>
                        Neo Almeida
                    </span>
                    <span className={styles.coachTitle}>
                        Coach
                    </span>
                    <span className={styles.coachCertification}>
                        CrossFit® Level One
                    </span>
                </div>

                <div className={styles.coachInfo}>
                    <div className={styles.roundImg}>
                        <img src="/images/vivi2.jpg" alt="coach2" />
                    </div>
                    <span className={styles.coachName}>
                        Vivi Sousa
                    </span>
                    <span className={styles.coachTitle}>
                        Head Coach
                    </span>
                    <span className={styles.coachCertification}>
                        CrossFit® Level One
                    </span>
                </div>

                <div className={styles.coachInfo}>
                    <div className={styles.roundImg}>
                        <img src="/images/cassiano2.jpg" alt="coach3" />
                    </div>
                    <span className={styles.coachName}>
                        Cassiano Ricardo
                    </span>
                    <span className={styles.coachTitle}>
                        Coach
                    </span>
                    <span className={styles.coachCertification}>
                        CrossFit® Level One
                    </span>
                </div>
            </div>
        </section>
    )
}