import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';

function App() {
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
