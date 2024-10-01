import { useRef } from "react";

//internal import

import Navbar from "../components/navbar";
import HomeHero from "../components/hero";
import quoteimage from "../assets/images/home/quoteimage.png";
import about from "../assets/images/home/about.png";
import whatwedo from "../assets/images/home/whatwedo.png";
import map from "../assets/images/home/map.png";
import blogprev from "../assets/images/blog/blogpreview/blogprev.png";

import "./home.css";

export const Home = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <Quotes />
      <AboutUs />
      <WhatWeDo />
      <MeetingSchedule />
      <MembersTalk />
      <LatestBlog />
      <Newsletter />
    </>
  );
};

const Quotes = () => {
  return (
    <>
      <div class="container mx-auto px-4 py-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
          <div class="flex items-center space-x-4">
            <img
              src={quoteimage}
              alt="Image 1"
              class="w-24 h-16 object-cover rounded"
            />
            <div>
              <p class="text-gray-600">
                “In a world older and more complete than ours they finished and
                complete, gifted with exten have lost or never attained, living
                by voices we shall never hear.”
              </p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <img
              src={quoteimage}
              alt="Image 2"
              class="w-24 h-16 object-cover rounded"
            />
            <div>
              <p class="text-gray-600">
                “In a world older and more complete than ours they finished and
                complete, gifted with exten have lost or never attained, living
                by voices we shall never hear.”
              </p>
            </div>
          </div>

          <div class="flex items-center space-x-4 md:col-span-2 lg:col-span-1 md:justify-center">
            <img
              src={quoteimage}
              alt="Image 3"
              class="w-24 h-16 object-cover rounded"
            />
            <div>
              <p class="text-gray-600">
                “In a world older and more complete than ours they finished and
                complete, gifted with exten have lost or never attained, living
                by voices we shall never hear.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const AboutUs = () => {
  return (
    <div className="overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-5">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex-shrink-0 w-full lg:w-1/2">
            <img
              className="w-full max-w-md h-auto object-cover"
              src={about}
              alt="About Us"
            />
          </div>
          <div className="flex-grow lg:w-1/2">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                About Us
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Ikeja Toastmasters, we believe in the power of communication
                and leadership to transform lives. Founded in 1942, our
                organization has grown into a community dedicated to helping
                individuals develop their public speaking and leadership skills
                in a supportive, experiential learning environment.
              </p>
              <a href="/about">
                {" "}
                <div className="mt-6 text-lg leading-8 text-gray-600 relative">
                  <span className="inline-flex items-center">
                    <p className="mr-2">Get to know more about us</p>
                    <span className="text-black">
                      {/* Top-right arrow (SVG) */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </span>
                  </span>
                  <div
                    className="border-b-8 border-[#401119] mt-2"
                    style={{ width: "15rem" }} // Adjust the width of the line as needed
                  ></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhatWeDo = () => {
  const offerings = [
    {
      image: whatwedo,
      title: "Public Speaking",
      subtitle:
        "At Ikeja Toastmasters, we believe in the power of communication and leadership to transform lives",
    },
    {
      image: whatwedo,
      title: "Public Speaking",
      subtitle:
        "At Ikeja Toastmasters, we believe in the power of communication and leadership to transform lives",
    },
    {
      image: whatwedo,
      title: "Public Speaking",
      subtitle:
        "At Ikeja Toastmasters, we believe in the power of communication and leadership to transform lives",
    },
    {
      image: whatwedo,
      title: "Public Speaking",
      subtitle:
        "At Ikeja Toastmasters, we believe in the power of communication and leadership to transform lives",
    },
    {
      image: whatwedo,
      title: "Public Speaking",
      subtitle:
        "At Ikeja Toastmasters, we believe in the power of communication and leadership to transform lives",
    },
    {
      image: whatwedo,
      title: "Public Speaking",
      subtitle:
        "At Ikeja Toastmasters, we believe in the power of communication and leadership to transform lives",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16">
        {/* Align the "What we do" text to the left */}
        <h2 className="text-4xl font-bold mb-12 text-left">What we do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {offerings.map((offering, index) => (
            <div key={index} className="relative overflow-hidden shadow-lg">
              <img
                src={offering.image}
                alt={offering.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end bg-[#004165] bg-opacity-90 p-6 m-1 rounded-b-lg">
                <h3 className="text-2xl font-semibold text-white mb-1">
                  {offering.title}
                </h3>
                <p className="text-lg text-white">{offering.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MeetingSchedule = () => {
  return (
    <>
      <div
        className="overflow-hidden bg-[#004165] py-12 sm:py-32"
        id="meetings"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">
            <div className="flex-grow lg:w-1/2 lg:pl-8">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-3xl">
                  Our Meeting Schedule
                </p>
                <p className="mt-6 text-lg leading-8 text-white">
                  At Ikeja Toastmasters, we believe in the power of
                  communication and leadership to transform lives. Founded in
                  1942, our organization has grown into a community dedicated to
                  helping individuals develop their public speaking and
                  leadership skills in a supportive, experiential learning
                  environment.
                </p>
                <div className="mt-6 text-lg leading-8 text-white relative">
                  <span className="inline-flex items-center">
                    <p className="mr-2 "> Check our Meeting Schedule</p>
                    <span className="text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </span>
                  </span>
                  <div
                    className="border-b-8 border-[#053852] mt-2"
                    style={{ width: "16rem" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="relative w-full lg:w-1/2 flex-shrink-0">
              <div className="absolute inset-0 bg-gray-100 w-9/12 h-full transform translate-x-5 translate-y-8 opacity-10"></div>
              <img
                className="relative w-full h-auto max-w-md object-cover"
                src={map}
                alt="Map"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const posts = [
  {
    id: 1,
    href: "#",
    description:
      "“The Agency provides exceptional service with unmatched professionalism, tailoring clients to workers. Their proactive approach and seamless communication led to efficient delivery of desired services.”",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",

    author: {
      name: "Victor Ekundayo",
      role: "Client",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    href: "#",
    description:
      "“The Agency provides  exceptional service with unmatched professionalism, tailoring clients to workers. Their proactive approach and seamless communication led to efficient delivery of desired services.”",
    date: "Apr 10, 2021",
    datetime: "2021-04-10",

    author: {
      name: "Omotebi Akinnagbe",
      role: "Client",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    href: "#",
    description:
      "“The Agency provides  exceptional service with unmatched professionalism, tailoring clients to workers. Their proactive approach and seamless communication led to efficient delivery of desired services.”",
    date: "May 15, 2022",
    datetime: "2022-05-15",

    author: {
      name: "Akinnnagbe Olajide",
      role: "Client",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    href: "#",
    description:
      "“The Agency provides  exceptional service with unmatched professionalism, tailoring clients to workers. Their proactive approach and seamless communication led to efficient delivery of desired services.”",
    date: "Jun 20, 2023",
    datetime: "2023-06-20",

    author: {
      name: "Constance C.J.",
      role: "Member / Coach",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const MembersTalk = () => {
  return (
    <div className="bg-white pb-24 pt-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Centering the heading using flexbox */}
        <div className="flex justify-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            Members Talk
          </h2>
        </div>
        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-gray-200 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between bg-[#F5F5F5] p-6 rounded-lg shadow-md"
            >
              <div className="group relative border-b pb-8">
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  alt=""
                  src={post.author.imageUrl}
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const blogCardsData = [
  {
    id: 1,
    title: "Olivia Rhye",
    subtitle: "",
    additionalTitle: "UX review presentations",
    additionalSubtitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: blogprev,
    readMoreLink: "/blog-preview", // Unique link for Blog Card 1
  },
  {
    id: 2,
    title: "Olivia Rhye",
    subtitle: "",
    additionalTitle: "UX review presentations",
    additionalSubtitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: blogprev,
    readMoreLink: "/blog-preview", // Unique link for Blog Card 2
  },
  {
    id: 3,
    title: "Olivia Rhye",
    subtitle: "",
    additionalTitle: "UX review presentations",
    additionalSubtitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: blogprev,
    readMoreLink: "/blog-preview", // Unique link for Blog Card 3
  },
  {
    id: 4,
    title: "Olivia Rhye",
    subtitle: "",
    additionalTitle: "UX review presentations",
    additionalSubtitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: blogprev,
    readMoreLink: "/blog-preview", // Unique link for Blog Card 4
  },
  {
    id: 5,
    title: "Olivia Rhye",
    subtitle: "",
    additionalTitle: "UX review presentations",
    additionalSubtitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: blogprev,
    readMoreLink: "/blog-preview", // Unique link for Blog Card 5
  },
  {
    id: 6,
    title: "Olivia Rhye",
    subtitle: "",
    additionalTitle: "UX review presentations",
    additionalSubtitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: blogprev,
    readMoreLink: "/blog-preview", // Unique link for Blog Card 6
  },
  {
    id: 7,
    title: "Olivia Rhye",
    subtitle: "",
    additionalTitle: "UX review presentations",
    additionalSubtitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: blogprev,
    readMoreLink: "/blog-preview", // Unique link for Blog Card 7
  },
  {
    id: 8,
    title: "Olivia Rhye",
    subtitle: "",
    additionalTitle: "UX review presentations",
    additionalSubtitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: blogprev,
    readMoreLink: "/blog-preview", // Unique link for Blog Card 8
  },
  {
    id: 9,
    title: "Olivia Rhye",
    subtitle: "",
    additionalTitle: "UX review presentations",
    additionalSubtitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: blogprev,
    readMoreLink: "/blog-preview", // Unique link for Blog Card 9
  },
  {
    id: 10,
    title: "Olivia Rhye",
    subtitle: "",
    additionalTitle: "UX review presentations",
    additionalSubtitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: blogprev,
    readMoreLink: "/blog-preview", // Unique link for Blog Card 10
  },
];

const BlogCard = ({ title, subtitle, image }) => (
  <div className="min-w-[30rem] bg-white shadow-md rounded-lg overflow-hidden mx-2 mb-8">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  </div>
);

const LatestBlog = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="lg:pl-32">
      <h1 className="text-xl font-bold mb-4 pl-4">Read the latest from us</h1>
      <div
        className="flex overflow-x-scroll scrollbar-hide py-2"
        ref={scrollRef}
      >
        {blogCardsData.map((card) => (
          <div key={card.id} className="flex flex-col items-start mx-2 mb-8">
            <BlogCard
              title={card.title}
              subtitle={card.subtitle}
              image={card.image}
            />
            {/* Additional Title and Subtitle Below Card */}
            <div className="px-4">
              <h3 className="text-lg font-semibold">{card.additionalTitle}</h3>
              <p className="text-gray-500">{card.additionalSubtitle}</p>
              <a
                href={card.readMoreLink} // Use the unique link for each blog card
                className="text-[#772432] flex items-center mt-2" // Change to your specified color
              >
                Read Post
                <span className="text-[#772432]">
                  {" "}
                  {/* Apply the same color to the icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-4">
        <button
          onClick={() => scroll("left")}
          className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center mx-2 shadow-lg hover:shadow-xl transition-shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center mx-2 shadow-lg hover:shadow-xl transition-shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Newsletter = () => {
  return (
    <div className="relative isolate overflow-hidden bg-[#004165] py-16 sm:py-24 lg:py-32 mb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative bg-white rounded-lg p-8 sm:p-12 lg:p-16">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Receive Updates from us
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-800">
                Stay in the loop with everything you need to know.
              </p>
            </div>
            <div>
              <div className=" flex flex-col sm:flex-row max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#772432] sm:text-sm sm:leading-6"
                />
                <button
                  type="submit"
                  className="mt-4 sm:mt-0 flex-none rounded-md bg-[#772432] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#5e1c25] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#772432]"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-lg leading-8 text-gray-800">
                We care about your data in our privacy policy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  );
};
