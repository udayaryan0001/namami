import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import About from './pages/About';

// DEPLOYMENT MODE: Set to true to show only About page, false for full website
const SHOW_ONLY_ABOUT = true;

function App() {
  // If SHOW_ONLY_ABOUT is true, render only the About page without navigation
  if (SHOW_ONLY_ABOUT) {
    return (
      <Router>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <About />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }

  // Full website mode
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <CartDrawer />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
