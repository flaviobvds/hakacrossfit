import { useLanguage } from '@/hooks/language'
import { translatedText } from '@/hooks/translatedText';

import styles from './Murph.module.scss'

export function Murph() {
    const { language } = useLanguage();

    return (
        <section className={styles.murph}>
            <a className={styles.anchorMurph} id="murph" />
            <header className={styles.bgHeaderBlack}>
                <span className={styles.bgHeaderTitleBlack}>
                    Murph
                </span>
            </header>

            <div className={styles.murphContent}>
                <div className={styles.murphList}>
                    <ul>
                        <li>1 Mile Run</li>
                        <li>100 Pull-Ups</li>
                        <li>200 Push-Ups</li>
                        <li>300 Squats</li>
                        <li>1 Mile Run</li>
                    </ul>
                    <span>"MURPH"</span>
                </div>

                <div className={styles.murphText}>
                    <span>
                        {translatedText.testYourLimits[language as keyof typeof translatedText.home]}
                    </span>
                    <p className={styles.murphPar}>
                        {translatedText.murph1[language as keyof typeof translatedText.home]}
                        <span>
                            Murph
                        </span>
                        {translatedText.murph2[language as keyof typeof translatedText.home]}
                        <span>
                            benchmark
                        </span>
                        {translatedText.murph3[language as keyof typeof translatedText.home]}
                    </p>
                </div>
            </div>
        </section>
    )
}