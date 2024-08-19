import React from 'react';
import CardPizza from './CardPizza';
import pizzas from '../assets/script/pizzas';

const Home = ({ cart, setCart }) => {
  // Función para actualizar la cantidad de pizzas en el carrito
  const updateCart = (id, quantity) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
  };

  return (
    <div className='card-container'>
      {pizzas.map((pizza) => (
        <CardPizza 
          key={pizza.id}
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          imagen={pizza.img}
          quantity={cart.find(item => item.id === pizza.id).quantity}
          updateCart={(quantity) => updateCart(pizza.id, quantity)}
        />
      ))}
    </div>
  );
};

export default Home;