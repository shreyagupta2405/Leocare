import React, { useEffect } from 'react'

function Stats() {
  // useEffect(() => {
  //   const rzpPaymentForm = document.getElementById("rzp_payment_form");

  //   if (!rzpPaymentForm.hasChildNodes()) {

  //     const script = document.createElement("script");
  //     script.src = "https://checkout.razorpay.com/v1/payment-button.js";
  //     script.async = true;
  //     script.dataset.payment_button_id = "pl_JtyJUgekkOT0Xy";
  //     rzpPaymentForm.appendChild(script);

  //   }

  // });
  return (
    <div className='w-full  '>
      <div className=' relative bg-purple-600 h-48 text-white text-center flex flex-col justify-center items-center p-10 my-40'>
        <h3 className='text-center text-slate-700 text-white font-serif text-4xl md:text-7xl lg:text-9xl tracking-[.75em] opacity-20 '>LEOCARE</h3>
        <div className='absolute grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
          <div className=' text-lg md:text-2xl lg:text-4xl  text-white'>8 <br />Volunteers</div>
          <div className=' text-lg md:text-2xl lg:text-4xl  text-white'>100% <br />Success</div>
          <div className=' text-lg md:text-2xl lg:text-4xl  text-white'>150  <br />Helped</div>
          <div className=' text-lg md:text-2xl lg:text-4xl  text-white'>100  <br />Donations</div>

        </div>

      </div>

      <div className='flex flex-col justify-center items-center'>
        
        <form id="rzp_payment_form"></form>
        {/* <Donate /> */}
      </div>
    </div>
  )
}

export default Stats;
