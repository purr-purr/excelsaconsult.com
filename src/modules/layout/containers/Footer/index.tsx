import Logo from '@modules/common/components/logo';
import Socials from '@modules/common/components/Socials';

import {
  ADDRESS,
  COMPANY_POST_BOX,
  COMPANY_TITLE,
  COMPANY_TITLE_DESC,
  CONTACT_EMAIL_SECOND,
  CONTACT_NUMBER,
} from '@helpers/const';

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
          <a className={s.desc} href={`mailto:${CONTACT_EMAIL_SECOND}`}>
            {CONTACT_EMAIL_SECOND}
          </a>
          <a className={s.desc} href={`tel:${CONTACT_NUMBER}`}>
            {CONTACT_NUMBER}
          </a>
        </div>
        <Socials />
      </section>
    </footer>
  );
};

export default Footer;
