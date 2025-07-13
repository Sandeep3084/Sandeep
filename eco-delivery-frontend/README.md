# EcoShop - Sustainable E-commerce Frontend

A modern React-based e-commerce frontend that promotes eco-friendly delivery options and rewards users for making sustainable choices.

## 🌱 Features

### Customer-Facing Features
- **Amazon-like Product Selection**: Browse and search through eco-friendly products
- **Smart Cart Management**: Add, remove, and update quantities with real-time totals
- **Address Input**: Enter delivery address during checkout
- **Route Comparison**: Choose from multiple delivery options:
  - 🌿 **Eco-Friendly Route**: Minimal carbon footprint, earns 50 points
  - ⚖️ **Balanced Route**: Good balance of speed and sustainability, earns 25 points
  - 🚚 **Express Delivery**: Fastest option, no points earned

### Eco Points System
- **Earn Points**: Choose eco-friendly routes to earn points
- **Track Progress**: View your eco points balance and earning history
- **Redeem Rewards**: Exchange points for discounts, free shipping, and cashback

### Profile & Rewards
- **User Dashboard**: View personal information and eco statistics
- **Rewards Catalog**: Browse available rewards and redemption options
- **Environmental Impact**: See your carbon footprint savings

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd eco-delivery-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Context API** for state management

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   └── ProductCard.tsx # Product display card
├── context/            # React context for state management
│   └── AppContext.tsx  # Main application state
├── data/               # Mock data and constants
│   └── mockData.ts     # Sample products, routes, and rewards
├── pages/              # Page components
│   ├── Products.tsx    # Product listing page
│   ├── Cart.tsx        # Shopping cart page
│   ├── Checkout.tsx    # Checkout with route selection
│   ├── Profile.tsx     # User profile and rewards
│   └── OrderConfirmation.tsx # Order success page
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
└── App.tsx             # Main application component
```

## 🎨 Design System

### Colors
- **Primary Green**: `#22c55e` - Used for eco-friendly elements
- **Eco Blue**: `#0ea5e9` - Used for eco points and sustainability features
- **Neutral Grays**: Various shades for text and backgrounds

### Components
- **Cards**: Consistent card styling with shadows and borders
- **Buttons**: Primary and secondary button variants
- **Badges**: Eco-friendly product indicators
- **Forms**: Clean, accessible form inputs

## 🔄 State Management

The application uses React Context API for state management:

- **Cart State**: Products, quantities, and totals
- **User State**: Profile information and eco points
- **Route Selection**: Chosen delivery option
- **Address**: Delivery address

## 🌍 Environmental Impact

The application encourages sustainable choices by:

1. **Highlighting Eco-Friendly Products**: Special badges and descriptions
2. **Route Comparison**: Clear carbon footprint information
3. **Points System**: Rewards for sustainable choices
4. **Educational Content**: Information about environmental impact

## 🔮 Future Enhancements

- **Real-time Tracking**: Live delivery updates
- **Carbon Calculator**: Detailed environmental impact metrics
- **Social Features**: Share eco achievements
- **Partner Integration**: Connect with eco-friendly delivery partners
- **Analytics Dashboard**: Detailed sustainability metrics

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🧪 Testing

To run tests:
```bash
npm test
```

## 📦 Building for Production

To create a production build:
```bash
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is developed as part of the Walmart Sparkathon competition. All rights reserved.

## Walmart Sparkathon Alignment

### Innovation Criteria Met

✅ AI-Powered Optimization: Advanced algorithms for route and emission optimization
✅ Sustainability Focus: Comprehensive carbon footprint reduction with green carrier matching
✅ Customer Engagement: Gamified eco-friendly choices with points system
✅ Community Integration: Local pickup hubs and bulk delivery coordination
✅ Real-World Impact: Practical implementation for retail logistics
✅ Scalable Architecture: Modular design for enterprise deployment
✅ LLM Integration Ready: Route explanation API for AI-enhanced insights

### Business Value

    Cost Reduction: Optimized routes reduce fuel consumption and delivery costs
    Customer Satisfaction: Faster, more sustainable delivery options with clear explanations
    Brand Enhancement: Demonstrates commitment to environmental responsibility
    Operational Efficiency: Streamlined logistics with better resource utilization
    Data-Driven Insights: Comprehensive analytics for continuous improvement

