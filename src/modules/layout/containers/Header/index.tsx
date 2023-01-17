import Logo from '@modules/common/components/logo';
import Socials from '@modules/common/components/Socials';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.container}>
      <Logo />
      <Socials />
    </header>
  );
};

export default Header;
