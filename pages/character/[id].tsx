import { FC } from 'react';
import { GetStaticPaths } from 'next';
import { GetStaticProps } from 'next';
import { Grid, Card, Text, Button, useTheme } from '@nextui-org/react';

import { RickAndMortyDetailsResponse } from '../../interfaces/rickAndMorty-Details';

import { Layout } from '../../components/layouts';
import { rickAndMortyApi } from '../../services';

interface Props {
  character: RickAndMortyDetailsResponse;
}

const CharacterPage: FC<Props> = ({ character }) => {
  const { theme } = useTheme();
  return (
    <Layout>
      <Grid.Container css={{ marginTop: 4 }} gap={2}>
        <Grid xs={12}>
          <Card css={{ padding: 16 }}>
            <Card.Header css={{ justifyContent: 'space-between' }}>
              <Text h1 color='primary'>
                {character.name}
              </Text>
              <Button color='gradient' ghost>
                ADD TO FAVORITES
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
                      <Text h3>
                        <span style={{ color: theme?.colors.primary.value }}>Status: </span>
                        {character.status}
                      </Text>
                      <Text h3>
                        <span style={{ color: theme?.colors.primary.value }}>Gender: </span>
                        {character.gender}
                      </Text>
                      <Text h3>
                        <span style={{ color: theme?.colors.primary.value }}>Specie: </span>
                        {character.species}
                      </Text>
                    </Grid>
                    <Grid direction='column'>
                      <Text h3>
                        <span style={{ color: theme?.colors.primary.value }}>Origin:</span> {character.origin.name}
                      </Text>
                      <Text h3>
                        <span style={{ color: theme?.colors.primary.value }}>Location:</span> {character.location.name}
                      </Text>
                      <Text h3>
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
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data: character } = await rickAndMortyApi.get<RickAndMortyDetailsResponse>(`/character/${id}`);

  return {
    props: {
      character
    }
  };
};

export default CharacterPage;
