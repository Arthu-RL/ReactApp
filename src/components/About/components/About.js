import Intro from "./Intro";
import React from "react";
import DisplayContext from "./ContextTest";
import { ThemeProvider } from "./ContextProvider";

function Heading({ title }) {
    // return React.createElement("div", null, React.createElement("h1", {}, title))
    const headingStyle = {
        paddingTop: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    return (
        <div style={headingStyle}>
            <h1>{title}</h1>
        </div>
    );
}

function About(props) {
    const bob = "Arthur"

    return (
        <div>
            <Heading title={props.title} />
            <br /><br />
            {bob === "Arthur" ? "É o Arthur." : "Quem é esse?"}
            <Intro />
            <ThemeProvider>
                <DisplayContext />
            </ThemeProvider>
        </div>
    );
}

export default About;