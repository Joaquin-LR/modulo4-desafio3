import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Cart({ cart, setCart }) {
  const increaseQuantity = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQuantity = (id) => {
    setCart(cart
      .map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
      .filter(item => item.quantity >= 0)
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const pizzasInCart = cart.filter(pizza => pizza.quantity > 0);

  return (
    <div className='carrito-container'>
      <h2>Tu Carrito de Compras</h2>
      {pizzasInCart.length > 0 ? (
        pizzasInCart.map((pizza) => (
          <div className='card-container-2' key={pizza.id}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Img variant="top" src={pizza.img} alt={`Imagen de Pizza ${pizza.name}`} className="cart-image" />
              <Card.Body>
                <Card.Title>Pizza {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</Card.Title>
                <p>Precio: {pizza.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
                <ListGroup>
                  <ListGroup.Item>
                    <div className='cantidad-control'>
                      <Button variant="outline-dark" onClick={() => decreaseQuantity(pizza.id)} disabled={pizza.quantity === 0}>–</Button>
                      <span className='quantity-display'>{pizza.quantity}</span>
                      <Button variant="outline-dark" onClick={() => increaseQuantity(pizza.id)}>+</Button>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>
        ))
      ) : (
        <p>No hay pizzas en tu carrito.</p>
      )}
      <h3>Total: {total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</h3>
      <Button variant="success">Pagar</Button>
    </div>
  );
}

export default Cart;