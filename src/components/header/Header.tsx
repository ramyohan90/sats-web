import { useDispatch, useSelector } from "react-redux";
import { LogoComponent } from "../../svg/Logo";
import { SliderComponent } from "../../svg/Slider";
import { ThemeSliceReducer } from "../../store/reducers/slice";
import { FcGoogle } from 'react-icons/fc';
import { VscThreeBars } from 'react-icons/vsc';
import { useContext } from "react";
import { HandsetDrawerStateContext } from "../../context/HandSetDrawerContext";
import { BsSearch } from 'react-icons/bs';
export function HeaderComponent() {

    const themeDispatch = useDispatch();

    const theme = useSelector((state: any) => state['theme']);

    const drawerCtx = useContext(HandsetDrawerStateContext);

    function changeTheme() {
        themeDispatch(ThemeSliceReducer())
    }

    function onMenuClick() {
        drawerCtx.setHandsetDrawerState({
            type: 'drawer',
            payload: {
                isHandsetOpen: true,
                currentScreen: 'feed'
            }
        })
    }

    return (
        <nav className="bg-satsColor text-white font-mono dark:bg-gray-800">
            <div className="flex h-16 items-center justify-between ml-2">
                <div className="rounded cursor-default flex felx-col">
                    <div>
                        {
                            !theme.isDark ? <LogoComponent height={50} width={50} innerColor="#FFFFFF" outerColor="none" /> :
                                <LogoComponent height={50} width={50} innerColor="#f85d1d" outerColor="none" />
                        }
                    </div>
                </div>
                <div className="flex-1 lg:block xl:block 2xl:block sm:hidden md:block xs:hidden xxs:hidden"></div>
                <div className="mr-10 flex flex-row">
                    <input type="text" className="rounded h-10 md:w-96 lg:w-96 focus:outline-none  p-1 focus:ring focus:ring-satsColor text-black" autoComplete="off" placeholder="Search Inscription, walltet, txn.." />
                    <div className="p-2 cursor-pointer"><BsSearch size={20} /></div>
                </div>
                <div className="ml-auto align-middle mr-3 text-white p-1 rounded text-sm cursor-pointer lg:block xl:block 2xl:block sm:hidden md:block xs:hidden xxs:hidden">
                    <button className="flex gap-2"> <FcGoogle className="mt-1" /> <span>Google Signin</span></button>
                </div>
                <div className="align-middle mr-3 bg-satsColor text-white p-1 rounded text-sm cursor-pointer lg:block xl:block 2xl:block sm:hidden md:block xs:hidden xxs:hidden">Connect Wallet</div>
                <div className="align-middle mr-3 cursor-pointer lg:block xl:block 2xl:block sm:hidden md:block xs:hidden xxs:hidden" onClick={changeTheme}>
                    <SliderComponent />
                </div>
                <div onClick={onMenuClick} className="lg:hidden xl:hidden 2xl:hidden sm:block md:block xs:block xxs:block">
                    <VscThreeBars size={25} className="mr-5 dark:text-satsColor text-white" />
                </div>
            </div>
        </nav>
    )
}

