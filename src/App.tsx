import './styles/styles.css'
import { BrowserRouter } from 'react-router-dom';
import { HeaderComponent } from './components/Header';
import { WrapperComponent } from './components/Wrapper';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { DrawerComponent } from './components/Drawer';
function App() {

  const theme = useSelector((state: any) => state['theme']);

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
    <BrowserRouter>
      {theme.isDark}
      <div className={theme.isDark ? 'dark' : ''}>
        <HeaderComponent />
        <div className='flex flex-row'>
          <div className='w-56 sm:hidden md:hidden xxs:hidden lg:block xl:block 2xl: block'>
              <DrawerComponent />
          </div>
          <div className='w-full'>
            <WrapperComponent />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
