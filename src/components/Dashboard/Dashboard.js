import React, { Component } from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';

export class Dashboard extends Component {


  constructor(props){
    super(props)
    this.state = {
      list: []
    }
    this.getHouses = this.getHouses.bind(this);
    this.deleteHouse = this.deleteHouse.bind(this);
  }

  componentDidMount =() => {
    this.getHouses();
  }

  getHouses = () => {
    axios.get('/api/houses').then(response => {
      this.setState({
        list: response.data
      })
    })
  }

  deleteHouse = (id) => {
    axios.delete(`/api/house/${id}`).then( response => {
      console.log(response);
      alert('Deleted Listing!')
      {this.getHouses()};
      
    })
  };

  render() {
    var houseList = this.state.list.map(house => {
      return (
        <div>
          <House 
          propMortgage = {house.monthly_mortgage}
          propRent = {house.desired_rent}
          propName={house.property_name} 
          propAddress={house.address} 
          propCity={house.city} 
          propState={house.state} 
          propZip={house.zipcode}
          propImg={house.img}/>
          <button onClick={() => this.deleteHouse(house.id)}>Delete</button>
        </div>
      )
    })
    return (
      <div className='dashboard'>
         <div className='dash-header'>Dashboard
          <Link to='/wizard'><button className="dash-header-button">Add New Property</button></Link>
          </div>
          <div className='house-listings'>
          <h3>House Listings</h3>
          {houseList}
          </div>
      </div>
    )
  }
}

export default Dashboard
