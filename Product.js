import React from 'react';

export default function Product(props) {
  const { product, } = props;
  
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} /> 
      <h3>{product.name}</h3>
      <div>Default Price:</div>
      <div>RM {product.price}</div> 
    </div>
  );
}