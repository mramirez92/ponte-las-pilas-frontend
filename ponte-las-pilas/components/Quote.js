import { useEffect, useState } from "react";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const quoteUrl = baseUrl + '/api/v1/dichos/';

export default function Quote() {
  const [quoteInfo, setQuoteInfo] = useState({ id: null, dicho: null, translation: null });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(quoteUrl);
      const data = await response.json();

      const randomIndex = Math.floor(Math.random() * data.length) + 1;
      const randomQuote = data.find((quote) => quote.id === randomIndex);

      setQuoteInfo({
        id: randomQuote.id,
        dicho: randomQuote.saying,
        translation: randomQuote.translation,
      });
    };

    fetchData();
  }, []);

  return (
    <div className="p-12 flex flex-col items-center justify-center grow-0 max-w-lg group/item">
      <h1 className="sm:text-lg md:text-xl lg:text-3xl xl:text-5xl text-center align-middle whitespace-normal text-slate-200 font-bold">
        <span className="font-bold font-quotes font-Economica sm:text-lg md:text-xl lg:text-3xl xl:text-5xl text-slate-200">&ldquo;</span>
        {quoteInfo.dicho}
        <span className="font-bold font-quotes font-Economica sm:text-lg md:text-xl lg:text-3xl xl:text-5xl text-slate-200">&quot;</span>
      </h1>
      <div className="group/edit invisible group-hover/item:visible group-hover/item:ease-in-out duration-7000 m-1 sm:text-md md:text-lg lg:text-xl xl:text-2xl text-center align-middle whitespace-normal text-slate-200">
        <p className="font-worksans font-Work+Sans italic">{quoteInfo.translation}</p>
      </div>
    </div>
  );
}