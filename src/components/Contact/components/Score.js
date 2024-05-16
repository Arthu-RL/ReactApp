// Learning hooks, which are React functions that connect with the components lifecycle, and are or not affected
// by it
import { useState } from "react";
import '../styles/Form.css'

function Score() {
    const [score, setScore] = useState("10")
    const [comment, setComment] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Number(score) <= 5 && comment.length <= 20) {
            alert("Share more information about your score please...thank you in advance!");
            return;
        }
        
        console.log("Score sent: ", score);

        setComment("");
        setScore("10");
    }

    return (
        <div className="formSpace">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>FeedBack Form</legend>
                    <div className="field0a">
                        <label>Score: {score}</label>
                        <input 
                            type="range"
                            min={"0"}
                            max={"10"}
                            value={score}
                            onChange={(e) => setScore(e.target.value)}
                        />
                    </div>
                    <div className="field0a">
                        <label>Comment:</label>
                        <textarea value={comment} onChange={e => setComment(e.target.value)}/>
                    </div>
                    <button 
                        type="submit"
                        className="btn"
                        disabled={''}
                    >
                        Submit
                    </button>
                </fieldset>
            </form>
        </div>
    );
}

export default Score;