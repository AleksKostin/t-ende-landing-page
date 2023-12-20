const changeSlide = (direction = 1, slide = 0, items = 0) => {
  const initialNumber = 0;
  let currentSlideNumber = initialNumber;
  let prevSlideNumber;
  let nextSlideNumber;

  if (slide + direction < initialNumber) {
    currentSlideNumber = items.length - 1;
    prevSlideNumber = currentSlideNumber - 1;
    nextSlideNumber = (currentSlideNumber + 1) % items.length;
  } else {
    currentSlideNumber = (slide + direction) % items.length;
    prevSlideNumber = (
      currentSlideNumber === initialNumber
        ? items.length - 1
        : currentSlideNumber - 1
    );
    nextSlideNumber = (currentSlideNumber + 1) % items.length;
  }

  return { currentSlideNumber, prevSlideNumber, nextSlideNumber };
};

export default changeSlide;
