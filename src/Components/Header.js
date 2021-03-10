import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>
                    Be Head 'Er
                </h1>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/search'>Search</NavLink>
                <NavLink to='/my_garden'>My Garden</NavLink>
                <NavLink to='/wishlist'>Wishlist</NavLink>
                <NavLink to='/'>Log Out</NavLink>
            </div>
        )
    }
}
