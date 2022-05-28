import SearchBar from '@commons/inputs/SearchBar/SearchBar';
import Icon from '@components/commons/Icon/Icon';
import { useRouter } from 'next/router';
import style from './Navbar.module.scss';

const Navbar = () => {
  const { NavbarContainer, NavbarSubcontainer, NavbarIcon } = style;
  const router = useRouter();

  const handleHome = () => {
    router.push('/');
  };

  return (
    <header className={NavbarContainer}>
      <div className={NavbarSubcontainer}>
        <div className={NavbarIcon}>
          <Icon onclick={handleHome} />
        </div>
        <SearchBar searchPath="/items?search=" />
      </div>
    </header>
  );
};

export default Navbar;
