import { useEffect, useState } from "react";

interface myProps {
    birthdate: string | null,
    setBirthdate: (input: string|null) => void
}

export default function BirthDateInput(props: myProps){
    const [selectedDay, setSelectedDay] = useState<number|undefined>(props.birthdate ? parseInt(props.birthdate.substring(8), 10) : undefined);
    const [selectedMonth, setSelectedMonth] = useState<number|undefined>(props.birthdate ? parseInt(props.birthdate.substring(5, 7), 10): undefined);
    const [selectedYear, setSelectedYear] = useState<number|undefined>(props.birthdate ? parseInt(props.birthdate.substring(0, 4), 10): undefined);

    const days = Array.from({length: 31}, (_,i)=> i+1);
    const months = Array.from({length: 12}, (_,i)=> i+1);
    const years = Array.from({length: 200}, (_,i)=>2024-i);

    const handleChange = async (e) => {
        const { name, value } = e.target;

        if (name === 'day') {
            if(value === '') setSelectedDay(undefined) ; 
            // props.setBirthdate(null); console.log(props.birthdate)
            setSelectedDay(value);
        }
        if (name === 'month') {
            if(value === '') setSelectedMonth(undefined); 
            // props.setBirthdate(null) ; console.log(props.birthdate)
            setSelectedMonth(value);
        }
        if (name === 'year') {
            if(value === '') setSelectedYear(undefined); 
            // props.setBirthdate(null); console.log(props.birthdate)
            setSelectedYear(value);
        }

        // if (selectedDay && selectedMonth && selectedYear) {
        //     const formatedDay = selectedDay < 10 ? `0${selectedDay}` : `${selectedDay}`;
        //     const formatedMonth = selectedMonth < 10 ? `0${selectedMonth}` : `${selectedMonth}`;
        //     props.setBirthdate(`${selectedYear}-${formatedMonth}-${formatedDay}`);

        // }
    }
    useEffect(()=>{
        if (selectedDay && selectedMonth && selectedYear) {
            const formatedDay = selectedDay < 10 ? `0${selectedDay}` : `${selectedDay}`;
            const formatedMonth = selectedMonth < 10 ? `0${selectedMonth}` : `${selectedMonth}`;
            props.setBirthdate(`${selectedYear}-${formatedMonth}-${formatedDay}`);

        } 
        else{
            props.setBirthdate(null)
        }
        console.log(props.birthdate)
    },[selectedDay, selectedMonth, selectedYear])
    return(
        <div className="flex items-center py-8" >
            <h3 className="w-24">Ngày sinh</h3>
            <div className="flex">
                <select name="day" value={selectedDay} onChange={handleChange} 
                    className="py-3 px-5 mr-4 cursor-pointer rounded-md bg-gradient-to-b from-gray-200 to-gray-400 shadow-md"
                >
                    <option value="">Ngày</option>
                    {days.map(day => (
                        <option key={day} value={day}>{day}</option>
                    ))}
                </select>
                <select name="month" value={selectedMonth} onChange={handleChange} 
                    className="py-3 px-5 mr-4 cursor-pointer rounded-md bg-gradient-to-b from-gray-200 to-gray-400 shadow-md"
                >
                    <option value="">Tháng</option>
                    {months.map(month =>(
                        <option key={month} value={month}>{month}</option>
                    ))}
                </select>
                <select name="year" value={selectedYear} onChange={handleChange}
                    className="py-3 px-5 cursor-pointer rounded-md bg-gradient-to-b from-gray-200 to-gray-400 shadow-md"
                >
                    <option value="">Năm</option>
                    {years.map(year =>(
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
