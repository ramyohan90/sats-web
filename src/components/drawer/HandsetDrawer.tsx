import { useContext } from "react";
import { HandsetDrawerStateContext } from "../../context/HandSetDrawerContext";
import { useDispatch, useSelector } from "react-redux";
import { LogoComponent } from "../../svg/Logo";
import { ThemeSliceReducer } from "../../store/reducers/slice";
import { useNavigate } from "react-router-dom";

export default function HandsetDrawer() {

    const ctx = useContext(HandsetDrawerStateContext);

    const theme = useSelector((state: any) => state['theme']);

    const history = useNavigate();

    const themeDispatch = useDispatch();

    function onClose() {
        ctx.setHandsetDrawerState({
            type: 'drawer',
            payload: {
                isHandsetOpen: false,
                currentScreen: null
            }
        })
    }

    function changeTheme() {
        themeDispatch(ThemeSliceReducer())
    }

    function onBackdropClose(event: any) {
        if ((event.target.outerHTML as string).includes('backdrop-control')) {
            onClose();
        }
    }

    function navigate(path: string) {
        history(path)
    }

    return (
        <div onClick={(event) => onBackdropClose(event)} className="fixed top-0 left-0 z-20 flex w-full h-full backdrop-control">
            <div className="fixed top-0 bottom-0 right-0 w-2/3 h-full bg-white md:w-1/3 dark:bg-black lg:w-1/4">
                <div className="flex h-16 p-3 shadow bg-satsColor dark:bg-black">
                    {
                        !theme.isDark ? <LogoComponent height={50} width={50} innerColor="#FFFFFF" outerColor="none" /> :
                            <LogoComponent height={50} width={50} innerColor="#f85d1d" outerColor="none" />
                    }
                    <div onClick={onClose} className="ml-auto mr-2 -mt-3 text-gray-600 cursor-pointer" style={{ fontSize: '35px' }}>&times;</div>
                </div>
                <div className="flex flex-col gap-2 p-4 mt-3 font-mono tracking-tight list-none font-sm dark:text-white">
                    <li onClick={() => { navigate('home') }} className="p-4 text-center text-white rounded cursor-pointer bg-satsColor">Home</li>
                    <li onClick={() => {changeTheme()}} className="p-4 text-center text-white rounded cursor-pointer bg-satsColor">{theme.isDark ? 'Light' : 'Dark'} Theme</li>
                    <li onClick={() => { navigate('search') }} className="p-4 text-center text-white rounded cursor-pointer bg-satsColor">Search</li>
                    <li onClick={() => { }} className="p-4 text-center text-white rounded cursor-pointer bg-satsColor">Inscribe</li>
                    <li onClick={() => { }} className="p-4 text-center text-white rounded cursor-pointer bg-satsColor">Other BRC20</li>
                </div>
            </div>
        </div>
    )
}