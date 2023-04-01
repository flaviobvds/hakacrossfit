import { useEffect, useState } from 'react'

import styles from './LiveInTepequem.module.scss'

export function LiveInTepequem() {

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
                    <span>Treino, Comunidade e Natureza</span>
                    <p className={styles.tepequemParagraph}>
                        Nosso evento <span>Haka Live in Tepequem</span> é sem dúvidas
                        um de nossos grandes diferenciais. Não trata-se de um treino, mas
                        sim de uma <span>experiência</span> única. Durante 2 dias,
                        conecte-se com a natureza, visite as maravilhas naturais da
                        Serra do Tepequém, integre-se com a comunidade do Crossfit e
                        participe de uma competição desafiadora e <span>incomparável</span>.
                    </p>
                </div>

                <div className={styles.tepequemVideoDiv}>
                    {
                        hasWindow &&
                        <video
                            muted autoPlay loop
                            src={"/videos/tepequem.mp4"}
                            style={{ width: "225px", height: "400px" }}
                            className={styles.tepequemVideo}
                        />
                    }
                </div>

            </div>
        </section>
    )
}