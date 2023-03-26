import React, { Component } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { Modal } from 'react-bootstrap';
export default class Store extends Component {
    state={
        vehicles: [],
        cart:[],
        show: false
    }

    componentDidMount(){
        axios.get("https://rz168t704f.execute-api.us-east-2.amazonaws.com/getVeichles").then(res => {
            const vehicles = res.data.body; 
            //console.log(JSON.parse(veichles));
            this.setState({vehicles: JSON.parse(vehicles)});
            console.log(this.state.vehicles)
            //console.log(this.state.cart)
        })
    }
  render() {
        const handleClick = async e => {
        const stripe = await loadStripe('pk_test_51MjlSpFmJBZ50mnV6L1RnyCUeFsoMX4FrO4So5TeMrgPVjBGSDxCuKO9RausgP5I9ZaptEbsOvUqkiMOli76jYrm00xUCB6XDh')
        const  {error} = await stripe.redirectToCheckout({
            lineItems:this.state.cart,
            mode:"payment",
            successUrl:'http://localhost:3000',
            cancelUrl:'http://localhost:3000/cancel'
        })
    }
    const addToCart= (_id) => {
        console.log(_id);
        this.state.cart.push({'price':_id,'quantity':1});
    }

    return (
      <div>
        <h1>Vehicles<br></br>
            <button onClick={handleClick}>Checkout</button>
            <br></br>
        </h1>
        <br></br>
        <div>
            {
                this.state.vehicles.map(vehicle => {
                    return(
                        <div key={vehicle.veichle_stripe_id}>
                            <h3>{vehicle.veichle_name}</h3>
                            <h3>{vehicle.veichle_price}</h3>
                            <h3>{vehicle.veichle_description}</h3>
                            <button onClick={()=>addToCart(vehicle.veichle_stripe_id)}>Add To Cart</button>
                            <br></br>
                        </div>
                    )
                })
            }
        </div>
      </div>
    )
  }
}
