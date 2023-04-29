import { FormEvent, useState } from 'react';

import { ErrorScreen } from '../ErrorScreen';
import { LoadingScreen } from '../LoadingScreen';
import { ScheduleForm } from '../ScheduleForm';
import { SuccessScreen } from '../SuccessScreen';
import { api } from "@/services/api";

import "react-datepicker/dist/react-datepicker.css";

export function ScheduleAttempt() {
    
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

    if (status === 'loading') {
        return <LoadingScreen />
    }

    if (status === 'success') {
        return <SuccessScreen email={email} />
    }

    if (status === 'failed') {
        return <ErrorScreen setStatus={setStatus} />
    }
    
    return (
        <ScheduleForm
            setName={setName}
            setDate={setDate}
            setEmail={setEmail}
            setTime={setTime}
            handleSubmitForm={handleSubmitForm}
        />
    )
}