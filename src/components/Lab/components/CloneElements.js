import "../styles/CloneElements.css"
import React from "react";

function ModRow({ children, spacing }) {

    const marginStyle = {
        marginLeft: `${spacing}px`
    }

    return (
        <tr>
            {React.Children.map(children, (element, index) => {
                return (<td>{React.cloneElement(element, {
                    style: {
                        ...element.props.style,
                        ...(index > 0 ? marginStyle : {}),
                    },
                })}</td>); 
            })}
        </tr>
    );
}

function CloneElements() {
    return (
        <div className="cloneElementsDiv">
            <ModRow spacing={15}>
                <p>Pizza Heart of palm</p>
                <p>2</p>
                <p>R$ 45,00</p>
                <p>19:40</p>
                <p>Arthur</p>
            </ModRow>
        </div>
    );
}

export default CloneElements;