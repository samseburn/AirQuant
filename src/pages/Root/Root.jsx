import { Header } from 'components/common/Header';
import { Outlet } from 'react-router-dom';

const Root = ({ children }) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
