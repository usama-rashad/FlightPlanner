import "./Checkout.scss";

import React from "react";

// Components
import ContactEntryForm from "../../components/ContactEntryForm/ContactEntryForm";
import CheckoutTravelSummary from "../../components/CheckoutTravelSummary/CheckoutTravelSummary";

import { sampleFlightResult } from "../../data";

function Checkout() {
  return (
    <div className="checkout">
      <CheckoutTravelSummary {...sampleFlightResult} />
      <ContactEntryForm />
    </div>
  );
}

export default Checkout;
