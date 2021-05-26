import '../styles/ShoppingCart.css';
import ShoppingItem from './ShoppingItem';

function ShoppingCart({cart, onRemoveClick, onSuppressClick}){
    return(
        <div>
            <div>
                {cart.list.map(product =>
                <ShoppingItem
                    key={product.id}
                    product={product}
                    onRemoveClick={onRemoveClick}
                    onSuppressClick={onSuppressClick}
                />
                )}
            </div>
            <div className="shopping-cart-total">Total: {cart.total}€</div>
        </div>
    );
}

export default ShoppingCart;