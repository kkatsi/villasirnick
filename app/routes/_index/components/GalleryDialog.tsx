import * as Dialog from '@radix-ui/react-dialog';
import { ComponentProps, useState } from 'react';
import CloseIcon from '~/assets/icons/close.svg?react';
import Gallery from './Gallery';

interface GalleryDialogProps extends Dialog.DialogProps, ComponentProps<typeof Gallery> {}

const GalleryDialog: React.FC<GalleryDialogProps> = ({
  open,
  onOpenChange,
  defaultActiveIndex,
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Close asChild>
          <button
            className="fixed z-20 pointer-events-auto cursor-pointer right-2.5 top-2.5 size-[48px] inline-flex appearance-none items-center justify-center text-gray-400"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </Dialog.Close>
        <Dialog.Overlay className="fixed inset-0 bg-black data-[state=open]:animate-overlayShow" />
        <Dialog.Content
          onPointerDownOutside={(event) => event.preventDefault()}
          className="fixed flex justify-between items-center left-1/2 top-1/2 h-screen w-screen -translate-x-1/2 -translate-y-1/2 rounded-md bg-transparent md:p-2 lg:p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow"
        >
          <Gallery defaultActiveIndex={defaultActiveIndex} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default GalleryDialog;
