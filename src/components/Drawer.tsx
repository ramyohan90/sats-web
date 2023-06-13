import { useSelector } from "react-redux";
import { LogoComponent } from "../svg/Logo";
import { BiHomeAlt } from 'react-icons/bi';
import { BsPencilSquare, BsSearch } from 'react-icons/bs';
import { MdOutlineToken } from 'react-icons/md';
import { SiSimpleanalytics } from 'react-icons/si';
import { useNavigate } from "react-router-dom";
export function DrawerComponent() {

    const theme = useSelector((state: any) => state['theme']);

    const history = useNavigate();

    function navigate(path: string) {
        history(path)
    }

    return (
        <div id="drawer-example" className="fixed top-0 left-0 z-40 h-screen overflow-y-auto transition-transform -translate-x-full bg-satsColor w-56 dark:bg-gray-800" tabIndex={-1} aria-labelledby="drawer-label">
            <div className="flex flex-row h-16 p-2">
                <div>
                    {
                        !theme.isDark ? <LogoComponent height={45} width={45} innerColor="#FFFFFF" outerColor="none" /> :
                            <LogoComponent height={45} width={45} innerColor="#f85d1d" outerColor="none" />
                    }
                </div>
                <div className="mt-2 text-white dark:text-satsColor">Domain Central</div>
            </div>
            <div className="mt-2 p-2">
                <div>
                    <p className="uppercase text-gray-300 text-center">Explore Domain</p>
                </div>
                <div className="mt-4 flex flex-col gap-4 items-center text-white">
                    <div className="cursor-pointer hover:bg-gray-400 w-full text-center rounded flex flex-row gap-3 justify-start p-1">
                        <div><button className="opacity-0.9 
              rounded p-1 hover:drop-shadow-xl" style={{
                                color: '#f85d1d',
                                backgroundColor: '#E5FAFB'
                            }}><BiHomeAlt size={20} /></button></div>
                        <div onClick={() => navigate('home')}>Home</div>
                    </div>
                    <div className="cursor-pointer hover:bg-gray-400 w-full text-center rounded flex flex-row gap-3 justify-start p-1">
                        <div><button className="opacity-0.9 
              rounded p-1 hover:drop-shadow-xl" style={{
                                color: '#f85d1d',
                                backgroundColor: '#E5FAFB'
                            }}><BsPencilSquare size={20} /></button></div>
                        <div>Inscribe</div>
                    </div>
                    <div className="cursor-pointer hover:bg-gray-400 w-full text-center rounded flex flex-row gap-3 justify-start p-1">
                        <div><button className="opacity-0.9 
              rounded p-1 hover:drop-shadow-xl" style={{
                                color: '#f85d1d',
                                backgroundColor: '#E5FAFB'
                            }}><BsSearch size={20} /></button></div>
                        <div>Search</div>
                    </div>
                    <div className="cursor-pointer hover:bg-gray-400 w-full text-center rounded flex flex-row gap-3 justify-start p-1">
                        <div><button className="opacity-0.9 
              rounded p-1 hover:drop-shadow-xl" style={{
                                color: '#f85d1d',
                                backgroundColor: '#E5FAFB'
                            }}><MdOutlineToken size={20} /></button></div>
                        <div>Other BRC20</div>
                    </div>
                    <div className="cursor-pointer hover:bg-gray-400 w-full text-center rounded flex flex-row gap-3 justify-start p-1">
                        <div><button className="opacity-0.9 
              rounded p-1 hover:drop-shadow-xl" style={{
                                color: '#f85d1d',
                                backgroundColor: '#E5FAFB'
                            }}><SiSimpleanalytics size={20} /></button></div>
                        <div>Analytics</div>
                    </div>
                </div>
            </div>
        </div>
    )
}