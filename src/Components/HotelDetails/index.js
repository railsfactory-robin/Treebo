import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './details.css'

class index extends Component {

  componentDidMount(){
    // there should be an api call to get the particulat hotel full detials
  }

  render() {
    const { hotels, prices } = this.props
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
            <h2>TREEBO TREND 9 MARKS INN</h2>
            <p>Indiranagar, Bangalore</p>
            <h4>Price:</h4>
            <p>acacia : 2200</p>
            <p>oak : 2435</p>
            <p>maple : 2735</p>
            <p>mahogany : 3312</p>
            <div>
              <div>
                <h4>Policies</h4>
                <p>Check-In Time: 12:00pm</p>
                <p>Checkout-Out time: 11:00am</p>
                <p>Must carry ID card</p>
              </div>
              <div>
                <h4>Essentials</h4>
                <p>AC Room</p>
                <p>TV</p>
                <p>WiFi</p>
                <p>Breakfast</p>
                <p>Toiletries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({

})

const mapStateToProps = state => ({
  hotels: state.hotelReducer.hotels,
  prices: state.priceReducer.prices
})

export default connect(mapStateToProps, mapDispatchToProps)(index)