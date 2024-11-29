// import * as React from "react";
// import { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { Home } from "./pages/home";
// import About from "./pages/about";
// import BlogPreview from "./pages/blogPreview";
// import { BlogSection } from "./pages/blogListPage";
// // import { BlogDetails } from "./pages/blogPreview";
// // import  { DisplayBlog } from "./pages/blogMain";
// // import BlogMain, { DisplayBlog } from "./pages/blogMain";
// import Gallery from "./pages/gallery";
// import Contact from "./pages/contact";
// import Leaders from "./pages/leaders";
// import Members from "./pages/members";
// import { Footer } from "./components/footer";
// import { CreateBlog } from "./pages/createBlog";
// // import { CreateBlog, DisplayBlog } from "./pages/blogMain";
// //auth
// import { Login } from "./components/auth";
// import { AccessAuth } from "./components/auth";
// import { db, auth } from "./pages/firebase/firebase-config";
// import {
//   getDocs,
//   collection,
//   addDoc,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";
// import { signOut } from "firebase/auth";

// function App() {
//   //check which user is logged in
//   const [isAuth, setIsAuth] = useState(false);

//   const logout = async () => {
//     try {
//       await signOut(auth);
//       localStorage.clear();
//       setIsAuth(false);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <BrowserRouter>
//       {/* Navigation Links */}
//       <div className="space-x-6">
//         {!isAuth ? (
//           <Link
//             to="/login"
//             className="text-white py-2 px-4 rounded-lg bg-green-500 hover:bg-green-600 transition duration-300"
//           >
//             Login
//           </Link>
//         ) : (
//           <>
//             <Link
//               to="/create-blog"
//               className="text-white py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-300"
//             >
//               Create Blog
//             </Link>

//             {/* Logout Button */}
//             <button
//               onClick={logout}
//               className="text-white py-2 px-4 rounded-lg bg-red-500 hover:bg-red-600 transition duration-300"
//             >
//               Logout
//             </button>
//           </>
//         )}
//       </div>
//       {/* <nav>
//         {!isAuth ? (
//           <Link to="/login">Login</Link>
//         ) : (
//           <Link to="/create-blog">Create Blog</Link>
//         )}
//       </nav> */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route
//           path="blog-list-page"
//           element={<BlogSection isAuth={isAuth} />}
//         />
//         {/* <Route path="blog-main" element={<BlogMain />} /> */}
//         <Route path="gallery" element={<Gallery />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="leaders" element={<Leaders />} />
//         <Route path="members" element={<Members />} />
//         <Route path="create-blog" element={<CreateBlog isAuth={isAuth} />} />
//         <Route path="/blog-edit/:id" element={<CreateBlog isAuth={isAuth} />} />
//         <Route path="/blog/:id" element={<BlogPreview />} />
//         {/* <Route path="display-blog" element={<DisplayBlog isAuth={isAuth} />} /> */}

//         <Route
//           path="/login"
//           element={<AccessAuth setIsAuth={setIsAuth} isSignUp={false} />}
//         />
//         <Route
//           path="/sign-up"
//           element={<AccessAuth setIsAuth={setIsAuth} isSignUp={true} />}
//         />

//         {/* <Route path="authe" element={<></>} /> */}
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;

import * as React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import About from "./pages/about";
import BlogPreview from "./pages/blogPreview";
import { BlogSection } from "./pages/blogListPage";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Leaders from "./pages/leaders";
import Members from "./pages/members";
import { Footer } from "./components/footer";
import { CreateBlog } from "./pages/createBlog";

// Authentication components
import { AccessAuth } from "./components/auth";
import { db, auth } from "./pages/firebase/firebase-config";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";

// Import the Navbar
import Navbar from "./components/navbar";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      setIsAuth(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <BrowserRouter>
      {/* Navbar Component */}
      <Navbar isAuth={isAuth} logout={logout} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="blog-list-page"
          element={<BlogSection isAuth={isAuth} />}
        />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="leaders" element={<Leaders />} />
        <Route path="members" element={<Members />} />
        <Route path="create-blog" element={<CreateBlog isAuth={isAuth} />} />
        <Route path="/blog-edit/:id" element={<CreateBlog isAuth={isAuth} />} />
        <Route path="/blog/:id" element={<BlogPreview />} />
        <Route
          path="/login"
          element={<AccessAuth setIsAuth={setIsAuth} isSignUp={false} />}
        />
        <Route
          path="/sign-up"
          element={<AccessAuth setIsAuth={setIsAuth} isSignUp={true} />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
