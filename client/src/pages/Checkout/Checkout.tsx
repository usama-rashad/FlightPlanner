import "./Checkout.scss";

import React from "react";

// Components
import ContactEntryForm from "../../components/ContactEntryForm/ContactEntryForm";
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";

function Checkout() {
  return (
    <div className="checkout">
      <CheckoutSummary />
      <ContactEntryForm />
    </div>
  );
}

export default Checkout;
