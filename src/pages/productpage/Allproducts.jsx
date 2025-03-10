import React, { useState } from "react";
import {
  FiFilter,
  FiChevronDown,
  FiChevronUp,
  FiArrowLeft,
} from "react-icons/fi";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel";

const products = [
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
    originalPrice: 2699,
    rating: 4.0,
    discount: "20% off",
  },
  {
    id: 3,
    image: "/images/carousel/carousel-1.jpg",
    category: "Car Care",
    title: "AirCheck Pro Digital Gauge",
    currentPrice: 1999,
    originalPrice: 2495,
    rating: 4.0,
    discount: "20% off",
  },
  {
    id: 4,
    image: "/images/carousel/carousel-1.jpg",
    category: "Kitchen & Dining",
    title: "EdgeCraft Elite 7-Piece Knife Set",
    currentPrice: 1999,
    originalPrice: 2599,
    rating: 4.0,
    discount: "20% off",
  },
  {
    id: 5,
    image: "/images/carousel/carousel-1.jpg",
    category: "Home Care",
    title: "CleanSweep Ultra Upright Vacuum",
    currentPrice: 1999,
    originalPrice: 2499,
    rating: 4.0,
    discount: "20% off",
  },
  {
    id: 6,
    image: "/images/carousel/carousel-1.jpg",
    category: "Home Improvement",
    title: "SmoothCoat Pro Paint Roller",
    currentPrice: 1999,
    originalPrice: 2399,
    rating: 4.0,
    discount: "20% off",
  },
  {
    id: 7,
    image: "/images/carousel/carousel-1.jpg",
    category: "Gardening",
    title: "AquaFlow Retractable Hose Reel",
    currentPrice: 1999,
    originalPrice: 2499,
    rating: 4.0,
    discount: "20% off",
  },
  {
    id: 8,
    image: "/images/carousel/carousel-1.jpg",
    category: "Gardening",
    title: "GreenLift Heavy-Duty Garden Rake",
    currentPrice: 1999,
    originalPrice: 2599,
    rating: 4.0,
    discount: "20% off",
  },
];

const data = [
  {
    image: "/images/carousel/carousel-1.jpg",
    alt: "carousel-1",
    heading: `Strength in Every Tool. 
       in Every Task.`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "/images/carousel/carousel-1.jpg",
    alt: "carousel-2",
    heading: "The Best Tools for the Job",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "/images/carousel/carousel-1.jpg",
    alt: "carousel-3",
    heading: "The Best Tools for the Job",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const categories = [
  {
    name: "All",
    count: 1162,
    isActive: true,
  },
  {
    name: "Home Essentials",
    count: 445,
    subcategories: [
      { name: "Kitchen", count: 120 },
      { name: "Bathroom", count: 85 },
      { name: "Bedroom", count: 140 },
      { name: "Living Room", count: 100 },
    ],
  },
  {
    name: "Tools & auto",
    count: 190,
    subcategories: [
      { name: "Power Tools", count: 45 },
      { name: "Hand Tools", count: 65 },
      { name: "Auto Parts", count: 80 },
    ],
  },
  // ... other categories
];

function AllProducts() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
    categories: true,
    highlights: false,
    shopBy: false,
    priceRange: false,
  });
  const [expandedCategories, setExpandedCategories] = useState({});
  const [priceRange, setPriceRange] = useState({
    min: 1000,
    max: 12999,
  });

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    // Prevent body scroll when sidebar is open
    document.body.style.overflow = !isFilterOpen ? "hidden" : "auto";
  };

  const toggleSection = (section) => {
    console.log(section);
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleCategory = (categoryName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  // Format price with commas
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Handle slider change
  const handleRangeChange = (e, type) => {
    const value = parseInt(e.target.value);
    setPriceRange((prev) => {
      if (type === "min") {
        return {
          ...prev,
          min: value > prev.max ? prev.max : value,
        };
      } else {
        return {
          ...prev,
          max: value < prev.min ? prev.min : value,
        };
      }
    });
  };

  // Calculate slider track style
  const getTrackStyle = () => {
    const percent1 = ((priceRange.min - 1000) / (12999 - 1000)) * 100;
    const percent2 = ((priceRange.max - 1000) / (12999 - 1000)) * 100;
    return {
      background: `linear-gradient(to right, 
        #eee ${percent1}%, 
        #FF5C00 ${percent1}%, 
        #FF5C00 ${percent2}%, 
        #eee ${percent2}%)`,
    };
  };

  return (
    <div className="product-page">
      <Carousel data={data} maxHeight="25rem" />
      <div className="product-section">
        <div className="breadcrumb">
          <span>Home</span> / <span>All Products</span>
        </div>

        <div className="product-header">
          <div className="header-left">
            <h1>
              All Products <span>(500)</span>
            </h1>
          </div>
          <div className="header-right">
            <div className="sort-section">
              <span>Sort:</span>
              <select defaultValue="newest">
                <option value="newest">Newest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
            <button
              className={`filter-btn ${isFilterOpen ? "active" : ""}`}
              onClick={toggleFilter}
            >
              <FiFilter />
              Filter
            </button>
          </div>
        </div>

        <div className="product-content">
          {/* Filter Sidebar */}
          <div className={`filter-sidebar ${isFilterOpen ? "open" : ""}`}>
            <div className="filter-header">
              <button className="back-btn" onClick={toggleFilter}>
                <FiArrowLeft />
                Back
              </button>
            </div>

            <div className="filter-sections">
              <div className="filter-section">
                <div
                  className="section-header"
                  onClick={() => toggleSection("categories")}
                >
                  <h3>Categories</h3>
                  {openSections.categories ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </div>
                {openSections.categories && (
                  <ul className="categories-list">
                    {categories.map((category) => (
                      <li
                        key={category.name}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "start",
                        }}
                        onClick={() => {
                          toggleCategory(category.name);
                        }}
                      >
                        <div className="category-header">
                          <div className="category-name">
                            <span>{category.name}</span>
                            <span className="count">({category.count})</span>
                          </div>
                          {category.subcategories && (
                            <FiChevronDown
                              className={`subcategory-arrow ${
                                expandedCategories[category.name]
                                  ? "rotated"
                                  : ""
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleCategory(category.name);
                              }}
                            />
                          )}
                        </div>
                        <div>
                          {" "}
                          {category.subcategories &&
                            expandedCategories[category.name] && (
                              <ul className="subcategories-list">
                                {category.subcategories.map((sub) => (
                                  <li key={sub.name}>
                                    <span>{sub.name}</span>
                                    <span className="count">({sub.count})</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="filter-section">
                <div
                  className="section-header"
                  onClick={() => toggleSection("highlights")}
                >
                  <h3>Highlights</h3>
                  {openSections.highlights ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </div>
                {openSections.highlights && (
                  <ul>
                    <li>Special Deals</li>
                    <li>New arrivals</li>
                    <li>Trending</li>
                    <li>Best Sellers</li>
                  </ul>
                )}
              </div>

              <div className="filter-section">
                <div
                  className="section-header"
                  onClick={() => toggleSection("shopBy")}
                >
                  <h3>Shop By</h3>
                  {openSections.shopBy ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                {openSections.shopBy && (
                  <div className="price-range">
                    <div
                      className="section-header"
                      onClick={() => toggleSection("priceRange")}
                    >
                      <h4>Price Range</h4>
                      {openSections.priceRange ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </div>
                    {openSections.priceRange && (
                      <>
                        <div className="range-slider">
                          <div
                            className="slider-track"
                            style={getTrackStyle()}
                          ></div>
                          <input
                            type="range"
                            min="1000"
                            max="12999"
                            value={priceRange.min}
                            className="slider-thumb left"
                            onChange={(e) => handleRangeChange(e, "min")}
                          />
                          <input
                            type="range"
                            min="1000"
                            max="12999"
                            value={priceRange.max}
                            className="slider-thumb right"
                            onChange={(e) => handleRangeChange(e, "max")}
                          />
                        </div>
                        <div className="price-inputs">
                          <div className="price-input">
                            <span>₹</span>
                            <input
                              type="text"
                              value={formatPrice(priceRange.min)}
                              readOnly
                            />
                          </div>
                          <div className="price-input">
                            <span>₹</span>
                            <input
                              type="text"
                              value={formatPrice(priceRange.max)}
                              readOnly
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Overlay */}
          <div
            className={`filter-overlay ${isFilterOpen ? "open" : ""}`}
            onClick={toggleFilter}
          ></div>

          {/* Product Grid */}
          <div className="product-grid">
            {products.map((product) => (
              <Card key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
