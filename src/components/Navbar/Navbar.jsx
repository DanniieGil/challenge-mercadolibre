import SearchBar from '@commons/inputs/SearchBar/SearchBar';
import Icon from '@components/commons/Icon/Icon';
import { useRouter } from 'next/router';
import style from './Navbar.module.scss';

const Navbar = () => {
  const { NavbarContainer, NavbarIcon } = style;
  const router = useRouter();

  const handleHome = () => {
    router.push('/');
  };

  return (
    <header className={NavbarContainer}>
      <div className={NavbarIcon}>
        <Icon onclick={handleHome} />
      </div>
      <SearchBar searchPath="/items?search=" />
    </header>
  );
};

export default Navbar;
