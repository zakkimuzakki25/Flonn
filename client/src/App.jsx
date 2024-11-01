import { BrowserRouter } from 'react-router-dom';
import MainRoute from './routes/MainRoute';
import { LoadingProvider } from './context/LoadingContext';
import { ConfirmationProvider } from './context/ConfirmationContext';
import { SuccesProvider } from './context/SuccesContext';

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <ConfirmationProvider >
          <SuccesProvider>
            <MainRoute />
          </SuccesProvider>
        </ConfirmationProvider>
      </LoadingProvider>
    </BrowserRouter>
  );
}

export default App;
