import { useState } from "react"

// interface myProps{
//     day: string,
//     month: string,
//     year: string
// }
interface myProps {
    birthdate: string ,
    setBirthdate: (input: string) => void
}
export default function BirthDateInput(props: myProps){
    // console.log(props)
    // const [year, month, day] = props.birthdate.split('-');
    // const [selectedDay, setDay] = useState(parseInt(day, 10).toString()||'');
    // const [selectedMonth, setMonth] = useState(parseInt(month, 10).toString()||'');
    // const [selectedYear, setYear] = useState(year||'');
    
    const days = Array.from({length: 31}, (_,i)=> i+1);
    const months = Array.from({length: 12}, (_,i)=> i+1);
    const years = Array.from({length: 200}, (_,i)=>2024-i);
    
    // const handleDayChange = (event:any) =>{
    //     setDay(event.target.value)
    // }
    // const handleMonthChange = (event:any) => {
    //     setMonth(event.target.value);
    // }
    // const handleYearChange = (event:any) => {
    //     setYear(event.target.value)
    // }
    const handleChange = (e) =>{
        if(e.target.name === 'day'){
            const formatedDay = e.target.value < 10 ? `0${e.target.value}` : `${e.target.value}`;
            props.setBirthdate(`${props.birthdate.substring(0, 4)}-${props.birthdate.substring(5, 7)}-${formatedDay}`)
        }
        if(e.target.name === 'month'){
            const formatedMonth = e.target.value < 10 ? `0${e.target.value}` : `${e.target.value}`;
            props.setBirthdate(`${props.birthdate.substring(0, 4)}-${formatedMonth}-${props.birthdate.substring(8)}`)
            // console.log(e.target.value)

        }
        if(e.target.name === 'year'){
            props.setBirthdate(`${e.target.value}-${props.birthdate.substring(5, 7)}-${props.birthdate.substring(8)}`)

        }
    }
    return(
        <div className="flex items-center py-8" >
            <h3 className="w-24">Ngày sinh</h3>
            <div className="flex">
                <select name="day" value={parseInt(props.birthdate.substring(8), 10)} onChange={handleChange} 
                    className="py-3 px-5 mr-4 cursor-pointer rounded-md bg-gradient-to-b from-gray-200 to-gray-400 shadow-md"
                >
                    <option value="">Ngày</option>
                    {days.map(day => (
                        <option key={day} value={day}>{day}</option>
                    ))}
                </select>
                <select name="month" value={parseInt(props.birthdate.substring(5, 7), 10)} onChange={handleChange} 
                    className="py-3 px-5 mr-4 cursor-pointer rounded-md bg-gradient-to-b from-gray-200 to-gray-400 shadow-md"
                >
                    <option value="">Tháng</option>
                    {months.map(month =>(
                        <option key={month} value={month}>{month}</option>
                    ))}
                </select>
                <select name="year" value={parseInt(props.birthdate.substring(0, 4), 10)} onChange={handleChange}
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