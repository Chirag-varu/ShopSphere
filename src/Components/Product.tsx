import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const ProductCard = ({ product, addToCart }: { product: any; addToCart: Function }) => {
    return (
      <div className="max-w-sm mx-auto bg-white rounded-[2rem] shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-4 mb-4 border border-gray-300">
        <div className="relative">
          {/* Image Section */}
          <img src={product.image} alt={product.name} className="w-full object-cover rounded-2xl transition-transform transform hover:scale-105 duration-300" />
        </div>
        {/* Content Section */}
        <div className="p-4">
          <p className="text-sm text-gray-500">{product.brand}</p>
          <p className="font-semibold text-xl text-gray-800">{product.name}</p>
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
          <div className="mt-4 flex items-center justify-between">
            <span className="text-blue-600 font-bold text-lg">Rs. {product.price}</span>
            <FontAwesomeIcon
              icon={faCartShopping}
              className="cursor-pointer"
              onClick={() => addToCart(product)}
            />
          </div>
        </div>
      </div>
    );
  };
  