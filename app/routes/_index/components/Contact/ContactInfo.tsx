import React from 'react';
import WhatsUpIcon from '~/assets/icons/whatsup.svg?react';
import MailIcon from '~/assets/icons/mail.svg?react';

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 items-start w-full justify-center">
      <a
        href="mailto:kotsoulis@gmail.com"
        className="flex items-center gap-2 underline underline-offset-4 text-base"
      >
        <MailIcon /> Shoot us an email
      </a>
      <a
        href="tel:+306981760754"
        className="flex items-center gap-2 underline underline-offset-4 text-base"
      >
        <WhatsUpIcon /> +30 6981 760 754
      </a>
    </div>
  );
};

export default ContactInfo;
