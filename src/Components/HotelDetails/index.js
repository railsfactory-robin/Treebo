import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './details.css'

import { getHotels, getHotel } from '../../Actions/HotelActions'
import { getPrices, getPrice } from '../../Actions/PriceActions'
import { getHotelDetails } from '../../Actions/HotelDetailsActions'

class index extends Component {

  componentDidMount(){
    // there should be an api call to get the particulat hotel full detials with id
    this.props.hotelDetails()
    // if page refresh happens this api will trigger again
    if (this.props.hotels && this.props.hotels.length === 0) {
      this.props.hotelsList()
      this.props.priceList()
    }
  }

  componentDidUpdate(){
    if (this.props.hotels && this.props.hotels.length > 0) {
      this.props.getHotelById(this.props.match.params.id)
    }
    if (this.props.prices && this.props.prices.length > 0) {
      this.props.getPriceById(this.props.match.params.id)
    }
  }

  render() {
    const { hotel, price, policies, essentials } = this.props
    let policies_data = policies.map((policy, index) => {
      return <p key={index}>{policy}</p>
    })
    let essentials_data = essentials.map((essential, index) => {
      return <p key={index}>{essential}</p>
    })
    let price_list;
    if (price) {
      price_list = Object.keys(price).map((item, index)=> {
        return <p key={index}> {item} : <span className={`${price[item] ? '' : 'sold-out'}`}>{price[item] ? price[item] : 'SOLD OUT'}</span></p>
      })
    }
    return (
      <div>
        <div className="back-btn">
          <Link to="/" >Back</Link>
        </div>
        <div className="details-wrap">
          <div className="detail-img-wrap">
            <img src="https://cs-images.treebo.com/Treebo_9_Marks_Inn/Common1_.jpg?w=591&amp;h=352&amp;fm=pjpg&amp;fit=crop" alt="" />
          </div>
          <div className="details-desc">
            <h2>{hotel.name}</h2>
            <p>{hotel.locality}, {hotel.city}</p>
            <h4>Price:</h4>
              {price_list}
            <div>
              <div>
                <h4>Policies</h4>
                {policies_data}
              </div>
              <div>
                <h4>Essentials</h4>
                {essentials_data}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  hotelsList: () => dispatch(getHotels()),
  priceList: () => dispatch(getPrices()),
  hotelDetails: () => dispatch(getHotelDetails()),
  getHotelById: (id) => dispatch(getHotel(id)),
  getPriceById: (id) => dispatch(getPrice(id))
})

const mapStateToProps = state => ({
  hotels: state.hotelReducer.hotels,
  hotel: state.hotelReducer.hotel,
  prices: state.priceReducer.prices,
  price: state.priceReducer.price,
  policies: state.hotelDetailsReducer.policies,
  essentials: state.hotelDetailsReducer.essentials
})

export default connect(mapStateToProps, mapDispatchToProps)(index)