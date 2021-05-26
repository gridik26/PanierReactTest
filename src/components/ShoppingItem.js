import '../styles/ShoppingItem.css'

function ShoppingItem({product, onRemoveClick, onSuppressClick}){

    return(
        <div className="shopping-cart-item">
            <button type="button" className="shopping-button-suppress" onClick={() => onSuppressClick(product)}>X</button>
            <div className="shopping-cart-item div">{product.name}</div>
            <div className="shopping-cart-item div">{product.quantity}*{product.price}€ = {product.quantity*product.price}€</div>
            <div className="shopping-cart-item div">
                <button type="button"
                onClick={() => onRemoveClick(product)}
                > Remove </button>
            </div>
            
        </div>
    );

}
export default ShoppingItem;