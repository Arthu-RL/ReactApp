import ContextTest from "./ContextTest";

function DisplayContext() {
    return (
        <ContextTest.Consumer>
            {(theme) => (
                <div>
                    <p>The context that comes from ContextTest is {"'"+theme+"'"}</p>
                </div>
            )}
        </ContextTest.Consumer>
    );
}

export default DisplayContext;