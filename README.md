# Montavé - Premium Footwear E-commerce Website

A modern, responsive e-commerce website for shoes built with React.js and Tailwind CSS. Features a clean, mobile-first design with interactive components and smooth animations.

## 🚀 Features

### Design & UX
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Modern UI**: Clean, minimalist design with premium aesthetics
- **Interactive Elements**: Hover effects, transitions, and smooth animations
- **Accessibility**: Proper semantic HTML and keyboard navigation

### Components
- **Navigation Bar**: Logo, search bar, cart icon, user dropdown, mobile menu
- **Hero Section**: Promotional banners with call-to-action buttons
- **Category Showcase**: Featured categories (Men, Women, Sports, Kids)
- **Product Grid**: Responsive product cards with filtering and view modes
- **Footer**: Comprehensive footer with links, social media, and newsletter signup

### Product Features
- **Product Cards**: Image, name, price, rating, and quick action buttons
- **Category Filtering**: Filter products by category
- **View Modes**: Grid and list view options
- **Wishlist**: Add/remove products from wishlist
- **Quick Actions**: View, wishlist, and add to cart functionality

## 🛠️ Tech Stack

- **React.js**: Frontend framework
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **Responsive Design**: Mobile-first approach
- **Modern JavaScript**: ES6+ features

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shoes-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation bar with search and user menu
│   ├── Hero.js            # Hero section with promotional content
│   ├── ProductCard.js     # Individual product card component
│   ├── ProductGrid.js     # Product grid with filtering
│   └── Footer.js          # Footer with links and newsletter
├── App.js                 # Main application component
├── index.js              # React entry point
└── index.css             # Tailwind CSS and custom styles
```

## 🎨 Design System

### Colors
- **Primary**: Red tones (#ef4444) for CTAs and highlights
- **Secondary**: Gray tones for text and backgrounds
- **Accent**: Yellow for ratings and special elements

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Buttons**: Primary and secondary button styles
- **Cards**: Product cards with hover effects
- **Inputs**: Styled form inputs with focus states

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App

## 📸 Screenshots

The website includes:
- Hero section with promotional content
- Category showcase with hover effects
- Product grid with filtering options
- Responsive navigation with mobile menu
- Comprehensive footer with social links

## 🔧 Customization

### Adding New Products
Edit the `products` array in `ProductGrid.js` to add new products:

```javascript
{
  id: 9,
  name: "New Product Name",
  category: "Category",
  price: 99.99,
  rating: 4.5,
  reviewCount: 100,
  image: "product-image-url",
  sale: "Optional sale badge",
  isNew: true // Optional new badge
}
```

### Styling
- Modify `tailwind.config.js` for theme customization
- Edit `src/index.css` for custom component styles
- Update color schemes in the config file

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: info@montave.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ using React.js and Tailwind CSS 