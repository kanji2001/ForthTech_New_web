export default function ClientSection() {
    const clients = [
      { name: "flo-mobility", src: "./ClientLogo/flo-mobility-logo.png" },
      { name: "Naman automative solution", src: "./ClientLogo/Naman Automative Solution client logo.avif" },
      { name: "vario scientific client", src: "./ClientLogo/Varion Scientific Client.png" },
      { name: "voltherm", src: "./ClientLogo/Voltherm Technology_.png" },
      { name: "design per minutes", src: "./ClientLogo/design_per_minutes.png" },
      { name: "wealth affiniy", src: "./ClientLogo/wealth_affinity.png" },
      { name: "iron care", src: "./ClientLogo/Iron care.avif" },
      { name: "haron", src: "./ClientLogo/haron.png" },
      { name: "the innovations story", src: "./ClientLogo/The Innovations Story logo_edited.avif" },
      { name: "planetskool", src: "./ClientLogo/Planetskool logo.png" },
      { name: "GTU", src: "./ClientLogo/gtu logo.png" },
      { name: "I create", src: "./ClientLogo/i create .png" },
      { name: "IIT Gandhinagar", src: "./ClientLogo/IIT_Gandhinagar_Logo.svg.png" },
    ];
  
    // Duplicate the logos to create an infinite scrolling effect
    const repeatedClients = [...clients, ...clients];
  
    return (
      <section className="bg-gray-100 py-8 px-4">
        <h2 className="text-center text-4xl mb-6 text-[#ff2424] font-medium">
          Our Clients
        </h2>
        <div className="overflow-hidden w-full mt-13 mb-6">
          <div className="flex space-x-4 animate-scroll">
            {repeatedClients.map((client, index) => (
              <div
                key={index}
                className="min-w-[100px] flex justify-center items-center rounded-2xl "
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="w-auto h-[60px] object-contain transition-all duration-300 grayscale-0 hover:grayscale-0 mix-blend"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  