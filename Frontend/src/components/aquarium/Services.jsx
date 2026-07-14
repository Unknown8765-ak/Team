import { services } from "./aquariumData";

const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-cyan-600 uppercase tracking-widest font-semibold">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            Complete Aquarium Solutions
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We design, install, and maintain premium aquariums that
            bring beauty, peace, and nature into homes, offices,
            hotels, and commercial spaces.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group bg-white border rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                {/* Icon */}

                <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center group-hover:bg-cyan-600 transition">

                  <Icon
                    size={30}
                    className="text-cyan-600 group-hover:text-white"
                  />

                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="mt-5 text-gray-600 leading-7">
                  {service.description}
                </p>

                {/* Button */}

                <button className="mt-8 font-semibold text-cyan-600 hover:text-cyan-700">
                  Learn More →
                </button>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Services;