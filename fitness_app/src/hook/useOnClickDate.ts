import { useState } from "react";

const useOnClickDate = () => {
    const [isClickCurrentDate, setIsClickCurrentDate] = useState<boolean>(true);
    const [isClickDate1, setIsClickDate1] = useState<boolean>(false);
    const [isClickDate2, setIsClickDate2] = useState<boolean>(false);
    const [isClickDate3, setIsClickDate3] = useState<boolean>(false);
    const [isClickDate4, setIsClickDate4] = useState<boolean>(false);
    const [isClickDate5, setIsClickDate5] = useState<boolean>(false);
    const [isClickDate6, setIsClickDate6] = useState<boolean>(false);

    const onClickCurrentDate = () => {
        setIsClickCurrentDate(true)
        setIsClickDate1(false)
        setIsClickDate2(false)
        setIsClickDate3(false)
        setIsClickDate4(false)
        setIsClickDate5(false)
        setIsClickDate6(false)
    }

    const onClickDate1 = () => {
        setIsClickCurrentDate(false)
        setIsClickDate1(true)
        setIsClickDate2(false)
        setIsClickDate3(false)
        setIsClickDate4(false)
        setIsClickDate5(false)
        setIsClickDate6(false)
    }

    const onClickDate2 = () => {
        setIsClickCurrentDate(false)
        setIsClickDate1(false)
        setIsClickDate2(true)
        setIsClickDate3(false)
        setIsClickDate4(false)
        setIsClickDate5(false)
        setIsClickDate6(false)
    }

    const onClickDate3 = () => {
        setIsClickCurrentDate(false)
        setIsClickDate1(false)
        setIsClickDate2(false)
        setIsClickDate3(true)
        setIsClickDate4(false)
        setIsClickDate5(false)
        setIsClickDate6(false)
    }

    const onClickDate4 = () => {
        setIsClickCurrentDate(false)
        setIsClickDate1(false)
        setIsClickDate2(false)
        setIsClickDate3(false)
        setIsClickDate4(true)
        setIsClickDate5(false)
        setIsClickDate6(false)
    }

    const onClickDate5 = () => {
        setIsClickCurrentDate(false)
        setIsClickDate1(false)
        setIsClickDate2(false)
        setIsClickDate3(false)
        setIsClickDate4(false)
        setIsClickDate5(true)
        setIsClickDate6(false)
    }

    const onClickDate6 = () => {
        setIsClickCurrentDate(false)
        setIsClickDate1(false)
        setIsClickDate2(false)
        setIsClickDate3(false)
        setIsClickDate4(false)
        setIsClickDate5(false)
        setIsClickDate6(true)
    }

    return [
        isClickCurrentDate,
        isClickDate1,
        isClickDate2,
        isClickDate3,
        isClickDate4,
        isClickDate5,
        isClickDate6,
        onClickCurrentDate,
        onClickDate1,
        onClickDate2,
        onClickDate3,
        onClickDate4,
        onClickDate5,
        onClickDate6
    ] as const
}

export default useOnClickDate;