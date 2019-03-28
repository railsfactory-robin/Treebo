import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getHotels } from '../../Actions/HotelActions'
import { getPrices } from '../../Actions/PriceActions'
import './hotel.css'

class index extends Component {
  componentDidMount(){
    this.props.hotelsList()
    this.props.priceList()
  }

  getLowestPrice(prices){
    let lowest = 0
    if (prices) {
      Object.keys(prices.price).forEach(function(key) {
        if (lowest === 0 && prices.price[key] !== null) {
          lowest = prices.price[key]
        }
        if(lowest !== 0 && prices.price[key] !== null && prices.price[key] < lowest) {
          lowest = prices.price[key]
        }
        
    })
    return (
      <span className={`${lowest === 0 ? 'sold-out' : ''}`}>{lowest !== 0 ? `₹ ${lowest}` : 'SOLD OUT'}</span>
    )
    }
  }

  renderHotelList(hotels, prices){
    if (hotels && hotels.length > 0) {
      return hotels.map((hotel, index)=>{
        return(
          <a href key={index} className="list-wrap">
            <div className="img-wrap">
              <img src="https://cs-images.treebo.com/Treebo_Trend_Dvaraka_Inn/OAK/Oak_9_.jpg?w=180&amp;h=135&amp;fit=crop&amp;fm=pjpg" alt="Treebo Trend Dvaraka Inn"></img>
            </div>
            <div className="name-wrap">
              <h2 className="hotel-name">{hotel.name}</h2>
              <span className="location">{hotel.locality}, {hotel.city}</span>
            </div>
            <div className="price-wrap">{this.getLowestPrice(prices[index])}</div>
          </a>
        )
      })
    } 
  }
  render() {
    const { hotels, prices } = this.props
    return (
      <div>
        {this.renderHotelList(hotels, prices)}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  hotelsList: () => dispatch(getHotels()),
  priceList: () => dispatch(getPrices())
})

const mapStateToProps = state => ({
  hotels: state.hotelReducer.hotels,
  prices: state.priceReducer.prices
})

export default connect(mapStateToProps, mapDispatchToProps)(index)