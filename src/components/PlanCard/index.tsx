import styles from './PlanCard.module.scss'

interface PlanCardProps {
    name: string,
    accessType: string,
    times?: string,
    annualPrice: string,
    trimesterPrice: string,
    monthPrice: string,
    main?: boolean
}

export function PlanCard({ name, main, accessType, times, annualPrice, trimesterPrice, monthPrice }: PlanCardProps) {
    return (

        <div className={`${styles.card} ${main ?? styles.main}`}>
            <span className={styles.cardTitle}>{name}</span>

            <ul className={styles.featList}>
                <li>{accessType}</li>
                {times
                    ? <li className={styles.times}>{times}</li>
                    : <li className={styles.times}>&nbsp;</li>
                }

                <li>CrossFit</li>
                <li>LPO</li>
                <li>Stronger</li>
                <li>Open Gym</li>
            </ul>

            <div className={styles.pricing}>
                <span className={styles.price}>R$ {annualPrice}</span>
                <span className={styles.priceDescription}>Plano anual</span>
            </div>

            <div className={styles.pricing}>
                <span className={styles.price}>R$ {trimesterPrice}</span>
                <span className={styles.priceDescription}>Plano trimestral</span>
            </div>

            <div className={styles.pricing}>
                <span className={styles.price}>R$ {monthPrice}</span>
                <span className={styles.priceDescription}>Plano mensal</span>
            </div>

        </div>
    )
}