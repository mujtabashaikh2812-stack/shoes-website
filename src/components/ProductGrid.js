import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Grid, List } from 'lucide-react';

const ProductGrid = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Dummy product data
  const products = [
    {
      id: 1,
      name: "Nike Air Max 270",
      category: "Sports",
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.5,
      reviewCount: 128,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      sale: "20% OFF",
      isNew: false
    },
    {
      id: 2,
      name: "Adidas Ultraboost 22",
      category: "Sports",
      price: 189.99,
      rating: 4.8,
      reviewCount: 256,
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isNew: true
    },
    {
      id: 3,
      name: "Converse Chuck Taylor",
      category: "Casual",
      price: 59.99,
      rating: 4.3,
      reviewCount: 89,
      image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      name: "Vans Old Skool",
      category: "Casual",
      price: 64.99,
      originalPrice: 79.99,
      rating: 4.6,
      reviewCount: 156,
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      sale: "15% OFF"
    },
    {
      id: 5,
      name: "New Balance 990v5",
      category: "Lifestyle",
      price: 184.99,
      rating: 4.7,
      reviewCount: 203,
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      name: "Puma RS-X",
      category: "Lifestyle",
      price: 109.99,
      originalPrice: 139.99,
      rating: 4.4,
      reviewCount: 97,
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      sale: "25% OFF"
    },
    {
      id: 7,
      name: "Reebok Classic",
      category: "Casual",
      price: 74.99,
      rating: 4.2,
      reviewCount: 134,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 8,
      name: "ASICS Gel-Kayano 28",
      category: "Sports",
      price: 159.99,
      rating: 4.9,
      reviewCount: 312,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isNew: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'sports', name: 'Sports' },
    { id: 'casual', name: 'Casual' },
    { id: 'lifestyle', name: 'Lifestyle' },
    { id: 'formal', name: 'Formal' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => 
        product.category.toLowerCase() === selectedCategory
      );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-secondary-900 mb-4">
          Featured Products
        </h2>
        <p className="text-secondary-600 max-w-2xl mx-auto">
          Discover our latest collection of premium footwear for every style and occasion
        </p>
      </div>

      {/* Filters and View Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* View Mode Controls */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-secondary-600 mr-2">View:</span>
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'grid'
                ? 'bg-primary-600 text-white'
                : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'list'
                ? 'bg-primary-600 text-white'
                : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
          : 'grid-cols-1'
      }`}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="btn-secondary">
          Load More Products
        </button>
      </div>
    </div>
  );
};

export default ProductGrid; 