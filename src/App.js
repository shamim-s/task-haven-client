import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Routes/Routes';

function App({children}) {
  return (
    <div>
      <RouterProvider router={routes}>
          {children}
      </RouterProvider>
    </div>
  );
}

export default App;
