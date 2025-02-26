import React, { useState } from "react";
import { Platform } from "react-native";

const useCalendarButton = () => {
    const [date, setDate] = useState<Date>(new Date());
    const [open, setOpen] = useState<boolean>(false);

    const onChange = (event: any, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || date;
        setOpen(Platform.OS === 'ios' ? true : false); // Fechar o picker após seleção no Android
        setDate(currentDate);
    }

    return [
            date,
            open,
            setDate,
            setOpen,
            onChange
    ] as const;
}

export default useCalendarButton;