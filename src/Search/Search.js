import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  getEdibles,
  getFilteredSearches,
  getNameSearch,
  //   getEdibles,
  //   getWishlist,
  //   getGarden,
  //   deleteWishlistPlant,
  //   deleteGardenPlant,
} from '../Utils/ApiUtils.js';

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

  // componentDidMount = async () => {
  //   const edibleArray = await getEdibles();
  //   this.setState({ ediblePlants: edibleArray });
  // };

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

  render() {
    return (
      <div>
        <h1>I am Search Page, Hear me ROAR.</h1>

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
        <div>
          <Link to='/detail/:id'>Detail Page</Link>
        </div>
      </div>
    );
  }
}
