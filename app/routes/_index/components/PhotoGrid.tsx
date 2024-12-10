import { imageUris } from '~/contants';
import GalleryDialog from './GalleryDialog';
import { useState } from 'react';

const PhotoGrid = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div className="flex flex-col">
      {/* Use CSS Grid for precise layout control */}
      <div className="grid grid-cols-2 gap-2">
        {imageUris.map((uri, index) => {
          const shouldBeLarge = index % 3 === 0;
          if (index < 4)
            return (
              <button
                key={index} // Add unique key for React list rendering
                className={`rounded-xl shadow-2xl overflow-hidden ${
                  shouldBeLarge ? 'col-span-2' : ''
                }`}
              >
                <img src={uri} alt="house" className="aspect-video object-cover w-full" />
              </button>
            );
        })}
      </div>
      <button
        onClick={() => setIsDialogOpen(true)}
        className="rounded-2xl bg-violet-600 text-white mt-4 py-2 px-10 m-auto w-full"
      >
        See {imageUris.length - 3} more photos...
      </button>
      <GalleryDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  );
};

export default PhotoGrid;
