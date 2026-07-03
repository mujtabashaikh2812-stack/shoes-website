import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div
      className="card group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Quick Actions Overlay */}
        <div className={`absolute inset-0 bg-black/20 flex items-center justify-center gap-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button className="bg-white p-2 rounded-full shadow-lg hover:bg-primary-50 transition-colors">
            <Eye className="w-5 h-5 text-secondary-600" />
          </button>
          <button 
            className={`p-2 rounded-full shadow-lg transition-colors ${
              isWishlisted 
                ? 'bg-primary-600 text-white' 
                : 'bg-white text-secondary-600 hover:bg-primary-50'
            }`}
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>
          <button className="bg-white p-2 rounded-full shadow-lg hover:bg-primary-50 transition-colors">
            <ShoppingCart className="w-5 h-5 text-secondary-600" />
          </button>
        </div>

        {/* Sale Badge */}
        {product.sale && (
          <div className="absolute top-4 left-4 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            {product.sale}
          </div>
        )}

        {/* New Badge */}
        {product.isNew && (
          <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            NEW
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category */}
        <div className="text-xs text-secondary-500 mb-2 uppercase tracking-wide">
          {product.category}
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-secondary-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center mr-2">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-secondary-500">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {product.originalPrice && (
              <span className="text-sm text-secondary-500 line-through">
                ${product.originalPrice}
              </span>
            )}
            <span className="text-lg font-bold text-secondary-900">
              ${product.price}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 