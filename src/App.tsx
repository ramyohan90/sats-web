import './styles/styles.css'
import { BrowserRouter } from 'react-router-dom';
import { HeaderComponent } from './components/Header';
import { WrapperComponent } from './components/Wrapper';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
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
      <WrapperComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
