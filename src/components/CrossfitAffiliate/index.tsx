import { useLanguage } from '@/hooks/language'
import { translatedText } from '@/hooks/translatedText';

import styles from './CrossfitAffiliate.module.scss'

export function CrossfitAffiliate() {
    const { language } = useLanguage();

    return (
        <section className={styles.affiliate}>
            <a className={styles.anchorAffiliate} id="affiliate" />
            <header className={styles.bgHeaderBlack}>
                <span className={styles.bgHeaderTitleBlack}>
                    CrossFit® Affiliate
                </span>
            </header>

            <div className={styles.affiliateContent}>
                <div className={styles.affiliateText}>
                    <span>
                        {translatedText.methodology[language as keyof typeof translatedText.home]}
                    </span>

                    <p className={styles.affiliateParag}>
                        {translatedText.methodologyP1[language as keyof typeof translatedText.home]}
                        <span>
                            CrossFit®
                        </span>
                        {translatedText.methodologyP2[language as keyof typeof translatedText.home]}
                    </p>
                </div>
                <div className={styles.affiliateImage}>
                    <img
                        src="./images/coach.jpg"
                        alt="crossfit_certificate"
                        className={styles.coachImage}
                    />
                    <img
                        src="./images/certificate.png"
                        alt="crossfit_certificate"
                        className={styles.crossfitCertificate}
                    />
                </div>
            </div>
        </section>
    )
}