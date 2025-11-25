import React from "react";

type SliderButtonType = {
  index: number;
  activeSlide: number;
  handleClick: () => void;
};

type SliderButtonProps = {
  sliderButtonProps: SliderButtonType;
};

function SliderButton({ sliderButtonProps }: SliderButtonProps) {
  return (
    <button
      key={sliderButtonProps.index}
      // onClick={() => setActiveSlide(index + 1)}
      onClick={() => sliderButtonProps.handleClick}
      className={`bg-[#ccc] tablet:w-10 tablet:h-10 max-tablet:w-7 max-tablet:h-7 rounded-full cursor-pointer hover:scale-[1.1] transition duration-300 ${
        sliderButtonProps.activeSlide === sliderButtonProps.index + 1
          ? "bg-[#fc4747]"
          : ""
      }`}
    >
      {sliderButtonProps.index + 1}
    </button>
  );
}

export default SliderButton;
