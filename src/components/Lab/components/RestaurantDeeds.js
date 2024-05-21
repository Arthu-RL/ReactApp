import "../styles/RestaurantDeeds.css"
import React from "react";

function reducer(state, action) {
    if (action.type === "buy") return {money: state.money - 10}
    if (action.type === "sell") return {money: state.money + 10}
    if (action.type === "celebrity_visit") return {money: state.money + 1000}
}

function RestaurantDeeds() {
    const [state, dispatch] = React.useReducer(reducer, {money: 100})

    return (
        <div>
            <h1>Wallet: {state.money}</h1>
            <div>
                <button onClick={() => dispatch({ type: "buy" })}>Shopping vegies</button>
                <button onClick={() => dispatch({ type: Math.floor(Math.random() * 10) + 1 > 8 ? "celebrity_visit" : "sell" })}>Serving meal to the costumer</button>
                {/* <button onClick={() => dispatch({ type: "celebrity_visit" })}>Celebrity visits</button> */}
            </div>
        </div>
    );
}

export default RestaurantDeeds;