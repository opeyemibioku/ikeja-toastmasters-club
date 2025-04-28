import { useRef } from "react";
import { LeadersHero } from "../components/hero";
import leadership from "../assets/images/about/leadership.png";
import event from "../assets/images/leaders/event.png";
import Navbar from "../components/navbar";

const Leaders = () => {
  return (
    <>
      {/* <Navbar /> */}
      <LeadersHero />
      <Leadership />
      <Quotes />
      <Events />
    </>
  );
};

const Leadership = () => {
  const offerings = [
    {
      image: leadership,
      title: "Club President",
      tenure: "July 2021- June 2022",
      subtitle: "Ibraheem Kasim",
    },
    {
      image: leadership,
      title: "VP Membership, VP Education, and Club President",
      // tenure: "July 2021- June 2022",
      subtitle: "Abdullahi Jimoh",
    },
    {
      image: leadership,
      title:
        "Pioneering Executive Member , Third President of Ikeja Toastmaster",
      tenure: "2015/2016",
      subtitle: "Ibrahim fatoyinbo",
    },
    {
      image: leadership,
      title: "Assistant Division Director Club Growth 2",
      tenure: "2023 - 2024",
      subtitle: "Clarence Jumbo",
    },
    {
      image: leadership,
      title: "Charter President ",
      tenure: "2013/2014",
      subtitle: "Ibrahim Owolabi",
    },
    {
      image: leadership,
      title: "Current President",
      // tenure: "July 2021- June 2022",
      subtitle: "Stephen Oluwadare",
    },
    // {
    //   image: leadership,
    //   title: "President",
    //   tenure: "July 2021- June 2022",
    //   subtitle: "Titilayo Ekundayo",
    // },
    // {
    //   image: leadership,
    //   title: "President",
    //   subtitle: "Titilayo Ekundayo",
    // },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16">
        <h2 className="text-4xl font-bold mb-12 ">
          Past Presidents <span className="font-md">(2011-Current)</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {offerings.map((offering, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-4">
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="w-full h-full object-cover  border border-gray-300"
                />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-semibold">{offering.subtitle}</h3>
                <p
                  className="text-lg text-gray-600 mb-2"
                  style={{ fontSize: "1rem" }}
                >
                  {offering.title}
                </p>
                <p
                  className="text-lg text-gray-600 mb-2"
                  style={{ fontSize: "0.8rem" }}
                >
                  {offering.tenure}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const testimonialsData = [
  {
    id: 1,
    text: "“Ikeja Toastmaster club is a pedestal for personal and professional development. I've grown from strength to strength by mere association with this noble club.”",
    author: "— Ibraheem Kasim",
  },
  {
    id: 2,
    text: "“Subscribing to toastmasters International was one of the best decisions i took, toastmasters club as tremendously added value to my public speaking dexterity and leadership capacity. This has induced successes recorded in my career development.”",
    author: "— Ibrahim Fatoyinbo",
  },
  {
    id: 3,
    text: "“Toastmasters International is an organization built on a vision to transform lives, build individual self esteem and make you a change agent. Toastmasters International will help you find your voice, use the power of words to confidently impact lives and transform society.”",
    author: "— Clarence Jumbo",
  },
  {
    id: 4,
    text: "“Joining NCPS Toastmasters in Abuja in 2013 and Chartering Ikeja Toastmasters Club in 2014 alongside others taught me invaluable lessons in leadership and teamwork. The skills I have developed in communication and leadership have continually improved over time, earning me recognition both personally and professionally.”",
    author: "— Ibrahim Owolabi",
  },
];

const TestimonialCard = ({ text, author }) => (
  <div className="min-w-[30rem] overflow-hidden mx-2 mb-8 pt-8">
    <p className="text-gray-600 font-md text-white">{text}</p>
    <p className="text-left mt-4 text-white">{author}</p>
  </div>
);

const Quotes = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="lg:pl-32 bg-[#004165] py-8">
      <h1 className="text-2xl font-bold mt-8 text-white pl-4">
        Past Presidents Quotes
      </h1>
      <div
        className="flex overflow-x-scroll scrollbar-hide pb-8"
        ref={scrollRef}
      >
        {testimonialsData.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            text={testimonial.text}
            author={testimonial.author}
          />
        ))}
      </div>
      {/* <div className="flex justify-center mt-4">
        <button
          onClick={() => scroll("left")}
          className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-2 hover:bg-blue-600 transition-colors"
        >
          &lt; 
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-2 hover:bg-blue-600 transition-colors"
        >
          &gt; 
        </button>
      </div> */}
    </div>
  );
};

// Events
const imageData = [
  {
    id: 1,
    src: event,
    text: "Meetings",
  },
  {
    id: 2,
    src: event,
    text: "Meetings",
  },
  {
    id: 3,
    src: event,
    text: "Meetings",
  },
  {
    id: 4,
    src: event,
    text: "Meetings",
  },
  {
    id: 5,
    src: event,
    text: "Meetings",
  },
  {
    id: 6,
    src: event,
    text: "Meetings",
  },
  {
    id: 7,
    src: event,
    text: "Meetings",
  },
  {
    id: 8,
    src: event,
    text: "Meetings",
  },
  {
    id: 9,
    src: event,
    text: "Meetings",
  },
];

const ImageCard = ({ src, text }) => (
  <div className="relative overflow-hidden mb-4">
    <img
      src={src}
      alt={text}
      className="w-full h-48 object-cover md:h-60 lg:h-72"
    />
    <div className="absolute top-2 left-2 text-white font-bold bg-black bg-opacity-50 p-2 rounded">
      {text}
    </div>
    <div className="absolute bottom-2 left-2">
      <span className="ml-2 text-white">
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
    </div>
  </div>
);

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
      {imageData.map(({ id, src, text }) => (
        <ImageCard key={id} src={src} text={text} />
      ))}
    </div>
  );
};

const Events = () => {
  return (
    <div className="px-4 md:px-16">
      <h1 className="text-2xl font-bold my-4 pl-4 mt-8">Milestone Events</h1>
      <ImageGrid />
    </div>
  );
};

export default Leaders;
