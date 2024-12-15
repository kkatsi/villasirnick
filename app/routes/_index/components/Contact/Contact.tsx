import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <section className="flex flex-col items-center gap-8" id="contact">
      <h5 className="text-2xl font-normal">Contact us</h5>
      <div className="grid grid-cols-2 gap-8 w-full">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;
