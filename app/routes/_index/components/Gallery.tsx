import React, { useState } from 'react';
import LeftArrow from '~/assets/icons/arrow-left.svg?react';
import RightArrow from '~/assets/icons/arrow-right.svg?react';
import { imageUris } from '~/contants';

interface GalleryProps {
  defaultActiveIndex: number;
}

const Gallery: React.FC<GalleryProps> = ({ defaultActiveIndex }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleSlideChange = (action: 'next' | 'prev') => {
    switch (action) {
      case 'next':
        setActiveIndex((prevIndex) => prevIndex + 1);
        break;
      case 'prev':
        setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };
  return (
    <>
      <button
        onClick={() => handleSlideChange('prev')}
        disabled={activeIndex === 0}
        className="p-3 rounded-full flex items-center disabled:cursor-not-allowed justify-center bg-gray-900 hover:bg-gray-800 text-gray-400 transition-all duration-[0.3s] translate-x-0 hover:translate-x-[-2px]"
      >
        <LeftArrow />
      </button>
      <ul className="relative w-full h-full max-h-[calc(100dvh-48px-4rem)] flex items-center justify-center">
        {imageUris.map((uri, index) => (
          <li
            key={uri}
            data-active={index === activeIndex}
            className={`absolute flex px-[25px] items-center justify-center bg-black opacity-0 transition-[200ms] duration-[opacity] ease-[ease-in-out] delay-200 inset-0 ${
              activeIndex === index ? 'opacity-100 z-[1] delay-[0ms]' : ''
            }`}
          >
            <img src={uri} alt="house" className="w-auto max-h-full block rounded-xl" />
          </li>
        ))}
      </ul>
      <button
        onClick={() => handleSlideChange('next')}
        disabled={activeIndex === imageUris.length - 1}
        className="p-3 rounded-full flex items-center justify-center disabled:cursor-not-allowed bg-gray-900 hover:bg-gray-800 text-gray-400 transition-all duration-[0.3s] translate-x-0 hover:translate-x-[2px]"
      >
        <RightArrow />
      </button>
      <span className="counter absolute left-1/2 text-base transform -translate-x-1/2 top-[25px] text-gray-400">
        {activeIndex + 1} / {imageUris.length}
      </span>
    </>
  );
};

export default Gallery;