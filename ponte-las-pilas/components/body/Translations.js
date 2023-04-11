export default function Translations(props) {
    return (
        <div className="group/quote invisible group-hover/quote:visible flex flex-row justify-center align-middle w-full text-slate-100 items-center mt-4 text-sm xl:text-lg">
            <p className="font-worksans font-Work+Sans italic text-center  tracking-wide">
                {props.quote.translation}
            </p>
            <span className="items-center p-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/>
                </svg>
            </span>
            <p className="font-worksans font-Work+Sans text-center ">saying place holder</p>
        </div>
    )
}

