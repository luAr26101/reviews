import { useState } from "react";
import reviewsData from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { name, job, image, text } = reviewsData[activeIndex];

  const checkNumber = (number) => {
    if (number > reviewsData.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviewsData.length - 1;
    }

    return number;
  };

  const nextReview = () => {
    setActiveIndex((prevActiveIndex) => {
      const newActiveIndex = prevActiveIndex + 1;
      return checkNumber(newActiveIndex);
    });
  };

  const prevReview = () => {
    setActiveIndex((prevActiveIndex) => {
      const newActiveIndex = prevActiveIndex - 1;
      return checkNumber(newActiveIndex);
    });
  };

  const randomReview = () => {
    const randomNumber = Math.floor(Math.random() * reviewsData.length);
    console.log(randomNumber);
    if (randomNumber === activeIndex) return randomReview();
    setActiveIndex(randomNumber);
  };

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button type='button' className='prev-btn' onClick={prevReview}>
            <FaChevronLeft />
          </button>
          <button type='button' className='next-btn' onClick={nextReview}>
            <FaChevronRight />
          </button>
        </div>
        <button
          type='button'
          className='btn btn-hipster'
          onClick={randomReview}
        >
          Surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
