import { portfolio } from "./AgencyData";
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-indigo-600 uppercase tracking-widest font-semibold">
            Our Portfolio
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            Recent Projects We've Delivered
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Explore some of our recent web development, branding,
            and digital marketing projects that helped businesses
            grow online.
          </p>

        </div>

        {/* Portfolio Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {portfolio.map((project) => (

            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >

              {/* Dummy Image */}

              <div className="h-64 bg-gray-300 flex items-center justify-center">

                <span className="text-xl font-semibold text-gray-500">
                  Dummy Project Image
                </span>

              </div>

              {/* Content */}

              <div className="p-8">

                <span className="inline-block bg-indigo-100 text-indigo-600 text-sm font-semibold px-3 py-1 rounded-full">
                  Featured Project
                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  A modern digital solution designed with
                  performance, user experience, and business
                  growth in mind.
                </p>

                <button className="mt-8 flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition">

                  View Project

                  <FaArrowRight />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Portfolio;