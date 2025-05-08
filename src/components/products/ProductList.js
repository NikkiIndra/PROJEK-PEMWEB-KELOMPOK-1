import Masonry from "react-masonry-css";

const ProductList = ({ products, onAddToCart }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.img} alt={product.name} className="w-100" />
          <div className="p-3">
            <h5>{product.name}</h5>
            <p>{product.desc}</p>
            <p className="fw-bold">Rp {product.price.toLocaleString()}</p>
            <button
              onClick={() => onAddToCart(product)}
              className="btn btn-primary w-100"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </Masonry>
  );
};
export default ProductList;
