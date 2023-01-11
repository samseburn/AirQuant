import { Header, Footer, Navbar } from 'components';
import { Outlet } from 'react-router-dom';

const Root = ({ children }) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
