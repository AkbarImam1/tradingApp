import react from 'react' 


function account(){
   

 return (
    <div className="circular-popup" id="my-account-popup">
  <div className="circular-popup">

<h2>My Account</h2>
<p>ID: <span id="id"></span></p>
<p>Name: <span id="name"></span></p>
<p>Email: <span id="email"></span></p>
<p>Items Purchased: <span id="total-items"></span></p>
<p>Purchased Item: <span id="purchased-item"></span></p>
<div className="button-group">
  <button id="order-list">Order List</button>
  <button id="edit-profile">Edit Profile</button>
  <button id="buy-more">Buy More</button>
</div>
</div>
</div>

    
  
 )
}
export default account