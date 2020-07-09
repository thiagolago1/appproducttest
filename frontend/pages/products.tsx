import React from 'react';
import axios from 'axios';

const Product = ({ product }: { product: any}) => (
  <div>
    <h1>
      List All Products
    </h1>
        <ul>
          {product.map(products => (
            <li key={products.id}>
              {products.name}
            </li>
          ))}
        </ul>

  </div>
);

Product.getInitialProps = async () => {
  const response = await axios.get(
    "http://localhost:3333/products"
  );
  console.log(response.data);
  return { product: response.data }
}

export default Product;