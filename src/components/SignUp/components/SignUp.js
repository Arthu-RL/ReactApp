import React from "react";
import '../styles/SignUp.css'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNameState: {
                firstName: "",
                firstNameError: "",
            },
            lastNameState: {
                lastName: "",
                lastError: "",
            },
            emailState: {
                email: "",
                emailError: "",
            },
            passwordState: {
                password: "",
                passwordError: "",
            },
            roleState: {
                role: "role",
                roleError: "",
            },
            errors: 4
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateFirstName() {
        const firstNameAlias = this.state.firstNameState.firstName;
        if (!firstNameAlias || firstNameAlias.length < 1) {
            this.setState((state) => ({
                ...state,
                firstNameState: {
                    ...state.firstNameState,
                    firstNameError: "First name undefined..."
                }
            }));
        }
        else {
            if (firstNameAlias && firstNameAlias.length >= 1) {
                this.setState((state) => ({
                    ...state,
                    firstNameState: {
                        ...state.firstNameState,
                        firstNameError: ""
                    },
                    errors: state.errors - 1
                }));
            }
        }
    }
    
    validateEmail() {
        const emailAlias = this.state.emailState.email;
        if (!emailAlias || emailAlias.indexOf("@") === -1) {
            this.setState((state) => ({
                ...state,
                emailState: {
                    ...state.emailState,
                    emailError: "Email not correct..."
                }
            }));
        }
        else {
            if (emailAlias && emailAlias.indexOf("@") !== -1) {
                this.setState((state) => ({
                    ...state,
                    emailState: {
                        ...state.emailState,
                        emailError: ""
                    },
                    errors: state.errors - 1
                }));
            }
        }
    }

    validatePassword() {
        const passwordAlias = this.state.passwordState.password
        if (!passwordAlias || passwordAlias.length < 8) {
            this.setState((state) => ({
                ...state,
                passwordState: {
                    ...state.passwordState,
                    passwordError: "Password is invalid..."
                }
            }));
        }
        else {
            if (passwordAlias && passwordAlias.length >= 8) {
                this.setState((state) => ({
                    ...state,
                    passwordState: {
                        ...state.passwordState,
                        passwordError: ""
                    },
                    errors: state.errors - 1
                }));
            }
        }
    }

    validateRole() {
        if (this.state.roleState.role === "role") {
            this.setState((state) => ({
                ...state,
                roleState: {
                    ...state.roleState,
                    roleError: "Role is not set..."
                }
            }));
        }
        else {
            if (this.state.roleState.role !== "role") {
                this.setState((state) => ({
                    ...state,
                    roleState: {
                        ...state.roleState,
                        roleError: ""
                    },
                    errors: state.errors - 1
                }));
            }
        }
    }

    clearForm() { 
        this.setState(state => ({
            firstNameState: {
                ...state.firstNameState,
                firstName: ""
            },
            lastNameState: {
                ...state.lastNameState,
                lastName: ""
            },
            emailState: {
                ...state.emailState,
                email: "",
            },
            passwordState: {
                ...state.passwordState,
                password: "",
            },
            roleState: {
                ...state.roleState,
                role: "role",
            },
            errors: 4
        }));
    };

    handleChange(e) {
        const { name, value } = e.target;
        const [ stateName, fieldName ] = name.split('.');
        this.setState(state => ({
            ...state,
            [stateName]: {
                ...state[stateName],
                [fieldName]: value
            }
        }));

        this.validateFirstName();
        this.validateEmail();
        this.validatePassword();
        this.validateRole();
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