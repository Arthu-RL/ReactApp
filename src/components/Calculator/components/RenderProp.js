import React from "react";

function WithMousePosition({ render }) {
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

    return render({ mousePosition }); 
}

function PanelMouselogger() {
    return (
        <div>
            <th>Mouse position:</th>
            <WithMousePosition render={({ mousePosition }) => (
            <tr>
                <td><span>x: {mousePosition.x}</span></td>
                <td><span>y: {mousePosition.y}</span></td>
            </tr>
            )}/>
        </div>
    );
}

function MouseLogger() {
    return (
        <WithMousePosition render={({ mousePosition }) => (
            <p>
                ({mousePosition.x}, {mousePosition.y})
            </p>
        )}/>
    );
}

function RenderProp() {
    return (
        <div>
            <PanelMouselogger />
            <MouseLogger />
        </div>
    );
}

export default RenderProp;