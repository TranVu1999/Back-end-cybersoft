export interface FilterObjectInterface{
  id: number,
  title: string;
  isShowFull: boolean;
  listItem: FilterObjectItemInterface[]
}

export interface FilterObjectItemInterface{
  id: number,
  title: string;
  isSelected: boolean;
}

