import { Link } from "react-router-dom";

const businessUnits = [
  {
    id: 1,
    title: "SUN",
    subtitle: "Sun & Shadow Enertech",
    description:
      "Transition to clean, independent power with residential and commercial solar solutions.",
    button: "Explore Solar & Wind",
    link: "/solar",
    color: "bg-yellow-500",
  },
  {
    id: 2,
    title: "AQUA",
    subtitle: "Fish World Aquarium",
    description:
      "Premium aquascaping, aquarium engineering and hassle-free maintenance services.",
    button: "Explore Aquatics",
    link: "/aquarium",
    color: "bg-cyan-500",
  },
  {
    id: 3,
    title: "SHADOW",
    subtitle: "Shadow Digital Agency",
    description:
      "Performance marketing solutions built to scale brands and generate quality leads.",
    button: "Explore Digital Agency",
    link: "/agency",
    color: "bg-slate-900",
  },
];

const BusinessUnits = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {businessUnits.map((unit) => (

            <div
              key={unit.id}
              className="rounded-2xl border p-8 shadow-sm hover:shadow-xl transition"
            >

              <span
                className={`${unit.color} text-white px-4 py-2 rounded-full text-sm`}
              >
                {unit.title}
              </span>

              <h2 className="text-2xl font-bold mt-6">

                {unit.subtitle}

              </h2>

              <p className="text-gray-600 mt-5 leading-7">

                {unit.description}

              </p>

              <Link
                to={unit.link}
                className="inline-block mt-8 text-yellow-500 font-semibold"
              >
                {unit.button} →
              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default BusinessUnits;