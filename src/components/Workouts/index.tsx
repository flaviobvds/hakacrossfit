import { WorkoutCard } from '@/components/WorkoutCard';
import { useEffect, useState } from 'react';
import styles from './Workouts.module.scss'


export function Workouts() {
    const [selectedWorkout, setSelectedWorkoout] = useState('');

    function onScheduleTime(workout: string) {
        setSelectedWorkoout(workout);
    }

    useEffect(() => {
        // run function to schedule time
    }, [selectedWorkout])

    const crossfit = {
        title: 'CrossFit',
        description: 'Desenvolva altos níveis de condicionamento físico com exercícios variados e de elevada intensidade.',
        image: '/images/crossfit-class.jpg',
        times: {
            'mon': ['06:00', '07:00', '08:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
            'tue': ['06:00', '07:00', '08:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
            'wed': ['06:00', '07:00', '08:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
            'thu': ['06:00', '07:00', '08:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
            'fri': ['06:00', '07:00', '08:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
            'sat': ['09:00'],
            'sun': []
        },
    }

    const lpo = {
        title: 'LPO',
        description: 'Evolua seus músculos e melhore sua força praticando o LPO (Levantamento de Peso Olímpico).',
        image: '/images/lpo-class.jpg',
        times: {
            'mon': [],
            'tue': ['21:00'],
            'wed': [],
            'thu': [],
            'fri': [],
            'sat': ['10:00'],
            'sun': []
        },
    }

    const stronger = {
        title: 'Stronger',
        description: 'Treino de movimentos acessórios para te preparar para o dia a dia',
        image: '/images/stronger-class.jpg',
        times: {
            'mon': [],
            'tue': [],
            'wed': [],
            'thu': [],
            'fri': ['21:00'],
            'sat': [],
            'sun': []
        },
    }

    const openGym = {
        title: 'Open Gym',
        description: 'A academia disponível para você praticar o tipo de treino que preferir.',
        image: '/images/opengym.jpg',
        times: {
            'mon': [],
            'tue': [],
            'wed': [],
            'thu': [],
            'fri': [],
            'sat': ['11:00', '12:00'],
            'sun': []
        },
    }

    return (
        <section className={styles.classes}>
            <div className={styles.classesContent}>
                <h1 className={styles.title}>
                    Escolha seu treino:
                </h1>

                <div className={styles.cards}>
                    <WorkoutCard cardInfo={crossfit} onScheduleTime={onScheduleTime} />
                    <WorkoutCard cardInfo={lpo} onScheduleTime={onScheduleTime} />
                    <WorkoutCard cardInfo={stronger} onScheduleTime={onScheduleTime} />
                    <WorkoutCard cardInfo={openGym} onScheduleTime={onScheduleTime} />
                </div>
            </div>
        </section>
    );
}