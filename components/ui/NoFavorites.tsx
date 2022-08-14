import { Container, Image, Text } from '@nextui-org/react';

const NoFavorites = () => {
  return (
    <Container
      css={{
        alignItems: 'center',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: 'clac(100vh - 64px)',
        justifyContent: 'center'
      }}
    >
      <Text h1>You dont have favorites</Text>
      <Image
        alt='Rick and Morty'
        height={250}
        width={250}
        src='https://pngimg.com/uploads/rick_morty/rick_morty_PNG24.png'
        css={{ filter: 'grayscale(1)', opacity: 0.25 }}
      />
    </Container>
  );
};

export default NoFavorites;
