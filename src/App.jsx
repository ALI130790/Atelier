import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemCount from "./componentes/ItemCount/ItemCount";

function App() {

  
  return (
    <BrowserRouter>
      <NavBar />
      <ItemCount/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/categorias/:categoria" element={<ItemListContainer/>} />
        <Route path="/detalle/:id" element={<ItemDetailContainer/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;