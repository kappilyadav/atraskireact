import React, { useState } from 'react';
import "./Checkout.scss";
import { Link } from "react-router-dom";


// const Checkout = () => {
//   return (
//     <div className=''>
//       <div style={{height: "200px", backgroundColor: "#6C7CD0", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
//         <h1 style={{color: "white", fontSize: "3rem", fontWeight: "700"}}>CHECKOUT</h1>
//       </div>

//       <div>
//         <div className='info'>
//         </div>
//         <div className='process'>
//         </div>
//         <div className='row'>
//           <div className='col user-details'>
//             <form>
//               <p>Full Name</p>
//               <input type='text'></input>
//               <p>Date of Birth</p>
//               <input type='date'></input>
//               <p>Gender</p>
//               <input type='dropdown'></input>
//               <p>Email Address</p>
//               <input type='text'></input>
//               <p>Contact Number</p>
//               <input type='text'></input>
//               <p>Instagram Handle</p>
//               <input type='text'></input>
//             </form>
//           </div>
//           <div className='col cart-details'>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Checkout;




const Checkout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [orderDetails, setOrderDetails] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleOrderDetailsChange = (e) => {
    setOrderDetails(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any additional validation or processing here
    // Submit the form or perform further actions
  };

  return (
    <div style={{textAlign: "center"}} className="row checkout-page">

      <div style={{ height: "200px", backgroundColor: "#6C7CD0", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h1 style={{ color: "white", fontSize: "3rem", fontWeight: "700" }}>CHECKOUT</h1>
      </div>

      <div className="col user-details">
        <h2>Billing Details</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <h6>Name:</h6>
            <input type="text" value={name} onChange={handleNameChange} required />
          </div>
          <div>
            <h6>Name:</h6>
            <input type="text" value={name} onChange={handleNameChange} required />
          </div>
          <div>
            <h6>Name:</h6>
            <input type="text" value={name} onChange={handleNameChange} required />
          </div>
          <div>
            <h6>Name:</h6>
            <input type="text" value={name} onChange={handleNameChange} required />
          </div>
          <div>
            <h6>Email:</h6>
            <input type="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div>
            <h6>Phone:</h6>
            <input type="tel" value={phone} onChange={handlePhoneChange} required />
          </div>
          <button type="submit">Place Order</button>
        </form>
      </div>
      <div style={{padding: "0% 10%"}} className="col order-details">
        <h2>Your Order</h2>
        <div style={{backgroundColor: "gray"}}>
        <div>
          <h6>Order:</h6>
          <input type="text" value={orderDetails} onChange={handleOrderDetailsChange} required />
        </div>
        <div>
          <h6>Quantity:</h6>
          <input type="number" value={quantity} onChange={handleQuantityChange} required />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

