import React from 'react';
import PhoneIcon from 'app/assets/icons/phone.svg?react';
import { Link } from 'react-router';

const ContactButton = () => {
  return (
    <Link
      to="#contact"
      className="relative border border-gray-300 bg-black text-white text-sm rounded-full py-4 px-5 pr-12 w-fit text-left"
    >
      <span className="absolute inset-0 z-[-1] rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-75 blur-lg animate-intenseGlow"></span>
      Contact us for availability
      <div className="flex items-center justify-center absolute bottom-[-4px] right-[-16px] w-16 h-16 rounded-full bg-black text-white">
        <PhoneIcon />
      </div>
    </Link>
  );
};

export default ContactButton;
