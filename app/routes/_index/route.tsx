import { Route } from './+types/route';
import About from './components/About';
import Contact from './components/Contact';
import ContactButton from './components/ContactButton';
import Details from './components/Details';
import Features from './components/Features';
import Host from './components/Host';
import PhotoGrid from './components/PhotoGrid';
import TitleAndLocation from './components/TitleAndLocation';
import { forwardMessageToEmail } from './service';
import { IContactForm } from './types';

export async function action({ request }: Route.ActionArgs) {
  let formData = await request.formData();
  const data = Object.fromEntries(formData) as unknown as IContactForm;
  return await forwardMessageToEmail(data);
}

const Home = () => {
  return (
    <div className="flex w-full min-h-screen items-center py-20 justify-center flex-col bg-stone-300">
      <div className="container rounded-3xl bg-white p-20 flex flex-col gap-8">
        <main className="grid grid-cols-[2fr_3fr] gap-8">
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
        <hr className="h-[1px] border-0 w-1/3 bg-black self-center my-[50px]" />
        <footer>
          <Contact />
        </footer>
      </div>
    </div>
  );
};

export default Home;
