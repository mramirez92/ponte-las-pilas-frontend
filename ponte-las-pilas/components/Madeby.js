export default function MadeBy() {
        return (<>
            <div className="flex flex-row align-middle">
                <span className="text-slate-100/70 sm:text-xs md:text-sm lg:text-md xl:text-xl">Made with</span>
                <span className="flex items-center pl-1 pr-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" className="w-5 h-5 stroke-slate-100/70">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                </svg>
            </span>
            <span className="text-slate-100/70  text-shadow-md 2 2 3 sm:text-xs md:text-sm lg:text-md xl:text-xl">by Monica Ramirez</span>
        </div>
    </>
    );
};
