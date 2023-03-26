import { Header } from '@/components/Header'
import Head from 'next/head'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
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
            </main>
        </>
    )
}
