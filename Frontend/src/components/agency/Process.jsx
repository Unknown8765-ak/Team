import { processSteps } from "./AgencyData";

const Process = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="text-indigo-600 uppercase tracking-widest font-semibold">
            Our Process
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            Our Proven Workflow
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Every successful project starts with a clear strategy.
            Our streamlined process ensures quality, transparency,
            and timely delivery.
          </p>

        </div>

        {/* Process Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {processSteps.map((step) => (

            <div
              key={step.id}
              className="relative bg-slate-50 border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Number */}

              <div className="absolute -top-5 left-8 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-lg font-bold shadow-lg">

                {step.id}

              </div>

              {/* Title */}

              <h3 className="mt-8 text-2xl font-bold text-slate-900">

                {step.title}

              </h3>

              {/* Description */}

              <p className="mt-5 text-gray-600 leading-7">

                {step.description}

              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Process;