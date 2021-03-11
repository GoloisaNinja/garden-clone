import React, { Component } from 'react';
import { getPlantDetails, getWishlist, getGarden } from '../Utils/ApiUtils';
import Spinner from '../Components/Spinner';
import Notes from './Notes';
import '../plantList.css';

export default class Detail extends Component {
  state = {
    userWishlist: [],
    userGarden: [],
    userNotes: [],
    plantId: '',
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
    loading: false,
  };

  componentDidMount = async () => {
    this.setState({ loading: true });

    const wishlist = await getWishlist(this.props.user.token);

    const garden = await getGarden(this.props.user.token);
    this.setState({
      userGarden: garden,
      userWishlist: wishlist,
    });

    const plantDetails = await getPlantDetails(
      this.props.user.token,
      this.props.match.params.id
    );
    console.log(plantDetails);
    await this.setState({
      loading: false,
      plantId: plantDetails.main_species_id,
      name: plantDetails.common_name,
      familyName: plantDetails.family_common_name,
      scientificName: plantDetails.scientific_name,
      image: plantDetails.image_url,
      vegetable: plantDetails.vegetable,
      height: plantDetails.main_species.specifications.average_height.cm,
      light: plantDetails.main_species.growth.light,
      ediblePart: plantDetails.main_species.edible_part,
      soilTexture: plantDetails.main_species.growth.soil_texture,
      minPrecipitation:
        plantDetails.main_species.growth.minimum_precipitation.mm,
      maxPrecipitation:
        plantDetails.main_species.growth.maximum_precipitation.mm,
      leafImage: plantDetails.main_species.images.leaf
        ? plantDetails.main_species.images.leaf[0].image_url
        : 'null',
      flowerImage: plantDetails.main_species.images.flower
        ? plantDetails.main_species.images.flower[0].image_url
        : 'null',
      fruitImage: plantDetails.main_species.images.fruit
        ? plantDetails.main_species.images.fruit[0].image_url
        : 'null',
    });
  };

  findLightLevel = (light) => {
    if (light <= 7) {
      return 'Partial Shade';
    } else if (light === 8) {
      return 'Partial Sun';
    } else if (light === 9) {
      return 'Moderate to Full Sun';
    } else return 'Full Sun';
  };

  findSoilTexture = (soil) => {
    if (soil >= 1 && soil <= 3) {
      return 'coarse mixture with pumice and loamy sand';
    } else if (soil >= 4 && soil <= 5) {
      return 'gritty mixture of saney loam';
    } else if (soil >= 6 && soil <= 7) {
      return 'smooth like flour mixed loam and silt';
    } else return 'gritty mixture of clay and laom';
  };

  isInWishlist = (plant) => {
    const inWishlist = this.state.userWishlist.find(
      (wish) => wish.main_species_id === plant
    );
    return inWishlist;
  };

  isInGarden = (plant) => {
    const inGarden = this.state.userGarden.find(
      (myPlant) => myPlant.main_species_id === plant
    );
    return inGarden;
  };

  render() {
    console.log(this.state.plantId);
    return (
      <div>
        <h1>Plant Details</h1>
        <div>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <div>
              <h2>{this.state.name}</h2>
              <p>{this.state.familyName}</p>
              <p>{this.state.scientificName}</p>
              <img className='plantImage' src={this.state.image} alt='plant' />
              {this.state.vegetable ? <p>This is a Vegetable</p> : ''}
              {this.state.height ? (
                <p>Height: {this.state.height} centimeters</p>
              ) : (
                ''
              )}
              {this.state.light ? (
                <p>Light Level: {this.findLightLevel(this.state.light)}</p>
              ) : (
                ''
              )}
              {this.state.ediblePart ? (
                <p>You can eat the {this.state.ediblePart}</p>
              ) : (
                ''
              )}
              <p>
                Soil Texture: {this.findSoilTexture(this.state.soilTexture)}
              </p>
              {this.state.minPrecipitation ? (
                <p>
                  Minimum Precipitation: {this.state.minPrecipitation} mm per
                  year
                </p>
              ) : (
                ''
              )}
              {this.state.maxPrecipitation ? (
                <p>
                  Maximum Precipitation: {this.state.maxPrecipitation} mm per
                  year
                </p>
              ) : (
                ''
              )}
              <p>Additional Images </p>
              {this.state.leafImage ? (
                <img
                  className='plantImage'
                  src={this.state.leafImage}
                  alt='leaf'
                />
              ) : (
                ''
              )}
              {this.state.flowerImage ? (
                <img
                  className='plantImage'
                  src={this.state.flowerImage}
                  alt='flower'
                />
              ) : (
                ''
              )}
              {this.state.fruitImage ? (
                <img
                  className='plantImage'
                  src={this.state.fruitImage}
                  alt='fruit'
                />
              ) : (
                ''
              )}
              {this.isInGarden(this.state.plantId) ? (
                <h3>You have this plant in your Garden!</h3>
              ) : (
                <h3>Add this plant to your garden?</h3>
              )}
              {this.isInWishlist(this.state.plantId) ? (
                <h3>You have this plant in your Wishlist!</h3>
              ) : (
                <h3>Add this plant to your wishlist?</h3>
              )}
            </div>
          )}
          {this.state.plantId && (
            <Notes token={this.props.user.token} plantId={this.state.plantId} />
          )}
        </div>
      </div>
    );
  }
}
