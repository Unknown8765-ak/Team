import { whySolar } from "./solarData";

const WhySolar = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-yellow-500 uppercase tracking-widest font-semibold">
            Why Choose Solar?
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            Invest Once. Save for Decades.
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Solar energy is more than just reducing electricity bills.
            It is a long-term investment in sustainability, energy
            independence, and a greener future.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {whySolar.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 text-center"
            >

              <h3 className="text-3xl font-bold text-yellow-500">
                {item.value}
              </h3>

              <p className="mt-5 text-lg font-semibold text-slate-900">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default WhySolar;