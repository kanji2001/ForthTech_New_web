    export default function ClientSection() {
        const clients = [
        { name: "myob", src: "./ClientLogo/flo-mobility-logo.png" },
        { name: "BELIMO", src: "./ClientLogo/gtu logo.png" },
        { name: "Life Groups", src: "./ClientLogo/haron.png" },
        { name: "Lilly", src: "./ClientLogo/i create .png" },
        { name: "Citrus", src: "./ClientLogo/IIT_Gandhinagar_Logo.svg.png" },
        { name: "Trustly", src: "./ClientLogo/Iron care.avif" },
        { name: "BELIMO", src: "./ClientLogo/Naman Automative Solution client logo.avif" },
        { name: "Life Groups", src: "./ClientLogo/Planetskool logo.avif" },
        { name: "Lilly", src: "./ClientLogo/Voltherm Technology .avif" },
        { name: "Citrus", src: "./ClientLogo/The Innovations Story logo_edited.avif" },
        { name: "Trustly", src: "./ClientLogo/Varion Scientific Client.avif" },
        ];
    
        return (
        <section className="bg-gray-100 py-8 px-4">
            <h2 className="text-center text-4xl mb-6 text-[#ff2424] font-medium">Our Clients</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-6 mt-10">
            {clients.map((client, index) => ( 
                <div key={index} className="p-4 flex justify-center items-center" style={{border: "1px solid #d9d9d9", borderRadius: "20px"}}>
                <img
                    src={client.src}
                    alt={client.name}
                    className="w-24 h-auto grayscale transition-all duration-300 hover:grayscale-0 mix-blend-multiply"
                />
                </div>
            ))}
            </div>
        </section>
        );
    }
    