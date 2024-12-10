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
import { Productdetail } from "./Components/Productdetail";
import p1 from "./assets/img/products/f1.jpg";
import p2 from "./assets/img/products/f2.jpg";
import p3 from "./assets/img/products/f3.jpg";
import p4 from "./assets/img/products/f4.jpg";
import p5 from "./assets/img/products/f5.jpg";
import p6 from "./assets/img/products/f6.jpg";
import p7 from "./assets/img/products/f7.jpg";
import p8 from "./assets/img/products/f8.jpg";
import n1 from "./assets/img/products/n1.jpg";
import n2 from "./assets/img/products/n2.jpg";
import n3 from "./assets/img/products/n3.jpg";
import n4 from "./assets/img/products/n4.jpg";
import n5 from "./assets/img/products/n5.jpg";
import n6 from "./assets/img/products/n6.jpg";
import n7 from "./assets/img/products/n7.jpg";
import n8 from "./assets/img/products/n8.jpg";

const allproducts = [
  {
    id: 1,
    name: "Cartoon Astronaut T-Shirts",
    brand: "adidas",
    price: 300,
    quantity: 1,
    image: p1,
  },
  {
    id: 2,
    name: "Space Graphic Tee",
    brand: "nike",
    price: 350,
    quantity: 1,
    image: p2,
  },
  {
    id: 3,
    name: "Retro Astronaut Hoodie",
    brand: "adidas",
    price: 500,
    quantity: 1,
    image: p3,
  },
  {
    id: 4,
    name: "Retro Astronaut Hoodie",
    brand: "adidas",
    price: 500,
    quantity: 1,
    image: p4,
  },
  {
    id: 5,
    name: "Retro Astronaut Hoodie",
    brand: "adidas",
    price: 500,
    quantity: 1,
    image: p5,
  },
  {
    id: 6,
    name: "Retro Astronaut Hoodie",
    brand: "adidas",
    price: 500,
    quantity: 1,
    image: p6,
  },
  {
    id: 7,
    name: "Retro Astronaut Hoodie",
    brand: "adidas",
    price: 500,
    quantity: 1,
    image: p7,
  },
  {
    id: 8,
    name: "Retro Astronaut Hoodie",
    brand: "adidas",
    price: 500,
    quantity: 1,
    image: p8,
  },
  {
    id: 9,
    name: "Retro Astronaut Hoodie",
    brand: "adidas",
    price: 500,
    quantity: 1,
    image: n1,
  },
  {
    id: 10,
    name: "Retro Astronaut Hoodie",
    brand: "adidas",
    price: 500,
    quantity: 1,
    image: n2,
  },
  {
    id: 11,
    name: "Retro Astronaut Hoodie",
    brand: "adidas",
    price: 500,
    quantity: 1,
    image: n3,
  },
  {
    id: 12,
    name: "Retro Astronaut Hoodie",
    brand: "adidas",
    price: 500,
    quantity: 1,
    image: n4,
  },
  {
    id: 13,
    name: "Retro Astronaut Hoodie",
    brand: "adidas",
    price: 500,
    quantity: 1,
    image: n5,
  },
  {
    id: 14,
    name: "Retro Astronaut Hoodie",
    brand: "adidas",
    price: 500,
    quantity: 1,
    image: n6,
  },
  {
    id: 15,
    name: "Retro Astronaut Hoodie",
    brand: "adidas",
    price: 500,
    quantity: 1,
    image: n7,
  },
  {
    id: 16,
    name: "Retro Astronaut Hoodie",
    brand: "adidas",
    price: 500,
    quantity: 1,
    image: n8,
  },
];

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
          <Route path="/productdetail/:id" element={<Productdetail products={allproducts}/>} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
