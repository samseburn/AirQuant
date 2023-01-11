import { Header, Footer, Navbar } from 'components';
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from 'utils';

const Root = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
