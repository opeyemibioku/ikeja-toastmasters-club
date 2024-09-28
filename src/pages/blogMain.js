import React from "react";
import { useRef } from "react";
import bloghero from "../assets/images/blog/bloghero.png";
const BlogMain = () => {
  return (
    <>
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
          Quick Links
        </h3>
        <ul className="pl-8 md:pl-20 lg:pl-32 xl:px-36 text-blue-600 space-y-2">
          <li className="flex items-center">
            <span className="mr-2">↗</span>
            <a href="#link1">Quick Link 1</a>
          </li>
          <li className="flex items-center">
            <span className="mr-2">↗</span>
            <a href="#link2">Quick Link 2</a>
          </li>
          <li className="flex items-center">
            <span className="mr-2">↗</span>
            <a href="#link3">Quick Link 3</a>
          </li>
          <li className="flex items-center">
            <span className="mr-2">↗</span>
            <a href="#link4">Quick Link 4</a>
          </li>
          <li className="flex items-center">
            <span className="mr-2">↗</span>
            <a href="#link5">Quick Link 5</a>
          </li>
          <li className="flex items-center">
            <span className="mr-2">↗</span>
            <a href="#link6">Quick Link 6</a>
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
            <li>
              <a href="#link1">
                Lectus id duis vitae porttitor enim gravida morbi.
              </a>
            </li>
            <li>
              <a href="#link2">
                Eu turpis posuere semper feugiat volutpat elit, ultrices
                suspendisse. Auctor vel in vitae placerat.
              </a>
            </li>
            <li>
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

// const BlogScroll = () => {
//   const scrollRef = useRef(null);

//   // Function to scroll cards horizontally
//   const scroll = (direction) => {
//     const scrollAmount = 300; // Customize scroll amount as needed
//     if (direction === "left") {
//       scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//     } else {
//       scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="py-16 relative">
//       <p className="text-lg text-gray-700 pl-8 md:pl-20 lg:pl-32 xl:px-36 ">
//         Latest posts
//       </p>
//       <h2 className="text-2xl lg:text-3xl font-semibold mb-4 pl-8 md:pl-20 lg:pl-32 xl:px-36 mt-4">
//         Ikeja toastmasters Blog
//       </h2>
//       <p className="text-lg text-gray-700 pl-8 md:pl-20 lg:pl-32 xl:px-36 mt-4">
//         Interviews, tips, guides, industry best practices, and news.
//       </p>

//       {/* Card Section with Horizontal Scroll */}
//       <div className="relative">
//         {/* Cards Wrapper */}
//         <div
//           className="flex overflow-x-auto space-x-6 scrollbar-hide"
//           ref={scrollRef}
//           style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Hide scrollbar for Firefox
//         >
//           {/* Card */}
//           <div className="min-w-[300px] bg-white shadow-md rounded-lg">
//             <img src={bloghero} alt="Card 1" className="mb-4 mx-auto" />
//             <h3 className="text-xl font-semibold mb-2 px-6">Card Title 1</h3>
//             <p className="text-gray-700 px-6">
//               This is the description for card 1.
//             </p>
//           </div>

//           {/* Additional Cards */}
//           <div className="min-w-[300px] bg-white shadow-md rounded-lg">
//             <img src={bloghero} alt="Card 2" className="mb-4 mx-auto" />
//             <h3 className="text-xl font-semibold mb-2 px-6">Card Title 2</h3>
//             <p className="text-gray-700 px-6">
//               This is the description for card 2.
//             </p>
//           </div>

//           <div className="min-w-[300px] bg-white shadow-md rounded-lg">
//             <img src={bloghero} alt="Card 3" className="mb-4 mx-auto" />
//             <h3 className="text-xl font-semibold mb-2 px-6">Card Title 3</h3>
//             <p className="text-gray-700 px-6">
//               This is the description for card 3.
//             </p>
//           </div>

//           <div className="min-w-[300px] bg-white shadow-md rounded-lg">
//             <img src={bloghero} alt="Card 4" className="mb-4 mx-auto" />
//             <h3 className="text-xl font-semibold mb-2 px-6">Card Title 4</h3>
//             <p className="text-gray-700 px-6">
//               This is the description for card 4.
//             </p>
//           </div>

//           <div className="min-w-[300px] bg-white shadow-md rounded-lg">
//             <img src={bloghero} alt="Card 5" className="mb-4 mx-auto" />
//             <h3 className="text-xl font-semibold mb-2 px-6">Card Title 5</h3>
//             <p className="text-gray-700 px-6">
//               This is the description for card 5.
//             </p>
//           </div>

//           <div className="min-w-[300px] bg-white shadow-md rounded-lg">
//             <img src={bloghero} alt="Card 6" className="mb-4 mx-auto" />
//             <h3 className="text-xl font-semibold mb-2 px-6">Card Title 6</h3>
//             <p className="text-gray-700 px-6">
//               This is the description for card 6.
//             </p>
//           </div>
//         </div>

//         {/* Scroll Buttons (Arrows) */}
//         <div className="absolute top-full left-0 mt-2">
//           <button
//             onClick={() => scroll("left")}
//             className="p-2 bg-transparent text-blue-500 hover:text-blue-700"
//           >
//             ←
//           </button>
//           <button
//             onClick={() => scroll("right")}
//             className="p-2 bg-transparent text-blue-500 hover:text-blue-700"
//           >
//             →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

const BlogScroll = () => {
  const scrollRef = useRef(null);

  // Card data array
  const cards = [
    {
      id: 1,
      image: bloghero, // Replace with the actual image path or import
      imageTitle: "Image Title 1",
      imageSubtitle: "Image Subtitle 1",
      title: "Card Title 1",
      description: "This is the description for card 1.",
    },
    {
      id: 2,
      image: bloghero, // Replace with the actual image path or import
      imageTitle: "Image Title 2",
      imageSubtitle: "Image Subtitle 2",
      title: "Card Title 2",
      description: "This is the description for card 2.",
    },
    {
      id: 3,
      image: bloghero, // Replace with the actual image path or import
      imageTitle: "Image Title 3",
      imageSubtitle: "Image Subtitle 3",
      title: "Card Title 3",
      description: "This is the description for card 3.",
    },
    {
      id: 4,
      image: bloghero, // Replace with the actual image path or import
      imageTitle: "Image Title 4",
      imageSubtitle: "Image Subtitle 4",
      title: "Card Title 4",
      description: "This is the description for card 4.",
    },
    {
      id: 5,
      image: bloghero, // Replace with the actual image path or import
      imageTitle: "Image Title 5",
      imageSubtitle: "Image Subtitle 5",
      title: "Card Title 5",
      description: "This is the description for card 5.",
    },
    {
      id: 6,
      image: bloghero, // Replace with the actual image path or import
      imageTitle: "Image Title 6",
      imageSubtitle: "Image Subtitle 6",
      title: "Card Title 6",
      description: "This is the description for card 6.",
    },
  ];

  // Function to scroll cards horizontally
  const scroll = (direction) => {
    const scrollAmount = 300; // Customize scroll amount as needed
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="py-16 relative">
      <p className="text-lg text-gray-700 pl-8 md:pl-20 lg:pl-32 xl:px-36 ">
        Latest posts
      </p>
      <h2 className="text-2xl lg:text-3xl font-semibold mb-4 pl-8 md:pl-20 lg:pl-32 xl:px-36 mt-4">
        Ikeja Toastmasters Blog
      </h2>
      <p className="text-lg text-gray-700 pl-8 md:pl-20 lg:pl-32 xl:px-36 mt-4 mb-8">
        Interviews, tips, guides, industry best practices, and news.
      </p>

      {/* Card Section with Horizontal Scroll */}
      <div className="relative">
        {/* Cards Wrapper */}
        <div
          className="flex overflow-x-auto space-x-6 scrollbar-hide"
          ref={scrollRef}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Hide scrollbar for Firefox
        >
          {/* Image Card */}
          {cards.map((card) => (
            <div
              key={card.id}
              className="min-w-[300px] bg-white shadow-none rounded-lg relative"
            >
              <div className="relative">
                <img
                  src={card.image}
                  alt={`Card ${card.id}`}
                  className="mb-4 mx-auto h-48 w-full object-cover " // Adjust height and maintain aspect ratio
                />
                {/* Overlay Text for Image at the Bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2 rounded-b-lg">
                  <h4 className="font-semibold">{card.imageTitle}</h4>
                  <p className="text-sm text-gray-600">{card.imageSubtitle}</p>
                </div>
              </div>
              {/* Blurred Container */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-white bg-opacity-50 backdrop-blur-md rounded-b-lg"></div>
              <div className="relative z-10">
                {/* Ensure content is above the blurred background */}
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-700 mb-4">{card.description}</p>
                {/* Read Post Link */}
                <div className="flex items-center justify-start mb-4">
                  <a
                    href="#readPost"
                    className="text-blue-500 hover:text-blue-700 flex items-center"
                  >
                    Read Post <span className="ml-2">↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Buttons (Arrows) */}
        <div className="absolute top-full left-0 mt-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 bg-transparent text-blue-500 hover:text-blue-700"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 bg-transparent text-blue-500 hover:text-blue-700"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
