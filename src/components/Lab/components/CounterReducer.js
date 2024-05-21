import React from "react";

class CounterWithReducer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {amount: 0};
        this.dispatch = this.dispatch.bind(this);
    }

    reducer(state, action) {
        if (action.type === "increment") return {amount: state.amount+1};
        if (action.type === "decrement") return {amount: state.amount-1};
        return state;
    }

    dispatch(action) {
        this.setState(prevState => this.reducer(prevState, action));
    }

    render() {
        const divStyle = {
            padding: "5px 5px 5px 50px",
            display: "flex",
            flexDirection: "column"
        }

        const btnStyle = {
            width: "90px"
        } 

        return (
            <div style={divStyle}>
                <span>Count: {this.state.amount}</span>
                <button style={btnStyle} onClick={() => this.dispatch({ type: "increment" })}>Increment</button>
                <button style={btnStyle} onClick={() => this.dispatch({ type: "decrement" })}>Decrement</button>
            </div>
        );
    }
};

export default CounterWithReducer;