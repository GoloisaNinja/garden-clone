import React, { Component } from 'react';
import {
  getEdibles,
  getFilteredSearches,
  getNameSearch,
    getWishlist,
    getGarden,
    addToGarden,
    addToWishlist,
} from '../Utils/ApiUtils.js';
import '../plantList.css';

export default class Search extends Component {
  state = {
    userWishlist: [],
    userGarden: [],
    ediblePlants: [],
    filteredPlants: [],
    searchPlantByName: '',
    lightFilter: '',
    ediblePartFilter: '',
    veggieFilter: '',
  };

  componentDidMount = async () => {
    const edibleArray = await getEdibles(this.props.user.token);

    const wishlist = await getWishlist(this.props.user.token);

    const garden = await getGarden(this.props.user.token);
    this.setState({ userGarden: garden, userWishlist: wishlist, ediblePlants:edibleArray});
  };

  handleSearchNameChange = (e) => {
    this.setState({ searchPlantByName: e.target.value });
  };
  handleLightChange = (e) => {
    this.setState({ lightFilter: e.target.value });
  };
  handleEdiblePartChange = (e) => {
    this.setState({ ediblePartFilter: e.target.value });
  };
  handleVeggieChange = (e) => {
    this.setState({ veggieFilter: e.target.value });
  };

  handleSubmitNameChange = async (e) => {
    e.preventDefault();
    const searchNameResults = await getNameSearch(
      this.props.user.token,
      this.state.searchPlantByName
    );

    this.setState({ searchNameResults: searchNameResults });
  };

  handleFilterSubmit = async (e) => {
    e.preventDefault();
    const filteredPlantsResults = await getFilteredSearches(
      this.props.user.token,
      this.state.ediblePartFilter,
      this.state.veggieFilter,
      this.state.lightFilter
    );

    this.setState({ filteredPlants: filteredPlantsResults });
  };

  // calling it plant.id here since the endpoints will use main_species_id on the back end (we tested to make sure it works)
  handleAddToGarden = async (plant) => {
    await addToGarden(this.props.user.token, plant.id, plant.common_name);

    const garden = await getGarden(this.props.user.token)
    this.setState({userGarden: garden})
  }

  handleAddToWishlist = async (plant) => {
    await addToWishlist(this.props.user.token, plant.id);

    const wishlist = await getWishlist(this.props.user.token)
    this.setState({userWishlist: wishlist})
  }

  handleDetails = (plant) => {
    this.props.history.push(`/detail/${plant.id}`);
  }

  isInWishlist = (plant) => {
    const inWishlist = this.state.userWishlist.find(wish => wish.main_species_id === plant.id);

    return inWishlist;
  }

  isInGarden = (plant) => {
    const inGarden = this.state.userGarden.find(myPlant => myPlant.main_species_id === plant.id);

    return inGarden;
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Search By Name
            <input
              value={this.state.searchPlantByName}
              onChange={this.handleSearchNameChange}
            />
            <button onClick={this.handleSubmitNameChange}>Search!</button>
          </label>
          <label>
            Vegetable
            <input
              type='checkbox'
              value='true'
              onChange={this.handleVeggieChange}
            />
          </label>
          <select
            value={this.state.ediblePartFilter}
            onChange={this.handleEdiblePartChange}
          >
            Search by Edible Part
            <option value=''>Select</option>
            <option value='roots'>Roots</option>
            <option value='leaves'>Leaves</option>
            <option value='flowers'>Flowers/Fruit</option>
          </select>
          <select
            value={this.state.lightFilter}
            onChange={this.handleLightChange}
          >
            Search by Light Level
            <option value=''>Select</option>
            <option value='0,7'>Partial Shade</option>
            <option value='7,8'>Partial Sun</option>
            <option value='8,9'>Moderate to Full Sun</option>
            <option value='9,10'>Full Sun</option>
          </select>
          <button onClick={this.handleFilterSubmit}>Search Results</button>
        </form>
        <div className='plantList'>
                {
                    this.state.ediblePlants.map((plant, i) => 
                      <div key={`${plant.common_name}-${i}`} className="plantCard">
                        <img src={plant.image_url} className='plantImage' alt='plant' />
                        <p>{plant.common_name}</p>
                        <p>{plant.family_common_name}</p>
                        <p>{plant.scientific_name}</p>
                        {this.isInGarden(plant) 
                          ? <p>'In your Garden!'</p> 
                          : <button onClick={() => this.handleAddToGarden(plant)}>Add to Garden</button>}
                        {this.isInWishlist(plant) 
                          ? <p>'In your Wishlist!'</p> 
                          : <button onClick={() => this.handleAddToWishlist(plant)}>Add to Wishlist</button>}
                        <button onClick={() => this.handleDetails(plant)}>Details</button>
                      </div>
                    )
                }
          </div>
      </div> 
    )
  }
}
