import ProductItem from './ProductItem';

function ProductList({products, onAddClick}){
    return (
        <div>
            <ul  className="list-group">
                {products.map( product =>
                <ProductItem
                key={product.id}
                product={product}
                onAddClick={onAddClick}
                />
                )}
            </ul>
        </div>
    );
}

export default ProductList