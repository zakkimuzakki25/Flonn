import { BrowserRouter } from 'react-router-dom';
import MainRoute from './routes/MainRoute';
import { LoadingProvider } from './context/LoadingContext';
import { ConfirmationProvider } from './context/ConfirmationContext';

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <ConfirmationProvider >
          <MainRoute />
        </ConfirmationProvider>
      </LoadingProvider>
    </BrowserRouter>
  );
}

export default App;
