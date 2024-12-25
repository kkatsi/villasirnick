import React, { AnchorHTMLAttributes } from 'react';
import { imageUris } from '~/contants';
import FullArrowDown from '~/assets/icons/full-arrow-down.svg?react';
import { Link } from 'react-router';

const Hero: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => {
  return (
    <Link
      to="#content"
      className="container sticky top-1/2 lg:py-[15dvh] transform -translate-y-1/2 min-h-[100dvh] flex justify-center items-center"
      {...props}
    >
      <div className="bg-transparent text-black w-full h-full p-2 lg:grid lg:grid-cols-2">
        <div className="relative flex flex-col justify-center items-center gap-2 p-6 sm:p-12 lg:p-24">
          <span className="text-xs">Your next vaccation awaits</span>
          <h2 className="text-2xl sm:text-4xl text-center">
            Villa Sir Nick: Relaxation, Luxury, and Unforgettable Moments
          </h2>
          <div className="p-4 text-black absolute bottom-0 animate-bounce hidden lg:block">
            <FullArrowDown />
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-2 w-full">
          <img
            src={imageUris[0]}
            alt="villa house in the night"
            className="w-full h-auto lg:h-full object-cover rounded-3xl"
          />
          <div className="p-4 text-black animate-bounce lg:hidden">
            <FullArrowDown />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Hero;
