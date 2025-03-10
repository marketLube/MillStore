import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Card from "../../../components/Card";

const trendingProducts = [
  {
    id: 1,
    image: "/images/carousel/carousel-1.jpg",
    category: "Stationary",
    title: "RainbowScript Vibrant Pen Set",
    currentPrice: 1999,
    originalPrice: 2500,
    rating: 4.0,
    discount: "20% off",
  },
  {
    id: 2,
    image: "/images/carousel/carousel-1.jpg",
    category: "Power & Hand Tools",
    title: "DrillMaster 1000 Electric Drill",
    currentPrice: 1999,
    originalPrice: 2500,
    rating: 4.0,
    discount: "20% off",
  },
  {
    id: 3,
    image: "/images/carousel/carousel-1.jpg",
    category: "Car Care",
    title: "AirCheck Pro Digital Gauge",
    currentPrice: 1999,
    originalPrice: 2500,
    rating: 4.0,
    discount: "25% off",
  },
  {
    id: 3,
    image: "/images/carousel/carousel-1.jpg",
    category: "Car Care",
    title: "AirCheck Pro Digital Gauge",
    currentPrice: 1999,
    originalPrice: 2500,
    rating: 4.0,
    discount: "25% off",
  },
  {
    id: 3,
    image: "/images/carousel/carousel-1.jpg",
    category: "Car Care",
    title: "AirCheck Pro Digital Gauge",
    currentPrice: 1999,
    originalPrice: 2500,
    rating: 4.0,
    discount: "25% off",
  },
  {
    id: 3,
    image: "/images/carousel/carousel-1.jpg",
    category: "Car Care",
    title: "AirCheck Pro Digital Gauge",
    currentPrice: 1999,
    originalPrice: 2500,
    rating: 4.0,
    discount: "25% off",
  },
  {
    id: 3,
    image: "/images/carousel/carousel-1.jpg",
    category: "Car Care",
    title: "AirCheck Pro Digital Gauge",
    currentPrice: 1999,
    originalPrice: 2500,
    rating: 4.0,
    discount: "25% off",
  },
  {
    id: 3,
    image: "/images/carousel/carousel-1.jpg",
    category: "Car Care",
    title: "AirCheck Pro Digital Gauge",
    currentPrice: 1999,
    originalPrice: 2500,
    rating: 4.0,
    discount: "25% off",
  },
  // Add remaining 5 products...
];

function Trending() {
  return (
    <section className="trending-container">
      <div className="trending-header">
        <h2>
          Trending <span>This Week</span>
        </h2>
      </div>

      <div className="trending-grid">
        {trendingProducts.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      <div className="trending-footer">
        <p>Don't miss out! Explore all trending styles</p>
        <a href="/trending">Shop all →</a>
      </div>
    </section>
  );
}

export default Trending;
