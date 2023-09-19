import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import Addresses from './pages/addresses';
import Carts from './pages/carts';
import Customers from './pages/customers';
import Orders from './pages/orders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/addresses" element={<Addresses />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
