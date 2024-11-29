// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
// } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

// // internal import
// import toastmasterslogo from "../assets/toastmasters-logo.png";

// const navigation = [
//   { name: "Home", href: "/", current: true },
//   { name: "About us", href: "about", current: false },
//   { name: "Become a Member", href: "members", current: false },
//   { name: "Leaders", href: "leaders", current: false },
//   { name: "Blog", href: "blog-main", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar() {
//   return (
//     <Disclosure as="nav" className="bg-white">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* Mobile menu button*/}
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon
//                 aria-hidden="true"
//                 className="block h-6 w-6 group-data-[open]:hidden"
//               />
//               <XMarkIcon
//                 aria-hidden="true"
//                 className="hidden h-6 w-6 group-data-[open]:block"
//               />
//             </DisclosureButton>
//           </div>
//           {/* <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"> */}
//           <div className="flex flex-1 items-center justify-center sm:items-stretch">
//             <div className="flex flex-shrink-0 items-center">
//               <a href="/">
//                 {" "}
//                 <img
//                   alt="toastmasterslogo"
//                   src={toastmasterslogo}
//                   className="h-8 w-auto"
//                 />
//               </a>
//             </div>
//             <div className="hidden sm:ml-6 sm:block flex-1 justify-center">
//               <div className="flex justify-center space-x-4">
//                 {/* <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4"> */}
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     aria-current={item.current ? "page" : undefined}
//                     className={classNames(
//                       item.current
//                         ? "text-sky-900"
//                         : "text-gray-500 hover:text-blue-900",
//                       "rounded-md px-3 py-2 text-sm font-medium"
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <button
//               type="submit"
//               className="rounded-md bg-sky-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Sign In
//             </button>
//           </div>
//         </div>
//       </div>

//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pb-3 pt-2">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={item.current ? "page" : undefined}
//               className={classNames(
//                 item.current
//                   ? "bg-sky-900 text-white"
//                   : "text-gray-500 hover:bg-sky-900 hover:text-white",
//                 "block rounded-md px-3 py-2 text-base font-medium"
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   );
// }

// import * as React from "react";
// import { Disclosure } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { Link } from "react-router-dom";
// import toastmasterslogo from "../assets/toastmasters-logo.png";

// const navigation = [
//   { name: "Home", href: "/", current: true },
//   { name: "About us", href: "about", current: false },
//   { name: "Become a Member", href: "members", current: false },
//   { name: "Leaders", href: "leaders", current: false },
//   { name: "Blog", href: "blog-list-page", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar({ isAuth, logout }) {
//   return (
//     <Disclosure as="nav" className="bg-white">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon
//                 aria-hidden="true"
//                 className="block h-6 w-6 group-data-[open]:hidden"
//               />
//               <XMarkIcon
//                 aria-hidden="true"
//                 className="hidden h-6 w-6 group-data-[open]:block"
//               />
//             </Disclosure.Button>
//           </div>

//           <div className="flex flex-1 items-center justify-center sm:items-stretch">
//             <div className="flex flex-shrink-0 items-center">
//               <a href="/">
//                 <img
//                   alt="toastmasterslogo"
//                   src={toastmasterslogo}
//                   className="h-8 w-auto"
//                 />
//               </a>
//             </div>
//             <div className="hidden sm:ml-6 sm:block flex-1 justify-center">
//               <div className="flex justify-center space-x-4">
//                 {navigation.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     className={classNames(
//                       item.current
//                         ? "text-sky-900"
//                         : "text-gray-500 hover:text-blue-900",
//                       "rounded-md px-3 py-2 text-sm font-medium"
//                     )}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             {!isAuth ? (
//               <Link
//                 to="/login"
//                 className="rounded-md bg-sky-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Login
//               </Link>
//             ) : (
//               <>
//                 <Link
//                   to="/create-blog"
//                   className="text-white py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-300"
//                 >
//                   Create Blog
//                 </Link>
//                 <button
//                   onClick={logout}
//                   className="text-white py-2 px-4 rounded-lg bg-red-500 hover:bg-red-600 transition duration-300"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>

//       <Disclosure.Panel className="sm:hidden">
//         <div className="space-y-1 px-2 pb-3 pt-2">
//           {navigation.map((item) => (
//             <Disclosure.Button
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={item.current ? "page" : undefined}
//               className={classNames(
//                 item.current
//                   ? "bg-sky-900 text-white"
//                   : "text-gray-500 hover:bg-sky-900 hover:text-white",
//                 "block rounded-md px-3 py-2 text-base font-medium"
//               )}
//             >
//               {item.name}
//             </Disclosure.Button>
//           ))}
//         </div>
//       </Disclosure.Panel>
//     </Disclosure>
//   );
// }
import * as React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import toastmasterslogo from "../assets/toastmasters-logo.png";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About us", href: "about", current: false },
  { name: "Become a Member", href: "members", current: false },
  { name: "Leaders", href: "leaders", current: false },
  { name: "Blog", href: "blog-list-page", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ isAuth, logout }) {
  return (
    <Disclosure as="nav" className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </Disclosure.Button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch">
            <div className="flex flex-shrink-0 items-center">
              <a href="/">
                <img
                  alt="toastmasterslogo"
                  src={toastmasterslogo}
                  className="h-8 w-auto"
                />
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:block flex-1 justify-center">
              <div className="flex justify-center space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "text-sky-900"
                        : "text-gray-500 hover:text-blue-900",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-4">
            {!isAuth ? (
              <Link
                to="/login"
                className="rounded-md bg-sky-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </Link>
            ) : (
              <>
                <Link
                  to="/create-blog"
                  className="rounded-md bg-white border-2 border-sky-900 text-sky-900 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
                >
                  Create Blog
                </Link>
                <button
                  onClick={logout}
                  className="rounded-md bg-sky-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-sky-900 text-white"
                  : "text-gray-500 hover:bg-sky-900 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
