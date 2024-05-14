function AudioPlayback() {
    const bird = new Audio(
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
    );

    bird.volume = 0.1

    function toggle() {
        if (bird.paused)
            bird.play()
        else
            bird.pause()
    };

    return (
        <div>
            <button onClick={toggle}>Bird audio</button>
        </div>
    );
}

export default AudioPlayback;