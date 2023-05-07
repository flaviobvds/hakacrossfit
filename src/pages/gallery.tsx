import { GalleryComponent } from '@/components/GalleryComponent'
import { useLanguage } from '@/hooks/language'
import { translatedText } from '@/hooks/translatedText';

import styles from '../styles/Gallery.module.scss'

export default function Gallery() {
    const { language } = useLanguage();

    return (
        <>
            <div className={styles.main}>
                <span className={styles.title}>
                    {translatedText.gallery[language as keyof typeof translatedText.home]}
                </span>

                <GalleryComponent />
            </div>

        </>
    )
}
