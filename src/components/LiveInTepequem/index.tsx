import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/language'
import { translatedText } from '@/hooks/translatedText';

import styles from './LiveInTepequem.module.scss'

export function LiveInTepequem() {
    const { language } = useLanguage();

    // check if there's a window to allow video playback without hydration error
    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);

    return (
        <section className={styles.tepequem}>
            <a className={styles.anchorLiveintepequem} id="liveintepequem" />
            <header className={styles.bgHeaderWhite}>
                <span className={styles.bgHeaderTitleWhite}>
                    Haka Live in Tepequem
                </span>
            </header>

            <div className={styles.tepequemContent}>
                <div className={styles.tepequemText}>
                    <span>
                        {translatedText.liveTitle[language as keyof typeof translatedText.home]}
                    </span>

                    <p className={styles.tepequemParagraph}>
                        {translatedText.liveTepequem1[language as keyof typeof translatedText.home]}
                        <span>
                            Haka Live in Tepequem
                        </span>
                        {translatedText.liveTepequem2[language as keyof typeof translatedText.home]}
                        <span>
                            {translatedText.liveTepequem3[language as keyof typeof translatedText.home]}
                        </span>
                        {translatedText.liveTepequem4[language as keyof typeof translatedText.home]}
                        <span>
                            {translatedText.liveTepequem5[language as keyof typeof translatedText.home]}
                        </span>
                    </p>
                </div>

                <div className={styles.tepequemVideoDiv}>
                    {
                        hasWindow &&
                        <video
                            muted autoPlay loop
                            src={"/videos/tepequem2.mp4"}
                            style={{ width: "225px", height: "400px" }}
                            className={styles.tepequemVideo}
                        />
                    }
                </div>

            </div>
        </section>
    )
}