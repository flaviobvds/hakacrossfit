import { useLanguage } from '@/hooks/language'
import { translatedText } from '@/hooks/translatedText';

import styles from './PlanCard.module.scss'

interface PlanCardProps {
    name: string,
    description?: string,
    accessType: string,
    times?: string,
    annualPrice: string,
    trimesterPrice: string,
    monthPrice: string,
    main?: boolean
}

export function PlanCard({ name, description, main, accessType, times, annualPrice, trimesterPrice, monthPrice }: PlanCardProps) {
    const { language } = useLanguage();

    return (
        <div className={`${styles.card} ${main ?? styles.main}`}>
            <span className={styles.cardTitle}>{name}</span>
            {description
                ? <span className={styles.description}>{description}</span>
                : <span className={styles.description}>&nbsp;</span>
            }

            <ul className={styles.featList}>
                <li>{accessType}</li>
                {times
                    ? <li className={styles.times}>{times}</li>
                    : <li className={styles.times}>&nbsp;</li>
                }

                <li>CrossFit</li>
                <li>
                    {translatedText.weightlifting[language as keyof typeof translatedText.home]}
                </li>
                <li>Stronger</li>
                <li>Open Gym</li>
            </ul>

            <div className={styles.pricing}>
                <span className={styles.price}>R$ {annualPrice}</span>
                <span className={styles.priceDescription}>
                    {translatedText.annualCommitment[language as keyof typeof translatedText.home]}
                </span>
            </div>

            <div className={styles.pricing}>
                <span className={styles.price}>R$ {trimesterPrice}</span>
                <span className={styles.priceDescription}>
                    {translatedText.trimesterCommitment[language as keyof typeof translatedText.home]}
                </span>
            </div>

            <div className={styles.pricing}>
                <span className={styles.price}>R$ {monthPrice}</span>
                <span className={styles.priceDescription}>
                    {translatedText.monthlyCommitment[language as keyof typeof translatedText.home]}
                </span>
            </div>

        </div>
    )
}