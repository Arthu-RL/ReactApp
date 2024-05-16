import { useState } from "react";
import "../styles/Contact.css"
import Text from "./Text";
import Clock from "./Clock";
import WordsAdder from "./ListWords"
import Score from "./Score";

function Contact() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <div className="contact">
                <button onClick={() => setShow(!show)}>
                    {show ? 'Unmount' : 'Mount'} the component
                </button>
                {show && <hr />}
                {show && <Text />}
            </div>
            <Clock />
            <WordsAdder />
            <Score />
        </div>
    );
}

export default Contact;