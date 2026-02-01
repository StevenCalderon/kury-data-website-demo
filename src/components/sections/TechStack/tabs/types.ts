export interface TechStackApp {
  title: string;
  image: string;
}

export interface BadgeArrow {
  position: "left" | "right";
  offset: string;
  top: string;
  rotation: number;
  clipPath: string;
}

export interface BadgePosition {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  background: string;
  borderColor: string;
  arrow?: BadgeArrow;
}

export interface TechStackPerson {
  name: string;
  avatar: string;
  position: BadgePosition;
}

export interface TechStackTabMetadata {
  key: string;
  label: string;
}
