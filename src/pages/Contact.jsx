// src/pages/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: hook up your form submission (API, email service, etc.)
    console.log("Submitting", form);
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.h1
        className="text-4xl font-bold text-primary text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h1>

      {/* Contact Info */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          {
            icon: FaPhoneAlt,
            label: "Phone",
            value: "(555) 123-4567",
          },
          {
            icon: FaEnvelope,
            label: "Email",
            value: "hello@stayinmotionpt.com",
          },
          {
            icon: FaMapMarkerAlt,
            label: "Address",
            value: "123 Main St, Hometown, USA",
          },
        ].map((info, i) => (
          <motion.div
            key={info.label}
            className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            custom={i}
            variants={fieldVariants}
          >
            <info.icon className="text-accent dark:text-primary text-2xl mr-4 mt-1" />
            <div>
              <h4 className="font-semibold dark:text-gray-500 text-lg">{info.label}</h4>
              <p className="text-gray-700 dark:text-gray-200">{info.value}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-cream dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          { name: "name",       type: "text",    placeholder: "Your Name" },
          { name: "email",      type: "email",   placeholder: "Your Email" },
          { name: "subject",    type: "text",    placeholder: "Subject" },
        ].map((field, i) => (
          <motion.div
            key={field.name}
            className="mb-6"
            custom={i}
            variants={fieldVariants}
          >
            <label className="sr-only">{field.placeholder}</label>
            <input
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={form[field.name]}
              onChange={handleChange}
              required
              className="w-full bg-white dark:bg-gray-900 border border-gray-300 rounded-lg px-4 py-3
                         focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
                         transition"
            />
          </motion.div>
        ))}

        <motion.div
          className="mb-6"
          custom={3}
          variants={fieldVariants}
        >
          <label className="sr-only">Your Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full bg-white dark:bg-gray-900 border border-gray-300 rounded-lg px-4 py-3
                       focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
                       transition resize-none"
          />
        </motion.div>

        <motion.div custom={4} variants={fieldVariants}>
          <button
            type="submit"
            className="w-full py-3 bg-accent dark:bg-gray-500 text-white dark:text-gray-200 font-semibold rounded-lg
                       hover:bg-accent/90 transition shadow-lg"
          >
            Send Message
          </button>
        </motion.div>
      </motion.form>
    </section>
  );
}
