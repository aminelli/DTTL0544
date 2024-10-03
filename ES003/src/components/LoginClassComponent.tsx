import React from 'react';

import ILoginData from '../interfaces/Login';

export class LoginClassComponent extends React.Component<ILoginData, ILoginData> {

    constructor(props: ILoginData) {
        super(props); 
        
        console.log("LoginClassComponent -> constructor");
        console.log("LoginClassComponent -> props", props);
        
        this.state = {
            username: props.username,
            password: props.password
        };
    };

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Scrivere logica per la login
        console.log("LoginClassComponent -> handleSubmit");
        console.log(event);
    };

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("LoginClassComponent -> handleInputChange");
        console.log(event);
        console.log(event.target);
        let name1 = event.target.name;
        let value1 = event.target.value;

        const { name, value } = event.target;
        if (name === "username") {
            this.setState({ username: value });
        } else if (name === "password") {
            this.setState({ password: value });
        }
    };

    render() {

        return (
            <>
                <div>
                    <h1>LoginPage: Approccio Class Component</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>Username:
                            <input 
                                type="text" 
                                name="username"
                                value={this.state.username}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <label>Password:
                            <input 
                                type="password" 
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <button type="submit">Login</button>
                    </form>
                </div>
                <br/>
                <div>
                    Username: {this.state.username}
                    <br/>
                    Password: {this.state.password}
                </div>
            </>
        );
    }


}

