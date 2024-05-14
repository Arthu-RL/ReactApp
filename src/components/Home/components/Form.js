// Learning hooks, which are React functions that connect with the components lifecycle, and are or not affected
// by it
import { useState } from "react";
import '../styles/Form.css'

function Form() {
    const [inputText, setText] = useState('WELCOME')

    const names = [
        'Alisson',
        'Roberto',
        'Herbeson',
        'Samuel',
        'Arthur',
        'Alan',
        'Amanda',
        'Patrícia',
        'Kailane',
        'Lucas'
    ];

    return (
        <div className="formSpace">
            <button className="btn" onClick={() => setText(names[Math.floor(Math.random() * 10)])}>
                {inputText}
            </button>
        </div>
    )
}

export default Form;