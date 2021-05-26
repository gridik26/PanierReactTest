import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShoppingCartStore from './stores/ShoppingCartStore';

const shoppingCartStore = ShoppingCartStore();

const products = [
  {
  id: 1,
  name: 'mango',
  price: 10
  },
  {
    id: 2,
    name: 'apple',
    price: 5
  },
  {
    id: 3,
    name: 'orange',
    price: 3
  }
];

ReactDOM.render(
  <React.StrictMode>
    <App products={products}
    shoppingCartStore={shoppingCartStore}
    />,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
