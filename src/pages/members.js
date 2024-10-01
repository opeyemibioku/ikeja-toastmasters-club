import { useRef } from "react";
import { MembersHero } from "../components/hero";
import trial from "../assets/images/members/trial.png";
import welcomemember from "../assets/images/members/welcomemember.png";
import membershipcost from "../assets/images/members/membershipcost.png";
import event from "../assets/images/leaders/event.png";
import Navbar from "../components/navbar";

const Members = () => {
  return (
    <>
      <Navbar />
      <MembersHero />
      <DownloadsSignUpSection />
      <WelcomeToTheClub />
      <BecomeMember />
      <FreeTrial />
    </>
  );
};

const DownloadsSignUpSection = () => {
  return (
    <div className="bg-[#004165] text-white py-4 flex items-center justify-center">
      <div className="flex items-center">
        <p className="text-lg mb-0 md:mr-10">
          Sign up for 10 daily free downloads and access to AI tools
        </p>
        <button className="bg-[#772432] hover:bg-[#8a2638] text-white font-semibold py-2 px-4 rounded ml-4">
          Join a Club
        </button>
      </div>
    </div>
  );
};
const WelcomeToTheClub = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-10 px-24">
      <div className="md:w-6/12 mb-8 md:mb-0 md:pr-4">
        {" "}
        {/* Added padding to the right */}
        <h2 className="text-2xl font-bold mb-4">
          We are proud to welcome you to the club
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Come to our Meetings as a Guest
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Come to our Meetings as a Guest
        </p>
        <p className="text-lg text-gray-700">Come to our Meetings as a Guest</p>
      </div>
      <div className="md:w-6/12 flex justify-center">
        <div className="bg-[#004165] shadow-md overflow-hidden w-full md:max-w-[400px]">
          <img
            src={welcomemember} // Replace with your image URL
            alt="Example"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-white mb-4">Lorem ipsum dolor</p>
            <h2 className="text-xl font-semibold text-white mb-8">
              Come to Our Meetings as a Guest Lorem Ipsum dolor ascet
            </h2>
            <p className="text-white">24, Adeola Odeku Street, Ikeja.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BecomeMember = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-[#3F1018] text-white mx-16">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-3xl font-bold mb-4">
          How much does it cost to be a member?
        </h1>
        <p className="text-lg">
          At Ikeja Toastmasters, we believe in the power of communication and
          leadership to transform lives. Founded in 2014, our organization has
          grown into a community dedicated to helping individuals develop their
          public speaking and leadership skills in a supportive, experiential
          learning environment. <br />
          At Ikeja Toastmasters, we believe in the power of communication and
          leadership to transform lives.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src={membershipcost} // Replace with your image URL
          alt="Example"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

// const FreeTrial = () => {
//   const offerings = [
//     {
//       image: trial,
//       title:
//         "“We’ve been using Untitled to kick start every new project and can’t imagine working without it. It’s incredible.”",
//       name: "Caitlyn King",
//       role: "Lead Designer, Layers",
//       company: "Web Development Agency",
//     },
//   ];
//   return (
//     <section className="py-16 bg-gray-100 px-4 md:px-8 lg:px-12">
//       <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center  lg:text-left lg:space-x-12">
//         {/* Contact Form on the Left */}
//         <div className="lg:w-1/2 mx-auto">
//           <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
//           <p>Welcome back Titilayo, Enter your details</p>
//           <form>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2" htmlFor="name">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 className="w-full border border-gray-300 p-2 rounded"
//                 placeholder="Your Name"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full border border-gray-300 p-2 rounded"
//                 placeholder="Your Email"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2" htmlFor="message">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 className="w-full border border-gray-300 p-2 rounded"
//                 rows="4"
//                 placeholder="Your Message"
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         <div className="lg:w-1/2 mx-auto mt-8 lg:mt-0">
//           {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"> */}
//           {offerings.map((offering, index) => (
//             <div key={index} className="relative overflow-hidden shadow-lg">
//               <img
//                 src={offering.image}
//                 alt={offering.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end bg-white bg-opacity-90 p-6 m-1 rounded-b-lg">
//                 <h3 className="text-2xl font-semibold text-black mb-1">
//                   {offering.title}
//                 </h3>
//                 <p className="text-lg text-black my-4">{offering.name}</p>
//                 <p className="text-sm text-black mb-4">{offering.role}</p>
//                 <p className="text-xs text-black">{offering.company}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

const FreeTrial = () => {
  const offerings = [
    {
      image: trial,
      title:
        "“We’ve been using Untitled to kick start every new project and can’t imagine working without it. It’s incredible.”",
      name: "Caitlyn King",
      role: "Lead Designer, Layers",
      company: "Web Development Agency",
    },
  ];

  return (
    <section className="py-16 bg-[#004165] px-4 md:px-8 lg:px-12 mt-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:text-left lg:space-x-12">
        {/* Contact Form on the Left */}
        <div className="lg:w-4/12 mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6">Enter Information</h2>
          <p>Start your 30-day free trial.</p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 mt-8" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 p-2 rounded"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#004165] text-white py-2 px-4 rounded hover:bg-[#003354]"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="lg:w-5/12 mx-auto mt-8 lg:mt-0">
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"> */}
          {offerings.map((offering, index) => (
            <div key={index} className="relative overflow-hidden shadow-lg">
              <img
                src={offering.image}
                alt={offering.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end bg-white bg-opacity-90 p-6 m-1 rounded-b-lg">
                <h3 className="text-2xl font-semibold text-black mb-1">
                  {offering.title}
                </h3>
                <p className="text-lg text-black my-4">{offering.name}</p>
                <p className="text-sm text-black mb-4">{offering.role}</p>
                <p className="text-xs text-black">{offering.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
