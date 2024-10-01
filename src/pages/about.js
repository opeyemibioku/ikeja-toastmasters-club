import { useState } from "react";
import Navbar from "../components/navbar";
import abouthero from "../assets/images/about/abouthero.png";
import history from "../assets/images/about/history.png";
import publicspeaking from "../assets/images/about/publicspeaking.png";
import testimonials from "../assets/images/about/testimonials.png";
import leadership from "../assets/images/about/leadership.png";
import gallery from "../assets/images/about/gallery.png";
import awards from "../assets/images/about/awards.png";
import hero from "../assets/images/home/hero.jpg";
import map from "../assets/images/home/map.png";
import whatwedo from "../assets/images/home/whatwedo.png";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OurHistory />
      <Offerings />
      <Testimonials />
      <Leadership />
      <Gallery />
      <Awards />
      <FAQ />
    </>
  );
};

const Hero = () => {
  return (
    <>
      <section class="relative flex flex-col-reverse md:flex-row items-center justify-around gap-8 p-8 md:p-16">
        <div class="md:w-5/12 space-y-4">
          <p class="text-lg md:text-xl text-gray-700">ABOUT US</p>
          <h1 class="text-3xl md:text-4xl font-bold text-[#094F72]">
            Helping individuals develop their public speaking and leadership
            skills in a supportive and encouraging environment
          </h1>
        </div>
        <div class="md:w-5/12 relative">
          <img src={abouthero} alt="Hero Image" class="h-auto z-10 relative" />

          <img
            src={abouthero}
            alt="Behind Image"
            class="hidden md:block absolute -left-20 top-64 h-auto z-0"
          />
        </div>
      </section>

      <section class="relative flex flex-col p-8 md:p-16">
        <div class="md:w-6/12 space-y-4">
          <h2 class="pl-4">OUR VALUES</h2>
          <div class="space-y-4 md:space-y-0">
            <div class="group md:cursor-pointer p-4 rounded-md transition-all relative">
              <h3 class="text-lg font-semibold">Community Building</h3>
              <p class="hidden md:group-hover:block text-gray-700 mt-2">
                We are committed to being honest, transparent, and accountable
                in all our actions.
              </p>
              <p class="block md:hidden text-gray-700 mt-2">
                We are committed to being honest, transparent, and accountable
                in all our actions.
              </p>
            </div>

            <div class="group md:cursor-pointer p-4 rounded-md transition-all relative">
              <h3 class="text-lg font-semibold">Community Building</h3>
              <p class="hidden md:group-hover:block text-gray-700 mt-2">
                Working together is key to achieving success and fostering
                innovation.
              </p>
              <p class="block md:hidden text-gray-700 mt-2">
                Working together is key to achieving success and fostering
                innovation.
              </p>
            </div>

            <div class="group md:cursor-pointer p-4 rounded-md transition-all relative">
              {/* <div class="group md:cursor-pointer md:hover:bg-gray-100 p-4 rounded-md transition-all relative"> */}
              <h3 class="text-lg font-semibold">Community Building</h3>
              <p class="hidden md:group-hover:block text-gray-700 mt-2">
                We strive for the highest standards in everything we do.
              </p>
              <p class="block md:hidden text-gray-700 mt-2">
                We strive for the highest standards in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
const OurHistory = () => {
  return (
    <>
      <div class="flex items-center justify-center h-screen bg-gray-100">
        <div class="w-full max-w-6xl flex items-center">
          <div class="w-7/4">
            <img
              src={history}
              alt="Carousel Image"
              class="w-80 h-92 object-cover"
            />
          </div>
          <div class="w-3/4 p-12">
            <div class="mb-6">
              <h2 class="mb-4">History</h2>
              <p class="text-gray-700 text-lg">
                At Ikeja Toastmasters, we believe in the power of communication
                and leadership to transform lives. Founded in 1942, our
                organization has grown into a community dedicated to to helping
                individuals develop their public speaking and leadership skills
                in a supportive, experiential learning environment. <br />{" "}
                <br />
                At Ikeja Toastmasters, we believe in the power of communication
                and leadership to transform lives. Founded in 1942, our
                organization has grown into a community dedicated to to helping
                individuals develop their public speaking and leadership skills
                in a supportive, experiential learning environment.
              </p>
            </div>
            <div class="flex  space-x-6 mt-8">
              <button class="p-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button class="p-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Offerings = () => {
  const offerings = [
    {
      image: publicspeaking,
      title: "Public Speaking",
      subtitle:
        "At Ikeja Toastmasters, we believe in the power ofcommunication and leadership to transform lives",
    },
    {
      image: publicspeaking,
      title: "Public Speaking",
      subtitle:
        "At Ikeja Toastmasters, we believe in the power ofcommunication and leadership to transform lives",
    },
    {
      image: publicspeaking,
      title: "Public Speaking",
      subtitle:
        "At Ikeja Toastmasters, we believe in the power ofcommunication and leadership to transform lives",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">
          Working with us offers a rewarding experience
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={offering.image}
                alt={offering.title}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold">{offering.title}</h3>
                <p className="text-gray-600">{offering.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-3 bg-[#004165] text-white font-medium rounded-md hover:bg-[#5e1c25] transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const offerings = [
    {
      image: testimonials,
      title: "Testimonials: Watch Video",
      subtitle: "Testimonials: Watch Video",
    },
    {
      image: testimonials,
      title: "Testimonials: Watch Video",
      subtitle: "Testimonials: Watch Video",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto  px-8 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {offerings.map((offering, index) => (
            <div key={index} className="flex flex-col ">
              <div className="mb-6">
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="w-full h-64 object-cover rounded-t-lg border border-gray-300" // Increased height to make the image larger
                />
              </div>
              <div className="">
                <h3 className="text-2xl font-semibold mb-2">
                  {offering.title}
                </h3>
                <p className="text-lg text-gray-600">{offering.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Leadership = () => {
  const offerings = [
    {
      image: leadership,
      title: "President",
      subtitle: "Titilayo Ekundayo",
    },
    {
      image: leadership,
      title: "President",
      subtitle: "Titilayo Ekundayo",
    },
    {
      image: leadership,
      title: "President",
      subtitle: "Titilayo Ekundayo",
    },
    {
      image: leadership,
      title: "President",
      subtitle: "Titilayo Ekundayo",
    },
    {
      image: leadership,
      title: "President",
      subtitle: "Titilayo Ekundayo",
    },
    {
      image: leadership,
      title: "President",
      subtitle: "Titilayo Ekundayo",
    },
    {
      image: leadership,
      title: "President",
      subtitle: "Titilayo Ekundayo",
    },
    {
      image: leadership,
      title: "President",
      subtitle: "Titilayo Ekundayo",
    },
  ];
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16">
        <h2 className="text-4xl font-bold mb-12 ">
          Ikeja Toastmasters Leadership (2022 - Current)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {offerings.map((offering, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-4">
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="w-full h-full object-cover  border border-gray-300"
                />
              </div>
              <div className="text-left">
                <p className="text-lg text-gray-600 mb-2">{offering.title}</p>
                <h3 className="text-2xl font-semibold">{offering.subtitle}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section
      className="relative bg-cover bg-center h-96 my-4 sm:my-8 lg:my-16 mx-4 sm:mx-8 lg:mx-16"
      style={{ backgroundImage: `url(${gallery})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />{" "}
      {/* Overlay for contrast */}
      <div className="flex items-center justify-center h-full relative z-10">
        <div className="text-center text-white px-4">
          <h2 className="text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-lg mb-8">
            Discover the benefits of our offerings.
          </p>
          <button className="px-6 py-3 bg-[#004165] text-white font-medium text-lg rounded-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

const Awards = () => {
  return (
    <>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-8 sm:px-12 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Text Section on the Left */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-6">Awards</h2>
              <p className="font-bold">National</p>
              <ul className="space-y-4 text-lg">
                <li> 2X- Speakeasy Champion (2023, 2019)</li>
                <li> 2X- Speakeasy Champion (2023, 2019)</li>
                <li> 2X- Speakeasy Champion (2023, 2019)</li>
              </ul>
              <p className="mt-6 font-bold">International</p>
              <ul className="space-y-4 text-lg">
                <li> 2X- Speakeasy Champion (2023, 2019)</li>
                <li> 2X- Speakeasy Champion (2023, 2019)</li>
              </ul>
            </div>

            {/* Card Section on the Right */}
            <div className="lg:w-1/2 bg-[#004165] rounded-lg shadow-lg px-5">
              <h3 className="text-2xl font-semibold mb-2 mt-8 text-white">
                International
              </h3>
              <p className="text-lg text-white mb-4">
                The best option for growing your business
              </p>
              <div className="mt-4">
                <img
                  src={awards}
                  alt="Premium Package"
                  className="w-full h-64 object-cover rounded-lg-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-8 sm:px-12 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Card Section on the Left */}
            <div className="lg:w-1/2 bg-[#004165] rounded-lg shadow-lg px-5">
              <h3 className="text-2xl font-semibold mb-2 mt-8 text-white">
                Our Premium Package
              </h3>
              <p className="text-lg text-white mb-4">
                The best option for growing your business
              </p>
              <div className="mt-4">
                <img
                  src={awards}
                  alt="Premium Package"
                  className="w-full h-64 object-cover rounded-lg-top"
                />
              </div>
            </div>

            {/* Card Section on the Right */}
            <div className="lg:w-1/2 bg-[#004165] rounded-lg shadow-lg px-5">
              <h3 className="text-2xl font-semibold mb-2 mt-8 text-white">
                Our Premium Package
              </h3>
              <p className="text-lg mb-4 text-white">
                The best option for growing your business
              </p>
              <div className="mt-4">
                <img
                  src={awards}
                  alt="Premium Package"
                  className="w-full h-64 object-cover rounded-lg-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Accordion Item Component
const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left text-xl font-semibold py-4 px-6 rounded-lg focus:outline-none"
        // className="w-full flex justify-between items-center text-left text-xl font-semibold py-4 px-6 bg-gray-100 rounded-lg focus:outline-none"
      >
        <span>{title}</span>
        <span className="text-2xl">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 rounded-b-lg">
          {/* <div className="px-6 py-4 bg-gray-50 border border-gray-200 rounded-b-lg"> */}
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

// Main Section with Accordion
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Is there a free trial available?",
      content:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "Is there a free trial available?",
      content:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "Is there a free trial available?",
      content:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* Left Section: Title, Subtitle, and Button */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>

            <button className="bg-white border border-[#772432] text-[#772432] py-2 px-6 rounded-lg hover:bg-[#f8f8f8] hover:text-[#772432] transition">
              Join our Guest Whatsapp Group
            </button>
          </div>

          {/* Right Section: Accordion */}
          <div className="lg:w-1/2">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={activeIndex === index}
                onClick={() => handleAccordionClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
