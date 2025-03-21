import React, { useRef } from "react";
import ProductCard from "../../../components/Card";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowRight as ViewAllIcon,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function Clearance() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const isMobile = window.innerWidth <= 768;

      // Calculate card width including gap
      const cardWidth = isMobile
        ? container.offsetWidth
        : (container.offsetWidth - 2 * 24) / 3; // 3 cards with 1.5rem (24px) gap

      // Calculate scroll position
      const currentScroll = container.scrollLeft;
      const targetScroll =
        direction === "left"
          ? currentScroll - cardWidth - 24 // subtract gap
          : currentScroll + cardWidth + 24; // add gap

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  const products = [
    {
      image: "/images/carousel/carousel-1.jpg",
      category: "Power & Hand Tools",
      title: "PowerPro X1 Cordless Drill",
      currentPrice: "1,999",
      originalPrice: "2,999",
      rating: 4,
    },
    {
      image: "/images/carousel/carousel-1.jpg",
      category: "Home Improvement",
      title: "SmoothCoat Pro Paint Roller",
      currentPrice: "1,999",
      originalPrice: "2,999",
      rating: 4,
    },
    {
      image: "/images/carousel/carousel-1.jpg",
      category: "Stationery",
      title: "RainbowScript Vibrant Pen Set",
      currentPrice: "1,999",
      originalPrice: "2,999",
      rating: 4,
    },
    {
      image: "/images/carousel/carousel-1.jpg",
      category: "Stationery",
      title: "RainbowScript Vibrant Pen Set",
      currentPrice: "1,999",
      originalPrice: "2,999",
      rating: 4,
    },
    {
      image: "/images/carousel/carousel-1.jpg",
      category: "Stationery",
      title: "RainbowScript Vibrant Pen Set",
      currentPrice: "1,999",
      originalPrice: "2,999",
      rating: 4,
    },
    {
      image: "/images/carousel/carousel-1.jpg",
      category: "Stationery",
      title: "RainbowScript Vibrant Pen Set",
      currentPrice: "1,999",
      originalPrice: "2,999",
      rating: 4,
    },
    {
      image: "/images/carousel/carousel-1.jpg",
      category: "Stationery",
      title: "RainbowScript Vibrant Pen Set",
      currentPrice: "1,999",
      originalPrice: "2,999",
      rating: 4,
    },
    // Add more products for scrolling effect
  ];

  return (
    <div className="clearance-container">
      <div className="clearance-header">
        <div className="clearance-content">
          <h2 className="clearance-content_h2">
            Clearance <span className="clearance-content_span">sale</span>
          </h2>
          <p className="clearance-content_p">
            Get amazing deals on our top-rated products
          </p>
        </div>
        <Link to="/product" className="view-all desktop-view-all">
          View All <ViewAllIcon />
        </Link>
      </div>
      <div className="clearance-products-wrapper">
        <button
          className="scroll-button scroll-left"
          onClick={() => scroll("left")}
        >
          <FiArrowLeft />
        </button>
        <div className="clearance-products" ref={scrollContainerRef}>
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <button
          className="scroll-button scroll-right"
          onClick={() => scroll("right")}
        >
          <FiArrowRight />
        </button>
      </div>
      <Link to="/product" className="view-all mobile-view-all">
        View All <ViewAllIcon />
      </Link>
    </div>
  );
}

export default Clearance;
