export default function Quote() {
    return (
        <div className="p-12 flex flex-col items-center justify-center grow-0 max-w-lg group/item ">
            <h1 className="sm:text-lg md:text-xl lg:text-3xl xl:text-5xl text-center align-middle whitespace-normal text-slate-200 font-bold">
                <span className="font-bold font-quotes font-Economica sm:text-lg md:text-xl lg:text-3xl xl:text-5xl text-slate-200">&ldquo; </span>Ponte las pilas!
                <span className="font-bold font-quotes font-Economica sm:text-lg md:text-xl lg:text-3xl xl:text-5xl text-slate-200">&quot;</span>
            </h1>
            <div className="group/edit invisible group-hover/item:visible group-hover/item:ease-in-out duration-7000 m-1 
            sm:text-md md:text-lg lg:text-xl xl:text-2xl text-center align-middle whitespace-normal text-slate-200">
                <p className="font-worksans font-Work+Sans italic">"Don't give up!" or "Get on it!"</p></div>
        </div>
    )
}
