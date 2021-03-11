import React, { Component } from 'react';
import Spinner from '../Components/Spinner';
import {
  getEdibles,
  getWishlist,
  getGarden,
  addToWishlist,
} from '../Utils/ApiUtils.js';
import '../plantList.css';

export default class MyGarden extends Component {
  state = {
    userWishlist: [],
    userGarden: [],
    ediblePlants: [],
    filteredPlants: [],
    searchPlantByName: '',
    lightFilter: '',
    ediblePartFilter: '',
    veggieFilter: '',
    loading: false,
  };

  componentDidMount = async () => {
    this.setState({ loading: true });
    const edibleArray = await getEdibles(this.props.user.token);

    const wishlist = await getWishlist(this.props.user.token);

    const garden = await getGarden(this.props.user.token);
    this.setState({
      userGarden: garden,
      userWishlist: wishlist,
      ediblePlants: edibleArray,
      loading: false,
    });
  };


  handleAddToWishlist = async (plant) => {
    await addToWishlist(this.props.user.token, plant.id);

    const wishlist = await getWishlist(this.props.user.token);
    this.setState({ userWishlist: wishlist });
  };

  handleDetails = (plant) => {
    this.props.history.push(`/detail/${plant.id}`);
  };

  isInWishlist = (plant) => {
    const inWishlist = this.state.userWishlist.find(
      (wish) => wish.main_species_id === plant.id
    );

    return inWishlist;
  };

  isInGarden = (plant) => {
    const inGarden = this.state.userGarden.find(
      (myPlant) => myPlant.main_species_id === plant.id
    );

    return inGarden;
  };

  render() {
    return (
      <div className='myGardenPage'>
        <div className='plantList'>
          {this.state.loading ? (
            <Spinner />
          ) : (
            this.state.ediblePlants.map((plant, i) => (
              <div key={`${plant.common_name}-${i}`} className='plantCard'>
                <img src={plant.image_url} className='plantImage' alt='plant' />
                <p className='plantName'>{plant.common_name}</p>
                <p className='cardText'>{plant.family_common_name}</p>
                <p className='cardText'>{plant.scientific_name}</p>
                <div className='card-buttons'>
                  {this.isInWishlist(plant) ? (
                    <img
                      className='btn-no'
                      disabled
                      src='/wishlist_icon_Y.png'
                      alt='wishlist'
                    />
                  ) : (
                    <img
                      className='btn'
                      onClick={() => this.handleAddToWishlist(plant)}
                      src='/wishlist_icon_N.png'
                      alt='wishlist'
                    />
                  )}
                  <button
                    className='detailBtn'
                    onClick={() => this.handleDetails(plant)}
                  >
                    Details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}
