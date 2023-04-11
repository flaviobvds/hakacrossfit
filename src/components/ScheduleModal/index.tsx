import Modal from 'react-modal';
import { FaTimes as CloseButton } from 'react-icons/fa'

import styles from './ScheduleModal.module.scss'
import "react-datepicker/dist/react-datepicker.css";
import { CustomDatePicker } from '../CustomDatePicker';
import { FormEvent, useState } from 'react';

interface ScheduleModalProps {
    isOpen: boolean;
    setIsScheduleModalOpen: (state: boolean) => void;
    workout: string;
}

Modal.setAppElement('body');


export function ScheduleModal({ isOpen, setIsScheduleModalOpen, workout }: ScheduleModalProps) {

    console.log(isOpen);
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState<Date | String>('')
    const [time, setTime] = useState('')

    function handleSubmitForm() {
        console.log(name)
        console.log(email)
        console.log(date)
        console.log(time)
    }

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

            <form className={styles.selectors}>

                <input
                    className={`${styles.nameInput} ${styles.input}`}
                    placeholder='Nome'
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    className={`${styles.emailInput} ${styles.input}`}
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className={`${styles.dateContainer}`}>
                    <CustomDatePicker />
                </div>

                <select 
                    required 
                    className={`${styles.timeInput} ${styles.input}`}
                    onChange={(e) => {setTime(e.target.value)}}
                >
                    <option value="" disabled selected>Escolha um horário</option>
                    <option value="0600">06:00</option>
                    <option value="0700">07:00</option>
                    <option value="0800">08:00</option>
                    <option value="0900">09:00</option>
                    <option value="1600">16:00</option>
                    <option value="1700">17:00</option>
                </select>
            </form>

            <button
                type='submit'
                className={styles.scheduleButton}
                onClick={handleSubmitForm}
            >
                Agendar Aula
            </button>


        </Modal>
    )
}