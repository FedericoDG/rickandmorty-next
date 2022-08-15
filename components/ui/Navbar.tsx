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
      <NextLink href='/' passHref>
        <Link color='text' style={{ textDecoration: 'none' }}>
          <Text
            h1
            size={45}
            css={{
              textGradient: '45deg, $blue600 -20%, $green600 50%'
            }}
            weight='bold'
          >
            Rick and Morty
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href='/favorites' passHref>
        <Link color='text' style={{ textDecoration: 'none' }}>
          <Text
            h2
            size={30}
            css={{
              textGradient: '45deg, $blue600 -20%, $green600 50%'
            }}
            weight='bold'
          >
            Favorites
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};

export default Navbar;
