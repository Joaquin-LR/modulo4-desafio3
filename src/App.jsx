import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import RegisterPage from './components/RegisterPage';
import Cart from './components/Cart';
import pizzas from './assets/script/pizzas'; // Importa las pizzas aquí

function App() {
  const [currentView, setCurrentView] = useState('home'); // Estado para controlar la vista actual
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar si el usuario ha iniciado sesión
  
  // Mueve el estado del carrito aquí
  const [cart, setCart] = useState(
    pizzas.map(pizza => ({
      ...pizza,
      quantity: 0, // Se inicia en 0 para el carrito
    }))
  );

  // Calcula el total del carrito
  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + (pizza.price * pizza.quantity), 0);
  };

  return (
    <>
      <div className='container'>
        <div className='nav-container'>
          <Navbar 
            navtitle={'¡Pizzería Mamma Mia!'}
            home={'🍕 Home'}
            login={'🔐 Login'}
            register={'🔐 Register'}
            profile={'🔒 Profile'}
            logout={'🔒 Logout'}
            totalLabel={'🛒 Carrito: $'}
            total={calculateTotal()} // Total calculado al componente NavBar
            setCurrentView={setCurrentView}
            isLoggedIn={isLoggedIn}
          />
        </div>

        {currentView === 'home' && (
          <>
            <Header 
              headerTitle={'¡Pizzería Mamma Mia!'}
              headerSubtitle={'¡Tenemos las mejores pizzas que podrás encontrar!'}
            />
            <Home cart={cart} setCart={setCart} /> {/* Pasa el estado del carrito a Home */}
          </>
        )}

        {currentView === 'register' && (
          <div className='register-container'>
            <RegisterPage setCurrentView={setCurrentView} />
          </div>
        )}

        {currentView === 'login' && (
          <div className='login-container'>
            <LoginPage setCurrentView={setCurrentView} setIsLoggedIn={setIsLoggedIn} />
          </div>
        )}

        {currentView === 'cart' && (
          <div className='cart-container'>
            <Cart cart={cart} setCart={setCart} /> {/* Pasa el estado del carrito a Cart */}
          </div>
        )}

        <Footer footerContent={'©2021 - Pizzería Mamma Mia! - Todos los derechos reservados'} />
      </div>
    </>
  );
}

export default App;
