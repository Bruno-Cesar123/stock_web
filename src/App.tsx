import { ToastContainer } from 'react-toastify';
import { Routes } from './routes';

import GlobalStyle from './styles/global'
import 'react-toastify/dist/ReactToastify.css'; 
import { AuthContextProvider } from './hooks/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Routes />
      <GlobalStyle />
      <ToastContainer
        autoClose={3000}
      />
    </AuthContextProvider>
  );
}

export default App;
