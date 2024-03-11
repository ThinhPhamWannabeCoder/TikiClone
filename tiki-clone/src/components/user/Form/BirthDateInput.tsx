import { useState } from "react"

interface myProps{
    day: string,
    month: string,
    year: string
}
export default function BirthDateInput(prop: myProps){
    const [selectedDay, setDay] = useState(prop.day||'');
    const [selectedMonth, setMonth] = useState(prop.month||'');
    const [selectedYear, setYear] = useState(prop.year||'');
    
    const days = Array.from({length: 31}, (_,i)=> i+1);
    const months = Array.from({length: 12}, (_,i)=> i+1);
    const years = Array.from({length: 200}, (_,i)=>2024-i);
    
    const handleDayChange = (event:any) =>{
        setDay(event.target.value)
    }
    const handleMonthChange = (event:any) => {
        setMonth(event.target.value);
    }
    const handleYearChange = (event:any) => {
        setYear(event.target.value)
    }
    return(
        <div className="flex items-center py-8" >
            <h3 className="w-24">Ngày sinh</h3>
            <div className="flex">
                <select name="day" value={selectedDay} onChange={handleDayChange} 
                    className="py-3 px-5 mr-4 cursor-pointer rounded-md bg-gradient-to-b from-gray-200 to-gray-400 shadow-md"
                >
                    <option value="">Ngày</option>
                    {days.map(day => (
                        <option key={day} value={day}>{day}</option>
                    ))}
                </select>
                <select name="month" value={selectedMonth} onChange={handleMonthChange} 
                    className="py-3 px-5 mr-4 cursor-pointer rounded-md bg-gradient-to-b from-gray-200 to-gray-400 shadow-md"
                >
                    <option value="">Tháng</option>
                    {months.map(month =>(
                        <option key={month} value={month}>{month}</option>
                    ))}
                </select>
                <select name="year" value={selectedYear} onChange={handleYearChange}
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