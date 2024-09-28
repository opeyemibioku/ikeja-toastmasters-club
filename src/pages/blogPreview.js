import { useState } from "react";

import { BlogPreviewHero } from "../components/hero";
import heroimage from "../assets/images/home/hero.jpg";
import blog from "../assets/images/blog/blog.png";
import blogprev from "../assets/images/blog/blogpreview/blogprev.png";

const BlogPreview = () => {
  return (
    <>
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
        className="relative bg-cover bg-center py-72 mx-4 sm:mx-8 lg:mx-16 -mt-32" // Adjusted padding to reduce height
        style={{ backgroundImage: `url(${blog})` }}
      >
        {/* Optional Content Overlay if needed */}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          {/* You can add any overlay text or elements here */}
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto space-y-4">
          <p className="text-2xl font-semibold text-gray-800 ml-16">
            Titilayo Ekundayo • June 24th, 2024
          </p>
          <h2 className="text-4xl font-bold mb-8 ml-16">
            UX review presentations
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800 ml-16">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </h3>
          <div className="flex items-center justify-start mb-4 pl-16">
            <a
              href="#readPost"
              className="text-blue-500 hover:text-blue-700 flex items-center"
            >
              Read Post <span className="ml-2">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

const cardsData = {
  category1: [
    {
      id: 1,
      title: "Card 1A",
      subtitle: "Subtitle 1A",
      image: blogprev,
      postAuthor: "Titlayo Ekundayo",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 3,
      title: "Card 3A",
      subtitle: "Subtitle 3A",
      image: blogprev,
      postAuthor: "Titlayo Ekundayo",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 2,
      title: "Card 2A",
      subtitle: "Subtitle 2A",
      image: blogprev,
      postAuthor: "Titlayo Ekundayo",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 4,
      title: "Card 4A",
      subtitle: "Subtitle 4A",
      image: blogprev,
      postAuthor: "Titlayo Ekundayo",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 5,
      title: "Card 5A",
      subtitle: "Subtitle 5A",
      image: blogprev,
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 6,
      title: "Card 6A",
      subtitle: "Subtitle 6A",
      image: blogprev,
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 7,
      title: "Card 7A",
      subtitle: "Subtitle 7A",
      image: blogprev,
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 8,
      title: "Card 8A",
      subtitle: "Subtitle 8A",
      image: blogprev,
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 9,
      title: "Card 8A",
      subtitle: "Subtitle 8A",
      image: blogprev,
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 10,
      title: "Card 8A",
      subtitle: "Subtitle 8A",
      image: blogprev,
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    // Add more cards as needed
  ],
  category2: [
    {
      id: 1,
      title: "Card 1B",
      subtitle: "Subtitle 1B",
      image: "image1b.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 2,
      title: "Card 2B",
      subtitle: "Subtitle 2B",
      image: "image2b.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 3,
      title: "Card 3B",
      subtitle: "Subtitle 3B",
      image: "image3b.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 4,
      title: "Card 4B",
      subtitle: "Subtitle 4B",
      image: "image4b.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 5,
      title: "Card 5B",
      subtitle: "Subtitle 5B",
      image: "image5b.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 6,
      title: "Card 6B",
      subtitle: "Subtitle 6B",
      image: "image6b.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 7,
      title: "Card 7B",
      subtitle: "Subtitle 7B",
      image: "image7b.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 8,
      title: "Card 8B",
      subtitle: "Subtitle 8B",
      image: "image8b.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
  ],
  category3: [
    {
      id: 1,
      title: "Card 1C",
      subtitle: "Subtitle 1C",
      image: "image1c.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 2,
      title: "Card 2C",
      subtitle: "Subtitle 2C",
      image: "image2c.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 3,
      title: "Card 3C",
      subtitle: "Subtitle 3C",
      image: "image3c.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 4,
      title: "Card 4C",
      subtitle: "Subtitle 4C",
      image: "image4c.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 5,
      title: "Card 5C",
      subtitle: "Subtitle 5C",
      image: "image5c.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 6,
      title: "Card 6C",
      subtitle: "Subtitle 6C",
      image: "image6c.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 7,
      title: "Card 7C",
      subtitle: "Subtitle 7C",
      image: "image7c.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
    {
      id: 8,
      title: "Card 8C",
      subtitle: "Subtitle 8C",
      image: "image8c.png",
      postTitle: "UX review",
      postSubtitle: "How do you create compelling presentations",
    },
  ],
  category4: [
    {
      id: 1,
      title: "Card 1D",
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

const Card = ({ title, subtitle, image }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  </div>
);

const PostInfo = ({ postAuthor, postTitle, postSubtitle }) => (
  <div className="mt-2">
    <p className="text-gray-500">{postAuthor}</p>
    <h4 className="text-lg font-semibold">{postTitle}</h4>
    <p className="text-gray-500">{postSubtitle}</p>
    <button className="text-blue-600 flex items-center">
      Read Post
      <span className="ml-1">↗</span> {/* Right arrow icon */}
    </button>
  </div>
);

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState("viewAll"); // Set to "viewAll" initially
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
    <section className="py-16">
      <div className="flex mb-8 pl-4 md:pl-8 lg:pl-16">
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
            {category.replace("category", "Category ")}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 px-4 sm:px-6 md:px-8 lg:px-16">
        {currentCards.map((card) => (
          <div key={card.id} className="">
            {/* <div key={card.id} className="flex flex-col items-center"> */}
            <Card
              title={card.title}
              subtitle={card.subtitle}
              image={card.image}
            />
            {/* Add the PostInfo component below each card */}
            <PostInfo
              postAuthor={card.postAuthor}
              postTitle={card.postTitle}
              postSubtitle={card.postSubtitle}
            />
          </div>
        ))}
      </div>
      =
      <div className="flex justify-between items-center mt-8">
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
