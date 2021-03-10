import React, { Component } from 'react'
import { signUpUser, loginUser } from '../Utils/ApiUtils.js';

export default class Home extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        returningEmail: '',
        returningPassword: '',
        error: '',
        returnError: ''
    }

    handleNameChange = (e) => this.setState({ name: e.target.value })

    handleEmailChange = (e) => this.setState({ email: e.target.value })

    handlePasswordChange = (e) => this.setState({ password: e.target.value })

    handleReturnEmailChange = (e) => this.setState({ returningEmail: e.target.value })

    handleReturnPasswordChange = (e) => this.setState({ returningPassword: e.target.value })

    handleSignUpSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await signUpUser(this.state.name, this.state.email, this.state.password);
            this.props.handleUserChange(user);
            this.props.history.push('/search');
        } catch {
            this.setState({ error: `We couldn't find that garden plot, would you like to try again?` })
        }
    }

    handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await loginUser(this.state.returningEmail, this.state.returningPassword);
            this.props.handleUserChange(user);
            this.props.history.push('/search');
        } catch {
            this.setState({ error: 'Incorrect email or password' })
        }
    }

    render() {
        return (
            <div>
                <h1>
                    There's no place like Home, Auntie Em.
                </h1>
                <form className='signup'
                    onSubmit={this.handleSignUpSubmit}>
                    <h2>
                        New Gardener
                    </h2>
                    <label>
                        Name:
                        <input
                            onChange={this.handleNameChange}
                            value={this.state.name}
                        />
                    </label>
                    <label>
                        Email:
                        <input type='email'
                            onChange={this.handleEmailChange}
                            value={this.state.email}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type='password'
                            onChange={this.handlePasswordChange}
                            value={this.state.password}
                        />
                    </label>
                    <button type='submit'>Sign Up</button>
                </form>
                <form className='signin'
                    onSubmit={this.handleLoginSubmit}
                >
                    <h2>
                        Established Gardener
                    </h2>
                    <label>
                        Email:
                        <input type='email'
                            onChange={this.handleReturnEmailChange}
                            value={this.state.returningEmail}
                        />
                    </label>
                    <label>
                        Password:
                        <input type='password'
                            onChange={this.handleReturnPasswordChange}
                            value={this.state.returningPassword}
                        />
                    </label>
                    <button type='submit'>Sign In</button>
                </form>
            </div>
        )
    }
}
