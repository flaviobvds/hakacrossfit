import { useLanguage } from '@/hooks/language'
import { translatedText } from '@/hooks/translatedText';

import styles from './FeatureCards.module.scss'

export function FeatureCards() {
    const { language } = useLanguage();

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
                    <span>
                        {translatedText.healthFirst1[language as keyof typeof translatedText.home]}
                        <br />
                        {translatedText.healthFirst2[language as keyof typeof translatedText.home]}
                    </span>
                </header>
                <p className={styles.cardText}>
                    {translatedText.healthCard1[language as keyof typeof translatedText.home]}
                    <span>
                        {translatedText.healthCard2[language as keyof typeof translatedText.home]}
                    </span>
                    {translatedText.healthCard3[language as keyof typeof translatedText.home]}
                    <span>
                        {translatedText.healthCard4[language as keyof typeof translatedText.home]}
                    </span>
                    {translatedText.healthCard5[language as keyof typeof translatedText.home]}
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
                    <span>
                        {translatedText.professionalCoaching1[language as keyof typeof translatedText.home]}
                        <br />
                        {translatedText.professionalCoaching2[language as keyof typeof translatedText.home]}
                    </span>
                </header>
                <p className={styles.cardText}>
                    {translatedText.coachCard1[language as keyof typeof translatedText.home]}
                    <span>
                        {translatedText.coachCard2[language as keyof typeof translatedText.home]}
                    </span>
                    {translatedText.coachCard3[language as keyof typeof translatedText.home]}
                    <span>
                        {translatedText.coachCard4[language as keyof typeof translatedText.home]}
                    </span>
                </p>
            </div>

            <div className={styles.featureCard}>
                <img
                    src="./images/icons/training-plan.png"
                    alt="training_plan"
                    height="70"
                    className={styles.healthIcon}
                />
                <header className={styles.cardTitle}>
                    <span>
                        {translatedText.progressionUnderControl1[language as keyof typeof translatedText.home]}
                        <br />
                        {translatedText.progressionUnderControl2[language as keyof typeof translatedText.home]}
                    </span>
                </header>

                <p className={styles.cardText}>
                    {translatedText.progressionCard1[language as keyof typeof translatedText.home]}
                    <span>
                        {translatedText.progressionCard2[language as keyof typeof translatedText.home]}
                    </span>
                    {translatedText.progressionCard3[language as keyof typeof translatedText.home]}
                    <span>
                        {translatedText.progressionCard4[language as keyof typeof translatedText.home]}
                    </span>
                </p>
            </div>

        </section>
    );
}