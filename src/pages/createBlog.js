// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { auth, db } from "./firebase/firebase-config";
// import { addDoc, collection, doc, updateDoc, getDoc } from "firebase/firestore";

// //create blog
// export const CreateBlog = ({ isAuth }) => {
//   const navigate = useNavigate();
//   const { blogId } = useParams(); // Get blogId from URL for update
//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [description, setDescription] = useState("");
//   const [quotes, setQuotes] = useState([]); // Stores all quotes
//   const [contentSections, setContentSections] = useState([]); // Stores all content blocks

//   const blogCollectionRef = collection(db, "blogposts");

//   // // Fetch blog post data when updating
//   // useEffect(() => {
//   //   if (!isAuth) navigate("/login");

//   //   if (blogId) {
//   //     const fetchBlogData = async () => {
//   //       const blogDoc = await getDoc(doc(db, "blogposts", blogId));
//   //       if (blogDoc.exists()) {
//   //         const blogData = blogDoc.data();
//   //         setTitle(blogData.title);
//   //         setDate(blogData.date);
//   //         setImageUrl(blogData.imageUrl);
//   //         setDescription(blogData.description);
//   //         setQuotes(blogData.quotes || []);
//   //         setContentSections(blogData.contentSections || []);
//   //       }
//   //     };
//   //     fetchBlogData();
//   //   }
//   // }, [isAuth, navigate, blogId]);

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

//       if (blogId) {
//         // Update existing blog
//         const blogRef = doc(db, "blogposts", blogId);
//         await updateDoc(blogRef, postData);
//       } else {
//         // Add new blog
//         await addDoc(blogCollectionRef, postData);
//       }

//       navigate("/blog-list-page");
//     } catch (err) {
//       console.error("Error saving document: ", err);
//     }
//   };

//   //   // Delete blog post (if applicable)
//   //   const onDelete = async () => {
//   //     if (blogId) {
//   //       const blogRef = doc(db, "blogposts", blogId);
//   //       await deleteDoc(blogRef);
//   //       navigate("/blog-list-page");
//   //     }
//   //   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-4">
//         {blogId ? "Update Blog" : "Create Blog"}
//       </h1>

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
//         {blogId ? "Update Blog" : "Submit Blog"}
//       </button>
//     </div>
//   );
// };

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { auth, db } from "./firebase/firebase-config";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Navbar from "../components/navbar";

//create blog
export const CreateBlog = ({ isAuth }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [quotes, setQuotes] = useState([]); // Stores all quotes
  const [contentSections, setContentSections] = useState([]); // Stores all content blocks

  const blogCollectionRef = collection(db, "blogposts");

  // Adds a new quote section
  const addQuoteSection = () => {
    setQuotes([...quotes, { text: "", author: "", role: "" }]);
  };

  // Adds a new content section
  const addContentSection = () => {
    setContentSections([
      ...contentSections,
      { subtitle: "", paragraphs: [""], imageUrl: "", listItems: [] },
    ]);
  };

  // Handles submission
  const onSubmit = async () => {
    try {
      const postData = {
        title,
        date,
        author: {
          name: auth?.currentUser?.displayName,
          id: auth?.currentUser?.uid,
        },
        imageUrl,
        description,
        quotes,
        contentSections,
      };

      await addDoc(blogCollectionRef, postData);
      navigate("/blog-list-page");
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  useEffect(() => {
    if (!isAuth) navigate("/login");
  }, [isAuth, navigate]);

  return (
    <>
      {/* <Navbar />{" "} */}
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-16">
        <h1 className="text-2xl font-bold mb-4">Create Blog</h1>

        {/* Blog Title */}
        <div className="mb-4">
          <label className="block font-medium">Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Blog Date */}
        <div className="mb-4">
          <label className="block font-medium">Date</label>
          <input
            type="date"
            className="w-full p-2 border rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Blog Image */}
        <div className="mb-4">
          <label className="block font-medium">Main Image URL</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        {/* Blog Description */}
        <div className="mb-4">
          <label className="block font-medium">Description</label>
          <textarea
            className="w-full p-2 border rounded"
            rows="3"
            placeholder="Enter blog description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Quotes Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quotes</h2>
          {quotes.map((quote, index) => (
            <div key={index} className="mb-4 p-4 border rounded">
              <h3 className="font-medium">Quote {index + 1}</h3>
              <textarea
                className="w-full p-2 mt-2 border rounded"
                placeholder="Enter quote"
                value={quote.text}
                onChange={(e) =>
                  setQuotes(
                    quotes.map((q, i) =>
                      i === index ? { ...q, text: e.target.value } : q
                    )
                  )
                }
              />
              <input
                type="text"
                className="w-full p-2 mt-2 border rounded"
                placeholder="Author"
                value={quote.author}
                onChange={(e) =>
                  setQuotes(
                    quotes.map((q, i) =>
                      i === index ? { ...q, author: e.target.value } : q
                    )
                  )
                }
              />
              <input
                type="text"
                className="w-full p-2 mt-2 border rounded"
                placeholder="Role"
                value={quote.role}
                onChange={(e) =>
                  setQuotes(
                    quotes.map((q, i) =>
                      i === index ? { ...q, role: e.target.value } : q
                    )
                  )
                }
              />
            </div>
          ))}
          <button
            onClick={addQuoteSection}
            className="text-sm bg-sky-900 text-white px-4 py-2 rounded shadow hover:bg-sky-900"
          >
            Add Quote
          </button>
        </div>

        {/* Content Sections */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Content Sections</h2>
          {contentSections.map((section, index) => (
            <div key={index} className="mb-4 p-4 border rounded">
              <h3 className="font-medium">Content Section {index + 1}</h3>
              <input
                type="text"
                className="w-full p-2 mt-2 border rounded"
                placeholder="Subtitle"
                value={section.subtitle}
                onChange={(e) =>
                  setContentSections(
                    contentSections.map((s, i) =>
                      i === index ? { ...s, subtitle: e.target.value } : s
                    )
                  )
                }
              />
              <textarea
                className="w-full p-2 mt-2 border rounded"
                rows="3"
                placeholder="Paragraph"
                value={section.paragraphs[0]}
                onChange={(e) =>
                  setContentSections(
                    contentSections.map((s, i) =>
                      i === index ? { ...s, paragraphs: [e.target.value] } : s
                    )
                  )
                }
              />
              <input
                type="text"
                className="w-full p-2 mt-2 border rounded"
                placeholder="Image URL"
                value={section.imageUrl}
                onChange={(e) =>
                  setContentSections(
                    contentSections.map((s, i) =>
                      i === index ? { ...s, imageUrl: e.target.value } : s
                    )
                  )
                }
              />
            </div>
          ))}
          <button
            onClick={addContentSection}
            className="text-sm bg-sky-900 text-white px-4 py-2 rounded shadow hover:bg-sky-900"
          >
            Add Content Section
          </button>
        </div>

        {/* Submit Button */}
        <button
          onClick={onSubmit}
          className="mt-8 w-full bg-sky-900 text-white px-4 py-2 rounded shadow hover:bg-sky-900"
        >
          Submit Blog
        </button>
      </div>
    </>
  );
};
