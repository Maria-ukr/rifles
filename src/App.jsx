import router from './routes/root.jsx';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Spinner from '@/components/Spinner/Spinner.jsx';

function App() {
  return (
    <>
      <RouterProvider router={router} fallbackElement={<Spinner/>} />
    </>
  );
}

export default App;
