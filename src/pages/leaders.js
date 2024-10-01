import { useRef } from "react";
import { LeadersHero } from "../components/hero";
import leadership from "../assets/images/about/leadership.png";
import event from "../assets/images/leaders/event.png";
import Navbar from "../components/navbar";

const Leaders = () => {
  return (
    <>
      <Navbar />
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
      title: "President",
      subtitle: "Titilayo Ekundayo",
    },
    {
      image: leadership,
      title: "President",
      subtitle: "Titilayo Ekundayo",
    },
    {
      image: leadership,
      title: "President",
      subtitle: "Titilayo Ekundayo",
    },
    {
      image: leadership,
      title: "President",
      subtitle: "Titilayo Ekundayo",
    },
    {
      image: leadership,
      title: "President",
      subtitle: "Titilayo Ekundayo",
    },
    {
      image: leadership,
      title: "President",
      subtitle: "Titilayo Ekundayo",
    },
    {
      image: leadership,
      title: "President",
      subtitle: "Titilayo Ekundayo",
    },
    {
      image: leadership,
      title: "President",
      subtitle: "Titilayo Ekundayo",
    },
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
                <p className="text-lg text-gray-600 mb-2">{offering.title}</p>
                <h3 className="text-2xl font-semibold">{offering.subtitle}</h3>
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
    text: "“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”",
    author: "— Titilayo Ekundayo, President, Ikeja Toastmasters.",
  },
  {
    id: 2,
    text: "“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”",
    author: "— Titilayo Ekundayo, President, Ikeja Toastmasters.",
  },
  {
    id: 3,
    text: "“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”",
    author: "— Titilayo Ekundayo, President, Ikeja Toastmasters.",
  },
  {
    id: 4,
    text: "“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”",
    author: "— Titilayo Ekundayo, President, Ikeja Toastmasters.",
  },
  {
    id: 5,
    text: "“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”",
    author: "— Titilayo Ekundayo, President, Ikeja Toastmasters.",
  },
  {
    id: 6,
    text: "“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”",
    author: "— Titilayo Ekundayo, President, Ikeja Toastmasters.",
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
    <div className="pl-32 bg-[#004165] py-8">
      <h1 className="text-2xl font-bold mt-8 text-white">
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

//events
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
  <div className="relative overflow-hidden">
    <img src={src} alt={text} className="w-full h-full object-cover" />
    <div className="absolute top-2 left-2 text-white font-bold bg-black bg-opacity-50 p-2 rounded">
      {text}
    </div>

    <div className="absolute bottom-2 left-2">
      <span className="ml-2 text-white ">
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
    <div className="grid grid-cols-3 gap-4 p-4">
      {imageData.map(({ id, src, text }) => (
        <ImageCard key={id} src={src} text={text} />
      ))}
    </div>
  );
};

const Events = () => {
  return (
    <div className="px-16">
      <h1 className="text-2xl font-bold my-4 pl-4 mt-8">Milestone Events</h1>
      <ImageGrid />
    </div>
  );
};

export default Leaders;
