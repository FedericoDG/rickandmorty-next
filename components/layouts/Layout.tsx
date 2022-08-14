import { FC, ReactNode } from 'react';
import Head from 'next/head';

import { Navbar } from '../ui';
import { Container } from '@nextui-org/react';

interface Props {
  children: ReactNode;
  title?: string;
}

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Rick and Morty App'}</title>
        <meta name='author' content='Federico González' />
        <meta name='description' content={`Información son el personaje ${title}`} />
        <meta name='keywords' content={`${title}, rick, morty`} />
      </Head>
      <Navbar />
      <Container lg>
        <main style={{ padding: '0 20px' }}>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
