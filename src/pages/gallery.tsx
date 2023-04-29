import { GalleryComponent } from '@/components/GalleryComponent'
import styles from '../styles/Gallery.module.scss'


export default function Gallery() {
    return (
        <>  
            <div className={styles.main}>
                Galeria
            </div>
            <GalleryComponent />
        </>
    )
}
