import "../styles/Calculator.css"
import { useState, useRef } from "react";


function Calculator() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    function plus(e) {
        e.preventDefault();
        setResult(result + Number(inputRef.current.value));
    };

    function minus(e) {
        e.preventDefault();
        setResult(result - Number(inputRef.current.value));
    };

    function multiply(e) {
        e.preventDefault();
        setResult(result * Number(inputRef.current.value));
    };

    function divide(e) {
        e.preventDefault();
        setResult(result / Number(inputRef.current.value));
    };

    function resetInput(e) {
        e.preventDefault();
        inputRef.current.value = null;
        inputRef.current.focus()
    };

    function resetResult(e) {
        e.preventDefault();
        setResult(0);
    };

    return (
        <div className="calculator">
            <h2>Simplest Working Calculator</h2>
            <form>
                <p ref={resultRef}>{result}</p>
                <input
                    className="calcInput"
                    pattern="[0-9]"
                    ref={inputRef}
                    type="number"
                    placeholder="Type a number"
                />
                <div className="calcBtns">
                    <button className="add" onClick={plus}>add</button>
                    <button className="subtract" onClick={minus}>subtract</button>
                    <button className="multiply" onClick={multiply}>multiply</button>
                    <button className="divide" onClick={divide}>divide</button>
                    <button className="resetInput" onClick={resetInput}>reset input</button>
                    <button className="resetResult" onClick={resetResult}>reset result</button>
                </div>
            </form>
        </div>
    );
}

export default Calculator;