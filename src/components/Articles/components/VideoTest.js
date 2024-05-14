import ReactPlayer from "react-player";

function VideoToWatch() {
    const reactVideo = "https://www.youtube.com/watch?v=XAGCULPO_DE&t=826s"

    return (
        <div>
            <ReactPlayer 
                url={reactVideo} 
                playing={false} 
                volume={0.2} 
                controls={true}
                loop={true}
                muted={false}
                height={500} 
                width={700}
            />
        </div>
    )
}

export default VideoToWatch;