import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
        return (
            <div>
                <h1>
                    The Devil is in the Details
                </h1>
                <div>
                    <h2>All The Plant Details of this One Plant</h2>
                    <ul>Details</ul>
                    <li>common_name</li>
                    <li>family_common_name</li>
                    <li>Scientific_name</li>
                    <li>image_url</li>
                    <li>vegetable (t/f conditional)</li>
                    <li>specifications.average_height.cm</li>
                    <li>growth.light</li>
                    <li>edible_part</li>
                    <li>growth.soil_texture</li>
                    <li>growth min and growth.max_precipitation.mm (mm per
                    year)</li>
                    <li>other images (first from each category)</li>
                    <li>Images.leaf[0]</li>
                    <li>images.flower[0]</li>
                    <li>images.fruit[0]</li>
                    <h3>Is it in your Garden or Wishlist</h3>
                    <h3>If its in your garden, here are your notes and you can add notes</h3>
                </div>
            </div>
        )
    }
}
