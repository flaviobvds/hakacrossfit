import { useEffect, useState } from 'react'

import styles from './Halloween.module.scss'

export function Halloween() {

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
                    <span>Gostosuras ou Travessuras?</span>
                    <p className={styles.halloweenParagraph}>
                        Acreditamos que Crossfit não é apenas sobre treinar, mas sim uma
                        experiência de vida. Nosso evento anual de Halloween visa proporcionar
                        uma <span>experiência de treino única</span>. Venha treinar, interagir, 
                        fazer amigos, e concorrer a prêmios no nosso concurso de melhores
                        fantasias.
                    </p>
                </div>

                <div className={styles.halloweenVideoDiv}>
                    {
                        hasWindow &&
                        <video
                            muted autoPlay loop
                            src={"/videos/halloween.mp4"}
                            style={{ width: "225px", height: "400px" }}
                            className={styles.halloweenVideo}
                        />
                    }
                </div>

            </div>
        </section>
    )
}