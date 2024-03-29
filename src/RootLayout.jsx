import { Outlet } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

const RootLayout = () => {
  return (
    <div className="main-container">
      <div className="container">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
