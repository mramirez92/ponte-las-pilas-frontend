
import { useEffect } from 'react';
import Quote from '@/components/Quote'
import GithubButton from '@/components/GithubButton';
import MadeBy from '@/components/Madeby';
// import styles from '@/styles/Home.module.css'

import Head from 'next/head';
export default function Home() {
  useEffect(() => {
    // Add the bg-rose-300 class to the html and body elements
    document.documentElement.classList.add('bg-red-400');
    document.body.classList.add('bg-red-400');

    // Remove the class on unmount
    return () => {
      document.documentElement.classList.remove('bg-red-400');
      document.body.classList.remove('bg-red-400');
    };
  }, []);

  return (
    <>
    <Head>
    <title>New Tab</title>
    <meta property="og:title" content="New Tab" key="title" />
    <link rel="icon" href="/garland.png" />
  </Head>

    <div className="flex flex-col justify-center items-center h-screen pl-8 pr-8 m-auto">
      <Quote className="w-1/2 h-auto self-center" />
      <div className='self-end absolute bottom-6 left-5'>
        <MadeBy/>
      </div>
      <div className= "absolute bottom-4 right-3">
      <GithubButton  className= ""/>
      </div>
    </div>

</>
  );
}
