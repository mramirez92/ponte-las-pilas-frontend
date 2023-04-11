import { useEffect } from 'react';

const colorsList = [
    'bg-red-400',
    'bg-sky-500',
    'bg-emerald-600',
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

  export default BackgroundColor;
  