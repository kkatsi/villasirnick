import { useEffect, useState } from 'react';
import { Route } from './+types/route';
import About from './components/About';
import Contact from './components/Contact';
import ContactButton from './components/ContactButton';
import Details from './components/Details';
import Features from './components/Features';
import Hero from './components/Hero';
import Host from './components/Host';
import PhotoGrid from './components/PhotoGrid';
import TitleAndLocation from './components/TitleAndLocation';
import { forwardMessageToEmail, verifyCaptcha } from './service';
import { IContactForm } from './types';
import { config } from '~/config/frontend';

export function meta() {
  return [
    { title: 'Villa Sir Nick | Luxury Vacation Rental in Thessaloniki, Greece' },
    {
      property: 'og:title',
      content: 'Villa Sir Nick | Luxury Vacation Rental in Thessaloniki, Greece',
    },
    {
      name: 'description',
      content:
        'Experience unparalleled luxury and relaxation at Villa Sir Nick in Thessaloniki, Greece. Perfect for families, couples, and groups. Book now on Airbnb or directly with us!',
    },
    {
      name: 'keywords',
      content:
        'Villa Sir Nick, luxury villa rental, vacation in Greece, Thessaloniki villa, Airbnb Thessaloniki, private villa Greece, vacation rental Greece, luxury accommodation Thessaloniki, Sir Nick villa, Greek villa rental, best villas in Thessaloniki, luxury holidays in Greece, villa rental near Thessaloniki, airbnb luxury Greece, Thessaloniki Airbnb villa, relax in Greece, villa with sea view, holiday home Thessaloniki',
    },
    {
      property: 'og:description',
      content:
        'Discover the beauty of Thessaloniki, Greece, with a stay at Villa Sir Nick. Stunning views, elegant interiors, and world-class amenities await you.',
    },
    { property: 'og:image', content: `${config.domain}/photos/1.jpg` },
    { property: 'og:url', content: `${config.domain}` },
    { property: 'og:type', content: 'website' },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Villa Sir Nick | Luxury Vacation Rental in Thessaloniki, Greece',
    },
    {
      name: 'twitter:description',
      content:
        'Escape to paradise at Villa Sir Nick in Thessaloniki. Enjoy breathtaking views, luxury amenities, and an unforgettable experience in Greece.',
    },
    { name: 'twitter:image', content: `${config.domain}/photos/1.jpg` },
    {
      name: 'robots',
      content: 'index, follow',
    },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  let formData = await request.formData();
  const data = Object.fromEntries(formData) as unknown as IContactForm;
  try {
    if (!data.captcha) throw new Error('No captcha provided!');
    await verifyCaptcha(data.captcha);
    await forwardMessageToEmail(data);
    return { isSuccess: true };
  } catch (error) {
    return { isSuccess: false, error };
  }
}

const Home = () => {
  const [animationOffset, setAnimationOffset] = useState<{
    opacityOffset: number;
    scaleOffset: number;
  }>();
  useEffect(() => {
    const handlePageScroll = () => {
      const scaleYOffset = 1 - window.scrollY / 750;
      const opacityOffset = Math.max(0, Math.min(1, scaleYOffset));
      const scaleOffset = 0.9 + opacityOffset * 0.1;
      setAnimationOffset({
        opacityOffset,
        scaleOffset,
      });
    };

    document.addEventListener('scroll', handlePageScroll);

    return () => {
      document.removeEventListener('scroll', handlePageScroll);
    };
  }, []);

  return (
    <div className="flex w-full min-h-screen items-center justify-center flex-col bg-gray-50">
      <Hero
        style={{
          opacity: animationOffset?.opacityOffset,
          transform: `translateY(-50%) scale(${animationOffset?.scaleOffset})`,
        }}
      />
      <section
        id="content"
        className="container shadow-whole rounded-tl-3xl rounded-tr-3xl bg-white py-12 px-4 sm:p-14 lg:p-20 flex flex-col gap-8 sm:-mt-12 isolate"
      >
        <main className="flex flex-col lg:grid lg:grid-cols-[2fr_3fr] gap-8">
          <div className="content flex flex-col gap-9">
            <TitleAndLocation />
            <ContactButton />
            <Features />
            <About />
            <Details />
            <Host />
          </div>
          <PhotoGrid />
        </main>
        <hr className="h-[1px] border-0 w-1/3 bg-gray-400 self-center mt-[30px]" />
        <footer>
          <Contact />
        </footer>
      </section>
    </div>
  );
};

export default Home;
