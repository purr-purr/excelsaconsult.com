import { COMPANY_TITLE, MAIN_ACTIVITY_LIST } from '@helpers/const';
import messages from '@helpers/messages';

import BlockHeading from '@modules/common/components/blockHeading';
import WhatWeDoItem from '@modules/common/components/whatWeDoItem';

import ABOUT_US_IMAGE from 'src/assets/images/about-us-docs.png';
import OWNER_PHOTO from 'src/assets/images/owner-photo.jpg';

import s from './Home.module.scss';

const Home = () => {
  return (
    <>
      <article className={s.intro}>
        <div className={s[`intro-inner`]}>
          <h1 className={s[`intro-title`]}>{COMPANY_TITLE}</h1>
          <p className={s[`intro-desc`]}>{messages.GENERAL_DESC}</p>
        </div>
      </article>

      <article className={s.whatWeDo}>
        <BlockHeading title={messages.WHAT_WE_DO} />
        <ul className={s[`whatWeDo-list`]}>
          <WhatWeDoItem title={messages.STRATEGY} desc={messages.STRATEGY_DESC} />
          <WhatWeDoItem title={messages.TRANSFORMATION} desc={messages.TRANSFORMATION_DESC} />
          <WhatWeDoItem title={messages.PRODUCTIVITY} desc={messages.PRODUCTIVITY_DESC} />
        </ul>
      </article>

      <article className={s.about}>
        <div className={s[`about-image`]}>
          <img src={ABOUT_US_IMAGE} alt={messages.IMAGE + messages.ABOUT_US} />
        </div>
        <div>
          <BlockHeading title={messages.ABOUT_US} />
          <p>{messages.ABOUT_US_FIRST_PARAGRAPH}</p>
          <p>{messages.ABOUT_US_SECOND_PARAGRAPH}</p>
        </div>
      </article>

      <article className={s.activity}>
        <BlockHeading title={messages.MAIN_ACTIVITY} />
        <p>{messages.MAIN_ACTIVITY_DESC}</p>
        <ul className={s.activityList}>
          {MAIN_ACTIVITY_LIST.map((item) => {
            return (
              <li key={item.title} className={s[`activityList-item`]}>
                <img
                  src={require(`src/assets/images/icons/activity_${item.icon}.svg`).default}
                  alt={messages.ACTIVITY_ICON}
                />

                <p>{item.title}</p>
              </li>
            );
          })}
        </ul>
      </article>

      <article className={s.owner}>
        <div className={s[`owner-image`]}>
          <img src={OWNER_PHOTO} alt={messages.THE_OWNER + ' ' + messages.IMAGE} />
        </div>
        <div>
          <BlockHeading title={messages.THE_OWNER} />
          <p>{messages.OWNER_DESC_PART_1}</p>
          <p>{messages.OWNER_DESC_PART_2}</p>
          <p>{messages.OWNER_DESC_PART_3}</p>
          <p>{messages.OWNER_DESC_PART_4}</p>
        </div>
      </article>
    </>
  );
};

export default Home;
