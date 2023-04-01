import { CrossfitAffiliate } from '@/components/CrossfitAffiliate'
import { Halloween } from '@/components/Halloween'
import { LiveInTepequem } from '@/components/LiveInTepequem'
import { Murph } from '@/components/Murph'
import { Staff } from '@/components/Staff'

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
                                <a href='#affiliate'>
                                    <li> CrossFit® Affiliate Box </li>
                                </a>
                                <a href='#murph'>
                                    <li> Murph </li>
                                </a>
                                <a href='#liveintepequem'>
                                    <li> Haka Live in Tepequem </li>
                                </a>
                                <a href='#staff'>
                                    <li> Staff certificada CrossFit® </li>
                                </a>
                                <a href='#halloween'>
                                    <li> Haka Halloween </li>
                                </a>
                            </ul>
                        </div>
                    </section>

                    <CrossfitAffiliate />
                    <Murph />
                    <LiveInTepequem />
                    <Staff />
                    <Halloween />

                </div>
            </div>
        </>
    )
}
