import Image from "next/image";

export default function Home() {
  return (
    <main>
       <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-pink-50 to-blue-600 text-white">
        <div className="text-center max-w-4xl px-6">
          <h1 className="text-6xl font-bold mb-6">
            Welcome To Final Cut Multimedia
          </h1>
          <p className="text-xl text-gray-300">
            Professional Video Production, Photography & Creative Media Solutions
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-8">About Us</h2>
          <p className="text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, voluptate. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellendus, voluptate.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-40 px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-10">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  Service {item}
                </h3>
                <p>
                  Professional media production services for businesses and
                  individuals.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long Content Sections */}
      {[1, 2, 3, 4, 5, 6, 7, 8].map((section) => (
        <section
          key={section}
          className={`py-40 px-8 ${
            section % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-8">
              Featured Section {section}
            </h2>

            <p className="text-lg leading-8 text-gray-600 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, consequuntur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatum, consequuntur.
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="h-96 bg-gray-300 rounded-xl"></div>
              <div className="h-96 bg-gray-400 rounded-xl"></div>
            </div>
          </div>
        </section>
      ))}

      {/* Gallery */}
      <section className="py-40 px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-12 text-center">
            Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gray-700 rounded-xl"
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-40 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Get In Touch</h2>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full border p-4 rounded-lg"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-4 rounded-lg"
            />

            <textarea
              rows="6"
              placeholder="Message"
              className="w-full border p-4 rounded-lg"
            ></textarea>

            <button className="bg-black text-white px-8 py-4 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
    </main>
  );
}
