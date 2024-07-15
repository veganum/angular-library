export interface UserName {
  first: string;
  last?: string;
}

export interface Picture {
  large?: string;
  medium?: string;
  thumbnail?: string;
}

export interface CardUser {
  name?: UserName;
  picture?: Picture;
}
