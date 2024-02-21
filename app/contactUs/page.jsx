import React from 'react'
import ContactUsForm from '../Components/ContactUsForm'

export default function page() {
  return (
    <div className="w-full flex flex-col px-16 py-4 place-content-center ">
      <div className="text-black font-crimson text-6xl w-full text-center">
        Contact Us
      </div>
      <div className="w-full break-words text-black text-xl my-8 ">
        If you have any questions or specific requests, we encourage you to
        reach out to us directly or complete the form provided. We value your
        input and are always ready to assist you. We look forward to hearing
        from you and are committed to providing you with the best possible
        service. Thank you for choosing <strong>Frustration Frenzy</strong>
      </div>
      <div>
        <ContactUsForm />
      </div>
    </div>
  );
}
