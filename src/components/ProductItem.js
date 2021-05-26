import '../styles/ProductItem.css'

function ProductItem({product, onAddClick}) {
    
    return (
        <div>
            <li className="product-list-item">
                <div>{product.name}</div>
                <button type="button" 
                onClick={() => onAddClick(product)}> Add</button>
            </li>
        </div>
        
        
    );
}

export default ProductItem;