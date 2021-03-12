import React, { Component } from 'react';
import Spinner from '../Components/Spinner';
import {
  getWishlist,
  getGarden,
  getAllPlantInfo
} from '../Utils/ApiUtils.js';
import '../plantList.css';

export default class MyGarden extends Component {
  state = {
    userWishlist: [],
    userGarden: [],
    loading: false,
    detailsGarden: []
  };

  componentDidMount = async () => {
    this.setState({ loading: true });

    const wishlist = await getWishlist(this.props.user.token);

    const garden = await getGarden(this.props.user.token);

    const gardenDetails = await getAllPlantInfo(garden, this.props.user.token);

    this.setState({
      userGarden: garden,
      userWishlist: wishlist,
      loading: false,
      detailsGarden: gardenDetails
    });
  };

  handleDetails = (plant) => {
    this.props.history.push(`/detail/${plant.main_species_id}`);
  };

  render() {
    return (
      <div className='myGardenPage'>
        <div className='plantList'>
          <h1>My Garden</h1>
          {this.state.loading ? (
            <Spinner />
          ) : (
            this.state.detailsGarden.map((plant, i) => (
              <div key={`${plant.common_name}-${i}`} className='plantCard'>
                <img src={plant.image_url} className='plantImage' alt='plant' />
                <p className='plantName'>{plant.common_name}</p>
                <p className='cardText'>{plant.family_common_name}</p>
                <p className='cardText'>{plant.scientific_name}</p>
                <div className='card-buttons-detail-only'>
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
