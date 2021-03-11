import React, { Component } from 'react'
import { getPlantDetails } from '../Utils/ApiUtils';
import '../plantList.css'

export default class Detail extends Component {
    state = {
        userWishlist: [],
        userGarden: [],
        userNotes: [],
        name: '',
        familyName: '',
        scientificName: '',
        image: '',
        vegetable: false,
        height: '',
        light: '',
        ediblePart: '',
        soilTexture: '',
        minPrecipitation: '',
        maxPrecipitation: '',
        leafImage: '',
        flowerImage: '',
        fruitImage: '',

    };

    componentDidMount = async () => {
        const plantDetails = await getPlantDetails(this.props.user.token, this.props.match.params.id);
        await this.setState({
            name: plantDetails.common_name,
            familyName: plantDetails.family_common_name,
            scientificName: plantDetails.scientific_name,
            image: plantDetails.image_url,
            vegetable: plantDetails.vegetable,
            height: plantDetails.main_species.specifications.average_height.cm,
            light: plantDetails.main_species.growth.light,
            ediblePart: plantDetails.main_species.edible_part,
            soilTexture: plantDetails.main_species.growth.soil_texture,
            minPrecipitation: plantDetails.main_species.growth.minimum_precipitation.mm,
            maxPrecipitation: plantDetails.main_species.growth.maximum_precipitation.mm,
            leafImage: plantDetails.main_species.images.leaf[0].image_url,
            flowerImage: plantDetails.main_species.images.flower[0].image_url,
            fruitImage: plantDetails.main_species.images.fruit[0].image_url,
        });
    }

    findLightLevel = (light) => {
        if (light <= 7) {
            return 'Partial Shade'
        }
        else if (light === 8) {
            return 'Partial Sun'
        }
        else if (light === 9) {
            return 'Moderate to Full Sun'
        }
        else return 'Full Sun'
    }

    // clay sandy clam loam pumice sand and loam 

    render() {
        return (
            <div>
                <h1>
                    Plant Details
                </h1>
                <div>
                    <h2>{this.state.name}</h2>
                    <p>{this.state.familyName}</p>
                    <p>{this.state.scientificName}</p>
                    <img className='plantImage' src={this.state.image} alt='plant' />
                    {this.state.vegetable ? <p>This is a Vegetable</p> : ''}
                    {this.state.height ? <p>Height: {this.state.height} centimeters</p> : ''}
                    {this.state.light ? <p>Light Level: {this.findLightLevel(this.state.light)}</p> : ''}
                    {this.state.ediblePart ? <p>You can eat the {this.state.ediblePart}</p> : ''}

                    <p>{this.state.soilTexture} soil texture</p>

                    {this.state.minPrecipitation ? <p>Minimum Precipitation: {this.state.minPrecipitation} mm per year</p> : ''}
                    {this.state.maxPrecipitation ? <p>Maximum Precipitation: {this.state.maxPrecipitation} mm per year</p> : ''}
                    <p>Additional Images </p>
                    {this.state.leafImage ? <img className='plantImage' src={this.state.leafImage} alt='leaf' /> : ''}
                    {this.state.flowerImage ? <img className='plantImage' src={this.state.flowerImage} alt='flower' /> : ''}
                    {this.state.fruitImage ? <img className='plantImage' src={this.state.fruitImage} alt='fruit' /> : ''}

                    <h3>Is it in your Garden or Wishlist</h3>
                    <h3>If its in your garden, here are your notes and you can add notes</h3>
                </div>
            </div>
        )
    }
}

// {{this.state.vegetable} ? <p>{this.state.vegetable}'</p> : ''}

// {!this.state.todos.length && <p>Crumble up the list & throw it away!</p>}
//                 {this.state.todos.map(todo =>
//                     <p key={`${todo.todo}-${todo.id}`}
//                         onClick={() => this.handleComplete(todo.id)}
//                         className={`todo ${todo.completed
//                                 ? 'completed'
//                                 : ''}`
//                         }>
//                         {todo.todo}
//                     </p>)}

// descriptionString = null;
// if (descriptionString != null) {
//     document.getElementById('image-description').style.display = 'block';
// } else {
//     document.getElementById('image-description').style.display = 'none';
// }
// <div id="image-description">
// Image 
// </div>