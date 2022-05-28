import SearchBar from '@commons/inputs/SearchBar/SearchBar';
import Icon from '@components/commons/Icon/Icon';
import style from './Navbar.module.scss';

const Navbar = () => {
  const { NavbarContainer, NavbarIcon } = style;

  return (
    <header className={NavbarContainer}>
      <div className={NavbarIcon}>
        <Icon />
      </div>
      <SearchBar searchPath="/items?search=" />
    </header>
  );
};

export default Navbar;
