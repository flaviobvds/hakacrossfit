import { ScheduleAttempt } from '@/components/ScheduleAttempt'
import { GetServerSideProps } from 'next'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

import styles from '../styles/Contact.module.scss'
import Map from '@/components/Map'

interface ServerSideProps {
    apiKey: string
}

export default function Contact({ apiKey }: ServerSideProps) {
    return (

        <section className={styles.main}>
            <div className={styles.divider}>

                <div className={styles.form}>
                    <div className={styles.scheduleTitleContainer}>
                        <span className={styles.scheduleTitle}>Agende sua Aula Experimental</span>
                    </div>

                    <ScheduleAttempt />
                </div>



                <div className={styles.contactInfo}>
                    <Map
                        apiKey={apiKey}
                    />

                    <div className={styles.address}>
                        <span className={styles.addressTitle}>Haka CrossFit</span>
                        Av. João Liberato, 31 - Caranã <br />
                        Boa Vista - RR <br />
                        (95) 99147-0870
                    </div>

                    <div className={styles.socials}>
                        <button
                            className={styles.whatsappButton}
                            onClick={() => {
                                window.open(
                                    'https://api.whatsapp.com/send?phone=5595991245752&text=Ol%C3%A1.%20Gostaria%20de%20marcar%20uma%20aula%20experimental%20gratuita.',
                                    '_blank'
                                )
                            }}
                        >
                            <FaWhatsapp /> WhatsApp
                        </button>

                        <button
                            className={styles.instagramButton}
                            onClick={() => {
                                window.open(
                                    'https://www.instagram.com/haka_crossfit/',
                                    '_blank'
                                )
                            }}
                        >
                            <FaInstagram /> Instagram
                        </button>
                    </div>
                </div>

                
            </div>
        </section>

    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            apiKey: process.env.GOOGLEMAPS_API_KEY!
        }
    }
}