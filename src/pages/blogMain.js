import React from "react";
import { useRef } from "react";
import bloghero from "../assets/images/blog/bloghero.png";
import blogprev from "../assets/images/blog/blogpreview/blogprev.png";
import Navbar from "../components/navbar";
const BlogMain = () => {
  return (
    <>
      <Navbar />
      <BlogBody />
      <BlogScroll />
    </>
  );
};

const BlogBody = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-16">
      {/* Title Section */}
      <section className="mb-8 pl-4 md:pl-12 lg:pl-36 xl:pl-48">
        <p>Titilayo Ekundayo</p>
        <p>24th July, 2024</p>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">Case Study:</h1>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          The Process behind Ikeja Toastmasters
        </h1>
      </section>

      {/* Image Below Title Section */}
      <section className="mb-8">
        <img
          src={bloghero}
          alt="Main Visual"
          className="mx-auto w-full max-w-4xl"
        />
      </section>

      {/* Quoted Paragraph Section */}
      <section className="mb-8 p-4 md:px-16 lg:px-32 xl:px-48">
        <blockquote className="text-lg italic text-gray-700">
          “At Ikeja Toastmasters, we believe in the power of lore, communication
          and leadership to transform lives. At Ikeja Toastmasters, we believe
          in the power of lore, communication and leadership to transform
          lives.“
        </blockquote>
      </section>

      {/* Quick Links Section */}
      <section className="mb-8">
        <h3 className="mb-4 font-bold text-lg pl-8 md:pl-20 lg:pl-32 xl:px-36">
          QUICK LINKS
        </h3>
        <ul className="pl-8 md:pl-20 lg:pl-32 xl:px-36 text-blue-600 space-y-2">
          <li className="flex items-center text-black">
            <span className="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            <a href="#link1">Introduction</a>
          </li>
          <li className="flex items-center text-black">
            <span className="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            <a href="#link2">Case Study: In-depth vs Summarised approach</a>
          </li>
          <li className="flex items-center text-black">
            <span className="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            <a href="#link3">Other resources</a>
          </li>
          <li className="flex items-center text-black">
            <span className="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            <a href="#link4">Past Execs.</a>
          </li>
          <li className="flex items-center text-black">
            <span className="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            <a href="#link5">About us</a>
          </li>
        </ul>
      </section>

      {/* Another Title and Paragraph Section */}
      <section className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-4 pl-8 md:pl-20 lg:pl-32 xl:px-36">
          Introduction
        </h2>
        <p className="text-lg text-gray-700 pl-8 md:pl-20 lg:pl-32 xl:px-36">
          At Ikeja Toastmasters, we believe in the power of communication and
          leadership to transform lives. Founded in 2014, our organization has
          grown into a community dedicated to helping individuals develop their
          public speaking and leadership skills in a supportive, experiential
          learning environment.
        </p>
        <p className="text-lg text-gray-700 pl-8 md:pl-20 lg:pl-32 xl:px-36 mt-8">
          At Ikeja Toastmasters, we believe in the power of communication and
          leadership to transform lives. Founded in 2014, our organization has
          grown into a community dedicated to helping individuals develop their
          public speaking and leadership skills in a supportive, experiential
          learning environment.
        </p>
      </section>

      {/* Another Image Section */}
      <section className="mb-8">
        <img
          src={bloghero}
          alt="Additional Visual"
          className="mx-auto w-full max-w-4xl"
        />
      </section>

      {/* More Paragraph Text */}
      <section className="mb-8">
        <p className="text-lg text-gray-700 pl-8 md:pl-20 lg:pl-32 xl:px-36 mt-8">
          At Ikeja Toastmasters, we believe in the power of communication and
          leadership to transform lives. Founded in 2014, our organization has
          grown into a community dedicated to helping individuals develop their
          public speaking and leadership skills in a supportive, experiential
          learning environment.
        </p>
        <p className="text-lg text-gray-700 pl-8 md:pl-20 lg:pl-32 xl:px-36 mt-8">
          At Ikeja Toastmasters, we believe in the power of communication and
          leadership to transform lives. Founded in 2014, our organization has
          grown into a community dedicated to helping individuals develop their
          public speaking and leadership skills in a supportive, experiential
          learning environment.
        </p>
      </section>

      {/* Quoted Paragraph Section */}
      <section className="mb-8 p-4 md:px-16 lg:px-32 xl:px-72">
        <blockquote className="text-lg italic text-gray-700">
          “At Ikeja Toastmasters, we believe in the power of lore, communication
          and leadership to transform lives. At Ikeja Toastmasters, we believe
          in the power of lore, communication and leadership to transform
          lives.“
        </blockquote>
        <p className="text-lg text-gray-700">
          — Titilayo Ekundayo, President, Ikeja Toastmasters.
        </p>
      </section>

      {/* Paragraph Text Below Quote */}
      <p className="text-lg text-gray-700 pl-8 md:pl-20 lg:pl-32 xl:px-36 mt-8">
        At Ikeja Toastmasters, we believe in the power of communication and
        leadership to transform lives. Founded in 2014, our organization has
        grown into a community dedicated to helping individuals develop their
        public speaking and leadership skills in a supportive, experiential
        learning environment.
      </p>

      {/* Title and Paragraph Section */}
      <section className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-4 pl-8 md:pl-20 lg:pl-32 xl:px-36 mt-8">
          Case Study: In-depth analysis vs summarized approach
        </h2>
        <p className="text-lg text-gray-700 pl-8 md:pl-20 lg:pl-32 xl:px-36 mt-8">
          At Ikeja Toastmasters, we believe in the power of communication and
          leadership to transform lives. Founded in 2014, our organization has
          grown into a community dedicated to helping individuals develop their
          public speaking and leadership skills in a supportive, experiential
          learning environment.
        </p>
        <p className="text-lg text-gray-700 pl-8 md:pl-20 lg:pl-32 xl:px-36 mt-8">
          At Ikeja Toastmasters, we believe in the power of communication and
          leadership to transform lives. Founded in 2014, our organization has
          grown into a community dedicated to helping individuals develop their
          public speaking and leadership skills in a supportive, experiential
          learning environment.
        </p>
        <p className="text-lg text-gray-700 pl-8 md:pl-20 lg:pl-32 xl:px-36 mt-8">
          At Ikeja Toastmasters, we believe in the power of communication and
          leadership to transform lives. Founded in 2014, our organization has
          grown into a community dedicated to helping individuals develop their
          public speaking and leadership skills in a supportive, experiential
          learning environment.
        </p>
        <p className="text-lg text-gray-700 pl-8 md:pl-20 lg:pl-32 xl:px-36 mt-8">
          At Ikeja Toastmasters, we believe in the power of communication and
          leadership to transform lives. Founded in 2014, our organization has
          grown into a community dedicated to helping individuals develop their
          public speaking and leadership skills in a supportive, experiential
          learning environment.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-4 pl-8 md:pl-20 lg:pl-32 xl:px-36 mt-8">
          Other resources
        </h2>
        <p className="text-lg text-gray-700 pl-8 md:pl-20 lg:pl-32 xl:px-36 mt-8">
          Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas
          sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor
          rutrum lacus malesuada massa ornare et. Vulputate consectetur ac
          ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim
          massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac
          elementum gravida cursus dis.
        </p>
        <section className="mb-8 mt-4">
          <ol className="pl-8 md:pl-20 lg:pl-32 xl:px-40 text-blue-600 space-y-2 list-decimal">
            <li className="text-black">
              <a href="#link1">
                Lectus id duis vitae porttitor enim gravida morbi.
              </a>
            </li>
            <li className="text-black">
              <a href="#link2">
                Eu turpis posuere semper feugiat volutpat elit, ultrices
                suspendisse. Auctor vel in vitae placerat.
              </a>
            </li>
            <li className="text-black">
              <a href="#link3">
                Suspendisse maecenas ac donec scelerisque diam sed est duis
                purus.
              </a>
            </li>
          </ol>
        </section>
      </section>

      {/* Final Image Section */}
      <section className="mb-8">
        <img
          src={bloghero}
          alt="Descriptive Alt Text"
          className="mx-auto w-full max-w-4xl"
        />
      </section>

      {/* Final Paragraph Section */}
      <section>
        <p className="text-lg text-gray-700 pl-8 md:pl-20 lg:pl-32 xl:px-36 mt-8">
          At Ikeja Toastmasters, we believe in the power of communication and
          leadership to transform lives. Founded in 2014, our organization has
          grown into a community dedicated to helping individuals develop their
          public speaking and leadership skills in a supportive, experiential
          learning environment.
        </p>
        <p className="text-lg text-gray-700 pl-8 md:pl-20 lg:pl-32 xl:px-36 mt-8">
          At Ikeja Toastmasters, we believe in the power of communication and
          leadership to transform lives. Founded in 2014, our organization has
          grown into a community dedicated to helping individuals develop their
          public speaking and leadership skills in a supportive, experiential
          learning environment.
        </p>
      </section>
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

const BlogScroll = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="lg:pl-32">
      <h1 className="text-xl font-bold mb-4 pl-4">Latest Posts</h1>
      <h1 className="text-2xl font-bold mb-4 pl-4">Ikeja toastmasters Blog</h1>
      <p className="mb-8 pl-4">
        Interviews, tips, guides, industry best practices, and news.
      </p>
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

export default BlogMain;
