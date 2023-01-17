import { FC } from 'react';
import Header from '@modules/layout/containers/Header';
import Footer from '@modules/layout/containers/Footer';

import s from './Layout.module.scss';

const Layout: FC = ({ children }) => {
  return (
    <main className={s.container}>
      <Header />
      <section className={s.section}>{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
