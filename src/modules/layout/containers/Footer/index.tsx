import Logo from '@modules/common/components/logo';
import Socials from '@modules/common/components/Socials';

import { ADDRESS, COMPANY_POST_BOX, COMPANY_TITLE, COMPANY_TITLE_DESC } from '@helpers/const';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.container}>
      <section className={s.inner}>
        <Logo />
        <div className={s.info}>
          <p className={s.desc}>{COMPANY_TITLE + COMPANY_TITLE_DESC}</p>
          <p className={s.desc}>{ADDRESS}</p>
          <p className={s.desc}>{COMPANY_POST_BOX}</p>
        </div>
        <Socials />
      </section>
    </footer>
  );
};

export default Footer;
