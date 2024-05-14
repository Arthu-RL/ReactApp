import { useState, useEffect } from "react";
import "../styles/Button.css"

function Button() {
    const [count, setCount] = useState(0)

    function handleClick() {
        let number = Math.floor(Math.random() * 10) + 1;
        let userInput = prompt('Type a number: ');
        alert(`Computer number: ${number}, Your guess: ${userInput}`)
    }

    useEffect(() => {
        document.title = `Click ${count}`
    }, [count])

    return (
        <div className="btnSpace">
            <button className="btnMath" onClick={handleClick}>
                Guess the number between 1 and 10
            </button>
            <br />
            <button className="btnCount" onClick={() => setCount(count + 1)}>
                Click {count}
            </button>
        </div>
    )
}

export default Button;