import React from 'react';
import { details } from '~/contants';

const Details = () => {
  return (
    <ul className="grid grid-cols-2 gap-1 justify-start p-0 list-none">
      {details.map((detail) => (
        <li className="relative pl-5 text-sm font-light text-indent-[1ch] before:content-['→'] before:absolute before:left-0">
          <span>{detail}</span>
        </li>
      ))}
    </ul>
  );
};

export default Details;
