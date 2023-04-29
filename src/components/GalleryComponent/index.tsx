import styles from './GalleryComponent.module.scss'
import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/scss/image-gallery.scss";

const images = [
  {
    original: './images/gallery/01.jpg',
    thumbnail: './images/gallery/01.jpg',
    originalHeight: 550,
    thumbnailHeight: 100
  },
  {
    original: './images/gallery/02.jpg',
    thumbnail: './images/gallery/02.jpg',
    originalHeight: 550,
    thumbnailHeight: 100
  },
  {
    original: './images/gallery/03.jpg',
    thumbnail: './images/gallery/03.jpg',
    originalHeight: 550,
    thumbnailHeight: 100
  },
  {
    original: './images/gallery/04.jpg',
    thumbnail: './images/gallery/04.jpg',
    originalHeight: 550,
    thumbnailHeight: 100
  },
  {
    original: './images/gallery/05.jpg',
    thumbnail: './images/gallery/05.jpg',
    originalHeight: 550,
    thumbnailHeight: 100
  },
  {
    original: './images/gallery/06.jpg',
    thumbnail: './images/gallery/06.jpg',
    originalHeight: 550,
    thumbnailHeight: 100
  },
  {
    original: './images/gallery/07.jpg',
    thumbnail: './images/gallery/07.jpg',
    originalHeight: 550,
    thumbnailHeight: 100
  },
  {
    original: './images/gallery/08.jpg',
    thumbnail: './images/gallery/08.jpg',
    originalHeight: 550,
    thumbnailHeight: 100
  },
];

export function GalleryComponent() {
    return (
        <div className={styles.gallery}>
            <ImageGallery 
                items={images} 
            />
        </div>
    )
}