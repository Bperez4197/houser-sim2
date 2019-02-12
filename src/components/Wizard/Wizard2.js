import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';
import {connect} from 'react-redux';
import {updateImg} from '../../ducks/reducer';

export class Wizard2 extends Component {
  render() {
      const {updateImg} = this.props
    return (
      <div className='wizard'>
        <div className='wizard-header'>
        <h3>Add New Listing</h3>
        <Link to='/'><button className='cancel-button'>Cancel</button></Link>
        </div>
        <div className='wiz-input-box'>
        <h3>Image Url</h3>
        <input className='img-input'onChange={(e)=>updateImg(e.target.value)} />
        </div>
        <Link to='/wizard'><button className='last-step'>Previous Step</button></Link>
        <Link to='/wizard3'><button className='next-step'>Next Step</button></Link>
      </div>
    )
  }
}

function mapStatetoProps(state){
    const {img} = state
    return {
        img
    }
}

export default connect(mapStatetoProps,{updateImg})(Wizard2)
