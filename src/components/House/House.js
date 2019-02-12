import React, { Component } from 'react'

const House = (props) => {
  let { propName, propAddress, propCity, propState, propZip, propImg, propMortgage,propRent} = props;
  console.log(propImg);
  return (
    <div className='allboxes'>
      <div className='box'>
          <img className='box-img' src={`${propImg}`}/>
      </div>
      <div className='box'>
        <p>Property Name: {propName}</p>
        <p>Address: {propAddress}</p>
        <p>City: {propCity}</p>
        <p>State: {propState}</p>
        <p>Zipcode: {propZip}</p>
      </div>
        
      <div className='box'>
      <p>Monthly Mortgage: {propMortgage}</p>
      <p>Desired Rent: {propRent}</p>
      </div>
    </div>
  )
}

export default House
