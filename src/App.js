// import './App.css';
import { Case, Company, Product, Service, Tech } from 'pages';
import Root from 'pages/Root/Root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/main.scss';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <div>Page Not Found</div>,
      children: [
        { index: true, element: <Product /> },
        { path: '/tech', element: <Tech /> },
        { path: '/company', element: <Company /> },
        { path: '/case', element: <Case /> },
        { path: '/service', element: <Service /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
