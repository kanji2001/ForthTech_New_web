import React, { useState } from "react";

const products = [
  { id: 1, name: "Smartphone X", price: "$799", image: "home1.jpg", description: "A powerful smartphone with a sleek design." },
  { id: 2, name: "Laptop Pro", price: "$1299", image: "home1.jpg", description: "High-performance laptop for professionals." },
  { id: 3, name: "Wireless Earbuds", price: "$199", image: "home1.jpg", description: "Crystal clear sound with noise cancellation." },
  { id: 4, name: "Smart Watch", price: "$249", image: "home1.jpg", description: "Track your fitness and stay connected." },
  { id: 5, name: "Gaming Console", price: "$499", image: "home1.jpg", description: "Next-gen gaming experience." },
  { id: 6, name: "4K TV", price: "$999", image: "home1.jpg", description: "Immersive 4K visuals with smart features." },
];

function ProductPage() {
    useEffect(()=>{
      window?.scrollTo({top:0})
    },[])
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className=" bg-gray-100 relative">
     <div>
       </div>
      <section className="bg-green-700 text-white p-10 text-center">
        <h2 className="text-7xl font-bold">Our Products!</h2>
        <p className="mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, blanditiis.</p>
      </section>
      <div className="container mx-auto p-6 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white hover:scale-110 transition duration-500  p-4 m-10 shadow rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-700">{product.price}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => setSelectedProduct(product)}>
              Learn More
            </button>
            
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="absolute inset-0 z-30  flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg ">
            <h2 className="text-xl font-bold">{selectedProduct.name}</h2>
            <p className="mt-2 text-gray-700">{selectedProduct.description}</p>
            <p className="mt-2 font-semibold">{selectedProduct.price}</p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={() => setSelectedProduct(null)}>
              Close
            </button>
          </div>
        </div>
      )}

    
    </div>
  );
}

export default ProductPage;
