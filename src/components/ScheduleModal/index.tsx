import Modal from 'react-modal';
import { FormEvent, useState } from 'react';
import { FaTimes as CloseButton } from 'react-icons/fa'
import { api } from "@/services/api";

import styles from './ScheduleModal.module.scss'
import "react-datepicker/dist/react-datepicker.css";

import { ScheduleAttempt } from '../ScheduleAttempt';


interface ScheduleModalProps {
    isOpen: boolean;
    setIsScheduleModalOpen: (state: boolean) => void;
}

Modal.setAppElement('body');


export function ScheduleModal({ isOpen, setIsScheduleModalOpen }: ScheduleModalProps) {
    
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

            <ScheduleAttempt 
                status={status} 
                email={email}
                setStatus={setStatus}
                setName={setName} 
                setEmail={setEmail} 
                setDate={setDate}
                setTime={setTime}
                handleSubmitForm={handleSubmitForm}
            />
            
        </Modal>
    )
}