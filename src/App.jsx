// filepath: c:\Users\user\Documents\大學\113-2\跨平台前端工程設計\Project\wk4_hw\wk4_hw\src\App.jsx
import { Routes, Route } from "react-router";
import Home from "./page/Home";
import Book from "./page/Book";
import CartSummary from './components/CartSummary';

function App() {
  return (
    <>
    <CartSummary />  
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/book/:id" element={<Book />} />
      
    </Routes>
    </>
  );
}

export default App;