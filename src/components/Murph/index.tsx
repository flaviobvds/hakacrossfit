import styles from './Murph.module.scss'

export function Murph() {
    return (
        <section className={styles.murph}>
            <header className={styles.bgHeaderBlack}>
                <span className={styles.bgHeaderTitleBlack}>
                    Murph
                </span>
            </header>

            <div className={styles.affiliateContent}>
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

                <div className={styles.affiliateText}>
                    <span>Coloque seus limites à prova</span>
                    <p className={styles.test}>
                        Crossfit pode ser praticado em qualquer lugar.
                        Nas ruas, nos parques, em casa. No entanto, a
                        expertise de um coach <span>CrossFit® </span>
                        credenciado faz toda a diferença. Somos um box
                        credenciado oficial da marca CrossFit®, o que garante
                        a você a certeza de que a metodologia do seu treino
                        de Crossfit está sendo aplicada da forma certa
                        e segura por um profissional habilitado.
                    </p>
                </div>
            </div>
        </section>
    )
}