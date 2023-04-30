import { ScheduleAttempt } from '@/components/ScheduleAttempt'
import { GetServerSideProps } from 'next'

import styles from '../styles/Contact.module.scss'
import Map from '@/components/Map'

interface ServerSideProps {
    apiKey: string
}

export default function Contact({apiKey}: ServerSideProps) {
    return (

        <div className={styles.main}>
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
                    69313-615
                </div>

                <div className={styles.socials}>
                    <img
                        src="/images/icons/instagram.png"
                        alt="instagram"
                        className={styles.instagram}
                    />
                    <img
                        src="/images/icons/whatsapp.png"
                        alt="whatsapp"
                        className={styles.whatsapp}
                    />
                </div>


            </div>
        </div>

    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            apiKey: process.env.GOOGLEMAPS_API_KEY!
        }
    }
}