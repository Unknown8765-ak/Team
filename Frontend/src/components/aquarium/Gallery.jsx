import { gallery } from "./aquariumData";

const Gallery = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-cyan-600 uppercase tracking-widest font-semibold">
            Our Projects
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            Explore Our Aquarium Creations
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Discover some of our premium aquarium installations
            designed for homes, offices, hotels, and commercial
            spaces.
          </p>

        </div>

        {/* Gallery Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {gallery.map((item) => (

            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-2xl transition-all duration-300"
            >

              {/* Dummy Image */}

              <div className="h-72 bg-gray-300 flex items-center justify-center">

                <span className="text-gray-500 text-xl font-semibold">
                  Dummy Image
                </span>

              </div>

              {/* Content */}

              <div className="p-6">

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Premium aquarium design crafted with modern
                  aquascaping techniques and professional installation.
                </p>

                <button className="mt-6 text-cyan-600 font-semibold hover:text-cyan-700 transition">
                  View Project →
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;