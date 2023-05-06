import { PlanCard } from '../PlanCard'
import { useLanguage } from '@/hooks/language'
import { translatedText } from '@/hooks/translatedText';

import styles from './PlanCards.module.scss'

export function PlanCards() {
    const { language } = useLanguage();

    return (
        <section className={styles.plans}>
            <div className={styles.plansContent}>
                <h1 className={styles.title}>
                    {translatedText.availablePlans[language as keyof typeof translatedText.home]}
                </h1>

                <div className={styles.cards}>
                    <PlanCard
                        name={'Flex'}
                        accessType={`3 ${translatedText.daysAWeek[language as keyof typeof translatedText.home]}`}
                        times={translatedText.allHours[language as keyof typeof translatedText.home]}
                        annualPrice={'189'}
                        trimesterPrice={'209'}
                        monthPrice={'229'}
                    />

                    <PlanCard
                        name={translatedText.unlimited[language as keyof typeof translatedText.home]}
                        description={translatedText.mostPopular[language as keyof typeof translatedText.home]}
                        times={translatedText.allHours[language as keyof typeof translatedText.home]}
                        accessType={translatedText.unlimitedAccess[language as keyof typeof translatedText.home]}
                        annualPrice={'219'}
                        trimesterPrice={'239'}
                        monthPrice={'269'}
                        main={true}
                    />

                    <PlanCard
                        name={translatedText.fixedHours[language as keyof typeof translatedText.home]}
                        accessType={`5 ${translatedText.daysAWeek[language as keyof typeof translatedText.home]}`}
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