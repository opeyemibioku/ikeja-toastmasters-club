import { useRef } from "react";
import { LeadersHero } from "../components/hero";
import history from "../assets/images/about/history.png";
import publicspeaking from "../assets/images/about/publicspeaking.png";
import testimonials from "../assets/images/about/testimonials.png";
import leadership from "../assets/images/about/leadership.png";
import gallery from "../assets/images/about/gallery.png";
import awards from "../assets/images/about/awards.png";
import hero from "../assets/images/home/hero.jpg";
import map from "../assets/images/home/map.png";
import whatwedo from "../assets/images/home/whatwedo.png";

const Leaders = () => {
  return (
    <>
      <LeadersHero />
      <Leadership /> <Quotes />
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

export default Leaders;
