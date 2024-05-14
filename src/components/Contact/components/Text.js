import { useState } from "react";

function Text() {
    const [text, setText] = useState('');

    return (
        <div>
            <label>
                What to log:{' '}
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            </label>
            <h1>{text}</h1>
        </div>
    );
}

export default Text;