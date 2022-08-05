import './scss/app.scss';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { useState } from 'react';

function App() {
  const [searchValues, setSearchValues] = useState('');

  return (
    <div className="wrapper">
      <Header searchValues={searchValues} setSearchValues={setSearchValues} />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home searchValues={searchValues} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
