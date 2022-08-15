import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { useEffect, useState } from 'react';
import { charactersInFavorites } from '../../utils';
import { FavoriteCharacters } from '../../components/characters';

const FavoritePage = () => {
  const [characters, setCharacters] = useState<number[]>([]);

  useEffect(() => {
    setCharacters(charactersInFavorites());
  }, []);

  return <Layout>{characters.length === 0 ? <NoFavorites /> : <FavoriteCharacters characters={characters} />}</Layout>;
};
export default FavoritePage;
