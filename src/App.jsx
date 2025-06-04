import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemListContainer from './components/itemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer bienvenida="¡Bienvenidos a Cursos Los Chefcitos Online!" />
    </>
  );
}

export default App;
