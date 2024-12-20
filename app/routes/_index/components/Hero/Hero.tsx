import React, { AnchorHTMLAttributes } from 'react';
import { imageUris } from '~/contants';
import FullArrowDown from '~/assets/icons/full-arrow-down.svg?react';
import { Link } from 'react-router';

const Hero: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => {
  return (
    <Link
      to="#content"
      className="container sticky top-1/2 py-[15dvh] transform -translate-y-1/2 h-[100dvh] flex justify-center items-center"
      {...props}
    >
      <div className="bg-transparent text-black w-full h-full p-2 grid grid-cols-2">
        <div className="relative flex flex-col justify-center items-center gap-2 p-24">
          <span className="text-xs">Your next vaccation awaits</span>
          <h2 className="text-4xl text-center">
            Villa Sir Nick: Relaxation, Luxury, and Unforgettable Moments
          </h2>
          <div className="p-4 text-black absolute bottom-0 animate-bounce left-50%">
            <FullArrowDown />
          </div>
        </div>
        <img
          src={imageUris[0]}
          alt="villa house in the night"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </Link>
  );
};

export default Hero;
