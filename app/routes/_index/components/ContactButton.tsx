import React from 'react';
import PhoneIcon from 'app/assets/icons/phone.svg?react';
import { Link } from 'react-router';

const ContactButton = () => {
  return (
    <Link
      to="#contact"
      className="relative border border-gray-300 bg-black text-white text-sm rounded-full py-4 px-5 pr-6 w-[80%] text-left"
    >
      Contuct us for availability
      <div className="flex items-center justify-center absolute bottom-[-4px] right-[-16px] w-16 h-16 rounded-full bg-black text-white">
        <PhoneIcon />
      </div>
    </Link>
  );
};

export default ContactButton;
