import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Shop } from "./pages/Shop";
import { Contact } from "./pages/Contact";
import { Blog } from "./pages/Blog";
import { CartProvider } from "./Components/CartContext";
import { Cart } from "./pages/Cart";
import { ScrollToTop } from './Components/ScrollToTop';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
