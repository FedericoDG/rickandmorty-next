import { GetStaticProps } from 'next';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import type { NextPage } from 'next';

import { character } from '../interfaces/';
import { RickAndMortyListResponse } from '../interfaces';

import { Layout } from '../components/layouts';
import { rickAndMortyApi } from '../services';
import CharacterCard from '../components/characters/CharacterCard';

interface Props {
  characters: character[];
}

const HomePage: NextPage<Props> = ({ characters }) => {
  return (
    <Layout title='Listado de Personajes'>
      <Grid.Container gap={2} justify='flex-start'>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const getCharacters = async (end: number) => {
    const characters = [];
    for (let i = 1; i <= end; i++) {
      const call = await rickAndMortyApi.get<RickAndMortyListResponse>(`/character?page=${i}`);
      characters.push(...call.data.results);
    }
    return characters;
  };

  const characters = await getCharacters(2);

  return {
    props: {
      characters
    }
  };
};
export default HomePage;
