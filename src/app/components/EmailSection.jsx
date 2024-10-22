"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, subject, message } = e.target;

    if (!email.value || !subject.value || !message.value) {
      setFormError("Please fill out all fields before submitting.");
      return;
    }

    const mailtoLink = `mailto:crystalion141@gmail.com?subject=${encodeURIComponent(
      subject.value
    )}&body=${encodeURIComponent(message.value)}`;

    window.location.href = mailtoLink;
    setEmailSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 py-24 px-8 gap-4 relative bg-gradient-to-b from-blue-950 via-slate-900 to-black"
    >
      {/* Left side - Contact details */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10"
      >
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="https://github.com">
              <FaGithub className="text-white text-3xl" />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="https://linkedin.com">
              <FaLinkedin className="text-white text-3xl" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Right side - Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {emailSubmitted ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-green-500 text-sm mt-2"
          >
            Email sent successfully!
          </motion.p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            {formError && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-red-500 text-sm mb-4"
              >
                {formError}
              </motion.p>
            )}

            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                placeholder="jacob@google.com"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                placeholder="Just saying hi"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                placeholder="Let's talk about..."
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full focus:ring-4 focus:ring-primary-500 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default EmailSection;
