import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
function Stats() {

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
    <div className='w-full  '>
      <div className=' relative bg-purple-600 h-48 text-white text-center flex flex-col justify-center items-center p-10 mt-48 mb-24'>
        <h3 className='text-center text-slate-700 text-white font-serif text-xl lg:text-9xl tracking-[.75em] opacity-20 '>LEOCARE</h3>
        <div className='absolute grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 w-full'>
          <div className=' text-lg lg:text-4xl  text-white'>30 <br />Volunteers</div>
          <div className=' text-lg lg:text-4xl  text-white'>75.00% <br />Success</div>
          <div className=' text-lg lg:text-4xl  text-white'>100  <br />Helped</div>

        </div>

      </div>

      <div className='flex flex-col justify-center items-center'>
        <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium text-xl rounded-lg px-5 py-2.5 text-center mr-2 h-12 w-36 mb-12 ">
          DONATE
        </button>
        <form id="rzp_payment_form"></form>

      </div>
    </div>
  )
}

export default Stats
