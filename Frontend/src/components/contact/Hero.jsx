import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-linear-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">

  <div className="w-full">

    <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
      Contact Us
    </span>

    <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
      Let's Start a
      <br />
      <span className="text-blue-600">
        Conversation
      </span>
    </h1>

    <p className="mt-8 text-lg text-gray-600 leading-8">
      Have questions or planning your next project?
      Our team is ready to help you with professional
      consultation and reliable solutions.
    </p>

    <div className="flex flex-wrap gap-5 mt-12">

      <Link
        to="/about"
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition"
      >
        Learn More
        <FaArrowRight />
      </Link>

      {/* <Link
        to="/blog"
        className="border-2 border-slate-900 hover:bg-slate-900 hover:text-white px-8 py-4 rounded-xl font-semibold transition"
      >
        Visit Blog
      </Link> */}

    </div>

  </div>

</div>
    </section>
  );
};

export default Hero;