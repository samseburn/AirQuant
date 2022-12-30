// import './App.css';
import { Container } from 'components/common/Container';
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
        { index: true, element: <Container content={<Product />} /> },
        { path: '/tech', element: <Container content={<Tech />} /> },
        { path: '/company', element: <Container content={<Company />} /> },
        { path: '/case', element: <Container content={<Case />} /> },
        { path: '/service', element: <Container content={<Service />} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
