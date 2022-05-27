import SearchBar from '@commons/inputs/SearchBar/SearchBar';
import Icon from '@components/commons/Icon/Icon';
import style from './Navbar.module.scss';

const Navbar = () => {
  return (
    <header className={style.NavbarContainer}>
      <Icon />
      <SearchBar searchPath='/items?search=' />
    </header>
  );
};

export default Navbar;
