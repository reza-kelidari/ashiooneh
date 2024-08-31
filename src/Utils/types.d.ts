/**
 * Represents shape of an element in Houses list
 */
export interface House {
  image: string;
  name: string;
  size: number;
  rooms: number;
  price: string;
}

/**
 * An array that contains list of houses
 */
export type UpcomingType = Array<House>;
