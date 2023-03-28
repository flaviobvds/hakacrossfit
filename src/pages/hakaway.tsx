import { CrossfitAffiliate } from '@/components/CrossfitAffiliate'
import { LiveInTepequem } from '@/components/LiveInTepequem'
import { Murph } from '@/components/Murph'

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

                    <CrossfitAffiliate />
                    <Murph />
                    <LiveInTepequem />

                </div>
            </div>
        </>
    )
}
