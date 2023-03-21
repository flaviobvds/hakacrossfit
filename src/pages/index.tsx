import Head from 'next/head'

import { Header } from '@/components/Header'
import { Title } from '@/components/Title'
import { Features } from '@/components/Features'
import { AboutUs } from '@/components/AboutUs'

import styles from '@/styles/Home.module.scss'
//import logo from '/images/logos/logo.svg'

export default function Home() {
    return (
        <>
            <Head>
                <title>Haka Crossfit</title>
            </Head>
            
            <Header/>
            <Title/>
            <Features/>
            <AboutUs/>
        </>
    )
}
