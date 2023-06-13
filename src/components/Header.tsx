import { useDispatch, useSelector } from "react-redux";
import { LogoComponent } from "../svg/Logo";
import { SliderComponent } from "../svg/Slider";
import { ThemeSliceReducer } from "../store/reducers/slice";
import { FcGoogle } from 'react-icons/fc'
export function HeaderComponent() {

    const themeDispatch = useDispatch();

    const theme = useSelector((state: any) => state['theme']);

    function changeTheme() {
        themeDispatch(ThemeSliceReducer())
    }

    return (
        <nav className="bg-satsColor text-white font-mono dark:bg-gray-800 relative">
            <div className="relative flex h-16 items-center justify-between ml-2">
                <div className="rounded cursor-default flex felx-col">
                    <div>
                        {
                            !theme.isDark ? <LogoComponent height={50} width={50} innerColor="#FFFFFF" outerColor="none" /> :
                                <LogoComponent height={50} width={50} innerColor="#f85d1d" outerColor="none" />
                        }
                    </div>
                    <div className="mt-4 dark:text-satsColor">Sats Domain Central</div>
                </div>
                <div className="ml-auto align-middle mr-3 text-white p-1 rounded text-sm cursor-pointer">
                    <button className="flex gap-2"> <FcGoogle className="mt-1"/> <span>Google Signin</span></button>
                </div>
                <div className="align-middle mr-3 bg-satsColor text-white p-1 rounded text-sm cursor-pointer">Connect Wallet</div>
                <div className="align-middle mr-5 cursor-pointer" onClick={changeTheme}>
                    <SliderComponent />
                </div>
            </div>
        </nav>
    )
}

