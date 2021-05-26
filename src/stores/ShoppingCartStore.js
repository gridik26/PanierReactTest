import MicroEmitter from 'micro-emitter';

function ShoppingCartStore(){

    const eventEmitter = new MicroEmitter();
    const CHANGE_EVENT = "change";

    let shoppingMap = {};

    // const [shoppingMap, setShoppingMap] = useState({});

//   function addToCart(product){
//     setShoppingMap(map => addProductToMap(product, map));
//   }

  function addProductToMap(product, map){
    const newMap = {...map};
    const quantity = getProductQuantity(product, map)+1;
    newMap[product.id] = {...product, quantity};
    return Object.freeze(newMap);
  }

  function getProductQuantity(product){
    const existingProduct = shoppingMap[product.id];
    return (existingProduct) ? existingProduct.quantity : 0;
  }

//   function removeFromCart(product){
//     setShoppingMap (map => removeProductFromMap(product, map));
//   }

  function removeProductFromMap(product, map){
    const newMap = {...map};
    
    if(getProductQuantity(product, map) > 1){
      const quantity = getProductQuantity(product, map)-1;
      newMap[product.id] = {...product, quantity};
    } else {
      delete newMap[product.id];
    }
    
    return Object.freeze(newMap);
  }

  function suppressFromMap(product, map){
    const newMap = {...map};
    console.log('dans la méthode du shoppingcart');
    console.log('id produit = '+product.id);
    delete newMap[product.id];

    return Object.freeze(newMap);
  }

  function toCartView(map) {
    const list = Object.values(map);
    return Object.freeze({
      list,
      total: list.reduce(addPrice, 0)
    });
  } 

  function addPrice(totalPrice, line) {
    return totalPrice + line.price * line.quantity;
  }

    function addToCart(product){
        shoppingMap = addProductToMap(product, shoppingMap);
        
        eventEmitter.emit(CHANGE_EVENT);
    }

    function removeFromCart(product) {
        shoppingMap = removeProductFromMap(product, shoppingMap);
        eventEmitter.emit(CHANGE_EVENT);
    }

    function suppressFromCart(product){
      shoppingMap = suppressFromMap(product, shoppingMap);
      eventEmitter.emit(CHANGE_EVENT);
    }

    function onChange(handler){
        eventEmitter.on(CHANGE_EVENT, handler);
    }

    function offChange(){
        eventEmitter.off(CHANGE_EVENT);
    }

    function get(){
        return toCartView(shoppingMap);
    }

    return Object.freeze({
        addToCart,
        removeFromCart,
        suppressFromCart,
        get,
        onChange,
        offChange, 
        
    });
    
}

export default ShoppingCartStore;