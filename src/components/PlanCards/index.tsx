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
                        times={'Todos os horários'}
                        annualPrice={'189'}
                        trimesterPrice={'209'}
                        monthPrice={'229'}
                    />

                    <PlanCard
                        name={'Ilimitado'}
                        description={'Mais popular'}
                        times={'Todos os horários'}
                        accessType={'Acessos Ilimitados'}
                        annualPrice={'219'}
                        trimesterPrice={'239'}
                        monthPrice={'269'}
                        main={true}
                    />

                    <PlanCard
                        name={'Horário Fixo'}
                        accessType={'5 Acessos por Semana'}
                        times={'06h / 07h / 08h / 16h'}
                        annualPrice={'199'}
                        trimesterPrice={'219'}
                        monthPrice={'239'}
                    />
                </div>

            </div>
        </section>
    )
}