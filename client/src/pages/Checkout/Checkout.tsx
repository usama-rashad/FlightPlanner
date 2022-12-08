import "./Checkout.scss";

import React from "react";

// Components
import ContactEntryForm from "../../components/ContactEntryForm/ContactEntryForm";

function Checkout() {
  return (
    <div className="checkout">
      <span className="title">Checkout</span>
      <ContactEntryForm />
    </div>
  );
}

export default Checkout;
