import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from './page/Home';
import { ProductList } from './page/ProductList';
import { ProducDetail } from './page/ProducDetail';
import { NotFound } from './page/NotFound';
import ErrorBoundary from './component/ErrorBoundary';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |<Link to="product-list">Product List</Link> |
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route
          path="/product-detail/:id"
          element={
            <ErrorBoundary>
              <ProducDetail />
            </ErrorBoundary>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
