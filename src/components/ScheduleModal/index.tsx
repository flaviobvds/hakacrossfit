import Modal from 'react-modal';
import { FaTimes as CloseButton } from 'react-icons/fa'

import { ScheduleAttempt } from '../ScheduleAttempt';

import styles from './ScheduleModal.module.scss'


interface ScheduleModalProps {
    isOpen: boolean;
    setIsScheduleModalOpen: (state: boolean) => void;
}

Modal.setAppElement('body');


export function ScheduleModal({ isOpen, setIsScheduleModalOpen }: ScheduleModalProps) {

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
                Aula Experimental
            </h1>

            <p className={styles.parag}>
                Marque sua aula experimental gratuita.<br />
                Escolha a data e o horário de seu interesse e venha nos conhecer.
            </p>

            <ScheduleAttempt />

        </Modal>
    )
}