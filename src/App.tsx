import { ToastContainer } from 'react-toastify';
import { CookiesProvider } from 'react-cookie';
import { Routes } from './routes';
import { AuthContextProvider } from './hooks/AuthContext';

import GlobalStyle from './styles/global'
import 'react-toastify/dist/ReactToastify.css'; 


function App() {
  return (
    <CookiesProvider>
      <AuthContextProvider>
        <Routes />
        <GlobalStyle />
        <ToastContainer
          autoClose={3000}
        />
    </AuthContextProvider>
    </CookiesProvider>
    
  );
}

export default App;
