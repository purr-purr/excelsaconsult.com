import messages from '@helpers/messages';

import LOGO from 'src/assets/images/logo.svg';

import s from './Logo.module.scss';

const Logo = () => {
  return (
    <a href="/" className={s.container}>
      <img src={LOGO} alt={messages.LOGO_ALT} />
    </a>
  );
};

export default Logo;
