import { ToastContainer } from 'react-toastify';
import { Routes } from './routes';

import GlobalStyle from './styles/global'
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <ToastContainer
        autoClose={3000}
      />
    </>
  );
}

export default App;
