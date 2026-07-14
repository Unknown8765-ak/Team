import { processSteps } from "./solarData";

const Process = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-yellow-500 uppercase tracking-widest font-semibold">
            Installation Process
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            From Consultation to Clean Energy
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Our streamlined installation process ensures a smooth,
            transparent, and hassle-free experience from planning to
            long-term support.
          </p>

        </div>

        {/* Timeline */}

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {processSteps.map((step, index) => (

            <div
              key={index}
              className="relative bg-slate-50 rounded-2xl p-8 border hover:shadow-lg transition duration-300"
            >

              {/* Step Number */}

              <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                {step}
              </h3>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Process;