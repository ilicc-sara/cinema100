export type singleMovie = {
  rank: number;
  title: string;
  thumbnail: string;
  rating: string;
  id: string;
  year: number;
  image: string;
  description: string;
  trailer: string;
  genre: string[];
  director: string[];
  writers: string[];
  imdbid: string;
};

export type FIlters = {
  search: string;
  activeGenre: string;
};

export type MovieItemProps = {
  item: singleMovie;
  index: number;
  details: boolean;
};

export type TrendingProps = {
  currentlyTrending: singleMovie[] | undefined;
};
