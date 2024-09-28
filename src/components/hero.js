"use client";

// internal import
import toastmasterslogo from "../assets/toastmasters-logo.png";
import heroimage from "../assets/images/home/hero.jpg";
import bloghero from "../assets/images/blog/bloghero.png";
import galleryhero from "../assets/images/gallery/galleryhero.png";

export default function HomeHero() {
  return (
    <div
      className="bg-no-repeat bg-center bg-cover min-h-full"
      style={{ backgroundImage: `url(${heroimage})` }}
    >
      <div
        className="relative isolate px-6 lg:px-8"
        // className="bg-cover bg-center relative isolate px-6 lg:px-8"
      >
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div 
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div> */}
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
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              IKEJA
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              TOASTMASTERS
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Where effective communication meets leadership
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join us
              </a>
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Our Meetings
              </a>
            </div>
          </div>
        </div>
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div> */}
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
      {/* Overlay for better text visibility */}
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
