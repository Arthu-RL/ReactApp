import React from "react";
import '../styles/SignUp.css'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNameState: {
                firstName: "",
                firstNameError: "",
                changed: 0
            },
            lastNameState: {
                lastName: "",
                lastError: "",
                changed: 0
            },
            emailState: {
                email: "",
                emailError: "",
                changed: 0
            },
            passwordState: {
                password: "",
                passwordError: "",
                changed: 0
            },
            roleState: {
                role: "role",
                roleError: "",
                changed: 0
            },
            errors: 4
        };
        
        // Using ref on class based components
        // this.myRef = React.createRef();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateFirstName(value) {
        if (!value || value.length < 1) {
            this.setState((state) => ({
                ...state,
                firstNameState: {
                    ...state.firstNameState,
                    firstNameError: "First name undefined...",
                    changed: 0
                },
                errors: state.firstNameState.changed === 1 ? state.errors + 1 : state.errors
            }));
        }
        else {
            if (value && value.length >= 1) {
                this.setState((state) => ({
                    ...state,
                    firstNameState: {
                        ...state.firstNameState,
                        firstNameError: "",
                        changed: 1
                    },
                    errors: state.firstNameState.changed === 0 ? state.errors - 1 : state.errors
                }));
            }
        }
    }
    
    validateEmail(value) {
        if (!value || value.indexOf("@") === -1 || value.length < 8) {
            this.setState((state) => ({
                ...state,
                emailState: {
                    ...state.emailState,
                    emailError: "Email not correct...",
                    changed: 0
                },
                errors: state.emailState.changed === 1 ? state.errors + 1 : state.errors
            }));
        }
        else {
            if (value && value.indexOf("@") !== -1 && value.length >= 8) {
                this.setState((state) => ({
                    ...state,
                    emailState: {
                        ...state.emailState,
                        emailError: "",
                        changed: 1
                    },
                    errors: state.emailState.changed === 0 ? state.errors - 1 : state.errors
                }));
            }
        }
    }

    validatePassword(value) {
        if (!value || value.length < 8) {
            this.setState((state) => ({
                ...state,
                passwordState: {
                    ...state.passwordState,
                    passwordError: "Password is invalid...",
                    changed: 0
                },
                errors: state.passwordState.changed === 1 ? state.errors + 1 : state.errors
            }));
        }
        else {
            if (value && value.length >= 8) {
                this.setState((state) => ({
                    ...state,
                    passwordState: {
                        ...state.passwordState,
                        passwordError: "",
                        changed: 1
                    },
                    errors: state.passwordState.changed === 0 ? state.errors - 1 : state.errors
                }));
            }
        }
    }

    validateRole(value) {
        if (value === "role") {
            this.setState((state) => ({
                ...state,
                roleState: {
                    ...state.roleState,
                    roleError: "Role is not set...",
                    changed: 0
                },
                errors: state.roleState.changed === 1 ? state.errors + 1 : state.errors
            }));
        }
        else {
            if (value !== "role") {
                this.setState((state) => ({
                    ...state,
                    roleState: {
                        ...state.roleState,
                        roleError: "",
                        changed: 1
                    },
                    errors: state.roleState.changed === 0 ? state.errors - 1 : state.errors
                }));
            }
        }
    }

    clearForm() { 
        this.setState(state => ({
            firstNameState: {
                ...state.firstNameState,
                firstName: "",
                changed: 0
            },
            lastNameState: {
                ...state.lastNameState,
                lastName: "",
                changed: 0
            },
            emailState: {
                ...state.emailState,
                email: "",
                changed: 0
            },
            passwordState: {
                ...state.passwordState,
                password: "",
                changed: 0
            },
            roleState: {
                ...state.roleState,
                role: "role",
                changed: 0
            },
            errors: 4
        }));
    };

    handleChange(e) {
        const { id, name, value } = e.target;
        const [ stateName, fieldName ] = name.split('.');
        this.setState(state => ({
            ...state,
            [stateName]: {
                ...state[stateName],
                [fieldName]: value
            }
        }));
        
        if (id === "firstName")
            this.validateFirstName(value);
        else if (id === "email")
            this.validateEmail(value);
        else if (id === "password")
            this.validatePassword(value);
        else
            this.validateRole(value);
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.errors > 0) {
            alert(`Account not created, credential errors: ${this.state.errors}`);
            return;
        }

        // console.log(this.state);
        alert("Account created!"); 
        
        // Reset state
        this.clearForm();
    }

    render() {
        return (
            <div className="signSpace">
                <form onSubmit={this.handleSubmit}>
                    <fieldset className="signupArea">
                        <legend>Sign Up</legend>
                        <div className="field1a">
                            <label className="firstName" htmlFor="firstName">
                                <p style={{margin: "0px"}}>First name</p>
                                <p style={{color: "red", margin: "0px", paddingLeft: "6px"}}>*</p>
                            </label>
                            <input 
                                id="firstName"
                                name="firstNameState.firstName"
                                type="text"
                                value={this.state.firstNameState.firstName}
                                onChange={this.handleChange}
                                placeholder="First name"
                            />
                            <p style={{color: "red", margin: "0px"}}>{this.state.firstNameState.firstNameError}</p>
                        </div>
                        <div className="field1a">
                            <label htmlFor="lastName">Last name</label>
                            <input 
                                id="lastName"
                                name="lastNameState.lastName"
                                type="text"
                                value={this.state.lastNameState.lastName}
                                onChange={this.handleChange}
                                placeholder="Last name"
                            />
                            <p style={{color: "red", margin: "0px"}}>{this.state.lastNameState.lastError}</p>
                        </div>
                        <div className="field1a">
                            <label className="email" htmlFor="email">
                                <p style={{margin: "0px"}}>Email address</p>
                                <p style={{color: "red", margin: "0px", paddingLeft: "6px"}}>*</p>
                            </label>
                            <input 
                                id="email"
                                name="emailState.email"
                                type="text"
                                value={this.state.emailState.email}
                                onChange={this.handleChange}
                                placeholder="Email address"
                            />
                            <p style={{color: "red", margin: "0px"}}>{this.state.emailState.emailError}</p>
                        </div>
                        <div className="field1a">
                            <label className="password" htmlFor="password">
                                <p style={{margin: "0px"}}>Password</p>
                                <p style={{color: "red", margin: "0px", paddingLeft: "6px"}}>*</p>
                            </label>
                            <input 
                                id="password"
                                name="passwordState.password"
                                type="text"
                                value={this.state.passwordState.password}
                                onChange={this.handleChange}
                                placeholder="Password"
                            />
                            <p style={{color: "red", margin: "0px"}}>{this.state.passwordState.passwordError}</p>
                        </div>
                        <div className="field1a">
                            <label className="role" htmlFor="role">
                                <p style={{margin: "0px"}}>Role</p>
                                <p style={{color: "red", margin: "0px", paddingLeft: "6px"}}>*</p>
                            </label>
                            <select type="text" name="roleState.role" onChange={this.handleChange}>
                                <option value="role">Role</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                            <p style={{color: "red", margin: "0px"}}>{this.state.roleState.roleError}</p>
                        </div>
                        <div className="signBtnDiv0a">
                            <button 
                                type="submit"
                                className="signBtn"
                                disabled={
                                    this.state.firstNameState.firstName === "" &&
                                    this.state.lastNameState.lastName === "" &&
                                    this.state.emailState.email === "" &&
                                    this.state.passwordState.password === "" &&
                                    this.state.roleState.role === "role"
                                }
                            >
                                Create account
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
};

export default SignUp;