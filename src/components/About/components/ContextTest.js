import Switch from "./Switch";
import { useTheme } from "./ContextProvider";

// React Context allows you to share values like these between components
// without having to explicitly pass a prop through every level of the tree.

function DisplayContext() {
    const { theme } = useTheme();

    return (
        <div style={{backgroundColor: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white"}}>
            <header style={{display: "flex", flexDirection: "row"}}>
                <h2 style={{margin: "0px", paddingRight: "10px"}}>
                    Toggle theme
                </h2>
                <Switch />
            </header>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed accumsan risus id nunc commodo, eget interdum nisl convallis. 
            Sed sit amet tellus eu libero gravida ullamcorper. In hac habitasse platea dictumst. 
            Maecenas nec accumsan nulla, nec consectetur libero. Sed vel sapien ut metus lacinia mollis. 
            </p>
        </div>
    );
}

export default DisplayContext;