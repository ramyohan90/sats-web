
export function SearchComponent() {
    return (
        <div className="flex flex-col dark:text-white text-black p-3">
            <div className="">
                <div>
                    <input autoComplete="off" type="text" placeholder="Search Inscription, address, brc20.."
                        className="p-2 rounded xs:w-full xxs:w-full sm:w-full border border-satsColor md:w-full lg:w-1/2 2xl:w-1/2 focus:ring focus:ring-satsColor focus:outline-none" />
                        <div className="inline-block bg-satsColor rounded md:ml-1 px-6 py-2 xs:mt-2 sm:mt-2 md:mt-0">
                            Search
                        </div>
                </div>
            </div>
        </div>
    )
}