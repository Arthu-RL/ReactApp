import "../styles/Articles.css"
import CircleImage from "./CircleImage";
import VideoToWatch from "./VideoTest";
import AudioPlayback from "./Audio";

function Articles() {
    return (
        <div className="articles">
            <h1>Image</h1>
            <CircleImage />
            <VideoToWatch />
            <AudioPlayback />
        </div>

    );
}

export default Articles;