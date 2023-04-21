import Modal from 'react-modal';
import { FaTimes as CloseButton } from 'react-icons/fa'
import { api } from "@/services/api";

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
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState<Date | null>(null)
    const [time, setTime] = useState('')
    const [status, setStatus] = useState('')

    function validateEmail(emailAdress: string) {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(emailAdress);
    }

    async function handleSubmitForm(e: FormEvent) {
        
        e.preventDefault();
        const isValidEmail = (validateEmail(email));
        
        if (email && isValidEmail) {
            setStatus('loading');
            try {
                await api.post('/addToCalendar', {
                    name,
                    email,
                    date,
                    time
                })
                setStatus('success');
            }
            catch(err) {
                setStatus('failed');
            }
        }
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
                    <CustomDatePicker setDate={setDate}/>
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