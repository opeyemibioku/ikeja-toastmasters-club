import { useEffect, useRef, useState } from "react";

import { BlogPreviewHero } from "../components/hero";
import heroimage from "../assets/images/home/hero.jpg";
import blog from "../assets/images/blog/blog.png";
import blogprev from "../assets/images/blog/blogpreview/blogprev.png";
import Navbar from "../components/navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { auth, db } from "./firebase/firebase-config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  documentId,
  getDoc,
  getDocs,
} from "firebase/firestore";

const BlogPreview = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <BlogPreviewHero /> */}
      {/* <BackgroundSection /> */}
      {/* <BlogSection /> */}
      <BlogDetails />
      <BlogScroll />
    </>
  );
};

// Card Component
// const Card = ({ author, date, image, title }) => (
//   <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//     <img
//       src={image}
//       alt={title || "Blog post image"}
//       className="w-full h-48 object-cover"
//     />
//     <div className="p-4">
//       <h3 className="text-xl font-semibold">{author}</h3>
//       <p className="text-gray-600">{date}</p>
//     </div>
//   </div>
// );

// const PostInfo = ({ postTitle, postSubtitle, postId }) => (
//   <div className="mt-2">
//     <h4 className="text-lg font-semibold mt-2">{postTitle}</h4>
//     <p className="text-gray-500">{postSubtitle}</p>
//     <Link
//       to={`/blog/${postId}`}
//       className="text-[#094F72] flex items-center mt-4 mb-8"
//     >
//       Read Post
//       <span className="text-[#094F72]">
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
//     </Link>
//   </div>
// );

// // PostInfo Component
// const PostInfo = ({ postTitle, postSubtitle }) => (
//   <div className="mt-2">
//     <h4 className="text-lg font-semibold mt-2">{postTitle}</h4>
//     <p className="text-gray-500">{postSubtitle}</p>
//     <button className="text-[#094F72] flex items-center mt-4 mb-8">
//       Read Post
//       <span className="text-[#094F72]">
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

// export const BlogSection = ({ isAuth }) => {
//   const [blogList, setBlogList] = useState([]);

//   const blogCollectionRef = collection(db, "blogposts");

//   useEffect(() => {
//     // Fetch blog posts from Firestore
//     const fetchBlogPosts = async () => {
//       try {
//         const data = await getDocs(blogCollectionRef);
//         setBlogList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//       } catch (error) {
//         console.error("Error fetching blog posts:", error);
//       }
//     };

//     fetchBlogPosts();
//   }, []);

//   // Delete a blog post
//   const deleteBlog = async (id) => {
//     try {
//       const blogDoc = doc(db, "blogposts", id);
//       await deleteDoc(blogDoc);
//       setBlogList(blogList.filter((blog) => blog.id !== id)); // Update the UI after deletion
//     } catch (error) {
//       console.error("Error deleting blog post:", error);
//     }
//   };

//   return (
//     <div className="blog-section">
//       <h1 className="text-2xl font-bold mb-6">Blogs</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {blogList.map((blogpost) => (
//           <div className="blog-card" key={blogpost.id}>
//             <Card
//               author={blogpost.author?.name || "Anonymous"}
//               date={blogpost.date || "No Date"}
//               image={blogpost.imageUrl || "default-image.png"} // Default image if no image URL is provided
//             />
//             <PostInfo
//               postId={blogpost.id} // Pass the blog ID
//               postTitle={blogpost.title || "Untitled"}
//               postSubtitle={blogpost.description || "No description available"}
//             />
//             {isAuth && blogpost.author?.id === auth?.currentUser?.uid && (
//               <button
//                 onClick={() => deleteBlog(blogpost.id)}
//                 className="text-red-500 mt-4"
//               >
//                 Delete Blog
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export const BlogSection = ({ isAuth }) => {
//   const [blogList, setBlogList] = useState([]);

//   const blogCollectionRef = collection(db, "blogposts");

//   useEffect(() => {
//     // Fetch blog posts from Firestore
//     const fetchBlogPosts = async () => {
//       try {
//         const data = await getDocs(blogCollectionRef);
//         setBlogList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//       } catch (error) {
//         console.error("Error fetching blog posts:", error);
//       }
//     };

//     fetchBlogPosts();
//   }, []);

//   // Delete a blog post
//   const deleteBlog = async (id) => {
//     try {
//       const blogDoc = doc(db, "blogposts", id);
//       await deleteDoc(blogDoc);
//       setBlogList(blogList.filter((blog) => blog.id !== id)); // Update the UI after deletion
//     } catch (error) {
//       console.error("Error deleting blog post:", error);
//     }
//   };

//   return (
//     <div className="blog-section">
//       <h1 className="text-2xl font-bold mb-6">Blogs</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {blogList.map((blogpost) => (
//           <div className="blog-card" key={blogpost.id}>
//             <Card
//               author={blogpost.author?.name || "Anonymous"}
//               date={blogpost.date || "No Date"}
//               image={blogpost.imageUrl || "default-image.png"} // Default image if no image URL is provided
//             />
//             <PostInfo
//               postTitle={blogpost.title || "Untitled"}
//               postSubtitle={blogpost.description || "No description available"} // Display the actual description
//             />
//             {isAuth && blogpost.author?.id === auth?.currentUser?.uid && (
//               <button
//                 onClick={() => deleteBlog(blogpost.id)}
//                 className="text-red-500 mt-4"
//               >
//                 Delete Blog
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

const BlogDetails = () => {
  const { id } = useParams(); // Get blog ID from URL
  console.log(id);
  const [blog, setBlog] = useState(null); // Store blog details
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      const docRef = doc(db, "blogposts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setBlog(docSnap.data());
      } else {
        console.error("No such document!");
      }
      setLoading(false);
    };

    fetchBlog();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (!blog) return <p>Blog not found!</p>;

  return (
    <div className="container mx-auto px-4 lg:px-8 py-16">
      {/* Blog Header */}
      <section className="mb-8 pl-4 md:pl-12 lg:pl-36 xl:pl-48">
        <p>{blog.author.name}</p>
        <p>{blog.date}</p>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">{blog.title}</h1>
      </section>
      {/* Image Below Title Section */}
      <section className="mb-8">
        <img
          src={blog.imageUrl}
          alt="Main Visual"
          className="mx-auto w-full max-w-4xl"
        />{" "}
        {/* <p className="mt-4 text-gray-700">{blog.description}</p> */}
      </section>
      {/* Quotes */}
      {/* {blog.quotes.map((quote, index) => (
        <section className="mb-8 p-4 md:px-16 lg:px-32 xl:px-48">
          <blockquote key={index} className="text-lg italic text-gray-700">
            "{quote.text}"
            <footer className="mt-2 text-sm text-gray-500">
                - {quote.author}, {quote.role}
              </footer>
          </blockquote>
        </section>
      ))} */}

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

      {/* Blog Content */}
      <section className="mb-8">
        {blog.contentSections.map((section, index) => (
          <div key={index} className="mt-8">
            {/* <div key={index} className="mt-8"> */}
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 pl-8 md:pl-20 lg:pl-32 xl:px-36">
              {section.subtitle}
            </h2>
            {section.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-lg text-gray-700 pl-8 md:pl-20 lg:pl-32 xl:px-36"
              >
                {paragraph}
              </p>
            ))}

            {section.imageUrl && (
              <section className="mt-8">
                <img
                  src={section.imageUrl}
                  alt={`Section ${index + 1}`}
                  className="mx-auto w-full max-w-4xl"
                />
              </section>
            )}
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
            {/* {section.listItems.length > 0 && (
              <ul className=" ml-5 mt-4">
                {section.listItems.map((item, idx) => (
                  <li key={idx} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            )} */}
          </div>
        ))}
      </section>
    </div>
  );
};

//scroll starts
const BlogCard = ({ postId, postTitle, image }) => (
  <div className="min-w-[30rem] bg-white shadow-md rounded-lg overflow-hidden mx-2 mb-8">
    <img src={image} className="w-full h-48 object-cover" />
    {/* <img src={image} alt={title} className="w-full h-48 object-cover" /> */}
    {/* Additional Title and Subtitle Below Card */}
    <div className="px-4">
      <h3 className="text-lg font-semibold">{postTitle}</h3>
      {/* <p className="text-gray-500">{subtitle}</p> */}
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
      {/* <a
        href={readMoreLink} // Use the unique link for each blog card
        className="text-[#772432] flex items-center mt-2" // Change to your specified color
      >
        Read Post
        <span className="text-[#772432]">
          {" "}
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
      </a> */}
    </div>
  </div>
);

// BlogScroll component
const BlogScroll = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

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

  // const [blogPosts, setBlogPosts] = useState([]); // State to store blog posts
  // const [loading, setLoading] = useState(true); // Loading state
  // const scrollRef = useRef(null);

  // //blog list
  // const [blogList, setBlogList] = useState([]);

  // const blogCollectionRef = collection(db, "blogposts");

  // useEffect(() => {
  //   // Fetch blog posts from Firestore
  //   const fetchBlogPosts = async () => {
  //     try {
  //       const data = await getDocs(blogCollectionRef);
  //       setBlogList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     } catch (error) {
  //       console.error("Error fetching blog posts:", error);
  //     }
  //   };

  //   fetchBlogPosts();
  // }, []);

  // useEffect(() => {
  //   const fetchBlogPosts = async () => {
  //     const postsCollection = collection(db, "blogposts");
  //     const postsSnapshot = await getDocs(postsCollection);
  //     const postsList = postsSnapshot.docs.map((doc) => doc.data());
  //     setBlogPosts(postsList);
  //     setLoading(false);
  //   };

  //   fetchBlogPosts();
  // }, []);

  // if (loading) return <div>Loading...</div>;

  return (
    <div className="lg:pl-32">
      <h1 className="text-xl font-bold mb-4 pl-4">Latest Posts</h1>
      <h1 className="text-2xl font-bold mb-4 pl-4">Ikeja Toastmasters Blog</h1>
      <p className="mb-8 pl-4">
        Interviews, tips, guides, industry best practices, and news.
      </p>
      <div
        className="flex overflow-x-scroll scrollbar-hide py-2"
        ref={scrollRef}
      >
        {blogList.map((blogpost) => (
          <div
            key={blogpost.id}
            className="flex flex-col items-start mx-2 mb-8"
          >
            <BlogCard
              postId={blogpost.id} // Pass the blog ID
              postTitle={blogpost.title}
              image={blogpost.imageUrl} // Assuming the image field in Firestore
              // readMoreLink={`/blog/${postId}`} // Assuming the ID is available to build the link
            />
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
//scroll ends

const Carrdd = ({ author, date, image, title }) => (
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

const PostInfoo = ({ postTitle, postSubtitle, postId }) => (
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

const BlogScrolll = ({ postTitle, postSubtitle, postId }) => {
  const [blogPosts, setBlogPosts] = useState([]); // State to store blog posts
  const [loading, setLoading] = useState(true); // Loading state
  const scrollRef = useRef(null);

  // Blog list
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

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="lg:pl-32">
      <h1 className="text-xl font-bold mb-4 pl-4">Latest Posts</h1>
      <h1 className="text-2xl font-bold mb-4 pl-4">Ikeja Toastmasters Blog</h1>
      <p className="mb-8 pl-4">
        Interviews, tips, guides, industry best practices, and news.
      </p>
      <div
        className="flex overflow-x-scroll scrollbar-hide py-2"
        ref={scrollRef}
      >
        {blogList.map((blogpost) => (
          <div
            key={blogpost.id}
            className="flex flex-col items-start mx-2 mb-8"
          >
            <Carrdd
              author={blogpost.author?.name || "Anonymous"}
              date={blogpost.date || "No Date"}
              image={blogpost.imageUrl || "default-image.png"} // Default image if no image URL is provided
            />
            <PostInfoo
              postId={blogpost.id} // Pass the blog ID
              postTitle={blogpost.title || "Untitled"}
              postSubtitle={blogpost.description || "No description available"}
            />
            Example condition to show delete button if authorized
            {/* {isAuth && blogpost.author?.id === auth?.currentUser?.uid && (
              <button
                onClick={() => deleteBlog(blogpost.id)}
                className="text-red-500 mt-4"
              >
                Delete Blog
              </button>
            )} */}
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
// export const BlogSection = ({ isAuth }) => {
//   // export const BlogSection = ({ isAuth }) => {
//   const [blogList, setBlogList] = useState([]);

//   // Reference to the "blogposts" collection in Firestore
//   const blogCollectionRef = collection(db, "blogposts");

//   useEffect(() => {
//     // Fetch the blog posts from Firestore
//     const fetchBlogPosts = async () => {
//       try {
//         const data = await getDocs(blogCollectionRef);
//         setBlogList(
//           data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
//           // data.docs.map((doc) => ({ ...documentId.data(), id: doc.id }))
//         );
//       } catch (error) {
//         console.error("Error fetching blog posts:", error);
//       }
//     };

//     fetchBlogPosts();
//   }, []); // Run only once when the component mounts

//   // Delete a blog post
//   const deleteBlog = async (id) => {
//     try {
//       const blogDoc = doc(db, "blogposts", id);
//       await deleteDoc(blogDoc);
//       setBlogList(blogList.filter((blog) => blog.id !== id)); // Update the UI after deletion
//     } catch (error) {
//       console.error("Error deleting blog post:", error);
//     }
//   };

//   return (
//     <div className="blog-section">
//       <h1>Blogs</h1>
//       <div className="blog-list">
//         {blogList.map((blogpost) => (
//           <div className="blog-card" key={blogpost.id}>
//             <h2>{blogpost.title}</h2>
//             <p>Date: {blogpost.date}</p>
//             <p>Author: {blogpost.author?.name || "Unknown"}</p>
//             {isAuth && blogpost.author?.id === auth?.currentUser?.uid && (
//               <button onClick={() => deleteBlog(blogpost.id)}>
//                 Delete Blog
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const BackgroundSection = () => {
//   return (
//     <>
//       <section
//         className="relative bg-cover bg-center py-72 mx-4 sm:mx-8 lg:mx-16 -mt-20" // Adjusted padding to reduce height
//         style={{ backgroundImage: `url(${blog})` }}
//       >
//         {/* Optional Content Overlay if needed */}
//         <div className="absolute inset-0 flex items-center justify-center text-white">
//           {/* You can add any overlay text or elements here */}
//         </div>
//       </section>
//       <section className="pb-16 pt-8">
//         <div className="mx-auto space-y-4">
//           <p className="font-semibold text-[#094F72] ml-4 lg:ml-16 sm:ml-4">
//             Titilayo Ekundayo • June 24th, 2024
//           </p>
//           <h2 className="text-3xl font-bold mb-8 ml-4 lg:ml-16 sm:ml-4">
//             UX review presentations
//           </h2>
//           <p className="text-gray-800 ml-4 lg:ml-16 sm:ml-4">
//             How do you create compelling presentations that wow your colleagues
//             and impress your managers?
//           </p>
//           <div className="flex items-center justify-start mb-4 ml-4 lg:ml-16 sm:ml-4">
//             <a
//               href="#readPost"
//               className="text-[#094F72] hover:text-blue-700 flex items-center" // Updated color
//             >
//               Read Post{" "}
//               <span className="text-[#094F72]">
//                 {" "}
//                 {/* Updated arrow color */}
//                 {/* Top-right arrow (SVG) */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M7 17L17 7" />
//                   <path d="M7 7h10v10" />
//                 </svg>
//               </span>
//             </a>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// const cardsData = {
//   meetingRundowns: [
//     {
//       id: 1,
//       title: "Olivia Rhye",
//       subtitle: "20 Jan 2024",
//       image: blogprev,
//       postAuthor: "Titlayo Ekundayo",
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 3,
//       title: "Olivia Rhye",
//       subtitle: "20 Jan 2024",
//       image: blogprev,
//       postAuthor: "Titlayo Ekundayo",
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 2,
//       title: "Olivia Rhye",
//       subtitle: "20 Jan 2024",
//       image: blogprev,
//       postAuthor: "Titlayo Ekundayo",
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 4,
//       title: "Olivia Rhye",
//       subtitle: "20 Jan 2024",
//       image: blogprev,
//       postAuthor: "Titlayo Ekundayo",
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 5,
//       title: "Olivia Rhye",
//       subtitle: "20 Jan 2024",
//       image: blogprev,
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 6,
//       title: "Olivia Rhye",
//       subtitle: "20 Jan 2024",
//       image: blogprev,
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 7,
//       title: "Olivia Rhye",
//       subtitle: "20 Jan 2024",
//       image: blogprev,
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 8,
//       title: "Olivia Rhye",
//       subtitle: "20 Jan 2024",
//       image: blogprev,
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 9,
//       title: "Olivia Rhye",
//       subtitle: "20 Jan 2024",
//       image: blogprev,
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 10,
//       title: "Olivia Rhye",
//       subtitle: "20 Jan 2024",
//       image: blogprev,
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     // Add more cards as needed
//   ],
//   events: [
//     {
//       id: 1,
//       title: "Olivia Rhye",
//       subtitle: "20 Jan 2024",
//       image: blogprev,
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 2,
//       title: "Olivia Rhye",
//       subtitle: "20 Jan 2024",
//       image: blogprev,
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 3,
//       title: "Olivia Rhye",
//       subtitle: "20 Jan 2024",
//       image: blogprev,
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 4,
//       title: "Olivia Rhye",
//       subtitle: "20 Jan 2024",
//       image: blogprev,
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 5,
//       title: "Olivia Rhye",
//       subtitle: "20 Jan 2024",
//       image: blogprev,
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 6,
//       title: "Olivia Rhye",
//       subtitle: "20 Jan 2024",
//       image: "image6b.png",
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 7,
//       title: "Olivia Rhye",
//       subtitle: "20 Jan 2024",
//       image: "image7b.png",
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 8,
//       title: "Olivia Rhye",
//       subtitle: "20 Jan 2024",
//       image: "image8b.png",
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//   ],
//   newsArticles: [
//     {
//       id: 1,
//       title: "Olivia Rhye",
//       subtitle: "20 Jan 2024",
//       image: "image1c.png",
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 2,
//       title: "Olivia Rhye",
//       subtitle: "Subtitle 2C",
//       image: "image2c.png",
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 3,
//       title: "Olivia Rhye",
//       subtitle: "Subtitle 3C",
//       image: "image3c.png",
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 4,
//       title: "Olivia Rhye",
//       subtitle: "Subtitle 4C",
//       image: "image4c.png",
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 5,
//       title: "Olivia Rhye",
//       subtitle: "Subtitle 5C",
//       image: "image5c.png",
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 6,
//       title: "Olivia Rhye",
//       subtitle: "Subtitle 6C",
//       image: "image6c.png",
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 7,
//       title: "Olivia Rhye",
//       subtitle: "Subtitle 7C",
//       image: "image7c.png",
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 8,
//       title: "Olivia Rhye",
//       subtitle: "Subtitle 8C",
//       image: "image8c.png",
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//   ],
//   greatSpeeches: [
//     {
//       id: 1,
//       title: "Olivia Rhye",
//       subtitle: "Subtitle 1D",
//       image: "image1d.png",
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 2,
//       title: "Card 2D",
//       subtitle: "Subtitle 2D",
//       image: "image2d.png",
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 3,
//       title: "Card 3D",
//       subtitle: "Subtitle 3D",
//       image: "image3d.png",
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 4,
//       title: "Card 4D",
//       subtitle: "Subtitle 4D",
//       image: "image4d.png",
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 5,
//       title: "Card 5D",
//       subtitle: "Subtitle 5D",
//       image: "image5d.png",
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 6,
//       title: "Card 6D",
//       subtitle: "Subtitle 6D",
//       image: "image6d.png",
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 7,
//       title: "Card 7D",
//       subtitle: "Subtitle 7D",
//       image: "image7d.png",
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//     {
//       id: 8,
//       title: "Card 8D",
//       subtitle: "Subtitle 8D",
//       image: "image8d.png",
//       postTitle: "UX review",
//       postSubtitle: "How do you create compelling presentations",
//     },
//   ],
// };

// // Card Component
// const Card = ({ title, subtitle, image }) => (
//   <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//     <img src={image} alt={title} className="w-full h-48 object-cover" />
//     <div className="p-4">
//       <h3 className="text-xl font-semibold">{title}</h3>
//       <p className="text-gray-600">{subtitle}</p>
//     </div>
//   </div>
// );

// // PostInfo Component
// const PostInfo = ({ postAuthor, postTitle, postSubtitle }) => (
//   <div className="mt-2">
//     <p className="text-gray-500">{postAuthor}</p>
//     <h4 className="text-lg font-semibold mt-8">{postTitle}</h4>
//     <p className="text-gray-500">{postSubtitle}</p>
//     <button className="text-[#094F72] flex items-center mt-4 mb-8">
//       Read Post
//       <span className="text-[#094F72]">
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

// Firebase Storage initialization
// const storage = getStorage();
//create blog
// export const CreateBlog = ({ isAuth }) => {
//   const navigate = useNavigate();

//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [description, setDescription] = useState("");
//   const [quotes, setQuotes] = useState([]); // Stores all quotes
//   const [contentSections, setContentSections] = useState([]); // Stores all content blocks

//   const blogCollectionRef = collection(db, "blogposts");

//   // Adds a new quote section
//   const addQuoteSection = () => {
//     setQuotes([...quotes, { text: "", author: "", role: "" }]);
//   };

//   // Adds a new content section
//   const addContentSection = () => {
//     setContentSections([
//       ...contentSections,
//       { subtitle: "", paragraphs: [""], imageUrl: "", listItems: [] },
//     ]);
//   };

//   // Handles submission
//   const onSubmit = async () => {
//     try {
//       const postData = {
//         title,
//         date,
//         author: {
//           name: auth?.currentUser?.displayName,
//           id: auth?.currentUser?.uid,
//         },
//         imageUrl,
//         description,
//         quotes,
//         contentSections,
//       };

//       await addDoc(blogCollectionRef, postData);
//       navigate("/blog-preview");
//     } catch (err) {
//       console.error("Error adding document: ", err);
//     }
//   };

//   useEffect(() => {
//     if (!isAuth) navigate("/login");
//   }, [isAuth, navigate]);

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-4">Create Blog</h1>

//       {/* Blog Title */}
//       <div className="mb-4">
//         <label className="block font-medium">Title</label>
//         <input
//           type="text"
//           className="w-full p-2 border rounded"
//           placeholder="Enter blog title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </div>

//       {/* Blog Date */}
//       <div className="mb-4">
//         <label className="block font-medium">Date</label>
//         <input
//           type="date"
//           className="w-full p-2 border rounded"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//       </div>

//       {/* Blog Image */}
//       <div className="mb-4">
//         <label className="block font-medium">Main Image URL</label>
//         <input
//           type="text"
//           className="w-full p-2 border rounded"
//           placeholder="Enter image URL"
//           value={imageUrl}
//           onChange={(e) => setImageUrl(e.target.value)}
//         />
//       </div>

//       {/* Blog Description */}
//       <div className="mb-4">
//         <label className="block font-medium">Description</label>
//         <textarea
//           className="w-full p-2 border rounded"
//           rows="3"
//           placeholder="Enter blog description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </div>

//       {/* Quotes Section */}
//       <div>
//         <h2 className="text-lg font-semibold mb-2">Quotes</h2>
//         {quotes.map((quote, index) => (
//           <div key={index} className="mb-4 p-4 border rounded">
//             <h3 className="font-medium">Quote {index + 1}</h3>
//             <textarea
//               className="w-full p-2 mt-2 border rounded"
//               placeholder="Enter quote"
//               value={quote.text}
//               onChange={(e) =>
//                 setQuotes(
//                   quotes.map((q, i) =>
//                     i === index ? { ...q, text: e.target.value } : q
//                   )
//                 )
//               }
//             />
//             <input
//               type="text"
//               className="w-full p-2 mt-2 border rounded"
//               placeholder="Author"
//               value={quote.author}
//               onChange={(e) =>
//                 setQuotes(
//                   quotes.map((q, i) =>
//                     i === index ? { ...q, author: e.target.value } : q
//                   )
//                 )
//               }
//             />
//             <input
//               type="text"
//               className="w-full p-2 mt-2 border rounded"
//               placeholder="Role"
//               value={quote.role}
//               onChange={(e) =>
//                 setQuotes(
//                   quotes.map((q, i) =>
//                     i === index ? { ...q, role: e.target.value } : q
//                   )
//                 )
//               }
//             />
//           </div>
//         ))}
//         <button
//           onClick={addQuoteSection}
//           className="text-sm bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
//         >
//           Add Quote
//         </button>
//       </div>

//       {/* Content Sections */}
//       <div className="mt-8">
//         <h2 className="text-lg font-semibold mb-2">Content Sections</h2>
//         {contentSections.map((section, index) => (
//           <div key={index} className="mb-4 p-4 border rounded">
//             <h3 className="font-medium">Content Section {index + 1}</h3>
//             <input
//               type="text"
//               className="w-full p-2 mt-2 border rounded"
//               placeholder="Subtitle"
//               value={section.subtitle}
//               onChange={(e) =>
//                 setContentSections(
//                   contentSections.map((s, i) =>
//                     i === index ? { ...s, subtitle: e.target.value } : s
//                   )
//                 )
//               }
//             />
//             <textarea
//               className="w-full p-2 mt-2 border rounded"
//               rows="3"
//               placeholder="Paragraph"
//               value={section.paragraphs[0]}
//               onChange={(e) =>
//                 setContentSections(
//                   contentSections.map((s, i) =>
//                     i === index ? { ...s, paragraphs: [e.target.value] } : s
//                   )
//                 )
//               }
//             />
//             <input
//               type="text"
//               className="w-full p-2 mt-2 border rounded"
//               placeholder="Image URL"
//               value={section.imageUrl}
//               onChange={(e) =>
//                 setContentSections(
//                   contentSections.map((s, i) =>
//                     i === index ? { ...s, imageUrl: e.target.value } : s
//                   )
//                 )
//               }
//             />
//           </div>
//         ))}
//         <button
//           onClick={addContentSection}
//           className="text-sm bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
//         >
//           Add Content Section
//         </button>
//       </div>

//       {/* Submit Button */}
//       <button
//         onClick={onSubmit}
//         className="mt-8 w-full bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
//       >
//         Submit Blog
//       </button>
//     </div>
//   );
// };

// export const CreateBlog = ({ isAuth }) => {
//   let navigate = useNavigate();

//   const [newBlogPost, setNewBlogPost] = useState(""); // Blog title
//   const [date, setDate] = useState(0); // Blog post date
//   const [imageUrl, setImageUrl] = useState(""); // Image URL input
//   const [description, setDescription] = useState(""); // Blog description input

//   const blogCollectionRef = collection(db, "blogposts"); // Firestore reference

//   // Function to validate the image URL
//   const isValidImageUrl = (url) => {
//     return url.match(/\.(jpeg|jpg|gif|png)$/) != null; // Simple regex for image URL validation
//   };

//   const onSubmit = async () => {
//     // Check if the image URL is valid
//     if (!isValidImageUrl(imageUrl)) {
//       alert("Please provide a valid image URL.");
//       return;
//     }

//     try {
//       // Save the blog post data including the image URL and description to Firestore
//       await addDoc(blogCollectionRef, {
//         title: newBlogPost,
//         date: date,
//         author: {
//           name: auth?.currentUser?.displayName,
//           id: auth?.currentUser?.uid,
//         },
//         imageUrl: imageUrl, // Store the image URL
//         description: description, // Store the description
//       });
//       navigate("/blog-preview"); // Navigate to the blog preview page
//     } catch (err) {
//       console.error(err); // Log any errors
//     }
//   };

//   useEffect(() => {
//     if (!isAuth) {
//       navigate("/login"); // Redirect to login if user is not authenticated
//     }
//   }, [isAuth, navigate]);

//   return (
//     <div>
//       <h1>Create Blog</h1>
//       <div>
//         <label>Title</label>
//         <input
//           type="text"
//           placeholder="Title..."
//           onChange={(event) => setNewBlogPost(event.target.value)} // Update the title
//         />
//       </div>
//       <div>
//         <label>Date</label>
//         <input
//           type="number"
//           placeholder="Date"
//           onChange={(event) => setDate(Number(event.target.value))} // Update the date
//         />
//       </div>
//       <div>
//         <label>Image URL</label>
//         <input
//           type="text"
//           placeholder="Paste image URL here"
//           onChange={(event) => setImageUrl(event.target.value)} // Capture image URL input
//         />
//       </div>
//       <div>
//         <label>Description</label>
//         <textarea
//           placeholder="Enter description..."
//           onChange={(event) => setDescription(event.target.value)} // Capture description input
//         />
//       </div>
//       <button onClick={onSubmit}>Submit</button>
//     </div>
//   );
// };

// export const CreateBlog = ({ isAuth }) => {
//   let navigate = useNavigate();
//   const [newBlogPost, setNewBlogPost] = useState("");
//   const [date, setDate] = useState(0);

//   const blogCollectionRef = collection(db, "blogposts");

//   const onSubmit = async () => {
//     try {
//       await addDoc(blogCollectionRef, {
//         title: newBlogPost,
//         date: date,
//         author: {
//           name: auth?.currentUser?.displayName,
//           id: auth?.currentUser?.uid,
//         },
//       });
//       navigate("/blog-preview");
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   useEffect(() => {
//     if (!isAuth) {
//       navigate("/login");
//     }
//   }, []);

//   return (
//     <>
//       <h1>Create Blog</h1>
//       <div>
//         <label>Title</label>
//         <input
//           placeholder="Title..."
//           onChange={(event) => {
//             setNewBlogPost(event.target.value);
//           }}
//         />
//       </div>
//       <div>
//         <label>Date</label>
//         <input
//           placeholder="Date"
//           type="number"
//           onChange={(event) => {
//             setDate(Number(event.target.value));
//           }}
//         />
//       </div>
//       <button onClick={onSubmit}>Submit</button>
//     </>
//   );
// };

// // BlogSection Component
// const OldBlogSection = () => {
//   const [activeCategory, setActiveCategory] = useState("viewAll");
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
//     <section className="pb-16 pt-8">
//       <div className="flex flex-col sm:flex-row mb-8 pl-4 md:pl-8 lg:pl-16">
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
//               category.slice(1).replace(/([A-Z])/g, " $1")}
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-4 sm:px-6 md:px-8 lg:px-16">
//         {currentCards.map((card) => (
//           <div key={card.id}>
//             <Card
//               title={card.title}
//               subtitle={card.subtitle}
//               image={card.image}
//             />
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

export default BlogPreview;
