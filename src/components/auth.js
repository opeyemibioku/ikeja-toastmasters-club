import { useState } from "react";
import { auth, googleProvider } from "../pages/firebase/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

export const AccessAuth = ({ setIsAuth, isSignUp }) => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // localStorage.setItem("isAuth", true);
      // setIsAuth(true);
      navigate("/login"); // Redirect after successful sign-up
    } catch (err) {
      console.error(err);
    }
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // console.log("Current User:", auth.currentUser); // Debug log
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/blog-list-page"); // Redirect after successful sign-in
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/blog-list-page"); // Redirect after successful sign-in with Google
    } catch (err) {
      console.error(err);
    }
  };

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
    <>
      {/* <Navbar /> */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-[#004165] text-white py-2 rounded-lg hover:bg-opacity-90 transition"
            onClick={isSignUp ? signUp : signIn} // Toggle action based on isSignUp
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          {/* <div className="mt-4">
            <button
              className="w-full flex items-center justify-center bg-white border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
              onClick={signInWithGoogle}
            >
              <svg
                className="h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.9 0 6.7 1.6 8.3 2.9l6.2-6.2C34.6 2.8 29.9.5 24 .5 14.6.5 6.9 6.4 3.7 15.1l7.3 5.7C13.2 15.2 18.1 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M47.5 24.5c0-1.3-.1-2.5-.4-3.8H24v7.3h13.1c-1.6 4.2-5.6 7.2-10.2 7.2-6.1 0-11.1-5.1-11.1-11.2S17.9 13.3 24 13.3c2.6 0 5 .9 6.8 2.3l5.4-5.4C33.6 7.8 28.2 5.5 24 5.5 12.6 5.5 3.5 14.7 3.5 26.1S12.6 47.5 24 47.5c11.4 0 20.5-9.1 20.5-20.5 0-.8-.1-1.5-.2-2.5z"
                />
              </svg>
              <span className="text-gray-700 font-medium">
                Sign In with Google
              </span>
            </button>
          </div> */}
          <div className="mt-4 text-sm">
            {isSignUp ? (
              <span>
                Already have an account?{" "}
                <a href="/login" className="text-blue-600">
                  Sign In
                </a>
              </span>
            ) : (
              <span>
                Don't have an account?{" "}
                <a href="/sign-up" className="text-blue-600">
                  Sign Up
                </a>
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

// import { useState } from "react";
// import { auth, googleProvider } from "../pages/firebase/firebase-config";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// export const AccessAuth = ({ setIsAuth }) => {
//   let navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSignUp, setIsSignUp] = useState(true); // Track sign-up vs sign-in

//   const signUp = async () => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       localStorage.setItem("isAuth", true);
//       setIsAuth(true);
//       navigate("/blog-list-page");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const signIn = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       localStorage.setItem("isAuth", true);
//       setIsAuth(true);
//       navigate("/blog-list-page");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const signInWithGoogle = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//       localStorage.setItem("isAuth", true);
//       setIsAuth(true);
//       navigate("/blog-list-page");
//     } catch (err) {
//       console.error(err);
//     }
//   };

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
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-6">
//           {isSignUp ? "Sign Up" : "Sign In"}
//         </h2>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-600 mb-1">
//             Email
//           </label>
//           <input
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-600 mb-1">
//             Password
//           </label>
//           <input
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button
//           className="w-full bg-[#004165] text-white py-2 rounded-lg hover:bg-opacity-90 transition"
//           onClick={isSignUp ? signUp : signIn} // Toggle action
//         >
//           {isSignUp ? "Sign Up" : "Sign In"}
//         </button>
//         <div className="mt-4">
//           <button
//             className="w-full flex items-center justify-center bg-white border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
//             onClick={signInWithGoogle}
//           >
//             <svg
//               className="h-5 w-5 mr-2"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 48 48"
//             >
//               <path
//                 fill="#EA4335"
//                 d="M24 9.5c3.9 0 6.7 1.6 8.3 2.9l6.2-6.2C34.6 2.8 29.9.5 24 .5 14.6.5 6.9 6.4 3.7 15.1l7.3 5.7C13.2 15.2 18.1 9.5 24 9.5z"
//               />
//               <path
//                 fill="#4285F4"
//                 d="M47.5 24.5c0-1.3-.1-2.5-.4-3.8H24v7.3h13.1c-1.6 4.2-5.6 7.2-10.2 7.2-6.1 0-11.1-5.1-11.1-11.2S17.9 13.3 24 13.3c2.6 0 5 .9 6.8 2.3l5.4-5.4C33.6 7.8 28.2 5.5 24 5.5 12.6 5.5 3.5 14.7 3.5 26.1S12.6 47.5 24 47.5c11.4 0 20.5-9.1 20.5-20.5 0-.8-.1-1.5-.2-2.5z"
//               />
//             </svg>
//             <span className="text-gray-700 font-medium">
//               Sign In with Google
//             </span>
//           </button>
//         </div>
//         <div className="mt-4 text-sm">
//           {isSignUp ? (
//             <span>
//               Already have an account?{" "}
//               <button
//                 onClick={() => setIsSignUp(false)}
//                 className="text-blue-600"
//               >
//                 Sign In
//               </button>
//             </span>
//           ) : (
//             <span>
//               Don't have an account?{" "}
//               <button
//                 onClick={() => setIsSignUp(true)}
//                 className="text-blue-600"
//               >
//                 Sign Up
//               </button>
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// import { useState } from "react";
// import { auth, googleProvider } from "../pages/firebase/firebase-config";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// export const AccessAuth = ({ setIsAuth }) => {
//   let navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLogin, setIsLogin] = useState(true); // Track if it's login or sign-up

//   // console.log(auth?.currentUser?.email);

//   const signUp = async () => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       localStorage.setItem("isAuth", true);
//       setIsAuth(true);
//       navigate("/blog-list-page");
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   // Sign In function (email/password login)
//   const login = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       localStorage.setItem("isAuth", true);
//       setIsAuth(true);
//       navigate("/blog-list-page");
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   const signInWithGoogle = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//       localStorage.setItem("isAuth", true);
//       setIsAuth(true);
//       navigate("/blog-list-page");
//       // navigate("/display-blog");
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   const logout = async () => {
//     try {
//       await signOut(auth);
//       localStorage.clear();
//       setIsAuth(false);
//       // navigate("/login");
//       // window.location.pathname = "/login";
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//         <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
//           {/* <h2 className="text-xl font-semibold text-gray-800 mb-6">Sign In</h2> */}
//           <h2 className="text-xl font-semibold text-gray-800 mb-6">
//             {isLogin ? "Sign In" : "Sign Up"}
//           </h2>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               Email
//             </label>
//             <input
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               // placeholder="Enter your email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               Password
//             </label>
//             <input
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               type="password"
//               // placeholder="Enter your password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button
//             className="w-full bg-[#004165] text-white py-2 rounded-lg hover:bg-opacity-90 transition"
//             onClick={isLogin ? login : signUp}
//           >
//             {isLogin ? "Sign In" : "Sign Up"}
//           </button>

//           <div className="text-center mt-4">
//             <button
//               className="text-blue-500 hover:underline"
//               onClick={() => setIsLogin(!isLogin)} // Toggle between login/signup
//             >
//               {isLogin
//                 ? "Don't have an account? Sign up"
//                 : "Already have an account? Sign in"}
//             </button>
//           </div>
//           {/* <button
//             className="w-full bg-[#004165] text-white py-2 rounded-lg hover:bg-opacity-90 transition"
//             onClick={signUp}
//           >
//             Sign Up
//           </button> */}
//           <div className="mt-4">
//             <button
//               className="w-full flex items-center justify-center bg-white border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
//               onClick={signInWithGoogle}
//             >
//               <svg
//                 className="h-5 w-5 mr-2"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 48 48"
//               >
//                 <path
//                   fill="#EA4335"
//                   d="M24 9.5c3.9 0 6.7 1.6 8.3 2.9l6.2-6.2C34.6 2.8 29.9.5 24 .5 14.6.5 6.9 6.4 3.7 15.1l7.3 5.7C13.2 15.2 18.1 9.5 24 9.5z"
//                 />
//                 <path
//                   fill="#4285F4"
//                   d="M47.5 24.5c0-1.3-.1-2.5-.4-3.8H24v7.3h13.1c-1.6 4.2-5.6 7.2-10.2 7.2-6.1 0-11.1-5.1-11.1-11.2S17.9 13.3 24 13.3c2.6 0 5 .9 6.8 2.3l5.4-5.4C33.6 7.8 28.2 5.5 24 5.5 12.6 5.5 3.5 14.7 3.5 26.1S12.6 47.5 24 47.5c11.4 0 20.5-9.1 20.5-20.5 0-.8-.1-1.5-.2-2.5z"
//                 />
//               </svg>
//               <span className="text-gray-700 font-medium">
//                 Sign In with Google
//               </span>
//             </button>
//           </div>
//           {/* <button
//             className="w-full mt-4 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition"
//             onClick={logout}
//           >
//             Logout
//           </button> */}
//         </div>
//       </div>
//     </>
//   );
// };

// New

// import { useState } from "react";
// import { auth } from "../pages/firebase/firebase-config"; // Make sure your firebase-config is correct
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// export const Login = ({ setIsAuth }) => {
//   // export const Login = ({ setIsAuth, isSignUp }) => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // Handle Sign-up (create new user)
//   const handleSignUp = async () => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       // After successful sign-up, redirect to login page
//       navigate("/login");
//     } catch (err) {
//       console.error("Error during sign up:", err);
//     }
//   };

//   // Handle Login (sign in existing user)
//   const handleLogin = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       localStorage.setItem("isAuth", true); // Save auth status to localStorage
//       setIsAuth(true); // Update the parent component's auth state
//       navigate("/blog-list-page"); // Redirect to the dashboard (or wherever you want)
//     } catch (err) {
//       console.error("Error during login:", err);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-6">
//           {isSignUp ? "Sign Up" : "Log In"}
//         </h2>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-600 mb-1">
//             Email
//           </label>
//           <input
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-600 mb-1">
//             Password
//           </label>
//           <input
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button
//           className="w-full bg-[#004165] text-white py-2 rounded-lg hover:bg-opacity-90 transition"
//           onClick={isSignUp ? handleSignUp : handleLogin}
//         >
//           {isSignUp ? "Sign Up" : "Log In"}
//         </button>
//         <div className="mt-4 text-center">
//           <p className="text-sm text-gray-600">
//             {isSignUp ? "Already have an account? " : "Don't have an account? "}
//             <a
//               href="#"
//               className="text-blue-500"
//               onClick={() => navigate(isSignUp ? "/login" : "/signup")}
//             >
//               {isSignUp ? "Log In" : "Sign Up"}
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
// import { useState } from "react";
// import { auth, googleProvider } from "../pages/firebase/firebase-config";
// import {
//   createUserWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// export const AccessAuth = ({ setIsAuth }) => {
//   let navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // console.log(auth?.currentUser?.email);

//   const signIn = async () => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   const signInWithGoogle = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//       localStorage.setItem("isAuth", true);
//       setIsAuth(true);
//       navigate("/blog-list-page");
//       // navigate("/display-blog");
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   const logout = async () => {
//     try {
//       await signOut(auth);
//       localStorage.clear();
//       setIsAuth(false);
//       // navigate("/login");
//       // window.location.pathname = "/login";
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   return (
//     <>
//       {/* <input
//         placeholder="Email..."
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         placeholder="Password..."
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={signIn}>Sign In</button>

//       <button onClick={signInWithGoogle}>Sign In with Google</button>

//       <button onClick={logout}>Logout</button> */}

//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//         <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold text-gray-800 mb-6">Sign In</h2>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               Email
//             </label>
//             <input
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               // placeholder="Enter your email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               Password
//             </label>
//             <input
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               type="password"
//               // placeholder="Enter your password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button
//             className="w-full bg-[#004165] text-white py-2 rounded-lg hover:bg-opacity-90 transition"
//             onClick={signIn}
//           >
//             Sign In
//           </button>
//           <div className="mt-4">
//             <button
//               className="w-full flex items-center justify-center bg-white border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
//               onClick={signInWithGoogle}
//             >
//               <svg
//                 className="h-5 w-5 mr-2"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 48 48"
//               >
//                 <path
//                   fill="#EA4335"
//                   d="M24 9.5c3.9 0 6.7 1.6 8.3 2.9l6.2-6.2C34.6 2.8 29.9.5 24 .5 14.6.5 6.9 6.4 3.7 15.1l7.3 5.7C13.2 15.2 18.1 9.5 24 9.5z"
//                 />
//                 <path
//                   fill="#4285F4"
//                   d="M47.5 24.5c0-1.3-.1-2.5-.4-3.8H24v7.3h13.1c-1.6 4.2-5.6 7.2-10.2 7.2-6.1 0-11.1-5.1-11.1-11.2S17.9 13.3 24 13.3c2.6 0 5 .9 6.8 2.3l5.4-5.4C33.6 7.8 28.2 5.5 24 5.5 12.6 5.5 3.5 14.7 3.5 26.1S12.6 47.5 24 47.5c11.4 0 20.5-9.1 20.5-20.5 0-.8-.1-1.5-.2-2.5z"
//                 />
//               </svg>
//               <span className="text-gray-700 font-medium">
//                 Sign In with Google
//               </span>
//             </button>
//           </div>
//           {/* <button
//             className="w-full mt-4 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition"
//             onClick={logout}
//           >
//             Logout
//           </button> */}
//         </div>
//       </div>
//     </>
//   );
// };
