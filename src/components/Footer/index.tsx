import styles from './Footer.module.scss'

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

            </div>

            <div className={styles.socials}>

            </div>
        </div>
    )
}