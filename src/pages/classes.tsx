import { WorkoutCard } from '@/components/WorkoutCard';
import { Workouts } from '@/components/Workouts';
import { useEffect, useState } from 'react';
import styles from '../styles/Classes.module.scss'


export default function Classes() {

    return (
        <>
            <div className={styles.main}>
                <section className={styles.classesTitle}>
                    <header className={styles.bgHeaderWhite}>
                        <span className={styles.bgHeaderTitleWhite}>
                            Aulas
                        </span>
                    </header>
                </section>

                <Workouts />

            </div>
        </>
    )
}
