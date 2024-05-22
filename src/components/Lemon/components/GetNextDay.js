import { useState, useEffect, useRef } from "react";

function usePrevious(val) { 
    const ref = useRef();

    useEffect(() => {
       ref.current = val;
    }, [val]);

    return ref.current;
}

function GetNextDay() {
    const [day, setDay] = useState("Monday");
    const prevDay = usePrevious(day);

    const getNextDay = () => {
        switch (day) {
            case "Monday":
                setDay("Tuesday");
                break;
            case "Tuesday":
                setDay("Wednesday");
                break;
            case "Wednesday":
                setDay("Thursday");
                break;
            case "Thursday":
                setDay("Friday");
                break;
            case "Friday":
                setDay("Monday");
                break;
            default:
                break;
        }
    }

    return (
        <div style={{padding: "5px"}}>
            <h1>
                Today is: {day}<br />
                {
                prevDay && (
                    <span>Previous work day was: {prevDay}</span>
                )
                }
            </h1>
            <button onClick={getNextDay}>
                Get next day
            </button>
        </div>
    );
}

export default GetNextDay;