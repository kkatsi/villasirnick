import React from 'react';
import WhatsUpIcon from '~/assets/icons/whatsup.svg?react';
import MailIcon from '~/assets/icons/mail.svg?react';
import PhoneIcon from '~/assets/icons/phone.svg?react';
import ViberIcon from '~/assets/icons/viber.svg?react';
import { config } from '~/config/frontend';

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 items-start w-full justify-center">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`mailto:${config.contact.email}`}
        className="flex items-center gap-2 underline underline-offset-4 text-base"
      >
        <MailIcon /> Shoot us an email
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`tel:${config.contact.dialCode}${config.contact.phone}`}
        className="flex items-center gap-2 underline underline-offset-4 text-base"
      >
        <PhoneIcon />
        {config.contact.dialCode}
        {config.contact.phone}
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://wa.me/${config.contact.dialCodeWithoutPlus}${config.contact.phone}`}
        className="flex items-center gap-2 underline underline-offset-4 text-base"
      >
        <WhatsUpIcon />
        Message us on Whatsapp
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`viber://chat?number=%2B30${config.contact.phone}`}
        className="flex items-center gap-2 underline underline-offset-4 text-base"
      >
        <ViberIcon />
        Message us on Viber
      </a>
    </div>
  );
};

export default ContactInfo;
