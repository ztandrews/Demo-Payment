import { loadStripe } from "@stripe/stripe-js";
import React from 'react';
import axios from "axios";

export default function Payment() {
    const handleClick = async e => {
        const stripe = await loadStripe('pk_test_51MjlSpFmJBZ50mnV6L1RnyCUeFsoMX4FrO4So5TeMrgPVjBGSDxCuKO9RausgP5I9ZaptEbsOvUqkiMOli76jYrm00xUCB6XDh')
        const  {error} = await stripe.redirectToCheckout({
            lineItems:[{
                price:'price_1MlBEMFmJBZ50mnVi6ZXryvq',
                quantity:1
            },
            {
                price:'price_1MlYqNFmJBZ50mnViGymy86C',
                quantity:1
            }
            ],
            mode:"payment",
            successUrl:'http://localhost:3000',
            cancelUrl:'http://localhost:3000/cancel'
        })
    }
  return (
    <div>
        <button onClick={handleClick}>Pay for Car</button>
    </div>
  )
}
