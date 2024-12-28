import { Outlet } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';

export default function Website() {
  return (
    <>
      <NavBar />
      <div style={{ minHeight: 'calc(100vh - (75px + 55px))' }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
