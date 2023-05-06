import styles from './ScheduleForm.module.scss'
import { CustomDatePicker } from '../CustomDatePicker'
import { FormEvent } from 'react';
import { useLanguage } from '@/hooks/language'
import { translatedText } from '@/hooks/translatedText';

interface ScheduleFormProps {
    setName: (state: string) => void;
    setEmail: (state: string) => void;
    setDate: (state: Date | null) => void;
    setTime: (state: string) => void;
    handleSubmitForm: (e: FormEvent) => void;
}

export function ScheduleForm({ setName, setEmail, setDate, setTime, handleSubmitForm }: ScheduleFormProps) {
    const { language } = useLanguage();

    return (
        <>
            <form className={styles.selectors}>

                <input
                    className={`${styles.nameInput} ${styles.input}`}
                    placeholder={translatedText.name[language as keyof typeof translatedText.home]}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    className={`${styles.emailInput} ${styles.input}`}
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className={`${styles.dateContainer}`}>
                    <CustomDatePicker setDate={setDate} />
                </div>

                <select
                    required
                    className={`${styles.timeInput} ${styles.input}`}
                    onChange={(e) => { setTime(e.target.value) }}
                    defaultValue={'DEFAULT'}
                >
                    <option value='DEFAULT' disabled>
                        {translatedText.chooseATime[language as keyof typeof translatedText.home]}
                    </option>
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
        </>

    )
}