import messages from '@helpers/messages';
import { ADDRESS_LINK, CONTACT_EMAIL, CONTACT_NUMBER } from '@helpers/const';

import PHONE_ICON from 'src/assets/images/icons/phone.svg';
import LOCATION_ICON from 'src/assets/images/icons/location.svg';
import MAIL_ICON from 'src/assets/images/icons/mail.svg';

import s from './Socials.module.scss';

const Socials = () => {
  return (
    <ul className={s.container}>
      <li>
        <a href={`mailto:${CONTACT_EMAIL}`} target="_blank">
          <img src={MAIL_ICON} alt={messages.SOCIALS_ALT} />
        </a>
      </li>
      <li>
        <a href={`tel:${CONTACT_NUMBER}`} target="_blank">
          <img src={PHONE_ICON} alt={messages.SOCIALS_ALT} />
        </a>
      </li>
      <li>
        <a href={ADDRESS_LINK} target="_blank">
          <img src={LOCATION_ICON} alt={messages.SOCIALS_ALT} />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
