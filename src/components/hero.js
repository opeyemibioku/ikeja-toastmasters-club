"use client";

// internal import
import toastmasterslogo from "../assets/toastmasters-logo.png";
import heroimage from "../assets/images/home/hero.jpg";
import bloghero from "../assets/images/blog/bloghero.png";
import galleryhero from "../assets/images/gallery/galleryhero.png";

import "../pages/home.css";

export default function HomeHero() {
  return (
    <div
      className="bg-no-repeat bg-center bg-cover min-h-full"
      style={{ backgroundImage: `url(${heroimage})` }}
    >
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:py-48 lg:py-20">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-400/10 hover:ring-gray-900/20">
              <a href="#" className="font-semibold text-indigo-600">
                <img src={toastmasterslogo} className="inline w-10" />
              </a>{" "}
              Toastmasters Club of the year
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-white text-4xl  sm:text-6xl">IKEJA</h1>
            <h1 className="text-4xl tracking-tight text-white sm:text-6xl">
              TOASTMASTERS
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Where effective communication meets leadership
            </p>
            {/* <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join us
              </a>
              <a
                href="#"
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Our Meetings
              </a>
            </div> */}

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-gray-500 border border-white px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
              >
                Join us
              </a>
              <a
                href="#"
                className="rounded-md bg-[#004165] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#00324d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004165]"
              >
                Our Meetings
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const BlogPreviewHero = () => {
  return (
    <section
      className="relative w-full h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${bloghero})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40" />{" "}
      <div className="flex items-center justify-center h-full relative z-10 text-center text-white">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Resources and insights
          </h1>
          <p className="text-lg md:text-xl mb-8">
            The latest industry news, interviews, technologies, and resources.
          </p>
        </div>
      </div>
    </section>
  );
};

export const GalleryHero = () => {
  return (
    <section
      className="relative w-full h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${galleryhero})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40" />{" "}
      {/* Overlay for better text visibility */}
      <div className="flex items-center justify-center h-full relative z-10 text-center text-white">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Club Photos</h1>
          <p className="text-lg md:text-xl mb-8">
            Join our Community: Where your Journey Begins and Connections
            Flourish
          </p>
        </div>
      </div>
    </section>
  );
};
export const ContactHero = () => {
  return (
    <section
      className="relative w-full h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${galleryhero})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40" />{" "}
      {/* Overlay for better text visibility */}
      <div className="flex items-center justify-center h-full relative z-10 text-center text-white">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl mb-8">
            Join our Community: Where your Journey Begins and Connections
            Flourish
          </p>
        </div>
      </div>
    </section>
  );
};

export const LeadersHero = () => {
  return (
    <section
      className="relative w-full h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${galleryhero})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40" />{" "}
      {/* Overlay for better text visibility */}
      <div className="flex items-center justify-center h-full relative z-10 text-center text-white">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Leaders</h1>
          <p className="text-lg md:text-xl mb-8">
            We give you information about our past leadership
          </p>
        </div>
      </div>
    </section>
  );
};
export const MembersHero = () => {
  return (
    <section
      className="relative w-full h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${galleryhero})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40" />{" "}
      {/* Overlay for better text visibility */}
      <div className="flex items-center justify-center h-full relative z-10 text-center text-white">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Become a Member
          </h1>
          <p className="text-lg md:text-xl mb-8">
            We give you information about our past leadership
          </p>
        </div>
      </div>
    </section>
  );
};
