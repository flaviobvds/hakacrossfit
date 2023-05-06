import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/language'
import { translatedText } from '@/hooks/translatedText';

import styles from './Halloween.module.scss'

export function Halloween() {
    const { language } = useLanguage();

    // check if there's a window to allow video playback without hydration error
    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);

    return (
        <section className={styles.halloween}>
            <a className={styles.anchorHalloween} id="halloween" />
            <header className={styles.bgHeaderWhite}>
                <span className={styles.bgHeaderTitleWhite}>
                    Haka Halloween
                </span>
            </header>

            <div className={styles.halloweenContent}>
                <div className={styles.halloweenText}>
                    <span>
                        {translatedText.halloweenTitle[language as keyof typeof translatedText.home]}
                    </span>

                    <p className={styles.halloweenParagraph}>
                        {translatedText.halloweenP1[language as keyof typeof translatedText.home]}
                        <span>
                            {translatedText.halloweenP2[language as keyof typeof translatedText.home]}
                        </span>
                        {translatedText.halloweenP3[language as keyof typeof translatedText.home]}
                    </p>
                </div>

                <div className={styles.halloweenVideoDiv}>
                    {
                        hasWindow &&
                        <video
                            muted autoPlay loop
                            src={"/videos/halloween2.mp4"}
                            style={{ width: "225px", height: "400px" }}
                            className={styles.halloweenVideo}
                        />
                    }
                </div>

            </div>
        </section>
    )
}