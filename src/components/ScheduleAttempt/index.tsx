import { ErrorScreen } from '../ErrorScreen';
import { LoadingScreen } from '../LoadingScreen';
import { ScheduleForm } from '../ScheduleForm';
import { SuccessScreen } from '../SuccessScreen';
import { FormEvent } from 'react';

interface ScheduleFormProps {
    status: string;
    email: string;
    setStatus: (state: string) => void;
    setName: (state: string) => void;
    setEmail: (state: string) => void;
    setDate: (state: Date | null) => void;
    setTime: (state: string) => void;
    handleSubmitForm: (e: FormEvent) => void;
}

export function ScheduleAttempt({ status, email, setStatus, setName, setEmail, setDate, setTime, handleSubmitForm }: ScheduleFormProps) {
    
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