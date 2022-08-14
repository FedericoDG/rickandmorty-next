import { Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface Props {
  id: number;
}

const FavoriteCharacterCard: FC<Props> = ({ id }) => {
  const router = useRouter();

  const onClick = () => router.push(`/character/${id}`);

  return (
    <Grid key={id} xs={6} sm={4} md={3} xl={2}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image src={`	https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`} width='100%' height={140} onClick={onClick} />
      </Card>
    </Grid>
  );
};

export default FavoriteCharacterCard;
