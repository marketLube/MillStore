import React, { useState } from "react";
import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import AddressModal from "../../components/cart/Addressmodal";

// Add this array of coupons
const availableCoupons = [
  {
    id: "MILL20",
    code: "MILL20",
    description: "Flat 20% off on ₹1999 and above.",
    terms: "Grab the deal now!",
    isHighlighted: true,
  },
  {
    id: "FREESHIP",
    code: "FREESHIP",
    description: "Free shipping on ₹799 and above.",
    terms: "Enjoy the savings!",
    isHighlighted: false,
  },
  {
    id: "FIRST50",
    code: "FIRST50",
    description: "₹50 off on your first order.",
    terms: "New users only!",
    isHighlighted: false,
  },
  {
    id: "TOOLS25",
    code: "TOOLS25",
    description: "25% off on all power tools.",
    terms: "Limited time offer!",
    isHighlighted: false,
  },
  {
    id: "EXTRA10",
    code: "EXTRA10",
    description: "Extra 10% off on orders above ₹2499.",
    terms: "T&C Apply",
    isHighlighted: false,
  },
  {
    id: "EXTRA10",
    code: "EXTRA10",
    description: "Extra 10% off on orders above ₹2499.",
    terms: "T&C Apply",
    isHighlighted: false,
  },
  {
    id: "EXTRA10",
    code: "EXTRA10",
    description: "Extra 10% off on orders above ₹2499.",
    terms: "T&C Apply",
    isHighlighted: false,
  },
  {
    id: "EXTRA10",
    code: "EXTRA10",
    description: "Extra 10% off on orders above ₹2499.",
    terms: "T&C Apply",
    isHighlighted: false,
  },
];

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
  const [showCoupons, setShowCoupons] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

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
          <div className="summary-details">
            <h2>Order Summary</h2>
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
            <button
              className="proceed-btn"
              onClick={() => setIsAddressModalOpen(true)}
            >
              Proceed
            </button>
          </div>

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
            <div
              className="coupon-header"
              onClick={() => setShowCoupons(!showCoupons)}
            >
              <h3>Available Coupons</h3>
              {showCoupons ? (
                <FiChevronUp className="mobile-icon" />
              ) : (
                <FiChevronDown className="mobile-icon" />
              )}
            </div>
            <div className={`coupon-list ${showCoupons ? "show" : ""}`}>
              {availableCoupons.map((coupon) => (
                <div className="coupon-item" key={coupon.id}>
                  <label htmlFor={coupon.id}>
                    <div className="coupon-header">
                      <input type="radio" name="coupon" id={coupon.id} />
                      <strong>{coupon.code}</strong>
                    </div>
                    <p>{coupon.description}</p>
                    <p className="terms">{coupon.terms}</p>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AddressModal
        isOpen={isAddressModalOpen}
        onClose={() => setIsAddressModalOpen(false)}
      />
    </div>
  );
}

export default Cartpage;
