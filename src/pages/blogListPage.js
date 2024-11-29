import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "./firebase/firebase-config";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { BlogPreviewHero } from "../components/hero";
import blog from "../assets/images/blog/blog.png";
import Navbar from "../components/navbar";

// Card Component
const Card = ({ author, date, image, title }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img
      src={image}
      alt={title || "Blog post image"}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold">{author}</h3>
      <p className="text-gray-600">{date}</p>
    </div>
  </div>
);

const PostInfo = ({ postTitle, postSubtitle, postId }) => (
  <div className="mt-2">
    <h4 className="text-lg font-semibold mt-2">{postTitle}</h4>
    <p className="text-gray-500">{postSubtitle}</p>
    <Link
      to={`/blog/${postId}`}
      className="text-[#094F72] flex items-center mt-4 mb-8"
    >
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
    </Link>
  </div>
);

export const BlogSection = ({ isAuth }) => {
  const [blogList, setBlogList] = useState([]);

  const blogCollectionRef = collection(db, "blogposts");

  useEffect(() => {
    // Fetch blog posts from Firestore
    const fetchBlogPosts = async () => {
      try {
        const data = await getDocs(blogCollectionRef);
        setBlogList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPosts();
  }, []);

  // Delete a blog post
  const deleteBlog = async (id) => {
    try {
      const blogDoc = doc(db, "blogposts", id);
      await deleteDoc(blogDoc);
      setBlogList(blogList.filter((blog) => blog.id !== id)); // Update the UI after deletion
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  };

  return (
    <>
      {" "}
      {/* <Navbar /> */}
      <BlogPreviewHero />
      <BackgroundSection />
      <div className="blog-section m-12">
        <h1 className="text-2xl font-bold mb-6">Blog Post</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {blogList.map((blogpost) => (
            <div className="blog-card" key={blogpost.id}>
              <Card
                author={blogpost.author?.name || "Anonymous"}
                date={blogpost.date || "No Date"}
                image={blogpost.imageUrl || "default-image.png"} // Default image if no image URL is provided
              />
              <div className="flex items-center justify-between mt-4">
                <PostInfo
                  postId={blogpost.id} // Pass the blog ID
                  postTitle={blogpost.title || "Untitled"}
                  postSubtitle={
                    blogpost.description || "No description available"
                  }
                />
                {isAuth && blogpost.author?.id === auth?.currentUser?.uid && (
                  <div className="flex space-x-4">
                    <button
                      onClick={() => deleteBlog(blogpost.id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
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
