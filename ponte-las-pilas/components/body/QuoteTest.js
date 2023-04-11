import { useEffect, useState, useRef } from "react";
import Translations from "./Translations";
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

        <div className="p-3 flex flex-col items-center justify-center grow-0 group/quote">
            <h1 className="p-1 text-4xl lg:text-6xl text-center align-middle whitespace-normal text-slate-200 font-bold tracking-normal leading-snug">
                <span className="font-quotes font-Economica">&ldquo;</span>
                {quote.dicho}
                <span className="font-quotes font-Economica">&quot;</span>
            </h1>
            <Translations quote={quote}/>
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
