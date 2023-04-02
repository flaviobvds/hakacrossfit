import styles from '../styles/Classes.module.scss'


export default function Classes() {
    return (
        <>
            <div className={styles.main}>
                <section className={styles.classesTitle}>
                    <header className={styles.bgHeaderWhite}>
                        <span className={styles.bgHeaderTitleWhite}>
                            Aulas
                        </span>
                    </header>
                </section>

                <section className={styles.classes}>
                    <div className={styles.classesContent}>
                        <h1 className={styles.title}>
                            Escolha seu treino:
                        </h1>

                        <div className={styles.cards}>
                            <div className={styles.card}>
                                <div className={styles.cardImg}>
                                    <img
                                        src="/images/crossfit-class.jpg"
                                        alt="crossfit"
                                    />
                                </div>
                                <span className={styles.cardTitle}>Crossfit</span>
                            </div>

                            <div className={styles.card}>
                                <div className={styles.cardImg}>
                                    <img
                                        src="/images/lpo-class.jpg"
                                        alt="crossfit"
                                    />
                                </div>
                                <span className={styles.cardTitle}>LPO</span>
                            </div>

                            <div className={styles.card}>
                                <span className={styles.cardTitle}>Stronger</span>
                            </div>

                            <div className={styles.card}>
                                <span className={styles.cardTitle}> Open Gym</span>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
