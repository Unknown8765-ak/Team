import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            Mission & Vision
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            Driven by Purpose,
            Inspired by Innovation
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Our mission and vision guide every decision we make and
            every solution we deliver for our clients.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          {/* Mission */}

          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">

              <FaBullseye
                size={28}
                className="text-blue-600"
              />

            </div>

            <h3 className="mt-8 text-3xl font-bold text-slate-900">
              Our Mission
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              Our mission content will be updated according to the
              client blueprint. This section is designed to present
              the company's purpose in a clear and professional way.
            </p>

          </div>

          {/* Vision */}

          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">

              <FaEye
                size={28}
                className="text-blue-600"
              />

            </div>

            <h3 className="mt-8 text-3xl font-bold text-slate-900">
              Our Vision
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              Our vision statement will be replaced with the exact
              content from the blueprint to maintain consistency
              across the entire website.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MissionVision;