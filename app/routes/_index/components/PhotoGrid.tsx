import React from 'react';
import { imageUris } from '~/contants';

const PhotoGrid = () => {
  let i = 0;
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap justify-between gap-2">
        {imageUris.map((uri, index) => {
          const shouldBeLarge = index % 3 === 0;
          if (index < 4)
            return (
              <button
                className={`rounded-xl shadow-md overflow-hidden ${
                  shouldBeLarge ? 'w-full' : 'w-[calc(50%-4px)]'
                }`}
              >
                <img src={uri} alt="house" className={`aspect-video object-cover`} />
              </button>
            );
        })}
      </div>
      <button className="border rounded-2xl border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white mt-4 py-2 px-10 m-auto w-full">
        See {imageUris.length - 3} more photos...
      </button>
    </div>
  );
};

export default PhotoGrid;
