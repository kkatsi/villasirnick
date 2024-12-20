import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <section className="flex flex-col items-center gap-8" id="contact">
      <div className="contact-header text-center max-w-[600px]">
        <h5 className="text-3xl font-normal mb-2">Contact us</h5>
        <span className="text-lg text-gray-600">Have Questions? We're Here to Help!</span>
        <p className="text-sm text-gray-600">
          If you have any inquiries about reservations, availability, location, or anything else,
          please feel free to get in touch.
        </p>
      </div>
      <div className="grid grid-cols-[40%_20%_40%] w-full">
        <ContactForm />
        <div className="flex items-center justify-center">
          <hr className="transform rotate-90 h-[1px] border-0 w-32 bg-gray-400" />
        </div>
        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;
