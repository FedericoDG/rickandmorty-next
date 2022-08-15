import { FC, useState } from 'react';
import { GetStaticPaths } from 'next';
import { GetStaticProps } from 'next';
import { Grid, Card, Text, Button, useTheme } from '@nextui-org/react';
import confetti from 'canvas-confetti';

import { RickAndMortyDetailsResponse } from '../../interfaces/';

import { Layout } from '../../components/layouts';
import { rickAndMortyApi } from '../../services';
import { toggleFavorite } from '../../utils';
import { isInFavorites } from '../../utils/localStorage';

interface Props {
  character: RickAndMortyDetailsResponse;
}

const CharacterPage: FC<Props> = ({ character }) => {
  const [isFavorite, setIsFavorite] = useState(isInFavorites(character.id));

  const { theme } = useTheme();

  const LSToggle = () => {
    toggleFavorite(character.id);
    setIsFavorite(!isFavorite);

    if (isFavorite) return;

    confetti({
      zIndex: 999,
      particleCount: 150,
      spread: 150,
      angle: -90,
      origin: {
        x: 0.75,
        y: 0.15
      }
    });
  };

  return (
    <Layout title={character.name}>
      <Grid.Container css={{ marginTop: 4 }} gap={2}>
        <Grid xs={12}>
          <Card css={{ padding: 16 }}>
            <Card.Header css={{ justifyContent: 'space-between' }}>
              <Text
                h1
                size={60}
                css={{
                  textGradient: '45deg, $purple600 -20%, $pink600 100%'
                }}
                weight='bold'
              >
                {character.name}
              </Text>
              <Button color='gradient' ghost={!isFavorite} onClick={LSToggle}>
                {isFavorite ? 'REMOVE FROM FAVORITES' : 'ADD TO FAVORITES'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Grid.Container css={{ alignItems: 'center', justifyContent: 'center' }}>
                <Grid xs={4}>
                  <Card.Image css={{ borderRadius: 8 }} src={character.image} alt={character.name} width='100%' height={200} />
                </Grid>
                <Grid xs={8}>
                  <Grid.Container
                    css={{
                      alignItems: 'center',
                      backgroundColor: theme?.colors.gray100.value,
                      borderRadius: 8,
                      justifyContent: 'space-evenly'
                    }}
                    gap={2}
                  >
                    <Grid direction='column'>
                      <Text h4>
                        <span style={{ color: theme?.colors.primary.value }}>Status: </span>
                        {character.status}
                      </Text>
                      <Text h4>
                        <span style={{ color: theme?.colors.primary.value }}>Gender: </span>
                        {character.gender}
                      </Text>
                      <Text h4>
                        <span style={{ color: theme?.colors.primary.value }}>Specie: </span>
                        {character.species}
                      </Text>
                    </Grid>
                    <Grid direction='column'>
                      <Text h4>
                        <span style={{ color: theme?.colors.primary.value }}>Origin:</span> {character.origin.name}
                      </Text>
                      <Text h4>
                        <span style={{ color: theme?.colors.primary.value }}>Location:</span> {character.location.name}
                      </Text>
                      <Text h4>
                        <span style={{ color: theme?.colors.primary.value }}>Total Episodes:</span> {character.episode.length}
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Grid>
              </Grid.Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const characters = [...Array(40)].map((_, idx) => `${idx + 1}`);

  return {
    paths: characters.map((id) => ({ params: { id } })),
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { id } = params as { id: string };
    const { data: character } = await rickAndMortyApi.get<RickAndMortyDetailsResponse>(`/character/${id}`);

    return {
      props: {
        character
      },
      revalidate: 86400
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }
};

export default CharacterPage;
