import { useParams, Link } from "react-router-dom";
import { products } from "../products";

function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className='container mx-auto p-4 text-center'>
        <h2 className='text-2xl font-bold'>Product not found</h2>
        <Link
          to='/products'
          className='text-blue-500 hover:underline mt-4 inline-block'
        >
          &larr; Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className='container mx-auto p-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <img
              src={product.imageUrl}
              className='w-full h-96 object-cover mb-4 rounded bg-gray-700'
            />
          </div>
          <div>
            <h2 className='text-3xl font-bold mb-2'>{product.name}</h2>
            <p className='text-2xl text-gray-800 mb-4'>PHP {product.price}</p>
            <p className='text-md text-gray-600 mb-6'>{product.description}</p>
            <Link to='/products' className='text-blue-500 hover:underline'>
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
