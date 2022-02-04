export class Square {
  field?: Field[];
}

export class Field {
  idSquare?: number;
  idHero?: number;
  selected?: boolean;
  chartSelection?: string;
}
