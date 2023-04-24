import { PlanCards } from '@/components/PlanCards'
import styles from '../styles/Plans.module.scss'


export default function Plans() {
    return (
        <>  
            <div className={styles.main}>
            <section className={styles.plansTitle}>
                <header className={styles.bgHeaderWhite}>
                    <span className={styles.bgHeaderTitleWhite}>
                        Planos
                    </span>
                </header>
            </section>

            <PlanCards />
        </div>
        </>
    )
}
