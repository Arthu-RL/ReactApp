import ThemeContext from "./ContextTest";

function DisplayContext() {
    return (
        <ThemeContext.Consumer>
            {(theme) => (
                <div>
                    <p>The context that comes from ContextTest is {"'"+theme+"'"}</p>
                </div>
            )}
        </ThemeContext.Consumer>
    );
}

export default DisplayContext;