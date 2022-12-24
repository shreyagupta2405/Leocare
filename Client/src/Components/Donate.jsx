import React from 'react'
import { useEffect } from 'react';

function Donate() {
    useEffect(() => {
        const rzpPaymentForm = document.getElementById("rzp_payment_form");
    
        if (!rzpPaymentForm.hasChildNodes()) {
    
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/payment-button.js";
          script.async = true;
          script.dataset.payment_button_id = "pl_JtyJUgekkOT0Xy";
          rzpPaymentForm.appendChild(script);
    
        }
    
      });


  return (
    <div>
      <form id="rzp_payment_form"></form>
    </div>
  )
}

export default Donate;
