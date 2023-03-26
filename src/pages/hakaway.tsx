import styles from '../styles/HakaWay.module.scss'


export default function HakaWay() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.hakawayContent}>

                    <header className={styles.bgHeader}>
                        <span className={styles.bgHeaderTitle}>
                            Padrão Haka
                        </span>
                    </header>

                    <section className={styles.introduction}>
                        <div className={styles.fireContainer}>
                            <img
                                src="/images/fire.jpg"
                                alt=""
                                className={styles.fire}
                            />
                        </div>

                        <div className={styles.introductionText}>
                            <p>
                                Conheça o
                                <span> Padrão Haka:</span>
                            </p>

                            <ul className={styles.featureList}>
                                <li> CrossFit® Affiliate Box </li>
                                <li> Murph </li>
                                <li> Haka Live in Tepequem</li>
                                <li> Staff certificada CrossFit®</li>
                                <li> Haka Halloween</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.affiliate}>
                        <header className={styles.bgHeaderBlack}>
                            <span className={styles.bgHeaderTitleBlack}>
                                CrossFit® Affiliate
                            </span>
                        </header>

                        <div className={styles.affiliateContent}>
                            <div className={styles.affiliateText}>
                                <span>Metodologia aplicada da forma certa</span>
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

                </div>
            </div>
        </>
    )
}
