import { BsGraphUpArrow, BsGraphUp } from 'react-icons/bs';
import { GoGraph } from 'react-icons/go';
export function HomeComponent() {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <div className='grid gap-12 text-center lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 sm: grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1'>
                    <div className="h-40 w-64 rounded p-3 flex flex-col gap-5 bg-gray-200 text-center justify-center">
                        <div>
                            Domains
                        </div>
                        <div className='text-satsColor'>
                            300k
                        </div>
                        <div className="p-2 bg-satsColor rounded text-sm cursor-pointer text-white">
                            Buy sats
                        </div>
                    </div>
                    <div className="h-40 w-64 rounded border-2 p-3 flex flex-col gap-5 bg-gray-200">
                        <div>
                            <button className="text-2xl opacity-0.9 
              rounded-full p-4 hover:drop-shadow-xl" style={{
                                    color: '#03C9D7',
                                    backgroundColor: '#E5FAFB'
                                }}> <BsGraphUpArrow strokeWidth={2} /> </button>
                        </div>
                        <div className='text-satsColor'>
                            50,000 sats
                        </div>
                        <div className='text-gray-600'>
                            Monthly Inscription
                        </div>
                    </div>
                    <div className="h-40 w-64 rounded border-2 p-3 flex flex-col gap-5 bg-gray-200">
                        <div>
                            <button className="text-2xl opacity-0.9 
              rounded-full p-4 hover:drop-shadow-xl" style={{
                                    color: '#03C9D7',
                                    backgroundColor: '#E5FAFB'
                                }}> <BsGraphUp strokeWidth={2} /> </button>
                        </div>
                        <div className='text-satsColor'>
                            17,000 sats
                        </div>
                        <div className='text-gray-600'>
                            Weekly Inscription
                        </div>
                    </div>
                    <div className="h-40 w-64 rounded border-2 p-3 flex flex-col gap-5 bg-gray-200">
                        <div>
                            <button className="text-2xl opacity-0.9 
              rounded-full p-4 hover:drop-shadow-xl" style={{
                                    color: '#03C9D7',
                                    backgroundColor: '#E5FAFB'
                                }}> <GoGraph strokeWidth={2} /> </button>
                        </div>
                        <div className='text-satsColor'>
                            3,000 sats
                        </div>
                        <div className='text-gray-600'>
                            Daily Inscription
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}