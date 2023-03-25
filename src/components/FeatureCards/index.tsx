import styles from './FeatureCards.module.scss'

export function FeatureCards() {
    return (
        <section className={styles.featureCardsSection}>

            <div className={styles.featureCard}>
                <img
                    src="./images/icons/health.png"
                    alt="health"
                    height="70"
                    className={styles.healthIcon}
                />
                <header className={styles.cardTitle}>
                    <span>Saúde em Primeiro Lugar</span>
                </header>
                <p className={styles.cardText}>
                    Sua <span>saúde</span> vem antes de qualquer outro resultado.
                    Treinos <span>adaptados</span> para você e seu corpo.
                </p>
            </div>

            <div className={styles.featureCard}>
                <img
                    src="./images/icons/coach-1.png"
                    alt="coach"
                    height="70"
                    className={styles.healthIcon}
                />
                <header className={styles.cardTitle}>
                    <span>Acompanhamento Profissional</span>
                </header>
                <p className={styles.cardText}>
                    Acompanhamento personalizado de profissionais <span>capacitados </span>
                    que buscarão o seu <span>melhor desempenho</span>.

                </p>
            </div>

            <div className={styles.featureCard}>
                <img
                    src="./images/icons/training-plan.png"
                    alt="health"
                    height="70"
                    className={styles.healthIcon}
                />
                <header className={styles.cardTitle}>
                    <span>Progressão sob Controle</span>
                </header>
                <p className={styles.cardText}>
                    Aulas elaboradas para a sua <span>evolução</span> constante
                    e estável como atleta respeitando seus <span>limites</span>.
                </p>
            </div>

        </section>
    );
}