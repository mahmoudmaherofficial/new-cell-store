import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Website/HomePage/HomePage';
import Website from './Pages/Website/Website';
import SingleProduct from './Pages/Website/SingleProduct/SingleProduct';
import Products from './Pages/Website/HomePage/Products';
import About from './Pages/Website/HomePage/About';
import Services from './Pages/Website/HomePage/Services';
import Contact from './Pages/Website/HomePage/Contact';

function App() {
  return (
    <div id="App">
      <Routes>
        <Route element={<Website />}>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/services'} element={<Services />} />
          <Route path={'/products'} element={<Products />} />
          <Route path={'/products/:id'} element={<SingleProduct />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/contact'} element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
