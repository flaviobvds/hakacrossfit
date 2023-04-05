import Modal from 'react-modal';
import { FaTimes as CloseButton } from 'react-icons/fa'

import styles from './ScheduleModal.module.scss'
import "react-datepicker/dist/react-datepicker.css";
import { CustomDatePicker } from '../CustomDatePicker';

interface ScheduleModalProps {
    isOpen: boolean;
    setIsScheduleModalOpen: (state: boolean) => void;
    workout: string;
}

Modal.setAppElement('body');


export function ScheduleModal({ isOpen, setIsScheduleModalOpen, workout }: ScheduleModalProps) {

    console.log(isOpen);

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
                Oferecemos aulas experimentais gratuitas.
                Escolha a data e o horário de seu interesse e venha nos conhecer.
            </p>

            <div className={styles.selectors}>
                <CustomDatePicker />

                
            </div>


        </Modal>
    )
}