import React from 'react'
import Donate from './Donate';
// import { useEffect } from 'react';

function Header() {
    // useEffect(() => {
    //     const rzpPaymentForm = document.getElementById("rzp_payment_form");
    
    //     if (!rzpPaymentForm.hasChildNodes()) {
    
    //       const script = document.createElement("script");
    //       script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    //       script.async = true;
    //       script.dataset.payment_button_id = "pl_JtyJUgekkOT0Xy";
    //       rzpPaymentForm.appendChild(script);
    
    //     }
    
    //   });
  return (
    <div className='bg-purple-400 flex flex-col lg:flex-row items-center justify-center gap-10  p-4 pb-2'>
                    <div className='text-white font-semibold lg:text-[1rem]  text-[1rem] float-left grid sm:grid-cols-1 lg:grid-cols-2'>
                    <div>Phone: +91 9398695177/ 9550001512</div>
                    <div>Mail: @leocarefoundation.gmail.com</div>
                        
                        
                    </div>
                    <Donate />
                    

                </div>
  )
}

export default Header
