import { useRef } from "react";
import { LeadersHero } from "../components/hero";
import leadership from "../assets/images/about/leadership.png";
import event from "../assets/images/leaders/event.png";

const Leaders = () => {
  return (
    <>
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
      title: "Offering 1",
      subtitle: "Subtitle for offering 1",
    },
    {
      image: leadership,
      title: "Offering 2",
      subtitle: "Subtitle for offering 2",
    },
    {
      image: leadership,
      title: "Offering 3",
      subtitle: "Subtitle for offering 3",
    },
    {
      image: leadership,
      title: "Offering 4",
      subtitle: "Subtitle for offering 4",
    },
    {
      image: leadership,
      title: "Offering 4",
      subtitle: "Subtitle for offering 4",
    },
    {
      image: leadership,
      title: "Offering 4",
      subtitle: "Subtitle for offering 4",
    },
    {
      image: leadership,
      title: "Offering 4",
      subtitle: "Subtitle for offering 4",
    },
    {
      image: leadership,
      title: "Offering 4",
      subtitle: "Subtitle for offering 4",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16">
        <h2 className="text-4xl font-bold mb-12 ">Past Presidents</h2>
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
                <h3 className="text-2xl font-semibold mb-2">
                  {offering.title}
                </h3>
                <p className="text-lg text-gray-600">{offering.subtitle}</p>
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
    author: "Jane Doe",
  },
  {
    id: 2,
    text: "“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”",
    author: "John Smith",
  },
  {
    id: 3,
    text: "“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”",
    author: "Alice Johnson",
  },
  {
    id: 4,
    text: "“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”",
    author: "Bob Brown",
  },
  {
    id: 5,
    text: "“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”",
    author: "Sarah Wilson",
  },
  {
    id: 6,
    text: "“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”",
    author: "Chris Lee",
  },
];

const TestimonialCard = ({ text, author }) => (
  <div className="min-w-[30rem] overflow-hidden mx-2 mb-8 pt-8">
    <p className="text-gray-600">{text}</p>
    <p className="text-left font-semibold mt-4">{author}</p>
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
    <div className="pl-32">
      <h1 className="text-2xl font-bold mt-8">Testimonials</h1>
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
      <div className="flex justify-center mt-4">
        <button
          onClick={() => scroll("left")}
          className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-2 hover:bg-blue-600 transition-colors"
        >
          &lt; {/* Left Arrow */}
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-2 hover:bg-blue-600 transition-colors"
        >
          &gt; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
};

//events
const imageData = [
  {
    id: 1,
    src: event,
    text: "Image 1",
  },
  {
    id: 2,
    src: event,
    text: "Image 2",
  },
  {
    id: 3,
    src: event,
    text: "Image 3",
  },
  {
    id: 4,
    src: event,
    text: "Image 4",
  },
  {
    id: 5,
    src: event,
    text: "Image 5",
  },
  {
    id: 6,
    src: event,
    text: "Image 6",
  },
  {
    id: 7,
    src: event,
    text: "Image 7",
  },
  {
    id: 8,
    src: event,
    text: "Image 8",
  },
  {
    id: 9,
    src: event,
    text: "Image 9",
  },
];

const ImageCard = ({ src, text }) => (
  <div className="relative overflow-hidden">
    <img src={src} alt={text} className="w-full h-full object-cover" />
    <div className="absolute top-2 left-2 text-white font-bold bg-black bg-opacity-50 p-2 rounded">
      {text}
    </div>

    <div className="absolute bottom-2 left-2">
      <span className="ml-2 text-white">↗</span>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 7l10 10-10 10"
        />
      </svg> */}
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
    <div>
      <h1 className="text-2xl font-bold text-center my-4">Image Section</h1>
      <ImageGrid />
    </div>
  );
};

export default Leaders;
