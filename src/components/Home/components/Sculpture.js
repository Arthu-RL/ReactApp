import { useState } from 'react';
import '../styles/Sculpture.css'

function Gallery({ sculptureList }) {
    const [index, setIndex] = useState(0);

    function handleClick() {
        if (index === (sculptureList.length - 1))
            setIndex(0);
        else
            setIndex(index + 1);
    }

    let sculpture = sculptureList[index];
    return (
        <div className='sculpSpace'>
            <button onClick={handleClick} style={{ maxWidth: "100px" }}>
                Next
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
                style={{ maxWidth: "300px", maxHeight: "300px" }}
            />
            <p>
                {sculpture.description}
            </p>
        </div>
    );
}

export default Gallery;