import React, { Component } from 'react';
import Spinner from '../Components/Spinner';
import {
  getWishlist,
  getGarden,
  addToGarden,
  getAllPlantInfo,
} from '../Utils/ApiUtils.js';
import '../plantList.css';

export default class Wishlist extends Component {
    state = {
        userWishlist: [],
        userGarden: [],
        loading: false,
        detailsWishlist: []
      };
    
      componentDidMount = async () => {
        this.setState({ loading: true });

    const wishlist = await getWishlist(this.props.user.token);

    const garden = await getGarden(this.props.user.token);

    const wishlistDetails = await getAllPlantInfo(wishlist, this.props.user.token);

    this.setState({
      userGarden: garden,
      userWishlist: wishlist,
      loading: false,
      detailsWishlist: wishlistDetails
    });
      };
    
      handleAddToGarden = async (plant) => {
        await addToGarden(this.props.user.token, plant.id, plant.common_name);
    
        const garden = await getGarden(this.props.user.token);
        this.setState({ userGarden: garden });
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
          <div className='wishlistPage'>
            <div className='plantList'>
              {this.state.loading ? (
                <Spinner />
              ) : (
                this.state.detailsWishlist.map((plant, i) => (
                  <div key={`${plant.common_name}-${i}`} className='plantCard'>
                    <img src={plant.image_url} className='plantImage' alt='plant' />
                    <p className='plantName'>{plant.common_name}</p>
                    <p className='cardText'>{plant.family_common_name}</p>
                    <p className='cardText'>{plant.scientific_name}</p>
                    <div className='card-buttons'>
                      {this.isInGarden(plant) ? (
                        <img
                          className='btn-no'
                          src='/garden_icon_Y.png'
                          alt='garden'
                        />
                      ) : (
                        <img
                          className='btn'
                          onClick={() => this.handleAddToGarden(plant)}
                          src='/garden_icon_N.png'
                          alt='garden'
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