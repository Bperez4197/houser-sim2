import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';
import {connect} from 'react-redux';
import {updateMortgage,updateRent} from '../../ducks/reducer';
import axios from 'axios';


export class Wizard3 extends Component {


    addHouse = (name,address,city,homeState,zipcode,img,mortgage,rent) => {
        axios.post('/api/house', {name,address,city,homeState,zipcode,img,mortgage,rent}).then(response => {
          console.log(response);
          alert('House Posted!');
        })
      }


  render() {
      const {updateMortgage,updateRent,name,address,city,homeState,zipcode,img,mortgage,rent} = this.props;
    return (
      <div className='wizard'>
        <div className='wizard-header'>
        <h3>Add New Listing</h3>
        <Link to='/'><button className='cancel-button'>Cancel</button></Link>
        </div>
        <h3 className='recommended'>Recommended Rent: ${mortgage * 1.25} </h3>
        <div className='wiz-input-box'>
        
        <h3>Monthly Mortgage Amount</h3>
        <input className='img-input' onChange={(e)=>updateMortgage(e.target.value)}></input>
        <h3>Desired Monthly Rent</h3>
        <input className='img-input' onChange={(e)=>updateRent(e.target.value)}></input>
        </div>
        <Link to='/wizard2'><button className='last-step'>Previous Step</button></Link>
        <Link to='/'><button className='complete'onClick={() => this.addHouse(name,address,city,homeState,zipcode,img,mortgage,rent)}>Complete</button></Link>
      </div>
    )
  }
}

function mapStatetoProps(state){
    const {name,address,city,homeState,zipcode,img,mortgage,rent} = state
    return {
        name,
        address,
        city,
        homeState,
        zipcode,
        img,
        mortgage,
        rent
    }
}

export default connect(mapStatetoProps,{updateMortgage,updateRent})(Wizard3)
