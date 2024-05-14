import React from "react";

class ListWords extends React.Component {
    render() {
        return (
            <div>
                {this.props.words.join(',')}
            </div>
        );
    }
};

class WordsAdder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [],
            text: ''
        };
    }

    handleClick = (e) => {
        e.preventDefault();
        if (this.state.text !== '') {
            this.setState(state => ({
                words: state.words.concat(state.text),
                text: ''
            }));
        }
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleClick}>
                    <label htmlFor="concatInput" style={{ gap: "10px" }}>
                        <input
                            type="text"
                            id="concatInput"
                            value={this.state.text}
                            onChange={this.handleChange}
                        />
                        <button type="submit">Submit</button>
                    </label>
                </form>
                <ListWords words={this.state.words} />
            </div>
        );
    }
};

export default WordsAdder;