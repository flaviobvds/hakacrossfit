import { Workouts } from '@/components/Workouts';
import { useLanguage } from '@/hooks/language'
import { translatedText } from '@/hooks/translatedText';

import styles from '../styles/Classes.module.scss'


export default function Classes() {
    const { language } = useLanguage();

    return (
        <div className={styles.main}>
            <section className={styles.classesTitle}>
                <header className={styles.bgHeaderWhite}>
                    <span className={styles.bgHeaderTitleWhite}>
                        {translatedText.classes[language as keyof typeof translatedText.home]}
                    </span>
                </header>
            </section>

            <Workouts />
        </div>
    )
}
