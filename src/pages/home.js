import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";

import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

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
      <Footer />
    </>
  );
};

const Quotes = () => {
  return (
    <>
      {/* <div class="container mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex items-center space-x-4">
            <img
              src={quoteimage}
              alt="Image 1"
              class="w-24 h-16 object-cover rounded"
            />
            <div>
              <p class="text-gray-600">
                This is a brief description or content for the first section. It
                explains the details next to the image.
              </p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <img
              src={quoteimage}
              alt="Image 1"
              class="w-24 h-16 object-cover rounded"
            />
            <div>
              <p class="text-gray-600">
                This is a brief description or content for the second section.
                It explains the details next to the image.
              </p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <img
              src={quoteimage}
              alt="Image 1"
              class="w-24 h-16 object-cover rounded"
            />
            <div>
              <p class="text-gray-600">
                This is a brief description or content for the third section. It
                explains the details next to the image.
              </p>
            </div>
          </div>
        </div>
      </div> */}
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
                This is a brief description or content for the first section. It
                explains the details next to the image.
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
                This is a brief description or content for the second section.
                It explains the details next to the image.
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
                This is a brief description or content for the third section. It
                explains the details next to the image.
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
          {" "}
          {/* Reduced gap */}
          <div className="flex-shrink-0 w-full lg:w-1/2">
            <img
              className="w-full max-w-md h-auto object-cover"
              src={about}
              alt="About Us"
            />
          </div>
          <div className="flex-grow lg:w-1/2 ">
            {" "}
            {/* Reduced padding-left */}
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
              <p className="mt-6 text-lg leading-8 text-gray-600 border-b-2 border-gray-300 inline-block">
                Get to know more about us
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ image, title, shortCardContent }) => {
  return (
    <div className="relative max-w-sm overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={whatwedo} alt="Card Image" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2  bg-blue-500 text-white py-5 px-4 w-11/12 h-40 ">
        <h4 className="font-bold text-lg">{shortCardContent.title}</h4>
        <p className="text-sm">{shortCardContent.description}</p>
      </div>
      <div className="px-6 py-4 mt-32"></div>
    </div>
  );
};
const WhatWeDo = () => {
  const offerings = [
    {
      image: whatwedo,
      title: "Offering A",
      subtitle: "Subtitle for offering A",
    },
    {
      image: whatwedo,
      title: "Offering B",
      subtitle: "Subtitle for offering B",
    },
    {
      image: whatwedo,
      title: "Offering C",
      subtitle: "Subtitle for offering C",
    },
    {
      image: whatwedo,
      title: "Offering D",
      subtitle: "Subtitle for offering D",
    },
    {
      image: whatwedo,
      title: "Offering E",
      subtitle: "Subtitle for offering E",
    },
    {
      image: whatwedo,
      title: "Offering F",
      subtitle: "Subtitle for offering F",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Our New Offerings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
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

const MeetingSchedule = () => {
  return (
    <>
      <div className="overflow-hidden bg-white py-12 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">
            <div className="flex-grow lg:w-1/2 lg:pl-8">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Our Meeting Schedule
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  At Ikeja Toastmasters, we believe in the power of
                  communication and leadership to transform lives. Founded in
                  1942, our organization has grown into a community dedicated to
                  helping individuals develop their public speaking and
                  leadership skills in a supportive, experiential learning
                  environment.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600 border-b-2 border-gray-300 inline-block">
                  Check our Meeting Schedule
                </p>
              </div>
            </div>
            <div className="relative w-full lg:w-1/2 flex-shrink-0">
              <div className="absolute inset-0 bg-gray-100 w-9/12 h-full transform translate-x-5 translate-y-8"></div>
              {/* <div className="absolute inset-0 bg-gray-100 transform translate-x-6 translate-y-10"></div> */}
              <img
                className="relative w-full h-auto max-w-md object-cover"
                src={map}
                alt="Map"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">
            <div className="relative w-full lg:w-1/2 flex-shrink-0">
              <div className="absolute inset-0 bg-gray-100 w-9/12 h-full transform translate-x-5 translate-y-8"></div>
             
              <img
                className="relative w-full h-auto max-w-md object-cover"
                src={map}
                alt="Map"
              />
            </div>
            <div className="flex-grow lg:w-1/2 lg:pl-8">
              <div className="lg:max-w-lg">
                <p className="mt-2 font-bold tracking-tight text-gray-900 sm:text-2xl">
                  "Know the way, Walk the road, Show the way"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

// const MeetingSchedule = () => {
//   return (
//     <>
//       {" "}
//       <div className="overflow-hidden bg-white py-12 sm:py-32">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">
//             <div className="flex-grow lg:w-1/2 lg:pl-8">
//               <div className="lg:max-w-lg">
//                 <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
//                   Our Meeting Schedule
//                 </p>
//                 <p className="mt-6 text-lg leading-8 text-gray-600">
//                   At Ikeja Toastmasters, we believe in the power of
//                   communication and leadership to transform lives. Founded in
//                   1942, our organization has grown into a community dedicated to
//                   helping individuals develop their public speaking and
//                   leadership skills in a supportive, experiential learning
//                   environment.
//                 </p>
//                 <p className="mt-6 text-lg leading-8 text-gray-600 border-b-2 border-gray-300 inline-block">
//                   Check our Meeting Schedule
//                 </p>
//               </div>
//             </div>
//             <div className="relative w-full lg:w-1/2 flex-shrink-0">
//               <div className="absolute inset-0 bg-gray-100 transform translate-x-6 translate-y-10"></div>
//               <img
//                 className="relative w-full h-auto object-cover"
//                 src={map}
//                 alt="Map"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="overflow-hidden bg-white py-24 sm:py-32">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">
//             <div className="relative w-full lg:w-1/2 flex-shrink-0">
//               <div className="absolute inset-0 border-4 border-gray-300 transform translate-x-6 translate-y-10"></div>
//               <img
//                 className="relative w-full h-auto object-cover"
//                 src={map}
//                 alt="Map"
//               />
//             </div>
//             <div className="flex-grow lg:w-1/2 lg:pl-8">
//               <div className="lg:max-w-lg">
//                 <p className="mt-2 font-bold tracking-tight text-gray-900 sm:text-2xl">
//                   "Know the way, Walk the road, Show the way"
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

// const MembersTalk = () => {
//   return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:mx-0">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//             Members Talk
//           </h2>
//         </div>
//         <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-gray-200 lg:mx-0 lg:max-w-none lg:grid-cols-2">
//           {posts.map((post) => (
//             <article
//               key={post.id}
//               className="flex max-w-xl flex-col items-start justify-between"
//             >
//               <div className="group relative border-b pb-8">
//                 <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
//                   <a href={post.href}>
//                     <span className="absolute inset-0" />
//                     {post.title}
//                   </a>
//                 </h3>
//                 <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
//                   {post.description}
//                 </p>
//               </div>
//               <div className="relative mt-8 flex items-center gap-x-4 ">
//                 <img
//                   alt=""
//                   src={post.author.imageUrl}
//                   className="h-10 w-10 rounded-full bg-gray-50"
//                 />
//                 <div className="text-sm leading-6">
//                   <p className="font-semibold text-gray-900">
//                     <a href={post.author.href}>
//                       <span className="absolute inset-0" />
//                       {post.author.name}
//                     </a>
//                   </p>
//                   <p className="text-gray-600">{post.author.role}</p>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//         <div className="mx-auto mt-24 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-gray-200 lg:mx-0 lg:max-w-none lg:grid-cols-2">
//           {posts.map((post) => (
//             <article
//               key={post.id}
//               className="flex max-w-xl flex-col items-start justify-between"
//             >
//               <div className="group relative border-b pb-8">
//                 <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
//                   <a href={post.href}>
//                     <span className="absolute inset-0" />
//                     {post.title}
//                   </a>
//                 </h3>
//                 <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
//                   {post.description}
//                 </p>
//               </div>
//               <div className="relative mt-8 flex items-center gap-x-4 ">
//                 <img
//                   alt=""
//                   src={post.author.imageUrl}
//                   className="h-10 w-10 rounded-full bg-gray-50"
//                 />
//                 <div className="text-sm leading-6">
//                   <p className="font-semibold text-gray-900">
//                     <a href={post.author.href}>
//                       <span className="absolute inset-0" />
//                       {post.author.name}
//                     </a>
//                   </p>
//                   <p className="text-gray-600">{post.author.role}</p>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

const MembersTalk = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            MembersTalk
          </h2>
        </div>
        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-gray-200 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between bg-white p-6 rounded-lg shadow-md"
            >
              <div className="group relative border-b pb-8">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
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
        <div className="mx-auto mt-24 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-gray-200 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between bg-white p-6 rounded-lg shadow-md"
            >
              <div className="group relative border-b pb-8">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
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
    title: "Blog Card 1",
    subtitle: "Subtitle 1",
    image: blogprev,
  },
  {
    id: 2,
    title: "Blog Card 2",
    subtitle: "Subtitle 2",
    image: blogprev,
  },
  {
    id: 3,
    title: "Blog Card 3",
    subtitle: "Subtitle 3",
    image: blogprev,
  },
  {
    id: 4,
    title: "Blog Card 4",
    subtitle: "Subtitle 4",
    image: blogprev,
  },
  {
    id: 5,
    title: "Blog Card 5",
    subtitle: "Subtitle 5",
    image: blogprev,
  },
  {
    id: 6,
    title: "Blog Card 6",
    subtitle: "Subtitle 6",
    image: blogprev,
  },
  {
    id: 7,
    title: "Blog Card 7",
    subtitle: "Subtitle 7",
    image: blogprev,
  },
  {
    id: 8,
    title: "Blog Card 8",
    subtitle: "Subtitle 8",
    image: blogprev,
  },
  {
    id: 9,
    title: "Blog Card 9",
    subtitle: "Subtitle 9",
    image: blogprev,
  },
  {
    id: 10,
    title: "Blog Card 10",
    subtitle: "Subtitle 10",
    image: blogprev,
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
    <div className="pl-32">
      <h1 className="text-2xl font-bold mb-4">Blog Cards</h1>
      <div
        className="flex overflow-x-scroll scrollbar-hide py-2"
        ref={scrollRef}
      >
        {blogCardsData.map((card) => (
          <BlogCard
            key={card.id}
            title={card.title}
            subtitle={card.subtitle}
            image={card.image}
          />
        ))}
      </div>
      <div className="flex justify-center my-4">
        <button
          onClick={() => scroll("left")}
          className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-2 hover:bg-blue-600 transition-colors"
        >
          &lt; {/* Left Arrow */}
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-2 hover:bg-blue-600 transition-colors"
        >
          &gt; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
};
// const blogCardsData = [
//   {
//     id: 1,
//     title: "Blog Card 1",
//     subtitle: "Subtitle 1",
//     image: blogprev,
//     postAuthor: "Titlayo Ekundayo",
//     postTitle: "UX review",
//     postSubtitle: "How do you create compelling presentations",
//   },
//   {
//     id: 2,
//     title: "Blog Card 2",
//     subtitle: "Subtitle 2",
//     image: blogprev,
//     postAuthor: "Titlayo Ekundayo",
//     postTitle: "UX review",
//     postSubtitle: "How do you create compelling presentations",
//   },
//   {
//     id: 3,
//     title: "Blog Card 3",
//     subtitle: "Subtitle 3",
//     image: blogprev,
//     postAuthor: "Titlayo Ekundayo",
//     postTitle: "UX review",
//     postSubtitle: "How do you create compelling presentations",
//   },
//   {
//     id: 4,
//     title: "Blog Card 4",
//     subtitle: "Subtitle 4",
//     image: blogprev,
//     postAuthor: "Titlayo Ekundayo",
//     postTitle: "UX review",
//     postSubtitle: "How do you create compelling presentations",
//   },
//   {
//     id: 5,
//     title: "Blog Card 5",
//     subtitle: "Subtitle 5",
//     image: blogprev,
//     postTitle: "UX review",
//     postSubtitle: "How do you create compelling presentations",
//   },
//   {
//     id: 6,
//     title: "Blog Card 6",
//     subtitle: "Subtitle 6",
//     image: blogprev,
//     postTitle: "UX review",
//     postSubtitle: "How do you create compelling presentations",
//   },
//   {
//     id: 7,
//     title: "Blog Card 7",
//     subtitle: "Subtitle 7",
//     image: blogprev,
//     postTitle: "UX review",
//     postSubtitle: "How do you create compelling presentations",
//   },
//   {
//     id: 8,
//     title: "Blog Card 8",
//     subtitle: "Subtitle 8",
//     image: blogprev,
//     postTitle: "UX review",
//     postSubtitle: "How do you create compelling presentations",
//   },
//   {
//     id: 9,
//     title: "Blog Card 9",
//     subtitle: "Subtitle 9",
//     image: blogprev,
//     postTitle: "UX review",
//     postSubtitle: "How do you create compelling presentations",
//   },
//   {
//     id: 10,
//     title: "Blog Card 10",
//     subtitle: "Subtitle 10",
//     image: blogprev,
//     postTitle: "UX review",
//     postSubtitle: "How do you create compelling presentations",
//   },
// ];

// const BlogCard = ({ title, subtitle, image }) => (
//   <div className="min-w-[30rem] bg-white shadow-md rounded-lg overflow-hidden mx-2 mb-8">
//     <img src={image} alt={title} className="w-full h-48 object-cover" />
//     <div className="p-4">
//       <h2 className="text-lg font-semibold">{title}</h2>
//       <p className="text-gray-600">{subtitle}</p>
//     </div>
//   </div>
// );

// const LatestBlog = () => {
//   return (
//     <div className="pl-32">
//       {/* <div className="max-w-screen-lg mx-auto p-4"> */}
//       <h1 className="text-2xl font-bold mb-4">Blog Cards</h1>
//       <div className="flex overflow-x-scroll scrollbar-hide py-2">
//         {blogCardsData.map((card) => (
//           <BlogCard
//             key={card.id}
//             title={card.title}
//             subtitle={card.subtitle}
//             image={card.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

const Newsletter = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative bg-white/10 rounded-lg p-8 sm:p-12 lg:p-16">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Receive Updates from us
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Stay in the loop with everything you need to know.
              </p>
            </div>
            <div className="">
              <div className="mt-6 flex max-w-md gap-x-4">
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
                  className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-lg leading-8 text-gray-300">
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

// const Newsletter = () => {
//   return (
//     <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
//           <div className="max-w-xl lg:max-w-lg">
//             <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
//               Receive Updates from us
//             </h2>
//             <p className="mt-4 text-lg leading-8 text-gray-300">
//               Stay in the loop with everything you need to know.
//             </p>
//           </div>
//           <div className="">
//             <div className="mt-6 flex max-w-md gap-x-4">
//               <label htmlFor="email-address" className="sr-only">
//                 Email address
//               </label>
//               <input
//                 id="email-address"
//                 name="email"
//                 type="email"
//                 required
//                 placeholder="Enter your email"
//                 autoComplete="email"
//                 className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//               />
//               <button
//                 type="submit"
//                 className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
//               >
//                 Subscribe
//               </button>
//             </div>
//             <p className="mt-4 text-lg leading-8 text-gray-300">
//               We care about your data in our privacy policy.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div
//         aria-hidden="true"
//         className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
//       >
//         <div
//           style={{
//             clipPath:
//               "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//           }}
//           className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
//         />
//       </div>
//     </div>
//   );
// };

const Footer = () => {
  return (
    <>
      <footer class="bg-gray-100 py-8">
        <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0">
          <div>
            <h4 class="text-lg font-bold mb-4">Clothing</h4>
            <ul class="list-none space-y-2">
              <li>Tops</li>
              <li>Dresses</li>
              <li>Pants</li>
              <li>Denim</li>
              <li>Sweaters</li>
              <li>T-Shirts</li>
              <li>Jackets</li>
              <li>Activewear</li>
              <li>Browse All</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold mb-4">Accessories</h4>
            <ul class="list-none space-y-2">
              <li>Watches</li>
              <li>Wallets</li>
              <li>Bags</li>
              <li>Sunglasses</li>
              <li>Hats</li>
              <li>Belts</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold mb-4">Brands</h4>
            <ul class="list-none space-y-2">
              <li>Full Nelson</li>
              <li>My Way</li>
              <li>Re-Arranged</li>
              <li>Counterfeit</li>
              <li>Significant Other</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold mb-4">About Us</h4>
            <ul class="list-none space-y-2">
              <li>Our Story</li>
              <li>Careers</li>
              <li>Sustainability</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>

          <div class="flex flex-col justify-end">
            <div class="flex items-center space-x-4">
              <h4 class="text-lg font-bold">Get in Touch</h4>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.61 8.04 8.29 8.88v-6.28h-2.5v-2.6h2.5v-1.99c0-2.45 1.49-3.79 3.67-3.79 1.04 0 1.94.08 2.19.11v2.53h-1.5c-1.18 0-1.41.56-1.41 1.38v1.77h2.81l-.37 2.6h-2.43v6.28c4.68-.84 8.29-4.47 8.29-8.88 0-5.5-4.46-9.96-9.96-9.96z" />
                  </svg>
                </a>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.61 8.04 8.29 8.88v-6.28h-2.5v-2.6h2.5v-1.99c0-2.45 1.49-3.79 3.67-3.79 1.04 0 1.94.08 2.19.11v2.53h-1.5c-1.18 0-1.41.56-1.41 1.38v1.77h2.81l-.37 2.6h-2.43v6.28c4.68-.84 8.29-4.47 8.29-8.88 0-5.5-4.46-9.96-9.96-9.96z" />
                  </svg>
                </a>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.61 8.04 8.29 8.88v-6.28h-2.5v-2.6h2.5v-1.99c0-2.45 1.49-3.79 3.67-3.79 1.04 0 1.94.08 2.19.11v2.53h-1.5c-1.18 0-1.41.56-1.41 1.38v1.77h2.81l-.37 2.6h-2.43v6.28c4.68-.84 8.29-4.47 8.29-8.88 0-5.5-4.46-9.96-9.96-9.96z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="bg-gray-200 py-2">
        <div class="container mx-auto flex items-center justify-between px-4">
          <div class="flex items-center space-x-2">
            <img src="logo.png" alt="Company Logo" class="h-8" />
            <span class="text-lg font-bold">Ikeja Toastmasters</span>
          </div>

          <div class="flex flex-col items-end space-y-1">
            <div class="flex space-x-4 text-gray-600">
              <a href="#" class="hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" class="hover:text-gray-900">
                Terms and Conditions
              </a>
            </div>
            <span class="text-sm text-gray-600">
              © Copyright 2024 Ikeja Toastmasters. All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
