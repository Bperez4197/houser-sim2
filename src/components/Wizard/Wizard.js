import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateName,updateAddress,updateCity,updateState,updateZip} from '../../ducks/reducer';

class Wizard extends Component {
  render() {
    const {updateName,updateAddress,updateCity,updateState,updateZip} = this.props;

    return (
      <div className='wizard'>
      <div className='wizard-header'>
        <h3>Add New Listing</h3>
        <Link to='/'><button className='cancel-button'>Cancel</button></Link>
        </div>
        <div className='wiz-input-box'>
        <p>Property Name</p>
        <input className='name-input' placehold="Property Name" onChange={(e) =>updateName(e.target.value)} />
        <p>Address</p>
        <input className='address-input'placehold="Address" onChange={(e)=>updateAddress(e.target.value)}  />
        <div className='threepiece'>
        <p>City</p>
        <input className='city-input' placehold="City" onChange={(e)=>updateCity(e.target.value)} />
        <p>State</p>
        <input className='state-input'placehold="State" onChange={(e)=>updateState(e.target.value)}  />
        <p>Zipcode</p>
        <input className='zipcode-input' placehold="Zipcode" onChange={(e)=>updateZip(e.target.value)}  />
        </div>
        </div>
        <Link to='/wizard2'><button className='next-step'>Next Step</button></Link>
      </div>
    )
  }
}

function mapStatetoProps(state){
  const {name,address,city,homeState,zipcode} = state
  return {
    name,
    address,
    city,
    homeState,
    zipcode
  }
}



export default connect(mapStatetoProps, {updateName,updateAddress,updateCity,updateState,updateZip})(Wizard)
