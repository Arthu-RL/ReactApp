import "../styles/Desserts.css"
import { data } from "../data/data";
import React from "react";

class Desserts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desserts: data.map(element => {
                return <li>{`${element.title} - ${element.description} - ${element.price}`}</li>;
            })
        };
    }

    componentDidMount() {
        console.log("Mounting Desserts");
    }

    componentWillUnmount(){
        console.log("Unmounting Desserts");
    }

    componentDidUpdate() {
        console.log("Desserts Updated");
    }

    componentDidCatch() {
        console.log("Exception Desserts");
    }

    render() {
        return (
            <div className="desserts0">
                <ul>
                    {this.state.desserts}
                </ul>
            </div>
        );
    }
};

export default Desserts;