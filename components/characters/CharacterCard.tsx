import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { character } from '../../interfaces';

interface Props {
  character: character;
}

const CharacterCard: FC<Props> = ({ character }) => {
  const { id, image, name } = character;

  const router = useRouter();

  const onClick = () => {
    router.push(`/character/${character.id}`);
  };

  return (
    <Grid xs={6} sm={3} key={character.id}>
      <Card isPressable onClick={onClick}>
        <Card.Body css={{ p: 0 }}>
          <Card.Image src={character.image} objectFit='cover' width='100%' height={240} alt={character.name} />
        </Card.Body>
        <Card.Footer css={{ justifyItems: 'flex-start' }}>
          <Row wrap='wrap' justify='space-between' align='center'>
            <Text css={{ color: '$accents7', fontWeight: '$semibold', fontSize: '$sm' }}># {character.id}</Text>
            <Text b>{character.name}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
export default CharacterCard;
