import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className='border p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow'>
      <img
        src={product.imageUrl}
        className='w-full h-48 object-cover mb-4 rounded bg-gray-700'
      />
      <h3 className='text-xl font-semibold'>{product.name}</h3>
      <p className='text-lg text-gray-700 mb-4'>PHP {product.price}</p>
      <Link
        to={`/products/${product.id}`}
        className='inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
