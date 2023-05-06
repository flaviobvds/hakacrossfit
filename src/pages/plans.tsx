import { PlanCards } from '@/components/PlanCards'
import { useLanguage } from '@/hooks/language'
import { translatedText } from '@/hooks/translatedText';

import styles from '../styles/Plans.module.scss'


export default function Plans() {
    const { language } = useLanguage();

    return (
        <>
            <div className={styles.main}>
                <section className={styles.plansTitle}>
                    <header className={styles.bgHeaderWhite}>
                        <span className={styles.bgHeaderTitleWhite}>
                            {translatedText.plans[language as keyof typeof translatedText.home]}
                        </span>
                    </header>
                </section>

                <PlanCards />
            </div>
        </>
    )
}
