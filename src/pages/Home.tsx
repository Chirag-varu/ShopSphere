import { Hero } from "../Components/Hero";
import b from "../assets/baner-removebg.png";
import f1 from "../assets/img/features/f1.png";
import f2 from "../assets/img/features/f2.png";
import f3 from "../assets/img/features/f3.png";
import f4 from "../assets/img/features/f4.png";
import f5 from "../assets/img/features/f5.png";
import f6 from "../assets/img/features/f6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import p1 from "../assets/img/products/f1.jpg";
import p2 from "../assets/img/products/f2.jpg";
import p3 from "../assets/img/products/f3.jpg";
import p4 from "../assets/img/products/f4.jpg";
import p5 from "../assets/img/products/f5.jpg";
import p6 from "../assets/img/products/f6.jpg";
import p7 from "../assets/img/products/f7.jpg";
import p8 from "../assets/img/products/f8.jpg";
import b2 from "../assets/img/banner/b2.jpg";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import n1 from "../assets/img/products/n1.jpg";
import n2 from "../assets/img/products/n2.jpg";
import n3 from "../assets/img/products/n3.jpg";
import n4 from "../assets/img/products/n4.jpg";
import n5 from "../assets/img/products/n5.jpg";
import n6 from "../assets/img/products/n6.jpg";
import n7 from "../assets/img/products/n7.jpg";
import n8 from "../assets/img/products/n8.jpg";
import app from "../assets/img/pay/app.jpg";
import pay from "../assets/img/pay/pay.png";
import play from "../assets/img/pay/play.jpg";
import { useCart } from "../Components/CartContext";
import { ProductCard } from "../Components/Product";

export function Home() {
  const { addToCart } = useCart();

  const products = [
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
  ];

  const products2 = [
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

  return (
    <div className="h-screen w-full">
      <Hero />

      {/* Cards */}
      <section className="feature flex items-center justify-between flex-wrap w-full py-[40px] px-[80px]">
        <div className="fe-box w-[11.6rem] h-[12.9rem] text-center p-[25px_13px] shadow-[20px_20px_34px_rgba(0,0,0,0.03)] border border-[#cce7d0] rounded-md my-[15px] hover:shadow-[10px_10px_35px_rgba(70,62,221,0.9)]">
          <img src={f1} alt="Feature-1" />
          <p className="inline-block px-[8px] py-[9px_8px_6px_8px] leading-none rounded-md text-[#088178] bg-[#fddde4] mt-4">
            Free Shipping
          </p>
        </div>
        <div className="fe-box w-[11.6rem] h-[12.9rem] text-center p-[25px_13px] shadow-[20px_20px_34px_rgba(0,0,0,0.03)] border border-[#cce7d0] rounded-md my-[15px] hover:shadow-[10px_10px_35px_rgba(70,62,221,0.9)]">
          <img src={f2} alt="Feature-1" />
          <p className="inline-block px-[8px] py-[9px_8px_6px_8px] leading-none rounded-md text-[#088178] bg-[#cdebbc] mt-4">
            Online Order
          </p>
        </div>
        <div className="fe-box w-[11.6rem] h-[12.9rem] text-center p-[25px_13px] shadow-[20px_20px_34px_rgba(0,0,0,0.03)] border border-[#cce7d0] rounded-md my-[15px] hover:shadow-[10px_10px_35px_rgba(70,62,221,0.9)]">
          <img src={f3} alt="Feature-1" />
          <p className="inline-block px-[8px] py-[9px_8px_6px_8px] leading-none rounded-md text-[#088178] bg-[#d1e8f2] mt-4">
            Save Money
          </p>
        </div>
        <div className="fe-box w-[11.6rem] h-[12.9rem] text-center p-[25px_13px] shadow-[20px_20px_34px_rgba(0,0,0,0.03)] border border-[#cce7d0] rounded-md my-[15px] hover:shadow-[10px_10px_35px_rgba(70,62,221,0.9)]">
          <img src={f4} alt="Feature-1" />
          <p className="inline-block px-[8px] py-[9px_8px_6px_8px] leading-none rounded-md text-[#088178] bg-[#cdd4f8] mt-4">
            Promotions
          </p>
        </div>
        <div className="fe-box w-[11.6rem] h-[12.9rem] text-center p-[25px_13px] shadow-[20px_20px_34px_rgba(0,0,0,0.03)] border border-[#cce7d0] rounded-md my-[15px] hover:shadow-[10px_10px_35px_rgba(70,62,221,0.9)]">
          <img src={f5} alt="Feature-1" />
          <p className="inline-block px-[8px] py-[9px_8px_6px_8px] leading-none rounded-md text-[#088178] bg-[#f6dbf6] mt-4">
            Happy Sell
          </p>
        </div>
        <div className="fe-box w-[11.6rem] h-[12.9rem] text-center p-[25px_13px] shadow-[20px_20px_34px_rgba(0,0,0,0.03)] border border-[#cce7d0] rounded-md my-[15px] hover:shadow-[10px_10px_35px_rgba(70,62,221,0.9)]">
          <img src={f6} alt="Feature-1" />
          <p className="inline-block px-[8px] py-[9px_8px_6px_8px] leading-none rounded-md text-[#088178] bg-[#fff2e5] mt-4">
            24/7 Support
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <div className="flex flex-col items-center justify-center">
        <p className="md:text-5xl text-3xl font-bold mb-4">Featured Products</p>
        <p className="text-md text-[#465b52] mb-8">
          Summer Collection New Modern Design
        </p>
      </div>

      <div className="flex mb-4 flex-wrap">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      {/* Repair Services */}
      <div
        className="w-full h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${b2})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-4">
          <p className="text-white font-semibold text-2xl">Repair Services</p>
          <p className="text-white text-4xl font-bold">
            Up to <span className="text-[#ef3636]">70% Off</span> - All t-Shirts
            & Accessories
          </p>
          <button className="bg-slate-50 text-black hover:bg-slate-500 hover:text-cyan-600 mt-4 px-6 py-2 rounded-md ">
            Explore More
          </button>
        </div>
      </div>

      {/* New Arrivals */}
      <div className="flex flex-col items-center justify-center mt-12">
        <p className="md:text-5xl text-3xl font-bold mb-4">New Arrivals</p>
        <p className="text-md text-[#465b52] mb-8">
          Summer Collection New Modern Design
        </p>
      </div>

      <div className="flex mb-4 flex-wrap">
        {products2.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      {/* News letter */}
      <section
        id="newsletter"
        className="bg-cover bg-center py-8 px-6 mb-8 mt-8"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="text-center mb-6">
          <h4 className="text-2xl font-semibold mb-2 text-white">
            Sign Up For Newsletters
          </h4>
          <p className="text-gray-200">
            Get E-mail updates about our latest shop and{" "}
            <span className="text-red-500 font-bold">special offers.</span>
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <input
            type="text"
            placeholder="Your email address"
            className="border border-gray-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
            Sign Up
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-900 py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div>
            <img className=" w-[10rem] mb-4" src={b} alt="Logo" />
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <p className="mb-2">
              <strong>Address:</strong> XYZ..., India
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +91 xyz...
            </p>
            <p className="mb-4">
              <strong>Hours:</strong> 10:00 - 10:00, Mon-Sat
            </p>
            <div>
              <h4 className="text-lg font-bold mb-2">Follow Us</h4>
              <div className="flex space-x-4 text-2xl">
                <FaFacebookSquare className="text-blue-500 hover:text-blue-600 cursor-pointer" />
                <FaInstagram className="text-pink-500 hover:text-pink-600 cursor-pointer" />
                <FaTwitterSquare className="text-blue-400 hover:text-blue-500 cursor-pointer" />
                <FaPinterestP className="text-red-500 hover:text-red-600 cursor-pointer" />
                <FaYoutube className="text-red-600 hover:text-red-700 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-cyan-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* My Account Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">My Account</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Sign In
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  View Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  My Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Track My Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/* Install App Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">Install App</h4>
            <p className="mb-4">From App Store or Google Play</p>
            <div className="flex gap-4 mb-4">
              <img className="w-32 cursor-pointer" src={app} alt="App Store" />
              <img
                className="w-32 cursor-pointer"
                src={play}
                alt="Google Play"
              />
            </div>
            <p className="mb-2">Secured Payment Gateways</p>
            <img
              className="w-48 cursor-pointer"
              src={pay}
              alt="Payment Gateways"
            />
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-500">© 2023, Chirag Varu - E-commerce</p>
        </div>
      </footer>
    </div>
  );
}
