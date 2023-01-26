import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'


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

                <Button animated='vertical'>
                    <Button.Content hidden>Shop</Button.Content>
                    <Button.Content visible>
                        <Icon name='shop' />
                    </Button.Content>
                </Button>
            </div>
        )
    }
}

export default Register