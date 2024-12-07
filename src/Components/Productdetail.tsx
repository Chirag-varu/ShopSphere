"use client";

import { useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  rating: 3.9,
  reviewCount: 117,
  href: "#",
  imageSrc:
    "https://tailwindui.com/plus/img/ecommerce-images/product-quick-preview-02-detail.jpg",
  imageAlt: "Two each of gray, white, and black shirts arranged on a table.",
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "XXL", inStock: true },
    { name: "XXXL", inStock: false },
  ],
};

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export function ProductDetail(p: any) {
  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <Transition appear show={open} as="div" className="relative z-10">
      <Dialog as="div" onClose={setOpen} className="fixed inset-0">
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-4"
            >
              <Dialog.Panel className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full">
                {/* Close Button */}
                <button
                  type="button"
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                  onClick={() => setOpen(false)}
                >
                </button>

                {/* Content */}
                <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 p-6">
                  {/* Image Section */}
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="rounded-lg"
                  />

                  {/* Details Section */}
                  <div>
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <p className="text-gray-600 mt-2">{product.price}</p>

                    {/* Rating and Reviews */}
                    <div className="flex items-center mt-4">
                      <div className="flex">
                      </div>
                      <p className="ml-2 text-sm text-gray-500">
                        {product.reviewCount} reviews
                      </p>
                    </div>

                    {/* Color Options */}
                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                      className="mt-6"
                    >
                      <RadioGroup.Label className="text-sm font-medium text-gray-700">
                        Color
                      </RadioGroup.Label>
                      <div className="flex space-x-3 mt-2">
                        {product.colors.map((color) => (
                          <RadioGroup.Option
                            key={color.name}
                            value={color}
                            className={({ checked }) =>
                              classNames(
                                color.class,
                                "h-8 w-8 rounded-full border-2",
                                checked
                                  ? color.selectedClass
                                  : "border-gray-300"
                              )
                            }
                          />
                        ))}
                      </div>
                    </RadioGroup>

                    {/* Size Options */}
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="mt-6"
                    >
                      <RadioGroup.Label className="text-sm font-medium text-gray-700">
                        Size
                      </RadioGroup.Label>
                      <div className="grid grid-cols-4 gap-2 mt-2">
                        {product.sizes.map((size) => (
                          <RadioGroup.Option
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className={({ checked }) =>
                              classNames(
                                "py-2 px-4 text-center rounded-md text-sm font-medium",
                                checked
                                  ? "bg-indigo-600 text-white"
                                  : "text-gray-900 bg-gray-100"
                              )
                            }
                          >
                            {size.name}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>

                    {/* Add to Cart Button */}
                    <button
                      type="button"
                      className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
