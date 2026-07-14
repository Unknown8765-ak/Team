import { services } from "./solarData";

const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-yellow-500 uppercase font-semibold tracking-widest">
            Our Services
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Complete Solar Energy Solutions
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            From consultation to installation and maintenance, we
            deliver complete solar solutions for homes and businesses.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.id}
                className="border rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
              >

                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center">

                  <Icon className="text-yellow-500 text-3xl" />

                </div>

                <h3 className="mt-6 text-2xl font-bold">

                  {service.title}

                </h3>

                <p className="mt-4 text-gray-600 leading-7">

                  {service.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
};

export default Services;