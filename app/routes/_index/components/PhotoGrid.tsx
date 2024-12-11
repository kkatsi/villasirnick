import { imageUris } from '~/contants';
import GalleryDialog from './GalleryDialog';
import { useState } from 'react';

const PhotoGrid = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const handlGalleryItemClick = (index: number) => {
    setIsDialogOpen(true);
    setSelectedPhotoIndex(index);
  };
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-2">
        {imageUris.map((uri, index) => {
          const shouldBeLarge = index % 3 === 0;
          if (index < 4)
            return (
              <button
                key={index}
                onClick={() => handlGalleryItemClick(index)}
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
        onClick={() => handlGalleryItemClick(0)}
        className="rounded-2xl bg-violet-600 text-white mt-4 py-2 px-10 m-auto w-full"
      >
        See {imageUris.length - 3} more photos...
      </button>
      <GalleryDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        defaultActiveIndex={selectedPhotoIndex}
      />
    </div>
  );
};

export default PhotoGrid;
