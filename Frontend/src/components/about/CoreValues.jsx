import {
  FaAward,
  FaLightbulb,
  FaHandshake,
  FaHeart,
} from "react-icons/fa";

const values = [
  {
    id: 1,
    icon: FaAward,
    title: "Quality",
    description:
      "We deliver high-quality solutions that exceed client expectations and industry standards.",
  },
  {
    id: 2,
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "We continuously embrace new ideas and technologies to create modern solutions.",
  },
  {
    id: 3,
    icon: FaHandshake,
    title: "Integrity",
    description:
      "Honesty, transparency, and trust form the foundation of every client relationship.",
  },
  {
    id: 4,
    icon: FaHeart,
    title: "Customer Satisfaction",
    description:
      "Every decision we make is focused on delivering maximum value to our customers.",
  },
];

const CoreValues = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            Our Core Values
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            Values That Define Us
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            These values guide every project, every decision, and every
            relationship we build with our clients.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.id}
                className="bg-slate-50 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center">

                  <Icon
                    size={30}
                    className="text-blue-600"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-5 text-gray-600 leading-7">
                  {value.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default CoreValues;