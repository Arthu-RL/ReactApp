import React from "react";
import "../styles/HigherOrder.css"

function withMousePosition(WrappedComponent) {
    return (originalProps) => {
        const [mousePosition, setMousePosition] = React.useState({
            x: 0,
            y: 0
        });

        const handleMousePositionChange = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }
    
        React.useEffect(() => {
            window.addEventListener("mousemove", handleMousePositionChange);

            return () => {
                window.removeEventListener("mousemove", handleMousePositionChange);
            }
        }, [])

        return <WrappedComponent {...originalProps} mousePosition={mousePosition} />; 
    };
}

function MouseLogger({ mousePosition }) {
    if (!mousePosition)
        return null;

    return (
        <div className="BasicTracker">
            <th>Mouse position:</th>
            <tr>
                <td>
                    <span>x: {mousePosition.x}</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span>y: {mousePosition.y}</span>
                </td>
            </tr>

        </div>
    );
}

const PanelMouseTracker = withMousePosition(MouseLogger);

function HigherOrder() {
    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

    return (
        <div style={style}>
            <PanelMouseTracker />
        </div>
    );
}

export default HigherOrder;