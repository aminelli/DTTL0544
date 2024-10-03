import React, { useState } from 'react';

import LoginFormState from '../interfaces/Login';


export const LoginFncComponent: React.FC = () => {

        const [formState, setFormState] = useState<LoginFormState>(
            {
                username: "",
                password: "" 
            }
        );

        const handleSubmit = (event: React.FormEvent) => {
            event.preventDefault();
            // Scrivere logica per la login
            console.log("LoginClassComponent -> handleSubmit");
            console.log(event);
        };
    
        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            console.log("LoginClassComponent -> handleInputChange");
            console.log(event);
            console.log(event.target);
            const { name, value } = event.target;
            setFormState(  
               (prevState) => ({ ...prevState, [name]: value   })     
            );
        };

        return (
            <>
                <div>
                    <h1>LoginPage: Approccio Functional Component</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Username:
                            <input 
                                type="text" 
                                name="username"
                                value={formState.username}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>Password:
                            <input 
                                type="password" 
                                name="password"
                                value={formState.password}
                                onChange={handleInputChange}
                            />
                        </label>
                        <button type="submit">Login</button>
                    </form>
                </div>
                <br/>
                <div>
                    Username: {formState.username}
                    <br/>
                    Password: {formState.password}
                </div>
            </>
        );


}