import { FC } from 'react';

import s from './WhatWeDoItem.module.scss';

const WhatWeDoItem: FC<{ title: string; desc: string }> = ({ title, desc }) => {
  return (
    <li className={s.container}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </li>
  );
};

export default WhatWeDoItem;
