export const toggleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(window.localStorage.getItem('favorites') || '[]');

  if (favorites.includes(id)) {
    favorites = favorites.filter((characterId) => characterId != id);
  } else {
    favorites.push(id);
  }
  window.localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const isInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') return false;

  let favorites: number[] = JSON.parse(window.localStorage.getItem('favorites') || '[]');

  return favorites.includes(id);
};

export const charactersInFavorites = (): number[] => {
  return JSON.parse(window.localStorage.getItem('favorites') || '[]');
};
