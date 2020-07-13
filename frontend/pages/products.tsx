import React from 'react';
import axios from 'axios';

const Product = ({ product }: { product: any}) => (

  <>
    <div>
      <h1>
        List All Products
      </h1>
          <ul>
            {product.map((products: { id: React.Key; name: React.ReactNode; price: React.ReactNode; }) => (
              <li key={products.id}>
                {products.name} - € {products.price}
              </li>
            ))}
          </ul>
    </div>

    <div>
      <h4>Add new product</h4>
      <input placeholder="product name"/> <br />
      <input placeholder="product price"/> <br />
      <button>Add</button>
    </div>
  </>
);

Product.getInitialProps = async () => {
  const response = await axios.get(
    "http://localhost:3333/products"
  );
  return { product: response.data }
}

export default Product;