import React, { useState } from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

function Cartpage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "PowerPro X1 Cordless Drill",
      price: 1999,
      quantity: 1,
      image: "/images/product/product.png",
    },
    {
      id: 1,
      name: "PowerPro X1 Cordless Drill",
      price: 1999,
      quantity: 1,
      image: "/images/product/product.png",
    },
    {
      id: 1,
      name: "PowerPro X1 Cordless Drill",
      price: 1999,
      quantity: 1,
      image: "/images/product/product.png",
    },
  ]);

  const [couponCode, setCouponCode] = useState("");

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryCharges = 49;
  const gst = (subtotal * 0.18).toFixed(2);
  const total = subtotal + deliveryCharges + Number(gst);

  const updateQuantity = (id, change) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="cart-page">
      <div className="breadcrumb">
        <span>Home</span> / <span>Cart</span>
      </div>

      <h1>
        Shopping Cart <span>({cart.length})</span>
      </h1>

      <div className="cart-container">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="item-details">
                <h3>{item.name}</h3>
                <div className="product-id">#APC57FF1J</div>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, -1)}>
                    <FiMinus size={14} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>
                    <FiPlus size={14} />
                  </button>
                </div>
              </div>

              <div className="price-actions">
                <div className="item-price">₹ {item.price}</div>
                <button
                  className="remove-item"
                  onClick={() => removeItem(item.id)}
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>

          <div className="summary-details">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹ {subtotal}</span>
            </div>
            <div className="summary-row discount">
              <span>Discount</span>
              <span className="orange-text">- ₹ 4,499</span>
            </div>
            <div className="summary-row">
              <span>Delivery Charges</span>
              <span>+ ₹ 49</span>
            </div>
            <div className="summary-row">
              <span>GST</span>
              <span>+ ₹ {gst}</span>
            </div>
            <div className="summary-row coupon-applied">
              <span>
                Coupon Discount <span className="coupon-code">(MILL20)</span>
              </span>
              <span className="orange-text">- ₹ 100</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹ 8,983</span>
            </div>
          </div>

          <button className="proceed-btn">Proceed</button>

          <div className="coupon-section">
            <h3>Apply Coupons & Save</h3>
            <div className="coupon-input">
              <input
                type="text"
                placeholder="Enter coupon code..."
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button className="apply-btn">Apply</button>
            </div>
          </div>

          <div className="available-coupons">
            <h3>Available Coupons</h3>
            <div className="coupon-list">
              <div className="coupon-item">
                <input type="radio" name="coupon" id="MILL20" />
                <label htmlFor="MILL20">
                  <div className="coupon-header">
                    <span className="orange-dot"></span>
                    <strong>MILL20</strong>
                  </div>
                  <p>Flat 20% off on ₹1999 and above.</p>
                  <p className="terms">Grab the deal now!</p>
                </label>
              </div>
              <div className="coupon-item">
                <input type="radio" name="coupon" id="FREESHIP" />
                <label htmlFor="FREESHIP">
                  <div className="coupon-header">
                    <span className="radio-circle"></span>
                    <strong>FREESHIP</strong>
                  </div>
                  <p>Free shipping on ₹799 and above.</p>
                  <p className="terms">Enjoy the savings!</p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartpage;
