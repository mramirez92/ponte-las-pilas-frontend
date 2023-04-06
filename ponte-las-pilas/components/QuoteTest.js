import { useEffect, useState, useRef } from "react";
import Translations from "./translations-popovers/Translations";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const quoteUrl = baseUrl + 'api/v1/dichos/';

export default function QuoteTest() {
  const [quote, setQuote] = useState({ id: null, dicho: null, translation: null });
  const isFetching = useRef(false);

  useEffect(()=>{
    if (!isFetching.current){
        isFetching.current = true;
        fetch(quoteUrl)
        .then(response =>response.json())
        .then(data =>
            {
                if (data.length >0){
                    const randomIndex =Math.floor(Math.random() * data.length);
                    const randomQuote =data[randomIndex];
                    setQuote({
                        dicho:randomQuote.saying,
                        translation: randomQuote.translation,
                    });
                }
            })
    }
  },[]);

    return (

        <div className="p-12 flex flex-col items-center justify-center grow-0 max-w-6xl max-h-3 group/quote">
            <h1 className="sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-center align-middle whitespace-normal text-slate-200 font-bold">
                <span className="font-bold font-quotes font-Economica sm:text-lg md:text-2xl lg:text-5xl xl:text-6xl text-slate-200">&ldquo;</span>
                {quote.dicho}
                <span className="font-bold font-quotes font-Economica sm:text-lg md:text-2xl lg:text-5xl xl:text-6xl text-slate-200">&quot;</span>
            </h1>
            <Translations quote={quote} className=""/>
        </div>
    );
}

// useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(quoteUrl);
//       const data = await response.json();

//       const randomIndex = Math.floor(Math.random() * data.length);
//       console.log(randomIndex);
//       const randomQuote = data[randomIndex];
//       console.log(randomQuote);

//       setQuoteInfo({
//         id: randomQuote.id,
//         dicho: randomQuote.saying,
//         translation: randomQuote.translation,
//       });
//     };

//     fetchData();
//   }, []);
