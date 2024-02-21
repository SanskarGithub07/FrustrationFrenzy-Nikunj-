// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Foooter from "./Foooter";
export default function ContactUsForm() {
  const [state, handleSubmit] = useForm("mgejjepk");
  if (state.succeeded) {
    return <p className="text-black">Thanks for joining!</p>;
  }
  const message = "Appointment booked at 9 AM";
  return (
    <div className="w-full h-full">
      <form
        className="flex flex-col gap-1 w-1/2 h-1/2 border-2 m-auto rounded-xl border-black p-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="text-dark-green text-xl">
          Name
        </label>
        <input
          placeholder="Enter your email address"
          id="name"
          type="name"
          name="name"
          className="text-black bg-white-green p-2"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <label htmlFor="email" className="text-dark-green text-xl">
          Email
        </label>
        <input
          placeholder="Enter your email address"
          id="email"
          type="email"
          name="email"
          className="text-black text-xl bg-white-green p-2"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message" className="text-dark-green text-xl">
          Message
        </label>
        <textarea
          className="bg-white-green p-2 text-xl text-black"
          id="message"
          name="message"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="btn btn-primary text-xl my-4 bg-sec-red text-white-green"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
      <div>
        <Foooter/>
      </div>
    </div>
  );
}
