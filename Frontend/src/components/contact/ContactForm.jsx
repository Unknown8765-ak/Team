import { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      console.log(data);

      // ==========================
      // Future Backend Integration
      // await createLead(data);
      // toast.success("Message Sent Successfully");
      // ==========================

      reset();
    } catch (error) {
      console.error(error);

      // toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            Contact Form
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Request a Free Consultation
          </h2>

          <p className="mt-5 text-gray-600">
            Fill in the form below and our team will get back to you as
            soon as possible.
          </p>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white mt-16 rounded-3xl shadow-xl p-8 md:p-10"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}

            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-blue-600"
                {...register("name", {
                  required: "Name is required",
                })}
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}

            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-blue-600"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Enter a valid email",
                  },
                })}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}

            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-blue-600"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Enter a valid phone number",
                  },
                })}
              />

              {errors.phone && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Subject */}

            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-blue-600"
                {...register("subject", {
                  required: "Subject is required",
                })}
              />

              {errors.subject && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.subject.message}
                </p>
              )}
            </div>
          </div>

          {/* Message */}

          <div className="mt-6">
            <textarea
              rows={6}
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-blue-600 resize-none"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 20,
                  message: "Message should be at least 20 characters",
                },
              })}
            />

            {errors.message && (
              <p className="text-red-500 text-sm mt-2">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Button */}

          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-4 rounded-xl transition duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;