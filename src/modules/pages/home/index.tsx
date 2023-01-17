import { COMPANY_TITLE } from '@helpers/const';
import messages from '@helpers/messages';

import BlockHeading from '@modules/common/components/blockHeading';
import WhatWeDoItem from '@modules/common/components/whatWeDoItem';

import ABOUT_US_IMAGE from 'src/assets/images/about-us-docs.png';

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
    </>
  );
};

export default Home;
