import { contactInfo } from "./contactData";

const ContactInfo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            Get In Touch
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Contact Information
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            We'd love to hear from you. Reach out using any of the
            following contact methods.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.id}
                href={item.link}
                className="bg-slate-50 rounded-3xl p-8 text-center hover:shadow-xl transition duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center">

                  <Icon
                    size={28}
                    className="text-blue-600"
                  />

                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {item.value}
                </p>

              </a>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default ContactInfo;