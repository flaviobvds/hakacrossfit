import Modal from 'react-modal';
import { FaTimes as CloseButton } from 'react-icons/fa'

import { useLanguage } from '@/hooks/language'
import { translatedText } from '@/hooks/translatedText';
import { ScheduleAttempt } from '../ScheduleAttempt';

import styles from './ScheduleModal.module.scss'


interface ScheduleModalProps {
    isOpen: boolean;
    setIsScheduleModalOpen: (state: boolean) => void;
}

Modal.setAppElement('body');


export function ScheduleModal({ isOpen, setIsScheduleModalOpen }: ScheduleModalProps) {
    const { language } = useLanguage();

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsScheduleModalOpen(false)}
            overlayClassName={styles.modalOverlay}
            className={styles.modalContent}
        >
            <CloseButton
                onClick={() => setIsScheduleModalOpen(false)}
                className={styles.modalClose}
            />

            <h1 className={styles.title}>
                {translatedText.experimentalClass[language as keyof typeof translatedText.home]}
            </h1>

            <p className={styles.parag}>
                {translatedText.experimentalClassP1[language as keyof typeof translatedText.home]}
                <br />
                {translatedText.experimentalClassP2[language as keyof typeof translatedText.home]}
            </p>

            <ScheduleAttempt />

        </Modal>
    )
}