"use client";
import { useState } from "react";

// internal import
import toastmasterslogo from "../assets/toastmasters-logo.png";
import heroimage from "../assets/images/home/hero.jpg";
import bloghero from "../assets/images/blog/bloghero.png";
import galleryhero from "../assets/images/gallery/galleryhero.png";

import "../pages/home.css";

export default function HomeHero() {
  return (
    <div
      className="bg-no-repeat bg-center bg-cover min-h-full py-8 sm:py-16"
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

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/members"
                className="rounded-md bg-gray-500 border border-white px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
              >
                Join us
              </a>
              <a
                href="#meetings"
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
      {/* Darkened overlay */}
      <div className="absolute inset-0 bg-black opacity-75" />{" "}
      {/* Adjust opacity here */}
      <div className="flex items-center justify-center h-full relative z-10 text-center text-white">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Resources and insights
          </h1>
          <p className="text-lg md:text-xl mb-16">
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
          <h1 className="text-3xl md:text-6xl font-bold mb-4">Club Photos</h1>
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

export const NewLeadersHero = () => {
  const [selectedOption, setSelectedOption] = useState("Person");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section
      className="relative w-full h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${galleryhero})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40" />
      {/* Overlay for better text visibility */}
      <div className="flex flex-col items-center justify-center h-full relative z-10 text-center text-white">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Leaders</h1>
          <p className="text-lg md:text-xl mb-4">
            We give you information about our past leadership
          </p>
        </div>

        {/* Search Bar Section */}
        <div className="mt-4 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative bg-white rounded-lg sm:p-4 lg:py-4 lg:px-40">
            {" "}
            {/* Adjusted padding */}
            <div className="flex max-w-md gap-x-0">
              {" "}
              {/* Removed gap-x-2 for border joining */}
              {/* Dropdown */}
              <select
                value={selectedOption}
                onChange={handleDropdownChange}
                className="flex-none rounded-l-md border-0 bg-white px-2 py-2 text-gray-900 shadow-sm sm:text-sm sm:leading-5"
              >
                <option value="Person">Person</option>
                <option value="Leader 1">Leader 1</option>
                <option value="Leader 2">Leader 2</option>
                <option value="Leader 3">Leader 3</option>
                <option value="Leader 4">Leader 4</option>
              </select>
              {/* Search Input with Button */}
              <input
                type="text"
                placeholder="Search..."
                className="flex-auto rounded-none border-0 bg-white px-2 py-1 text-gray-900 shadow-sm sm:text-sm sm:leading-5"
              />
              <button
                type="submit"
                className="flex-none rounded-r-md bg-[#772432] px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-[#5e1c25] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#772432] ml-16"
              >
                Search
              </button>
            </div>
          </div>
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
