import styles from './PlanCards.module.scss'

export function PlanCards() {
    return (
        <section className={styles.plans}>
            <div className={styles.plansContent}>
                <h1 className={styles.title}>
                    Escolha seu treino:
                </h1>

                <div className={styles.cards}>
                    <div className={styles.card}>
                        1
                    </div>

                    <div className={styles.card}>
                        2
                    </div>

                    <div className={styles.card}>
                        3
                    </div>
                </div>
            </div>
        </section>
    )
}