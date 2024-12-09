import React from 'react';
import { hostImageUri } from '~/contants';

const Host = () => {
  return (
    <div className="flex gap-2 items-center">
      <img src={hostImageUri} alt="host profile" className="rounded-full w-12 h-12" />
      <span className="text-base font-medium">Hosted by George</span>
    </div>
  );
};

export default Host;
