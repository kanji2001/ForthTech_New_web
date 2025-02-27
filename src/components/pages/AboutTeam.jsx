import React, { useState } from "react";

export default function AboutTeam() {
  const cards = [
    { image: "./robotics.png", title: "Jeegar ", description: "Senior Web and App Developer" },
    { image: "./robotics.png", title: "Darshan ", description: "CEO and Owner of ForthTech" },
    { image: "./robotics.png", title: "Jenil ", description: "UI-UX Designer" },
    { image: "./robotics.png", title: "Meet ", description: "Robotics and AI" },
    { image: "./robotics.png", title: "Jeegar ", description: "Senior Web and App Developer" },
    { image: "./robotics.png", title: "Darshan ", description: "CEO and Owner of ForthTech" },
    { image: "./robotics.png", title: "Jenil ", description: "UI-UX Designer" },
    { image: "./robotics.png", title: "Meet ", description: "Robotics and AI" },
  ];

  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.slice(0, visibleCount).map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-md" />
            <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
            <p className="text-gray-600 mt-2">{card.description}</p>
          </div>
        ))}
      </div>

      {visibleCount < cards.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-button-red text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-hover-blue transition-colors duration-800"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
