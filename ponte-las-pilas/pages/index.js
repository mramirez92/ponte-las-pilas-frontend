
import { useEffect } from 'react';
// import Quote from '@/components/Quote'
import InfoButton from '@/components/footer/InfoButton';
import MadeBy from '@/components/footer/Madeby';
import Head from 'next/head';
import QuoteTest from '@/components/body/QuoteTest';

const colorsList = [
  'bg-red-400',
  'bg-sky-500',
  'bg-emerald-500',
  'bg-teal-500',
  'bg-amber-500',
  'bg-rose-400',
  'bg-indigo-500',

];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colorsList.length);
  return colorsList[randomIndex];
};

const BackgroundColor = () => {
  useEffect(() => {
    const randomColor = getRandomColor();
    document.documentElement.classList.add(randomColor);
    document.body.classList.add(randomColor);
    return () => {
      document.documentElement.classList.remove(randomColor);
      document.body.classList.remove(randomColor);
    };
  }, []);

  return null;
};

export default function Home() {
  return (
    <>
    <BackgroundColor />
      <Head>
        <title>New Tab</title>
        <meta property="og:title" content="New Tab" key="title" />
        <link rel="icon" href="/garland.png" />
      </Head>
      

      <div className="flex flex-col justify-center items-center h-screen px-6 mx-auto ">
          <QuoteTest />
        <div className='self-end absolute bottom-6 left-5'>
          <MadeBy/>
        </div>
        <div className= "absolute bottom-4 right-3">
          <InfoButton/>
        </div>
      </div>
    </>
  );
}
