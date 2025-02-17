import React, { useState, useEffect } from "react";

function ProductPage1() {
  const products = [
    {
      id: 1,
      name: "Smartphone X",
      price: "$799",
      image: "home1.jpg",
      images: { one: "home1.jpg", two: "home2.jpg", six: "home2.jpg", three: "image.png", four: "my.jpg", five: "five.jpg" },
      description: "A powerful smartphone with a sleek design.",
    },
    { id: 2, name: "Laptop Pro", price: "$1299", image: "image.png",
      images: { one: "home1.jpg", two: "home2.jpg", six: "home2.jpg", three: "image.png", four: "my.jpg", five: "five.jpg" },

      description: "High-performance laptop for professionals." },
    { id: 3, name: "Wireless Earbuds", price: "$199", image: "my.jpg", description: "Crystal clear sound with noise cancellation." },
    { id: 4, name: "Smart Watch", price: "$249", image: "home1.jpg", description: "Track your fitness and stay connected." },
    { id: 5, name: "Gaming Console", price: "$499", image: "home1.jpg", description: "Next-gen gaming experience." },
    { id: 6, name: "4K TV", price: "$999", image: "home2.jpg", description: "Immersive 4K visuals with smart features." },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(()=>{
    window?.scrollTo({top:0})
  },[])
  useEffect(() => {
    if (selectedProduct) {
      document.body.classList.add("overflow-hidden");
      setSelectedImage(selectedProduct.image);
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [selectedProduct]);

  return (
    <div className="bg-gray-100 relative">
      <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white hover:scale-110 transition duration-500 p-4 shadow rounded-3xl">
            <img src={product.image} alt={product.name} className="w-full h-[300px] object-cover rounded" />
            <h3 className="text-lg text-center font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-700 text-center">{product.price}</p>
            <div className="text-center">
              <button
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => setSelectedProduct(product)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-800 bg-opacity-50">
          <div className="bg-white flex-col md:flex-row p-6 rounded-lg shadow-lg md:max-h-full md:max-w-full flex">
            <div className="sm:w-[830px]  w-full bg-blue-100 p-4">
              <div>
              <img src={selectedImage} alt={selectedProduct.name} className="w-full h-[400px] object-cover rounded-lg" />

              <div className="flex overflow-x-auto space-x-2 p-4 mt-4 scrollbar-hide">
                {[selectedProduct.image, ...(selectedProduct.images ? Object.values(selectedProduct.images) : [])].map(
                  (img, index) => (
                    <div key={index} className="shrink-0">
                      <img
                        src={img}
                        alt="Product"
                        className={`w-[150px] h-[150px] object-cover rounded cursor-pointer ${
                          selectedImage === img ? "border-4 border-blue-500" : ""
                        }`}
                        onClick={() => setSelectedImage(img)}
                        />
                    </div>
                  )
                )}
              </div>
                </div>
            </div>
            <div className="sm:w-1/2 w-auto p-4 flex flex-col">
              <h2 className="text-5xl font-bold">{selectedProduct.name}</h2>
              <p className="mt-2 text-2xl text-gray-700">{selectedProduct.description}</p>
              <p className="text-2xl text-red-600">20% OFF</p>
              <p className="mt-2 text-4xl font-semibold">{selectedProduct.price}</p>
              <div className="mt-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded mr-2">Add to Cart</button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded">Add to Wishlist</button>
              <div className="flex justify-start mt-8">
                <button className="bg-red-500 text-center text-white px-4 py-2 rounded" onClick={() => setSelectedProduct(null)}>
                  Close
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage1;
