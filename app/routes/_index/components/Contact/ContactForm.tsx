import { useCallback, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useFetcher } from 'react-router';
import Input from '~/components/Input';
import TextArea from '~/components/TextArea';
import PhoneInput from './PhoneInput';
import { GoogleReCaptchaCheckbox } from '@google-recaptcha/react';

const ContactForm = () => {
  const captchaInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isCaptchaCompleted, setIsCaptchaCompleted] = useState(false);
  const fetcher = useFetcher();

  useEffect(() => {
    if (fetcher?.data?.isSuccess) {
      toast.success('Message sent');
      formRef.current?.reset();
      setIsCaptchaCompleted(false);
    } else if (fetcher?.data?.isSuccess === false) {
      toast.error('Something went wrong while sending you message. Please try again later.');
    }

    if (fetcher.data) fetcher.load('/');
  }, [fetcher?.data?.isSuccess, toast]);

  const handleCaptchaChange = useCallback((captchaValue: string | null) => {
    const input = captchaInputRef.current;
    if (input && typeof captchaValue === 'string') {
      setIsCaptchaCompleted(true);
      input.value = captchaValue;
    }
  }, []);

  return (
    <fetcher.Form method="post" className="flex flex-col gap-5 w-full" ref={formRef}>
      <div className="flex justify-between w-full gap-4">
        <Input name="firstName" placeholder="First Name" label="First Name" required />
        <Input name="lastName" placeholder="Last Name" label="Last Name" required />
      </div>
      <Input name="email" type="email" label="Email" placeholder="Email" required />
      <PhoneInput />
      <TextArea
        label="Message"
        name="message"
        placeholder="What would you like to know? (e.g., availability, price, location)"
        required
      />
      <GoogleReCaptchaCheckbox
        key={fetcher.data} //use fetcher data object as a key to rerender captcha
        onChange={handleCaptchaChange}
        errorCallback={() => setIsCaptchaCompleted(false)}
      />
      <input type="text" hidden name="captcha" ref={captchaInputRef} />
      <button
        type="submit"
        disabled={fetcher.state !== 'idle' || !isCaptchaCompleted}
        className="rounded-2xl max-w-xs bg-violet-600 disabled:bg-violet-300 disabled:cursor-not-allowed text-white py-2 px-10 w-full"
      >
        {fetcher.state !== 'idle' ? 'Sending...' : 'Send'}
      </button>
      {fetcher.data?.error ? (
        <span className="text-red-700 text-sm">{fetcher.data?.error?.message}</span>
      ) : null}
    </fetcher.Form>
  );
};

export default ContactForm;
