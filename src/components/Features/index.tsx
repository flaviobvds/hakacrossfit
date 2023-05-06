import { FeatureCards } from '../FeatureCards'
import { useLanguage } from '@/hooks/language'
import { translatedText } from '@/hooks/translatedText';

import styles from './Features.module.scss'

export function Features() {
    const { language } = useLanguage();

    return (
        <div className={styles.features}>
            <div className={styles.featuresSection}>
                <FeatureCards />

                <div className={styles.featuresContent}>
                    <div className={styles.crossfitForYou}>
                        <h1 className={styles.featuresTitle}>
                            <header className={styles.bgHeader}>
                                <span className={styles.bgHeaderTitle}>
                                    {translatedText.yes[language as keyof typeof translatedText.home]}
                                </span>
                            </header>
                            {translatedText.crossfitForYou[language as keyof typeof translatedText.home]}
                        </h1>

                        <div className={styles.textContainer}>
                            {translatedText.crossfitForYou1[language as keyof typeof translatedText.home]}
                            <span>
                                {translatedText.crossfitForYou2[language as keyof typeof translatedText.home]}
                            </span>
                            {translatedText.crossfitForYou3[language as keyof typeof translatedText.home]}
                            <span>
                                {translatedText.crossfitForYou4[language as keyof typeof translatedText.home]}
                            </span>
                            {translatedText.crossfitForYou5[language as keyof typeof translatedText.home]}

                        </div>
                    </div>

                    <div className={styles.featureImages}>
                        <img
                            src="./images/murph.gif"
                            alt="murph"
                            className={styles.gif}
                        />
                    </div>

                </div>

            </div>
        </div>
    )
}