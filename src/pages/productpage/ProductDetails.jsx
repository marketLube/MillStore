import React, { useRef, useState } from "react";
import Card from "../../components/Card";
import {
  FiChevronLeft,
  FiChevronRight,
  FiShare2,
  FiHeart,
} from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

const topPicks = [
  {
    id: 1,
    image: "/images/carousel/carousel-1.jpg",
    category: "Power & Light Tools",
    title: "Urban Edge Overstand",
    currentPrice: 4999,
    originalPrice: 5999,
    rating: 4.1,
    discount: "NEW",
  },
  {
    id: 2,
    image: "/images/carousel/carousel-1.jpg",
    category: "Power & Light Tools",
    title: "Urban Edge Overstand",
    currentPrice: 4999,
    originalPrice: 5999,
    rating: 4.5,
    discount: "NEW",
  },
  {
    id: 3,
    image: "/images/carousel/carousel-1.jpg",
    category: "Power & Light Tools",
    title: "Urban Edge Overstand",
    currentPrice: 4999,
    originalPrice: 5999,
    rating: 4.3,
    discount: "NEW",
  },
  {
    id: 4,
    image: "/images/carousel/carousel-1.jpg",
    category: "Power & Light Tools",
    title: "Urban Edge Overstand",
    currentPrice: 4999,
    originalPrice: 5999,
    rating: 4.3,
    discount: "NEW",
  },
  {
    id: 4,
    image: "/images/carousel/carousel-1.jpg",
    category: "Power & Light Tools",
    title: "Urban Edge Overstand",
    currentPrice: 4999,
    originalPrice: 5999,
    rating: 4.3,
    discount: "NEW",
  },
  {
    id: 4,
    image: "/images/carousel/carousel-1.jpg",
    category: "Power & Light Tools",
    title: "Urban Edge Overstand",
    currentPrice: 4999,
    originalPrice: 5999,
    rating: 4.3,
    discount: "NEW",
  },
  {
    id: 4,
    image: "/images/carousel/carousel-1.jpg",
    category: "Power & Light Tools",
    title: "Urban Edge Overstand",
    currentPrice: 4999,
    originalPrice: 5999,
    rating: 4.3,
    discount: "NEW",
  },
  {
    id: 4,
    image: "/images/carousel/carousel-1.jpg",
    category: "Power & Light Tools",
    title: "Urban Edge Overstand",
    currentPrice: 4999,
    originalPrice: 5999,
    rating: 4.3,
    discount: "NEW",
  },
  {
    id: 4,
    image: "/images/carousel/carousel-1.jpg",
    category: "Power & Light Tools",
    title: "Urban Edge Overstand",
    currentPrice: 4999,
    originalPrice: 5999,
    rating: 4.3,
    discount: "NEW",
  },
  {
    id: 4,
    image: "/images/carousel/carousel-1.jpg",
    category: "Power & Light Tools",
    title: "Urban Edge Overstand",
    currentPrice: 4999,
    originalPrice: 5999,
    rating: 4.3,
    discount: "NEW",
  },
];

// Add this reviews data
const reviews = [
  {
    id: 1,
    rating: 4,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam imperdiet nunc, id mollis tellus viverra eu.",
    username: "Username",
    date: "14 Jan 2024",
    userImage: "/images/carousel/carousel-1.jpg",
  },
  {
    id: 2,
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam imperdiet nunc, id mollis tellus viverra eu.",
    username: "Username",
    date: "14 Jan 2024",
    userImage: "/images/carousel/carousel-1.jpg",
  },
  {
    id: 1,
    rating: 4,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam imperdiet nunc, id mollis tellus viverra eu.",
    username: "Username",
    date: "14 Jan 2024",
    userImage: "/images/carousel/carousel-1.jpg",
  },
  {
    id: 2,
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam imperdiet nunc, id mollis tellus viverra eu.",
    username: "Username",
    date: "14 Jan 2024",
    userImage: "/images/carousel/carousel-1.jpg",
  },
  {
    id: 1,
    rating: 4,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam imperdiet nunc, id mollis tellus viverra eu.",
    username: "Username",
    date: "14 Jan 2024",
    userImage: "/images/carousel/carousel-1.jpg",
  },
  {
    id: 2,
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam imperdiet nunc, id mollis tellus viverra eu.",
    username: "Username",
    date: "14 Jan 2024",
    userImage: "/images/carousel/carousel-1.jpg",
  },
];

function ProductDetails() {
  const sliderRef = useRef(null);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const visibleReviews = showAllReviews ? reviews : reviews.slice(0, 2);

  return (
    <div className="product-details">
      <div className="breadcrumb">
        <span>All products</span>
        <span>/</span>
        <span>Lights</span>
      </div>

      <div className="product-container">
        <div className="product-images">
          <div className="main-image">
            <button className="wishlist-btn">
              <FiHeart />
            </button>
            <img src="/images/product/product.png" alt="Philips Max 440E LED" />
          </div>
          <div className="thumbnail-images">
            <img src="/images/product/product.png" alt="thumbnail" />
            <img src="/images/product/product.png" alt="thumbnail" />
            <img src="/images/product/product.png" alt="thumbnail" />
          </div>
        </div>

        <div className="product-info">
          <div className="header">
            <div className="brand">
              <img
                src="/images/carousel/carousel-1.jpg"
                alt="Philips"
                className="brand-logo"
              />
              <span>Philips</span>
            </div>
            <div className="actions">
              <span className="product-id">#MC575FFJ</span>
              <button className="share-btn">
                <FiShare2 />
              </button>
            </div>
          </div>

          <h1 className="product-title">Philips Max 440E LED</h1>

          <div className="rating-summary">
            <div className="stars">★★★★☆</div>
            <span className="rating">4.0</span>
            <span className="reviews">(181 reviews)</span>
          </div>

          <div className="section description">
            <h3>Description</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              aliquam imperdiet nunc, id mollis tellus viverra eu. Mauris mi
              orci, imperdiet vel lacus a, pellentesque vestibulum nisi. Nunc
              vel purus vulputate lacus laculis rhoncus ut ac dolor...
              <button className="read-more">Read more</button>
            </p>
          </div>

          <div className="section material">
            <h3>Material</h3>
            <div className="color-options">
              <button className="color-btn black"></button>
              <button className="color-btn brown"></button>
              <button className="color-btn beige"></button>
            </div>
          </div>

          <div className="section light-type">
            <h3>Light Type</h3>
            <div className="type-buttons">
              <button className="type-btn active">
                <div className="light-icon cool"></div>
                <div className="light-info">
                  <span>Cool White</span>
                  <span className="temp">(5000K-6500K)</span>
                </div>
              </button>
              <button className="type-btn">
                <div className="light-icon warm"></div>
                <div className="light-info">
                  <span>Warm White</span>
                  <span className="temp">(2700K-3000K)</span>
                </div>
              </button>
            </div>
          </div>

          <div className="section price">
            <div className="price-info">
              <span className="current">₹1,999</span>
              <span className="original">₹2,499</span>
              <span className="discount">20% off</span>
            </div>
            <div className="buy-buttons">
              <button className="buy-now">Buy Now</button>
              <button className="add-cart">Add To Cart</button>
            </div>
          </div>

          <div className="section specifications">
            <h3>Product Specification</h3>
            <ul>
              <li>Uses only 10W power</li>
              <li>Brightness of 800 lumens</li>
              <li>Adjustable color temperature (3000K-6500K)</li>
              <li>Long lifespan of up to 50,000 hours</li>
              <li>Fits E27 base sockets</li>
            </ul>
          </div>

          <div className="section reviews">
            <div className="reviews-header">
              <h3>Ratings & Reviews</h3>
              <button className="rate-btn">Rate Product</button>
            </div>

            <div className="average-rating">
              <div className="rating-value">
                <span className="number">4</span>
                <div className="stars">★★★★☆</div>
              </div>
              <span className="total-reviews">Based on 181 reviews</span>
            </div>

            <div className="rating-stats">
              <div className="rating-bar">
                <span>5★</span>
                <div className="bar">
                  <div className="fill" style={{ width: "73%" }}></div>
                </div>
                <span>(73)</span>
              </div>
              <div className="rating-bar">
                <span>4★</span>
                <div className="bar">
                  <div className="fill" style={{ width: "38%" }}></div>
                </div>
                <span>(38)</span>
              </div>
              <div className="rating-bar">
                <span>3★</span>
                <div className="bar">
                  <div className="fill" style={{ width: "52%" }}></div>
                </div>
                <span>(52)</span>
              </div>
              <div className="rating-bar">
                <span>2★</span>
                <div className="bar">
                  <div className="fill" style={{ width: "13%" }}></div>
                </div>
                <span>(13)</span>
              </div>
              <div className="rating-bar">
                <span>1★</span>
                <div className="bar">
                  <div className="fill" style={{ width: "5%" }}></div>
                </div>
                <span>(05)</span>
              </div>
            </div>

            <div className="reviews-list">
              {visibleReviews.map((review) => (
                <div key={review.id} className="review-item">
                  <div className="review-header">
                    <div className="user-info">
                      <img
                        src={review.userImage}
                        alt={review.username}
                        className="user-avatar"
                      />
                      <div className="user-details">
                        <span className="username">{review.username}</span>
                        <span className="date">{review.date}</span>
                      </div>
                    </div>
                    <div className="review-rating">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </div>
                  </div>
                  <p className="review-comment">{review.comment}</p>
                </div>
              ))}
              {reviews.length > 2 && (
                <button
                  className="show-more"
                  onClick={() => setShowAllReviews(!showAllReviews)}
                >
                  {showAllReviews ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Top Picks Section */}
      <div className="top-picks-section">
        <div className="section-header">
          <h2>
            Top Picks <span>For You</span>
          </h2>
          <div className="view-controls">
            <span className="view-all">View all</span>
            <div className="navigation-buttons">
              <button className="nav-btn prev" onClick={() => scroll("left")}>
                <FiChevronLeft />
              </button>
              <button className="nav-btn next" onClick={() => scroll("right")}>
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
        <div className="products-slider" ref={sliderRef}>
          {topPicks.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* Add fixed buttons for mobile */}
      <div className="mobile-fixed-buttons">
        <div className="buy-buttons">
          <button className="add-cart">Add To Cart</button>
          <button className="buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
