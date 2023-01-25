import React, { Component } from 'react'

class Register extends Component {

    render() {
        return (
            <div>
                <form action="http://localhost:5000/api/signup" method='POST'>
                    <label>Username:</label>
                    <input type="text" name="username" />
                    <label>Email :</label>
                    <input type="email" name="email" />
                    <label>Mot de passe:</label>
                    <input type="password" name="password" />
                    <label>Âge:</label>
                    <input type="number" name="age" />
                    <label>Telephone :</label>
                    <input type="text" name="tel" />

                    <input type="submit" value="Inscription" />
                </form>
            </div>
        )
    }
}

export default Register