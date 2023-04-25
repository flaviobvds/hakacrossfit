import { PlanCard } from '../PlanCard'
import styles from './PlanCards.module.scss'

export function PlanCards() {
    return (
        <section className={styles.plans}>
            <div className={styles.plansContent}>
                <h1 className={styles.title}>
                    Planos disponíveis:
                </h1>

                <div className={styles.cards}>
                    <PlanCard
                        name={'Flex'}
                        accessType={'3 Acessos por Semana'}
                        annualPrice={'189'}
                        trimesterPrice={'209'}
                        monthPrice={'229'}
                    />

                    <PlanCard
                        name={'Ilimitado'}
                        accessType={'Acessos ilimitados'}
                        annualPrice={'219'}
                        trimesterPrice={'239'}
                        monthPrice={'269'}
                        main={true}
                    />

                    <PlanCard
                        name={'Horário Fixo'}
                        accessType={'5 Acessos por Semana'}
                        times={'06h / 07h / 08h / 16h'}
                        annualPrice={'189'}
                        trimesterPrice={'209'}
                        monthPrice={'229'}
                    />
                </div>

            </div>
        </section>
    )
}