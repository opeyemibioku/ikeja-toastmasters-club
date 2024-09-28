import React from "react";
import { FaBook } from "react-icons/fa";
import { ContactHero } from "../components/hero";
import blog from "../assets/images/blog/blog.png";
import emailicon from "../assets/images/contact/emailicon.png";
import officeicon from "../assets/images/contact/officeicon.png";
import phoneicon from "../assets/images/contact/phoneicon.png";
import contact from "../assets/images/contact/contact.png";

const Contact = () => {
  return (
    <>
      <ContactHero />
      <LayoutSection />
      <ContactForm />
    </>
  );
};

// LayoutSection Component
const LayoutSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="text-center mb-12">
        <h5>Contact us</h5>
        <h2 className="text-4xl font-bold">We’d love to hear from you</h2>
        <p className="text-lg text-gray-600">
          Our friendly team is always here to chat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <img src={emailicon} alt="Email Icon" />
          <h3 className="text-2xl font-semibold">Email</h3>
          <p className="text-gray-600">Our friendly team is here to help.</p>
          <p className="text-gray-500">Ikejatoastmasters@gmail.com</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={officeicon} alt="Office Icon" />
          <h3 className="text-2xl font-semibold">Office</h3>
          <p className="text-gray-600">Come say hello at our office HQ.</p>
          <p className="text-gray-500">
            100 Smith Street Collingwood VIC 3066 AU
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src={phoneicon} alt="Phone Icon" />
          <h3 className="text-2xl font-semibold">Phone</h3>
          <p className="text-gray-600">Mon-Fri from 8am to 5pm.</p>
          <p className="text-gray-500">+234- 000-0000</p>
        </div>
      </div>
    </section>
  );
};

// ContactForm Component
const ContactForm = () => {
  return (
    <section className="py-16 bg-gray-100 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center  lg:text-left lg:space-x-12">
        {/* Contact Form on the Left */}
        <div className="lg:w-1/2 mx-auto">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p>Welcome back Titilayo, Enter your details</p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 p-2 rounded"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Image on the Right */}
        <div className="lg:w-1/2 mx-auto mt-8 lg:mt-0">
          <img
            src={contact}
            alt="Contact Us"
            className="w-full max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
