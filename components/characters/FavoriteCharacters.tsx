import { FC } from 'react';
import { Grid, Card } from '@nextui-org/react';
import FavoriteCharacterCard from './FavoriteCharacterCard';

interface Props {
  characters: number[];
}
const FavoriteCharacters: FC<Props> = ({ characters }) => {
  return (
    <Grid.Container direction='row' gap={2} justify='flex-start'>
      {characters.map((id) => (
        <FavoriteCharacterCard id={id} key={id} />
      ))}
    </Grid.Container>
  );
};

export default FavoriteCharacters;
