import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getHotels } from '../../Actions/HotelActions'
import { getPrices } from '../../Actions/PriceActions'
import './hotel.css'

class index extends Component {
  componentDidMount(){
    if (this.props.hotels && this.props.hotels.length === 0) {
      this.props.hotelsList()
      this.props.priceList()
    }
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
// this function can make it as a new component. 
  renderHotelList(hotels, prices){
    if (hotels && hotels.length > 0) {
      return hotels.map((hotel, index)=>{
        return(
          <Link to={`details/${hotel.id}`} key={index} className="list-wrap">
            <div className="img-wrap">
              <img src="https://cs-images.treebo.com/Treebo_Trend_Dvaraka_Inn/OAK/Oak_9_.jpg?w=180&amp;h=135&amp;fit=crop&amp;fm=pjpg" alt="Treebo Trend Dvaraka Inn"></img>
            </div>
            <div className="name-wrap">
              <h2 className="hotel-name">{hotel.name}</h2>
              <span className="location">{hotel.locality}, {hotel.city}</span>
            </div>
            <div className="price-wrap">{this.getLowestPrice(prices[index])}</div>
          </Link>
        )
      })
    } 
  }
  render() {
    const { hotels, prices, fetching } = this.props
    return (
      <div>
        {fetching && <div className="loader"></div> }
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
  prices: state.priceReducer.prices,
  fetching: state.hotelReducer.fetching
})

export default connect(mapStateToProps, mapDispatchToProps)(index)