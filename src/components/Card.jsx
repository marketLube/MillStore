import React from "react";
import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Card({
  image,
  category,
  title,
  currentPrice,
  originalPrice,
  rating,
  discount,
  width,
  height,
  id,
}) {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate(`/product/${id}`)}>
      <div className="product-card_image">
        {discount && <span className="discount-tag">{discount}</span>}
        <img src={image} alt={title} />
        <button className="wishlist-btn">
          <FiHeart />
        </button>
      </div>
      <div className="product-card_content">
        <span className="category">{category}</span>
        <h3 className="title">{title}</h3>
        <div className="price">
          <span className="current-price">₹{currentPrice}</span>
          <span className="original-price">₹{originalPrice}</span>
        </div>
        <div className="rating">
          {"★".repeat(Math.floor(rating))}
          {"☆".repeat(5 - Math.floor(rating))}
          <span className="rating-number">{rating}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
