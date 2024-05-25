import React from "react";
import "../styles/Radio.css";

class RadioCore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: ""
        }

        this.setSelected = this.setSelected.bind(this);
        this.RadioGroup = this.RadioGroup.bind(this);
        this.RadioOption = this.RadioOption.bind(this);
    }

    componentDidUpdate() {
        console.log(this.state.selectedValue)
    }

    setSelected(val) {
        this.setState({ selectedValue: val });
    }

    RadioGroup({ onChange, selectedValue, children }) {
        const RadioOptions = React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
                onChange,
                checked: child.props.value === selectedValue
            });
        });

        return <div className="RadioGroup">{RadioOptions}</div>;
    }

    RadioOption({ value, checked, onChange, children }) {
        return (
            <div className="RadioOption">
                <input className="RadioInput" readOnly id={value} type="radio" name={value} value={value} checked={checked} onChange={(e) => onChange(e.target.value)} />
                <label className="RadioLabel" htmlFor={value}>{children}</label>
            </div>
        );
    }

    render() {
        return (
            <div className="RadioCore">
                <h2>How did you hear about Little Lemon?</h2>
                <this.RadioGroup onChange={this.setSelected} selectedValue={this.state.selectedValue}>
                    <this.RadioOption value="social_media">Social Media</this.RadioOption>
                    <this.RadioOption value="friends">Friends</this.RadioOption>
                    <this.RadioOption value="advertising">Advertising</this.RadioOption>
                    <this.RadioOption value="other">Other</this.RadioOption>
                </this.RadioGroup>
                <button className="RadioCoreButton" disabled={this.state.selectedValue === ""} onClick={() => console.log("Submitted")}>Submit</button>
          </div>
        );
    }
}

export default RadioCore;