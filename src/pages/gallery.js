import { useState } from "react";

import { GalleryHero } from "../components/hero";
import imageone from "../assets/images/gallery/imageone.png";
import imagetwo from "../assets/images/gallery/imagetwo.png";
import imagethree from "../assets/images/gallery/imagethree.png";
import Navbar from "../components/navbar";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <GalleryHero />
      <ThreeImageSection />
    </>
  );
};

const imagesData = [
  [imageone, imagetwo, imagethree],
  [imageone, imagetwo, imagethree],
  [imageone, imagetwo, imagethree],
  // Add more arrays for additional pages
];

// const ThreeImageSection = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const totalPages = imagesData.length;

//   const handleNext = () => {
//     if (currentPage < totalPages - 1) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="py-16">
//       <h2 className="text-3xl font-bold mb-8 text-center">Club Photos</h2>

//       {/* Responsive grid layout */}
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//         <div className="md:row-span-1">
//           <img
//             src={imagesData[currentPage][0]}
//             alt={`Image ${currentPage * 3 + 1}`}
//             className="w-full h-auto object-cover rounded-lg"
//           />
//         </div>
//         <div className="md:row-span-1">
//           <img
//             src={imagesData[currentPage][1]}
//             alt={`Image ${currentPage * 3 + 2}`}
//             className="w-full h-auto object-cover rounded-lg"
//           />
//         </div>

//         <div className="col-span-1 md:col-span-2">
//           <img
//             src={imagesData[currentPage][2]}
//             alt={`Image ${currentPage * 3 + 3}`}
//             className="w-full h-auto object-cover rounded-lg"
//           />
//         </div>
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-between items-center mt-8">
//         <button
//           onClick={handlePrev}
//           disabled={currentPage === 0}
//           className={`py-2 px-4 rounded bg-gray-300 text-gray-800 ${
//             currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           Previous
//         </button>
//         <span className="text-lg">
//           Page {currentPage + 1} of {totalPages}
//         </span>
//         <button
//           onClick={handleNext}
//           disabled={currentPage === totalPages - 1}
//           className={`py-2 px-4 rounded bg-gray-300 text-gray-800 ${
//             currentPage === totalPages - 1
//               ? "opacity-50 cursor-not-allowed"
//               : ""
//           }`}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

const ThreeImageSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = imagesData.length;

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="py-16 px-12 md:px-20">
      {" "}
      {/* Added padding to both left and right */}
      <h2 className="text-3xl font-bold mb-8 text-left">
        {" "}
        {/* Changed text-center to text-left */}
        Club Photos
      </h2>
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="md:row-span-1">
          <img
            src={imagesData[currentPage][0]}
            alt={`Image ${currentPage * 3 + 1}`}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="md:row-span-1">
          <img
            src={imagesData[currentPage][1]}
            alt={`Image ${currentPage * 3 + 2}`}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <div className="col-span-1 md:col-span-2 mt-lg-8">
          <img
            src={imagesData[currentPage][2]}
            alt={`Image ${currentPage * 3 + 3}`}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className={`py-2 px-4 rounded bg-gray-300 text-gray-800 ${
            currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>
        <span className="text-lg">
          Page {currentPage + 1} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className={`py-2 px-4 rounded bg-gray-300 text-gray-800 ${
            currentPage === totalPages - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;
