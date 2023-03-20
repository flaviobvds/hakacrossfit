import Head from 'next/head'

import styles from '@/styles/Home.module.scss'
//import logo from '/images/logos/logo.svg'

export default function Home() {
    return (
        <>
            <Head>
                <title>Haka Crossfit</title>
            </Head>
            
            <main className={styles.main}>
                <img className={styles.logo} src="/images/logos/logo.svg" alt="" />
            </main>
        </>
    )
}
