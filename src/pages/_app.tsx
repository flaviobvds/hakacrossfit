import { Header } from '@/components/Header'
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'
import type { AppProps } from 'next/app'

import '@/styles/globals.scss'
import { Roboto, Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Haka Crossfit</title>
            </Head>

            <main className={inter.className}>
                <Header />
                <Component {...pageProps} />

                <Analytics />
            </main>
        </>
    )
}
