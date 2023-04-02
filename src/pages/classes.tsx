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
                                <span className={styles.cardTitle}> CrossFit </span>
                                <p className={styles.cardDescription}>
                                    Desenvolva altos níveis de condicionamento físico com
                                    exercícios variados e de elevada intensidade.
                                </p>
                                <span className={styles.timesTitle}> Horários </span>

                                <div className={styles.timeTable}>
                                    <span className={styles.day}>Seg</span>
                                    <div className={styles.times}>
                                        <span className={styles.time}>06:00</span>
                                        <span className={styles.time}>07:00</span>
                                        <span className={styles.time}>08:00</span>
                                        <span className={styles.time}>16:00</span>
                                        <span className={styles.time}>17:00</span>
                                        <span className={styles.time}>18:00</span>
                                        <span className={styles.time}>19:00</span>
                                        <span className={styles.time}>20:00</span>
                                        <span className={styles.time}>21:00</span>
                                    </div>

                                    <span className={styles.day}>Ter</span>
                                    <div className={styles.times}>
                                        <span className={styles.time}>06:00</span>
                                        <span className={styles.time}>07:00</span>
                                        <span className={styles.time}>08:00</span>
                                        <span className={styles.time}>16:00</span>
                                        <span className={styles.time}>17:00</span>
                                        <span className={styles.time}>18:00</span>
                                        <span className={styles.time}>19:00</span>
                                        <span className={styles.time}>20:00</span>
                                    </div>

                                    <span className={styles.day}>Qua</span>
                                    <div className={styles.times}>
                                        <span className={styles.time}>06:00</span>
                                        <span className={styles.time}>07:00</span>
                                        <span className={styles.time}>08:00</span>
                                        <span className={styles.time}>16:00</span>
                                        <span className={styles.time}>17:00</span>
                                        <span className={styles.time}>18:00</span>
                                        <span className={styles.time}>19:00</span>
                                        <span className={styles.time}>20:00</span>
                                        <span className={styles.time}>21:00</span>
                                    </div>

                                    <span className={styles.day}>Qui</span>
                                    <div className={styles.times}>
                                        <span className={styles.time}>06:00</span>
                                        <span className={styles.time}>07:00</span>
                                        <span className={styles.time}>08:00</span>
                                        <span className={styles.time}>16:00</span>
                                        <span className={styles.time}>17:00</span>
                                        <span className={styles.time}>18:00</span>
                                        <span className={styles.time}>19:00</span>
                                        <span className={styles.time}>20:00</span>
                                        <span className={styles.time}>21:00</span>
                                    </div>

                                    <span className={styles.day}>Sex</span>
                                    <div className={styles.times}>
                                        <span className={styles.time}>06:00</span>
                                        <span className={styles.time}>07:00</span>
                                        <span className={styles.time}>08:00</span>
                                        <span className={styles.time}>16:00</span>
                                        <span className={styles.time}>17:00</span>
                                        <span className={styles.time}>18:00</span>
                                        <span className={styles.time}>19:00</span>
                                        <span className={styles.time}>20:00</span>
                                    </div>

                                    <span className={styles.day}>Sáb</span>
                                    <div className={styles.times}>
                                        <span className={styles.time}>9:00</span>
                                    </div>

                                    <span className={styles.day}>Dom</span>
                                    <span className={styles.noTime}>-</span>

                                </div>
                            </div>

                            <div className={styles.card}>
                                <div className={styles.cardImg}>
                                    <img
                                        src="/images/lpo-class.jpg"
                                        alt="crossfit"
                                    />
                                </div>
                                <span className={styles.cardTitle}>LPO</span>
                                <p className={styles.cardDescription}>
                                    Desenvolva altos níveis de condicionamento físico com
                                    exercícios variados e de elevada intensidade.
                                </p>
                                <span className={styles.timesTitle}> Horários </span>

                                <div className={styles.timeTable}>
                                    <span className={styles.day}>Seg</span>
                                    <span className={styles.noTime}>-</span>

                                    <span className={styles.day}>Ter</span>
                                    <div className={styles.times}>
                                        <span className={styles.time}>21:00</span>
                                    </div>

                                    <span className={styles.day}>Qua</span>
                                    <span className={styles.noTime}>-</span>

                                    <span className={styles.day}>Qui</span>
                                    <span className={styles.noTime}>-</span>

                                    <span className={styles.day}>Sex</span>
                                    <span className={styles.noTime}>-</span>

                                    <span className={styles.day}>Sáb</span>
                                    <div className={styles.times}>
                                        <span className={styles.time}>10:00</span>
                                    </div>

                                    <span className={styles.day}>Dom</span>
                                    <span className={styles.noTime}>-</span>

                                </div>
                            </div>

                            <div className={styles.card}>
                                <div className={styles.cardImg}>
                                    <img
                                        src="/images/lpo-class.jpg"
                                        alt="crossfit"
                                    />
                                </div>
                                <span className={styles.cardTitle}>Stronger</span>
                                <p className={styles.cardDescription}>
                                    Desenvolva altos níveis de condicionamento físico com
                                    exercícios variados e de elevada intensidade.
                                </p>
                                <span className={styles.timesTitle}> Horários </span>

                                <div className={styles.timeTable}>
                                    <span className={styles.day}>Seg</span>
                                    <span className={styles.noTime}>-</span>

                                    <span className={styles.day}>Ter</span>
                                    <span className={styles.noTime}>-</span>

                                    <span className={styles.day}>Qua</span>
                                    <span className={styles.noTime}>-</span>

                                    <span className={styles.day}>Qui</span>
                                    <span className={styles.noTime}>-</span>

                                    <span className={styles.day}>Sex</span>
                                    <div className={styles.times}>
                                        <span className={styles.time}>21:00</span>
                                    </div>

                                    <span className={styles.day}>Sáb</span>
                                    <span className={styles.noTime}>-</span>

                                    <span className={styles.day}>Dom</span>
                                    <span className={styles.noTime}>-</span>

                                </div>
                            </div>

                            <div className={styles.card}>
                                <div className={styles.cardImg}>
                                    <img
                                        src="/images/lpo-class.jpg"
                                        alt="crossfit"
                                    />
                                </div>
                                <span className={styles.cardTitle}> Open Gym</span>
                                <p className={styles.cardDescription}>
                                    Desenvolva altos níveis de condicionamento físico com
                                    exercícios variados e de elevada intensidade.
                                </p>
                                <span className={styles.timesTitle}> Horários </span>

                                <div className={styles.timeTable}>
                                    <span className={styles.day}>Seg</span>
                                    <span className={styles.noTime}>-</span>

                                    <span className={styles.day}>Ter</span>
                                    <span className={styles.noTime}>-</span>

                                    <span className={styles.day}>Qua</span>
                                    <span className={styles.noTime}>-</span>

                                    <span className={styles.day}>Qui</span>
                                    <span className={styles.noTime}>-</span>

                                    <span className={styles.day}>Sex</span>
                                    <span className={styles.noTime}>-</span>

                                    <span className={styles.day}>Sáb</span>
                                    <div className={styles.times}>
                                        <span className={styles.time}>11:00</span>
                                        <span className={styles.time}>12:00</span>
                                    </div>

                                    <span className={styles.day}>Dom</span>
                                    <span className={styles.noTime}>-</span>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
