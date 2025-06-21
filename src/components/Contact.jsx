import { useState } from "react";
import { forwardRef } from "react";

const Contact = forwardRef((prop, contactRef) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(false);
    setIsError(false);
    setErrors({});
    setLoading(true);

    const newErrors = {};

    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message || formData.message.trim().length === 0) {
      newErrors.message = "Message cannot be empty.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsError(true);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setIsError(true);
      }
    } catch {
      setIsError(true);
    }

    setLoading(false);
  };

  return (
    <section
      ref={contactRef}
      className="flex items-center justify-center mt-10 md:px-50 md:py-8"
      id="contact"
    >
      <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-xl rounded-2xl p-6 max-w-2xl w-full text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">CONTACT ME</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            value={formData.name}
            className="contact-field"
          />
          {errors.name && <p className="contact-error">❗{errors.name}</p>}

          <input
            type="text"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            value={formData.email}
            className="contact-field"
          />
          {errors.email && <p className="contact-error">❗{errors.email}</p>}

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            onChange={handleChange}
            value={formData.message}
            className="contact-field"
          />
          {errors.message && (
            <p className="contact-error">❗{errors.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-red-600 transition duration-300 font-medium dark:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {isSubmitted && (
          <p className="text-center mt-4 font-medium">
            ✅ Message sent successfully!
          </p>
        )}
        {isError && (
          <p className="text-center mt-4 font-medium">
            ❌ Failed to send Message
          </p>
        )}
      </div>
    </section>
  );
});

export default Contact;
