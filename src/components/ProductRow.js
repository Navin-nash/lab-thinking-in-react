function ProductRow({ product }) {
    return (
      <tr style={{ color: product.inStock ? 'black' : 'red' }}>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.inStock ? 'In Stock' : 'Out of Stock'}</td>
      </tr>
    );
  }
  
  export default ProductRow;
  