import React from "react";
 const LoginSection = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 ">
      <div className="relative w-full max-w-4xl h-auto bg-black rounded-3xl p-2 shadow-lg overflow-hidden"
        style={{ background: "linear-gradient(135deg, #001F3F, #FFD700)" }}>
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="relative w-20 h-20 flex items-center justify-center">
           <img src="./brandingimg.webp" alt="" />
          </div>
        </div>
        
        {/* Title */}
        <h1 className="text-white text-center text-3xl font-semibold mb-4">Soun</h1>
          
        {/* Input Field */}
        <div className="p-50">
        <p className="text-white text-center mb-4 text-lg">Welcome</p>
        <input
          type="email"
          placeholder="william@email.com"
          className="w-full p-3 rounded-lg bg-white text-gray-700 outline-none mb-4"
        />
        
        {/* Button */}
        <button className="w-full p-3 bg-white text-black font-semibold rounded-lg flex items-center justify-center">
          Enter to the app →
        </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;