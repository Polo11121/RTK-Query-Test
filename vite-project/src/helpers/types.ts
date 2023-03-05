export interface CreatorsList {
  count: number;
  next: string;
  previous: null;
  results: Creator[];
}

export interface Creator {
  name: string;
  slug: string;
  image: null;
  positions: Position[];
  games_count: number;
  image_background: string;
  id: number;
  score: string;
}

export interface Position {
  id: number;
  name: string;
  slug: string;
}

export interface GamesList {
  count: number;
  next: string;
  previous: null;
  results: Game[];
  user_platforms: boolean;
}

export interface Game {
  slug: string;
  name: string;
  playtime: number;
  platforms: Platform[];
  stores: Store[] | null;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: AddedByStatus;
  metacritic: number | null;
  suggestions_count: number;
  updated: string;
  id: number;
  score: null;
  clip: null;
  tags: Tag[];
  esrb_rating: EsrbRating | null;
  user_game: null;
  reviews_count: number;
  saturated_color: Color;
  dominant_color: Color;
  short_screenshots: ShortScreenshot[];
  parent_platforms: Platform[];
  genres: Genre[];
  community_rating?: number;
}

export interface AddedByStatus {
  yet: number;
  owned: number;
  beaten?: number;
  toplay: number;
  dropped?: number;
  playing?: number;
}

export enum Color {
  The0F0F0F = "0f0f0f",
}

export interface EsrbRating {
  id: number;
  name: string;
  slug: string;
  name_en: string;
  name_ru: string;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

export interface Platform {
  platform: Genre;
}

export interface Rating {
  id: number;
  title: Title;
  count: number;
  percent: number;
}

export enum Title {
  Exceptional = "exceptional",
  Meh = "meh",
  Recommended = "recommended",
  Skip = "skip",
}

export interface ShortScreenshot {
  id: number;
  image: string;
}

export interface Store {
  store: Genre;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  language: Language;
  games_count: number;
  image_background: string;
}

export enum Language {
  Eng = "eng",
  Rus = "rus",
}

export interface CollectionsList {
  count: number;
  next: string;
  previous: null;
  results: Collection[];
}

export interface Collection {
  name: string;
  noindex: boolean;
  slug: string;
  games_count: number;
  backgrounds: Background[];
  id: number;
  score: string;
  game_background: Background | null;
  game_covers: Background[];
}

export interface Background {
  url: string;
  dominant_color: string;
  saturated_color: string;
}

export interface Youtube {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Item[];
}

export interface Item {
  kind: string;
  etag: string;
  id: ID;
  snippet: Snippet;
}

export interface ID {
  kind: string;
  videoId: string;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
