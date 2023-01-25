import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div>
        <form action="http://localhost:5000/api/login" method='POST'>
            <label>Username</label>
            <input type="text" name='username'/>
            <label>Password</label>
            <input type="password" name='password'/>

            <input type="submit" value="Connexion" />

        </form>
      </div>
    )
  }
}

export default Login    