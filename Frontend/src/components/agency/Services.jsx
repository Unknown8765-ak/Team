import { services } from "./AgencyData";

const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-indigo-600 uppercase tracking-widest font-semibold">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            Complete Digital Solutions
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            From website development to digital marketing, we help
            businesses establish a strong online presence and achieve
            measurable growth.
          </p>

        </div>

        {/* Service Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon */}

                <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 transition">

                  <Icon
                    size={30}
                    className="text-indigo-600 group-hover:text-white"
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

                <button className="mt-8 text-indigo-600 font-semibold hover:text-indigo-700 transition">
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