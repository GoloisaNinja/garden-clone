import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>
                    There's no place like Home, Auntie Em.
                </h1>
                <form className='signup'>
                    <h2>
                        New Gardener
                    </h2>
                    <label>
                        Name:
                        <input

                        />
                    </label>
                    <label>
                        Email:
                        <input

                        />
                    </label>
                    <label>
                        Password:
                        <input

                        />
                    </label>
                    <button type='submit'>Sign Up</button>
                </form>
                <form className='signin'>
                    <h2>
                        Established Gardener
                    </h2>
                    <label>
                        Email:
                        <input

                        />
                    </label>
                    <label>
                        Password:
                        <input

                        />
                    </label>
                    <button type='submit'>Sign In</button>
                </form>
            </div>
        )
    }
}
