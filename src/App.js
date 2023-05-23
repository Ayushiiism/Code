import logo from './logo.svg';
import './App.css';
import Practice from './Component/Practice/Practice';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './pages/HomeScreen';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Pro from './Component/Pro/Pro';

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomeScreen /> },
    { path: "/Practice", element: <Practice/>},
    { path: "/Pro", element: <Pro/>},
  ]);
  return (
    <div className="App">
         <RouterProvider router={router} />
    </div>
  );
}

export default App;
