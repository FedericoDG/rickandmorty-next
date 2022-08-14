import { Link, Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        alignItems: 'center',
        backgroundColor: theme?.colors.gray100.value,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        padding: '0 20px',
        width: '100%'
      }}
    >
      <Image alt='Logo de la app' height={70} src={'https://pngimg.com/uploads/rick_morty/rick_morty_PNG24.png'} width={70} />
      <NextLink href='/' passHref>
        <Link color='text' style={{ textDecoration: 'none' }}>
          <Text h2>R</Text>
          <Text h3>ick and Morty</Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href='/favorites' passHref>
        <Link color='text' style={{ textDecoration: 'none' }}>
          <Text h3>Favorites</Text>
        </Link>
      </NextLink>
    </div>
  );
};

export default Navbar;
