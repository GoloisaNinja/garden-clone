import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Search extends Component {
    render() {
        return (
            <div>
                <h1>
                    I am Search Page, Hear me ROAR.
                </h1>

                <form>
                    <label>
                        Search By Name
                        <input />
                        <button>Search!</button>
                    </label>
                    <label>
                        Vegetable
                        <input type='checkbox' value='vegetable' />
                    </label>
                    <select>
                        Search by Edible Part
                        <option value='roots'>Roots</option>
                        <option value='leaves'>Leaves</option>
                        <option value='flowers'>Flowers/Fruit</option>
                    </select>
                    <select>
                        Search by Light Level
                        <option value='0,7'>Partial Shade</option>
                        <option value='7,8'>Partial Sun</option>
                        <option value='8,9'>Moderate to Full Sun</option>
                        <option value='9,10'>Full Sun</option>
                    </select>
                </form>
                <div>
                    <h1>Your Search Results</h1>
                    <Link to='/detail/:id'>Detail Page</Link>
                </div>
            </div>
        )
    }
}
