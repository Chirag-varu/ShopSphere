import b from "../assets/baner-removebg.png";
import n1 from "../assets/img/products/n1.jpg";
import n2 from "../assets/img/products/n2.jpg";
import n3 from "../assets/img/products/n3.jpg";
import n4 from "../assets/img/products/n4.jpg";
import n5 from "../assets/img/products/n5.jpg";
import n6 from "../assets/img/products/n6.jpg";
import n7 from "../assets/img/products/n7.jpg";
import n8 from "../assets/img/products/n8.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoArrowRight } from "react-icons/go";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import p1 from "../assets/img/products/f1.jpg";
import p2 from "../assets/img/products/f2.jpg";
import p3 from "../assets/img/products/f3.jpg";
import p4 from "../assets/img/products/f4.jpg";
import p5 from "../assets/img/products/f5.jpg";
import p6 from "../assets/img/products/f6.jpg";
import p7 from "../assets/img/products/f7.jpg";
import p8 from "../assets/img/products/f8.jpg";
import b1 from "../assets/img/banner/b1.jpg";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import app from "../assets/img/pay/app.jpg";
import pay from "../assets/img/pay/pay.png";
import play from "../assets/img/pay/play.jpg";

export function Shop() {
  return (
    <div className="h-screen w-full">
      {/* Banner Section */}
      <div
        className="flex flex-col items-center justify-center w-full h-[21rem] bg-cover bg-top"
        style={{ backgroundImage: `url(${b1})` }}
      >
        <p className="text-white font-bold text-4xl mb-4">#stayhome</p>
        <p className="text-white text-lg">
          Save more with coupons & up to 70% off!
        </p>
      </div>

      {/* Main */}
      <div className="flex mb-4 flex-wrap mt-[4rem]">
        <div className="max-w-sm mx-auto bg-white rounded-[2rem] shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-4 mb-4 border border-gray-300 ">
          <div className="relative">
            {/* Image Section */}
            <img
              src={p1}
              alt="Cartoon Astronaut T-Shirts"
              className="w-full object-cover rounded-2xl"
            />
          </div>
          {/* Content Section */}
          <div className="p-4">
            {/* Title */}
            {/* Brand */}
            <p className="text-sm text-gray-500">adidas</p>
            {/* Title */}
            <p className="font-semibold text-xl text-gray-800">
              Cartoon Astronaut T-Shirts
            </p>
            {/* Rating */}
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09L5.82 12.03 1.46 7.91l6.162-.894L10 2l2.378 5.016 6.162.894-4.36 4.12 1.697 6.06z" />
                </svg>
              ))}
            </div>
            {/* Price */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-blue-600 font-bold text-lg">Rs. 300</span>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white rounded-[2rem] shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-4 mb-4 border border-gray-300">
          <div className="relative">
            {/* Image Section */}
            <img
              src={p2}
              alt="Cartoon Astronaut T-Shirts"
              className="w-full object-cover rounded-2xl"
            />
          </div>
          {/* Content Section */}
          <div className="p-4">
            {/* Title */}
            {/* Brand */}
            <p className="text-sm text-gray-500">adidas</p>
            {/* Title */}
            <p className="font-semibold text-xl text-gray-800">
              Cartoon Astronaut T-Shirts
            </p>
            {/* Rating */}
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09L5.82 12.03 1.46 7.91l6.162-.894L10 2l2.378 5.016 6.162.894-4.36 4.12 1.697 6.06z" />
                </svg>
              ))}
            </div>
            {/* Price */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-blue-600 font-bold text-lg">Rs. 300</span>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white rounded-[2rem] shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-4 mb-4 border border-gray-300">
          <div className="relative">
            {/* Image Section */}
            <img
              src={p3}
              alt="Cartoon Astronaut T-Shirts"
              className="w-full object-cover rounded-2xl"
            />
          </div>
          {/* Content Section */}
          <div className="p-4">
            {/* Title */}
            {/* Brand */}
            <p className="text-sm text-gray-500">adidas</p>
            {/* Title */}
            <p className="font-semibold text-xl text-gray-800">
              Cartoon Astronaut T-Shirts
            </p>
            {/* Rating */}
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09L5.82 12.03 1.46 7.91l6.162-.894L10 2l2.378 5.016 6.162.894-4.36 4.12 1.697 6.06z" />
                </svg>
              ))}
            </div>
            {/* Price */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-blue-600 font-bold text-lg">Rs. 300</span>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white rounded-[2rem] shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-4 mb-4 border border-gray-300">
          <div className="relative">
            {/* Image Section */}
            <img
              src={p4}
              alt="Cartoon Astronaut T-Shirts"
              className="w-full object-cover rounded-2xl"
            />
          </div>
          {/* Content Section */}
          <div className="p-4">
            {/* Title */}
            {/* Brand */}
            <p className="text-sm text-gray-500">adidas</p>
            {/* Title */}
            <p className="font-semibold text-xl text-gray-800">
              Cartoon Astronaut T-Shirts
            </p>
            {/* Rating */}
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09L5.82 12.03 1.46 7.91l6.162-.894L10 2l2.378 5.016 6.162.894-4.36 4.12 1.697 6.06z" />
                </svg>
              ))}
            </div>
            {/* Price */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-blue-600 font-bold text-lg">Rs. 300</span>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white rounded-[2rem] shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-4 mb-4 border border-gray-300">
          <div className="relative">
            {/* Image Section */}
            <img
              src={p5}
              alt="Cartoon Astronaut T-Shirts"
              className="w-full object-cover rounded-2xl"
            />
          </div>
          {/* Content Section */}
          <div className="p-4">
            {/* Title */}
            {/* Brand */}
            <p className="text-sm text-gray-500">adidas</p>
            {/* Title */}
            <p className="font-semibold text-xl text-gray-800">
              Cartoon Astronaut T-Shirts
            </p>
            {/* Rating */}
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09L5.82 12.03 1.46 7.91l6.162-.894L10 2l2.378 5.016 6.162.894-4.36 4.12 1.697 6.06z" />
                </svg>
              ))}
            </div>
            {/* Price */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-blue-600 font-bold text-lg">Rs. 300</span>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white rounded-[2rem] shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-4 mb-4 border border-gray-300">
          <div className="relative">
            {/* Image Section */}
            <img
              src={p6}
              alt="Cartoon Astronaut T-Shirts"
              className="w-full object-cover rounded-2xl"
            />
          </div>
          {/* Content Section */}
          <div className="p-4">
            {/* Title */}
            {/* Brand */}
            <p className="text-sm text-gray-500">adidas</p>
            {/* Title */}
            <p className="font-semibold text-xl text-gray-800">
              Cartoon Astronaut T-Shirts
            </p>
            {/* Rating */}
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09L5.82 12.03 1.46 7.91l6.162-.894L10 2l2.378 5.016 6.162.894-4.36 4.12 1.697 6.06z" />
                </svg>
              ))}
            </div>
            {/* Price */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-blue-600 font-bold text-lg">Rs. 300</span>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white rounded-[2rem] shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-4 mb-4 border border-gray-300">
          <div className="relative">
            {/* Image Section */}
            <img
              src={p7}
              alt="Cartoon Astronaut T-Shirts"
              className="w-full object-cover rounded-2xl"
            />
          </div>
          {/* Content Section */}
          <div className="p-4">
            {/* Title */}
            {/* Brand */}
            <p className="text-sm text-gray-500">adidas</p>
            {/* Title */}
            <p className="font-semibold text-xl text-gray-800">
              Cartoon Astronaut T-Shirts
            </p>
            {/* Rating */}
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09L5.82 12.03 1.46 7.91l6.162-.894L10 2l2.378 5.016 6.162.894-4.36 4.12 1.697 6.06z" />
                </svg>
              ))}
            </div>
            {/* Price */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-blue-600 font-bold text-lg">Rs. 300</span>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white rounded-[2rem] shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-4 mb-4 border border-gray-300">
          <div className="relative">
            {/* Image Section */}
            <img
              src={p8}
              alt="Cartoon Astronaut T-Shirts"
              className="w-full object-cover rounded-2xl"
            />
          </div>
          {/* Content Section */}
          <div className="p-4">
            {/* Title */}
            {/* Brand */}
            <p className="text-sm text-gray-500">adidas</p>
            {/* Title */}
            <p className="font-semibold text-xl text-gray-800">
              Cartoon Astronaut T-Shirts
            </p>
            {/* Rating */}
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09L5.82 12.03 1.46 7.91l6.162-.894L10 2l2.378 5.016 6.162.894-4.36 4.12 1.697 6.06z" />
                </svg>
              ))}
            </div>
            {/* Price */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-blue-600 font-bold text-lg">Rs. 300</span>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex mb-4 flex-wrap">
        <div className="max-w-sm mx-auto bg-white rounded-[2rem] shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-4 mb-4 border border-gray-300">
          <div className="relative">
            {/* Image Section */}
            <img
              src={n1}
              alt="Cartoon Astronaut T-Shirts"
              className="w-full object-cover rounded-2xl"
            />
          </div>
          {/* Content Section */}
          <div className="p-4">
            {/* Title */}
            {/* Brand */}
            <p className="text-sm text-gray-500">adidas</p>
            {/* Title */}
            <p className="font-semibold text-xl text-gray-800">
              Cartoon Astronaut T-Shirts
            </p>
            {/* Rating */}
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09L5.82 12.03 1.46 7.91l6.162-.894L10 2l2.378 5.016 6.162.894-4.36 4.12 1.697 6.06z" />
                </svg>
              ))}
            </div>
            {/* Price */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-blue-600 font-bold text-lg">Rs. 300</span>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white rounded-[2rem] shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-4 mb-4 border border-gray-300">
          <div className="relative">
            {/* Image Section */}
            <img
              src={n2}
              alt="Cartoon Astronaut T-Shirts"
              className="w-full object-cover rounded-2xl"
            />
          </div>
          {/* Content Section */}
          <div className="p-4">
            {/* Title */}
            {/* Brand */}
            <p className="text-sm text-gray-500">adidas</p>
            {/* Title */}
            <p className="font-semibold text-xl text-gray-800">
              Cartoon Astronaut T-Shirts
            </p>
            {/* Rating */}
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09L5.82 12.03 1.46 7.91l6.162-.894L10 2l2.378 5.016 6.162.894-4.36 4.12 1.697 6.06z" />
                </svg>
              ))}
            </div>
            {/* Price */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-blue-600 font-bold text-lg">Rs. 300</span>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white rounded-[2rem] shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-4 mb-4 border border-gray-300">
          <div className="relative">
            {/* Image Section */}
            <img
              src={n3}
              alt="Cartoon Astronaut T-Shirts"
              className="w-full object-cover rounded-2xl"
            />
          </div>
          {/* Content Section */}
          <div className="p-4">
            {/* Title */}
            {/* Brand */}
            <p className="text-sm text-gray-500">adidas</p>
            {/* Title */}
            <p className="font-semibold text-xl text-gray-800">
              Cartoon Astronaut T-Shirts
            </p>
            {/* Rating */}
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09L5.82 12.03 1.46 7.91l6.162-.894L10 2l2.378 5.016 6.162.894-4.36 4.12 1.697 6.06z" />
                </svg>
              ))}
            </div>
            {/* Price */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-blue-600 font-bold text-lg">Rs. 300</span>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white rounded-[2rem] shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-4 mb-4 border border-gray-300">
          <div className="relative">
            {/* Image Section */}
            <img
              src={n4}
              alt="Cartoon Astronaut T-Shirts"
              className="w-full object-cover rounded-2xl"
            />
          </div>
          {/* Content Section */}
          <div className="p-4">
            {/* Title */}
            {/* Brand */}
            <p className="text-sm text-gray-500">adidas</p>
            {/* Title */}
            <p className="font-semibold text-xl text-gray-800">
              Cartoon Astronaut T-Shirts
            </p>
            {/* Rating */}
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09L5.82 12.03 1.46 7.91l6.162-.894L10 2l2.378 5.016 6.162.894-4.36 4.12 1.697 6.06z" />
                </svg>
              ))}
            </div>
            {/* Price */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-blue-600 font-bold text-lg">Rs. 300</span>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white rounded-[2rem] shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-4 mb-4 border border-gray-300">
          <div className="relative">
            {/* Image Section */}
            <img
              src={n5}
              alt="Cartoon Astronaut T-Shirts"
              className="w-full object-cover rounded-2xl"
            />
          </div>
          {/* Content Section */}
          <div className="p-4">
            {/* Title */}
            {/* Brand */}
            <p className="text-sm text-gray-500">adidas</p>
            {/* Title */}
            <p className="font-semibold text-xl text-gray-800">
              Cartoon Astronaut T-Shirts
            </p>
            {/* Rating */}
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09L5.82 12.03 1.46 7.91l6.162-.894L10 2l2.378 5.016 6.162.894-4.36 4.12 1.697 6.06z" />
                </svg>
              ))}
            </div>
            {/* Price */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-blue-600 font-bold text-lg">Rs. 300</span>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white rounded-[2rem] shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-4 mb-4 border border-gray-300">
          <div className="relative">
            {/* Image Section */}
            <img
              src={n6}
              alt="Cartoon Astronaut T-Shirts"
              className="w-full object-cover rounded-2xl"
            />
          </div>
          {/* Content Section */}
          <div className="p-4">
            {/* Title */}
            {/* Brand */}
            <p className="text-sm text-gray-500">adidas</p>
            {/* Title */}
            <p className="font-semibold text-xl text-gray-800">
              Cartoon Astronaut T-Shirts
            </p>
            {/* Rating */}
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09L5.82 12.03 1.46 7.91l6.162-.894L10 2l2.378 5.016 6.162.894-4.36 4.12 1.697 6.06z" />
                </svg>
              ))}
            </div>
            {/* Price */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-blue-600 font-bold text-lg">Rs. 300</span>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white rounded-[2rem] shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-4 mb-4 border border-gray-300">
          <div className="relative">
            {/* Image Section */}
            <img
              src={n7}
              alt="Cartoon Astronaut T-Shirts"
              className="w-full object-cover rounded-2xl"
            />
          </div>
          {/* Content Section */}
          <div className="p-4">
            {/* Title */}
            {/* Brand */}
            <p className="text-sm text-gray-500">adidas</p>
            {/* Title */}
            <p className="font-semibold text-xl text-gray-800">
              Cartoon Astronaut T-Shirts
            </p>
            {/* Rating */}
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09L5.82 12.03 1.46 7.91l6.162-.894L10 2l2.378 5.016 6.162.894-4.36 4.12 1.697 6.06z" />
                </svg>
              ))}
            </div>
            {/* Price */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-blue-600 font-bold text-lg">Rs. 300</span>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white rounded-[2rem] shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-4 mb-4 border border-gray-300">
          <div className="relative">
            {/* Image Section */}
            <img
              src={n8}
              alt="Cartoon Astronaut T-Shirts"
              className="w-full object-cover rounded-2xl"
            />
          </div>
          {/* Content Section */}
          <div className="p-4">
            {/* Title */}
            {/* Brand */}
            <p className="text-sm text-gray-500">adidas</p>
            {/* Title */}
            <p className="font-semibold text-xl text-gray-800">
              Cartoon Astronaut T-Shirts
            </p>
            {/* Rating */}
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09L5.82 12.03 1.46 7.91l6.162-.894L10 2l2.378 5.016 6.162.894-4.36 4.12 1.697 6.06z" />
                </svg>
              ))}
            </div>
            {/* Price */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-blue-600 font-bold text-lg">Rs. 300</span>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* navigation button */}
      <div className="w-full flex items-center justify-center gap-4 mt-[4rem] mb-[4rem]">
        <button className="bg-[#088178] hover:bg-[#088188] text-white font-bold text-lg w-[3.2rem] h-[3rem] rounded-md">
          1
        </button>
        <button className="bg-[#088178] hover:bg-[#088188] text-white font-bold text-lg w-[3.2rem] h-[3rem] rounded-md">
          2
        </button>
        <button
          className="bg-[#088178] flex items-center justify-center hover:bg-[#088188] text-white font-bold text-lg w-[3.2rem] h-[3rem] rounded-md transition-colors duration-300"
          aria-label="Next"
        >
          <GoArrowRight className="w-5 h-5" />
        </button>
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
          <p className="text-gray-500">© 2023, Rahul - E-commerce Template</p>
        </div>
      </footer>
    </div>
  );
}
