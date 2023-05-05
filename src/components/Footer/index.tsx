import styles from './Footer.module.scss'
import { FaWhatsapp, FaInstagram, } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md';

export function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.companyInfo}>
                <img className={styles.logo} src="./images/full-logos/full-white-logo.png" alt="" />
                <span className={styles.title}>Haka CrossFit</span>
                <div className={styles.address}>
                    Av. João Liberato, 31 - Caranã <br />
                    Boa Vista - RR <br />
                    69313-615
                </div>
            </div>

            <div className={styles.times}>
                <span>Horários</span>
                <div className={styles.timesContainer}>
                    <div className={styles.days}>
                        Seg: <br />
                        Ter: <br />
                        Qua: <br />
                        Qui: <br />
                        Sex: <br />
                        Sáb: <br />
                        Dom:
                    </div>

                    <div className={styles.dayTime}>
                        06:00 - 09:00 | 16:00 - 22:00<br />
                        06:00 - 09:00 | 16:00 - 22:00<br />
                        06:00 - 09:00 | 16:00 - 22:00<br />
                        06:00 - 09:00 | 16:00 - 22:00<br />
                        06:00 - 09:00 | 16:00 - 22:00<br />
                        09:00 - 12:00 <br />
                        -
                    </div>
                </div>

            </div>

            <div className={styles.contact}>
                Contato

                <div className={styles.socials}>
                    <div className={styles.social}>
                        <FaWhatsapp className={styles.icon} size={20} />
                        (95) 99124-5752
                    </div>
                    <div className={styles.social}>
                        <FaInstagram className={styles.icon} size={20} />
                        @hakacrossfit
                    </div>
                    <div className={styles.social}>
                        <MdOutlineEmail className={styles.icon} size={20} />
                        hakacrossfit@gmail.com
                    </div>
                </div>
            </div>
        </div>
    )
}