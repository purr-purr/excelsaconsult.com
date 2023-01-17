import { FC } from 'react';

import s from './BlockHeading.module.scss';

const BlockHeading: FC<{ title: string }> = ({ title }) => {
  return <h2 className={s.container}>{title}</h2>;
};

export default BlockHeading;
