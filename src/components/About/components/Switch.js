import "../styles/Switch.css";
import { useTheme } from "./ContextProvider";

function Switch() {
    const { theme, setTheme } = useTheme();

    return (
        <label className="switch0a">
            <input
            className="input0a"
            type="checkbox"
            checked={theme === "dark"}
            onChange={setTheme}
            />
            <span className="slider round" />
        </label>
    );
};

export default Switch;