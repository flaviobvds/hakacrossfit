import DatePicker from "react-datepicker";
import React, { useState } from 'react';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import pt from 'date-fns/locale/pt';

import styles from './CustomDatePicker.module.scss'

export function CustomDatePicker() {

    registerLocale('pt', pt)
    const [startDate, setStartDate] = useState<Date | null>(null);

    const addDays = (date: Date, days: number): Date => {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };

    const CustomInput = (props: React.HTMLProps<HTMLInputElement>, ref: React.Ref<HTMLInputElement>) => {
        return (
            <input {...props}
                className={styles.dateInput}
            />
        );
    };

    return (
        <DatePicker
            locale="pt"
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Escolha uma data"
            minDate={new Date()}
            maxDate={addDays(new Date(), 30)}
            customInput={React.createElement(React.forwardRef(CustomInput))}
        />
    );
}
