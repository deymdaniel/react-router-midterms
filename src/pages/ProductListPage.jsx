import { useState } from "react";
import { products as initialProducts } from "../products";
import ProductCard from "../components/ProductCard";

function ProductListPage() {
  const [products] = useState(initialProducts);

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-2xl font-bold mb-4'>Products</h2>
      <div className='grid grid-cols-3 gap-6'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
