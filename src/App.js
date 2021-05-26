import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart'; 

import{ useState, useEffect} from 'react';

function App({products, shoppingCartStore}) {

  const [cart, setCart] = useState ({list: []});

  useEffect (subscribeToStore, []);

  function subscribeToStore() {
    shoppingCartStore.onChange(reload);

    return function cleanUp() {
      shoppingCartStore.offChange();
    }
  }

  function reload() {
    const cart = shoppingCartStore.get();
    setCart(cart);
  }

  return (
    <div>
      <Header />
      <div className="content">
        <ProductList products={products} 
        onAddClick={shoppingCartStore.addToCart}/>
        <ShoppingCart 
         cart= {cart}
         onRemoveClick={shoppingCartStore.removeFromCart}
         onSuppressClick={shoppingCartStore.suppressFromCart}
        />
       
      </div>
    </div>
  );
}

export default App;
