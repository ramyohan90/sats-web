import './styles/styles.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { WrapperComponent } from './components/Wrapper';
import { useSelector } from 'react-redux';
import { useEffect, useReducer } from 'react';
import { DrawerComponent } from './components/drawer/Sidebar';
import { HandsetDrawerStateContext, HandsetDrawerStateInitialValue } from './context/HandSetDrawerContext';
import { HandsetDrawerReducer } from './store/reducers/context-reducers';
import HandsetDrawer from './components/drawer/HandsetDrawer';
import { HeaderComponent } from './components/header/Header';
function App() {

  const theme = useSelector((state: any) => state['theme']);

  const [isDrawerOpen, setHandsetDrawerState] = useReducer(HandsetDrawerReducer, HandsetDrawerStateInitialValue);

  useEffect(() => {
    if (!theme.isDark) {
      window.localStorage.setItem('theme', 'light');
      document.body.style.backgroundColor = "#FFFFFF";
    } else {
      window.localStorage.setItem('theme', 'dark');
      document.body.style.backgroundColor = "#000000";
    }
  }, [theme.isDark])

  return (
    <HandsetDrawerStateContext.Provider value={{ isDrawerOpen, setHandsetDrawerState }}>
      <BrowserRouter>
        <div className={theme.isDark ? 'dark flex flex-col mb-10' : 'flex flex-col mb-10'}>
          <div className='fixed w-full'>
            {/* navbar */}
            <HeaderComponent /> 
            {/* mobile drawer on right. */}
            {isDrawerOpen && isDrawerOpen.isHandsetOpen && <HandsetDrawer />}
          </div>
          <div className='flex flex-row mt-16'>
            <div className='w-56 sm:hidden md:hidden xxs:hidden lg:block xl:block 2xl: block'>
              {/* left drawer */}
              <DrawerComponent />
            </div>
            <div className='w-full mt-7'>
              <WrapperComponent />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </HandsetDrawerStateContext.Provider>
  );
}

export default App;
