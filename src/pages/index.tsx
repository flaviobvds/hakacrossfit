import Head from 'next/head'

//import { Header } from '@/components/Header'
import { Title } from '@/components/Title'
import { Features } from '@/components/Features'
import { Staff } from '@/components/Staff'
import Classes from './classes'
import Workouts from '@/components/Workouts'


export default function Home() {
    return (
        <>
            <Title />
            <Features />
            <Workouts />
            <Staff />
        </>
    )
}
