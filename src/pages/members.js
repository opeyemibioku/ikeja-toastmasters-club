import { useRef } from "react";
import { MembersHero } from "../components/hero";
import trial from "../assets/images/members/trial.png";
import event from "../assets/images/leaders/event.png";

const Members = () => {
  return (
    <>
      <MembersHero />
      <DownloadsSignUpSection />
      <WelcomeToTheClub />
      <BecomeMember />
      <FreeTrial />
    </>
  );
};

const DownloadsSignUpSection = () => {
  return (
    <div className="bg-blue-900 text-white py-4 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:mr-10">
          <p className="text-lg mb-6">
            This is a brief description that complements the headline.
          </p>
        </div>
        <button className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Click Me
        </button>
      </div>
    </div>
  );
};

const WelcomeToTheClub = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-gray-100">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-3xl font-bold mb-4">Your Catchy Title</h1>
        <p className="text-lg text-gray-700">
          This is a descriptive text that provides more information about the
          content on the right. It explains what the card contains and why it’s
          relevant to the user.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-xs">
          <img
            src="https://via.placeholder.com/300" // Replace with your image URL
            alt="Example"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Card Title</h2>
            <p className="text-gray-600">
              This is some text below the image in the card.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BecomeMember = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-blue-900 text-white mx-16">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-3xl font-bold mb-4">Your Catchy Title</h1>
        <p className="text-lg">
          This section contains engaging text that captures the essence of the
          content on the right. It provides relevant information to the user,
          enhancing their experience.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://via.placeholder.com/300" // Replace with your image URL
          alt="Example"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

const FreeTrial = () => {
  const offerings = [
    {
      image: trial,
      title: "Offering A",
      subtitle: "Subtitle for offering A",
    },
  ];
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
        {/* <div className="lg:w-1/2 mx-auto mt-8 lg:mt-0">
          <img
            src={trial}
            alt="Contact Us"
            className="w-full max-w-full h-auto rounded-lg shadow-lg"
          />
        </div> */}
        <div className="lg:w-1/2 mx-auto mt-8 lg:mt-0">
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"> */}
          {offerings.map((offering, index) => (
            <div key={index} className="relative overflow-hidden shadow-lg">
              <img
                src={offering.image}
                alt={offering.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end bg-white bg-opacity-90 p-6 m-1 rounded-b-lg">
                <h3 className="text-2xl font-semibold text-black mb-1">
                  {offering.title}
                </h3>
                <p className="text-lg text-black">{offering.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Members;
