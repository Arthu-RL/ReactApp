import React from "react";
import "../styles/OrderList.css"

function OrderButton({type, children, ...props}) {
    const className = type === "primary" ? "PrimaryButton" : "SecundaryButton"
    return (
        <button className={className} {...props}>
            {children}
        </button>
    );
}


function LoginButton({type, children, ...props}) {
    return (
        <OrderButton type="secundary" {...props}>
            {children}
        </OrderButton>
    );
}

function OrderPane() {
    return (
        <div className="OrderDiv">
            <header className="OrderHeader">Lemons a lot</header>
            <OrderButton type="primary" onClick={() => { alert("Order made!") }}>Order</OrderButton>
            <LoginButton type="secundary" onClick={() => { alert("Feedback!") }}>Feedback</LoginButton>
        </div>
    );
}

export default OrderPane;