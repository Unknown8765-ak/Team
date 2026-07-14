import {
  FaSolarPanel,
  FaLeaf,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: FaSolarPanel,
    title: "Multi-Vertical Expertise",
    description:
      "From renewable energy to aquarium solutions and digital marketing, we provide complete business solutions under one trusted brand.",
  },
  {
    id: 2,
    icon: FaLeaf,
    title: "Innovation & Sustainability",
    description:
      "We combine modern technology with sustainable practices to deliver efficient, future-ready solutions.",
  },
  {
    id: 3,
    icon: FaUsers,
    title: "Customer-Centric Approach",
    description:
      "Every project is planned according to the client's goals, ensuring transparency, quality, and long-term support.",
  },
  {
    id: 4,
    icon: FaChartLine,
    title: "Results That Matter",
    description:
      "Whether reducing energy costs, creating premium aquatic spaces, or growing brands online, our focus is measurable results.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-yellow-500 uppercase font-semibold tracking-widest">
            Why Choose Us
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-slate-900">
            Built for Growth.
            <br />
            Designed for Excellence.
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            At Sun & Shadow Group, we believe every solution should
            create long-term value. Our integrated approach helps
            businesses and individuals grow with confidence.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">

                  <Icon className="text-yellow-500 text-3xl" />

                </div>

                <h3 className="text-2xl font-semibold mt-6">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;