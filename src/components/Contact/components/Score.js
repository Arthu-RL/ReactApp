// Learning hooks, which are React functions that connect with the components lifecycle, and are or not affected
// by it
import React from "react";
import '../styles/Form.css'

function Score({ onSubmit }) {
    const [score, setScore] = React.useState("10")
    const [comment, setComment] = React.useState("")

    const isDisabled = Number(score) <= 5 && comment.length <= 20;

    const textAreaPlaceHolder = isDisabled ? 
        "Share more information about your score please...thank you in advance!" : 
        "Optional feedback";

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({score, comment});
        setComment("");
        setScore("10");
    }

    return (
        <div className="formSpace">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>FeedBack Form</legend>
                    <div className="field0a">
                        <label htmlFor="scoreInput">Score: {score}</label>
                        <input 
                            id="scoreInput"
                            type="range"
                            min={"0"}
                            max={"10"}
                            value={score}
                            onChange={(e) => setScore(e.target.value)}
                        />
                    </div>
                    <div className="field0a">
                        <label>Comment:</label>
                        <textarea 
                            placeholder={textAreaPlaceHolder} 
                            value={comment}
                            onChange={e => setComment(e.target.value)} 
                        />
                    </div>
                    <button 
                        type="submit"
                        className="btn"
                        disabled={isDisabled}
                    >
                        Submit
                    </button>
                </fieldset>
            </form>
        </div>
    );
}

export default Score;