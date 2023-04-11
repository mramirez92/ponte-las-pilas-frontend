
export default function Translations(props){
    return(
<div className="group/quote invisible group-hover/quote:visible flex flex-row justify-center p-4 align-middle w-full text-center text-slate-100 items-ceter">
<p className="font-worksans font-Work+Sans italic text-center">{props.quote.translation}</p>
<span className="items-center p-1">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
</svg>



</span>
<p className="font-worksans font-Work+Sans italic text-center">saying place holder</p>
      </div>
    )
}

// ! add this when editing is done to hide translation option
{/* <div className="group/quote invisible group-hover/quote:visible flex flex-row justify-between p-4 align-middle w-2/5"> */}
