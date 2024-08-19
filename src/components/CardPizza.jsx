import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function CardPizza({ name, price, ingredients, imagen, quantity, updateCart }) {
  const formattedPrice = price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });

  return (
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title><h4>Pizza {name}</h4></Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <div className='ingredientes'>
          <ListGroup.Item>
            <p className='ingredientes-titulo'>Ingredientes:</p>
            <ul className='ingredientes-texto'>
              {ingredients.map((ingredient, index) => (
                <li key={index}>🍕 {ingredient}</li>
              ))}
            </ul>
          </ListGroup.Item>
        </div>
        <div className='precio'>
          <ListGroup.Item>
            <p>Precio: {formattedPrice}</p>
            <div className='cantidad-control'>
              <Button variant="outline-dark" onClick={() => updateCart(quantity - 1)} disabled={quantity === 0}>–</Button>
              <span className='quantity-display'>{quantity}</span>
              <Button variant="outline-dark" onClick={() => updateCart(quantity + 1)}>+</Button>
            </div>
          </ListGroup.Item>
        </div>
      </ListGroup>
    </Card>
  );
}

export default CardPizza;