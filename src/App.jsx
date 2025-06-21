import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductListPage />} />
          <Route path='/products/:id' element={<ProductDetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
