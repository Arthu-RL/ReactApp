function Intro() {
    return (
        <div className="blog-post-intro">
            <h2>I've become a React developer!</h2>
            <div>
                <p>I've completed the React Basics course and I'm happy to announce that I'm now a Junior React Developer!</p>
                <p className="link">Read more...</p>
            </div>
            <h2>What's the best way to style your React apps?</h2>
            <div>
                <p>There {Math.floor(Math.random() * 10) + 1} are so many options to choose from. Here's a high-level overview of the popular ones.</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    );
}

export default Intro;