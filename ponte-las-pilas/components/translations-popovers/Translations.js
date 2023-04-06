import LiteralButton from "./LiteralTranslation"
import EnglishButton from "./EnglishButton"
export default function Translations(props){
    return(
        <div className="group/quote invisible group-hover/quote:visible flex flex-row justify-between p-4 align-middle w-2/5">
            <h1 className="text-slate-100/70 ">Translations</h1>
            <LiteralButton className="" quote={props.quote}/>
            <EnglishButton quote={props.quote}/>
        </div>
    )
}

// ! add this when editing is done to hide translation option
{/* <div className="group/quote invisible group-hover/quote:visible flex flex-row justify-between p-4 align-middle w-2/5"> */}
