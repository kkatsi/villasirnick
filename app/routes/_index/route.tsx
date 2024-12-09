import React from 'react';
import TitleAndLocation from './components/TitleAndLocation';
import Features from './components/Features';
import About from './components/About';
import Details from './components/Details';
import Host from './components/Host';
import ContactButton from './components/ContactButton';
import PhotoGrid from './components/PhotoGrid';

const Home = () => {
  return (
    <div className="flex w-full min-h-screen items-center py-20 justify-center bg-stone-300">
      <main className="container rounded-3xl bg-white p-16 grid grid-cols-[40%_60%] gap-8">
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
    </div>
  );
};

export default Home;
