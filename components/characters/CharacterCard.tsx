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
    <Grid xs={6} sm={4} md={3} xl={2} key={id}>
      <Card isHoverable isPressable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={image} width={'100%'} height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text>#{id}</Text>
            <Text>{name}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
export default CharacterCard;
