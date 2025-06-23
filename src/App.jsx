import { BrowserRouter , Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import ItemListContainer from './components/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer'
import PageNotFound from './components/pageNotFound';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer bienvenida="¡Bienvenidos a Cursos Los Chefcitos Online!" />
          }
        />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
