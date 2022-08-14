export interface RickAndMortyListResponse {
  info: Info;
  results: character[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: string;
}

export interface character {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'unknown'
}

export interface Location {
  name: string;
  url: string;
}

export enum Species {
  Alien = 'Alien',
  Human = 'Human'
}

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown'
}
