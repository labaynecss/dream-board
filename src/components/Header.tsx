import { navlinks } from '../data';
import Navbar from './Navbar';

export const Header = () => {
  return (
    <>
      <div>
        <Navbar links={navlinks} />
      </div>
    </>
  );
};
