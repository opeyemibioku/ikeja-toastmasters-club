import { useState } from "react";

import { BlogPreviewHero } from "../components/hero";
import heroimage from "../assets/images/home/hero.jpg";
import blog from "../assets/images/blog/blog.png";
import blogprev from "../assets/images/blog/blogpreview/blogprev.png";
import Navbar from "../components/navbar";

const BlogPreview = () => {
  return (
    <>
      <Navbar />
      <BlogPreviewHero />
      <BackgroundSection />
      <BlogSection />
    </>
  );
};

const BackgroundSection = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center py-72 mx-4 sm:mx-8 lg:mx-16 -mt-20" // Adjusted padding to reduce height
        style={{ backgroundImage: `url(${blog})` }}
      >
        {/* Optional Content Overlay if needed */}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          {/* You can add any overlay text or elements here */}
        </div>
      </section>
      <section className="pb-16 pt-8">
        <div className="mx-auto space-y-4">
          <p className="font-semibold text-[#094F72] ml-4 lg:ml-16 sm:ml-4">
            Titilayo Ekundayo • June 24th, 2024
          </p>
          <h2 className="text-3xl font-bold mb-8 ml-4 lg:ml-16 sm:ml-4">
            UX review presentations
          </h2>
          <p className="text-gray-800 ml-4 lg:ml-16 sm:ml-4">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
          <div className="flex items-center justify-start mb-4 ml-4 lg:ml-16 sm:ml-4">
            <a
              href="#readPost"
              className="text-[#094F72] hover:text-blue-700 flex items-center" // Updated color
            >
              Read Post{" "}
              <span className="text-[#094F72]">
                {" "}
                {/* Updated arrow color */}
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
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

const cardsData = {
  meetingRundowns: [
    {
      id: 1,
      title: "Olivia Rhye",
      subtitle: "20 Jan 2024",
      image: blogprev,
      postAuthor: "Titlayo Ekundayo",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 3,
      title: "Olivia Rhye",
      subtitle: "20 Jan 2024",
      image: blogprev,
      postAuthor: "Titlayo Ekundayo",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 2,
      title: "Olivia Rhye",
      subtitle: "20 Jan 2024",
      image: blogprev,
      postAuthor: "Titlayo Ekundayo",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 4,
      title: "Olivia Rhye",
      subtitle: "20 Jan 2024",
      image: blogprev,
      postAuthor: "Titlayo Ekundayo",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 5,
      title: "Olivia Rhye",
      subtitle: "20 Jan 2024",
      image: blogprev,
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 6,
      title: "Olivia Rhye",
      subtitle: "20 Jan 2024",
      image: blogprev,
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 7,
      title: "Olivia Rhye",
      subtitle: "20 Jan 2024",
      image: blogprev,
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 8,
      title: "Olivia Rhye",
      subtitle: "20 Jan 2024",
      image: blogprev,
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 9,
      title: "Olivia Rhye",
      subtitle: "20 Jan 2024",
      image: blogprev,
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 10,
      title: "Olivia Rhye",
      subtitle: "20 Jan 2024",
      image: blogprev,
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    // Add more cards as needed
  ],
  events: [
    {
      id: 1,
      title: "Olivia Rhye",
      subtitle: "20 Jan 2024",
      image: blogprev,
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 2,
      title: "Olivia Rhye",
      subtitle: "20 Jan 2024",
      image: blogprev,
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 3,
      title: "Olivia Rhye",
      subtitle: "20 Jan 2024",
      image: blogprev,
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 4,
      title: "Olivia Rhye",
      subtitle: "20 Jan 2024",
      image: blogprev,
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 5,
      title: "Olivia Rhye",
      subtitle: "20 Jan 2024",
      image: blogprev,
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 6,
      title: "Olivia Rhye",
      subtitle: "20 Jan 2024",
      image: "image6b.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 7,
      title: "Olivia Rhye",
      subtitle: "20 Jan 2024",
      image: "image7b.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 8,
      title: "Olivia Rhye",
      subtitle: "20 Jan 2024",
      image: "image8b.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
  ],
  newsArticles: [
    {
      id: 1,
      title: "Olivia Rhye",
      subtitle: "20 Jan 2024",
      image: "image1c.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 2,
      title: "Olivia Rhye",
      subtitle: "Subtitle 2C",
      image: "image2c.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 3,
      title: "Olivia Rhye",
      subtitle: "Subtitle 3C",
      image: "image3c.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 4,
      title: "Olivia Rhye",
      subtitle: "Subtitle 4C",
      image: "image4c.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 5,
      title: "Olivia Rhye",
      subtitle: "Subtitle 5C",
      image: "image5c.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 6,
      title: "Olivia Rhye",
      subtitle: "Subtitle 6C",
      image: "image6c.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 7,
      title: "Olivia Rhye",
      subtitle: "Subtitle 7C",
      image: "image7c.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 8,
      title: "Olivia Rhye",
      subtitle: "Subtitle 8C",
      image: "image8c.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
  ],
  greatSpeeches: [
    {
      id: 1,
      title: "Olivia Rhye",
      subtitle: "Subtitle 1D",
      image: "image1d.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 2,
      title: "Card 2D",
      subtitle: "Subtitle 2D",
      image: "image2d.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 3,
      title: "Card 3D",
      subtitle: "Subtitle 3D",
      image: "image3d.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 4,
      title: "Card 4D",
      subtitle: "Subtitle 4D",
      image: "image4d.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 5,
      title: "Card 5D",
      subtitle: "Subtitle 5D",
      image: "image5d.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 6,
      title: "Card 6D",
      subtitle: "Subtitle 6D",
      image: "image6d.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 7,
      title: "Card 7D",
      subtitle: "Subtitle 7D",
      image: "image7d.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 8,
      title: "Card 8D",
      subtitle: "Subtitle 8D",
      image: "image8d.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
  ],
};

// const Card = ({ title, subtitle, image }) => (
//   <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//     <img src={image} alt={title} className="w-full h-48 object-cover" />
//     <div className="p-4">
//       <h3 className="text-xl font-semibold">{title}</h3>
//       <p className="text-gray-600">{subtitle}</p>
//     </div>
//   </div>
// );

// const PostInfo = ({ postAuthor, postTitle, postSubtitle }) => (
//   <div className="mt-2">
//     <p className="text-gray-500">{postAuthor}</p>
//     <h4 className="text-lg font-semibold mt-8">{postTitle}</h4>
//     <p className="text-gray-500">{postSubtitle}</p>
//     <button className="text-[#094F72] flex items-center mt-4 mb-8">
//       {" "}
//       {/* Updated text color */}
//       Read Post
//       <span className="text-[#094F72]">
//         {" "}
//         {/* Updated arrow color */}
//         {/* Top-right arrow (SVG) */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M7 17L17 7" />
//           <path d="M7 7h10v10" />
//         </svg>
//       </span>
//     </button>
//   </div>
// );

// const BlogSection = () => {
//   const [activeCategory, setActiveCategory] = useState("viewAll"); // Set to "viewAll" initially
//   const [currentPage, setCurrentPage] = useState(1);
//   const cardsPerPage = 8;

//   const handleCategoryChange = (category) => {
//     setActiveCategory(category);
//     setCurrentPage(1); // Reset to the first page when changing category
//   };

//   const handleViewAll = () => {
//     setActiveCategory("viewAll");
//     setCurrentPage(1); // Reset to the first page when viewing all
//   };

//   const getCurrentCards = () => {
//     if (activeCategory === "viewAll") {
//       const allCards = Object.values(cardsData).flat();
//       return allCards.slice(
//         (currentPage - 1) * cardsPerPage,
//         currentPage * cardsPerPage
//       );
//     }
//     return cardsData[activeCategory].slice(
//       (currentPage - 1) * cardsPerPage,
//       currentPage * cardsPerPage
//     );
//   };

//   const totalCards =
//     activeCategory === "viewAll"
//       ? Object.values(cardsData).flat().length
//       : cardsData[activeCategory].length;

//   const totalPages = Math.ceil(totalCards / cardsPerPage);
//   const currentCards = getCurrentCards();

//   return (
//     <section className="py-16">
//       <div className="flex mb-8 pl-4 md:pl-8 lg:pl-16">
//         <button className="mx-2 text-lg font-bold" onClick={handleViewAll}>
//           View All
//         </button>
//         {Object.keys(cardsData).map((category) => (
//           <button
//             key={category}
//             className={`mx-2 text-lg ${
//               activeCategory === category ? "font-bold" : ""
//             }`}
//             onClick={() => handleCategoryChange(category)}
//           >
//             {category.charAt(0).toUpperCase() +
//               category.slice(1).replace(/([A-Z])/g, " $1")}{" "}
//             {/* // Converts keys to a readable format */}
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-4 sm:px-6 md:px-8 lg:px-16">
//         {currentCards.map((card) => (
//           <div key={card.id} className="">
//             {/* <div key={card.id} className="flex flex-col items-center"> */}
//             <Card
//               title={card.title}
//               subtitle={card.subtitle}
//               image={card.image}
//             />
//             {/* Add the PostInfo component below each card */}
//             <PostInfo
//               postAuthor={card.postAuthor}
//               postTitle={card.postTitle}
//               postSubtitle={card.postSubtitle}
//             />
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-between items-center mt-8 px-16">
//         <button
//           onClick={() => setCurrentPage(currentPage - 1)}
//           disabled={currentPage === 1}
//           className={`bg-gray-300 text-gray-800 py-2 px-4 rounded ${
//             currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           Previous
//         </button>
//         <div className="flex items-center">
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index + 1}
//               className={`mx-1 ${currentPage === index + 1 ? "font-bold" : ""}`}
//               onClick={() => setCurrentPage(index + 1)}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//         <button
//           onClick={() => setCurrentPage(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className={`bg-gray-300 text-gray-800 py-2 px-4 rounded ${
//             currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           Next
//         </button>
//       </div>
//     </section>
//   );
// };

// Card Component
const Card = ({ title, subtitle, image }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  </div>
);

// PostInfo Component
const PostInfo = ({ postAuthor, postTitle, postSubtitle }) => (
  <div className="mt-2">
    <p className="text-gray-500">{postAuthor}</p>
    <h4 className="text-lg font-semibold mt-8">{postTitle}</h4>
    <p className="text-gray-500">{postSubtitle}</p>
    <button className="text-[#094F72] flex items-center mt-4 mb-8">
      Read Post
      <span className="text-[#094F72]">
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
    </button>
  </div>
);

// BlogSection Component
const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState("viewAll");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to the first page when changing category
  };

  const handleViewAll = () => {
    setActiveCategory("viewAll");
    setCurrentPage(1); // Reset to the first page when viewing all
  };

  const getCurrentCards = () => {
    if (activeCategory === "viewAll") {
      const allCards = Object.values(cardsData).flat();
      return allCards.slice(
        (currentPage - 1) * cardsPerPage,
        currentPage * cardsPerPage
      );
    }
    return cardsData[activeCategory].slice(
      (currentPage - 1) * cardsPerPage,
      currentPage * cardsPerPage
    );
  };

  const totalCards =
    activeCategory === "viewAll"
      ? Object.values(cardsData).flat().length
      : cardsData[activeCategory].length;

  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const currentCards = getCurrentCards();

  return (
    <section className="pb-16 pt-8">
      <div className="flex flex-col sm:flex-row mb-8 pl-4 md:pl-8 lg:pl-16">
        <button className="mx-2 text-lg font-bold" onClick={handleViewAll}>
          View All
        </button>
        {Object.keys(cardsData).map((category) => (
          <button
            key={category}
            className={`mx-2 text-lg ${
              activeCategory === category ? "font-bold" : ""
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category.charAt(0).toUpperCase() +
              category.slice(1).replace(/([A-Z])/g, " $1")}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-4 sm:px-6 md:px-8 lg:px-16">
        {currentCards.map((card) => (
          <div key={card.id}>
            <Card
              title={card.title}
              subtitle={card.subtitle}
              image={card.image}
            />
            <PostInfo
              postAuthor={card.postAuthor}
              postTitle={card.postTitle}
              postSubtitle={card.postSubtitle}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8 px-16">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`bg-gray-300 text-gray-800 py-2 px-4 rounded ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>
        <div className="flex items-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`mx-1 ${currentPage === index + 1 ? "font-bold" : ""}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`bg-gray-300 text-gray-800 py-2 px-4 rounded ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default BlogPreview;
