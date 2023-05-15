export interface RecipeListType {
  id: number;
  ListNum: number;
  pic: string;
  detail: string;
}

export interface RecipeCard {
  id: number;
  RecipeName: string;
  cards: RecipeListType[];
}

export interface CardProps {
  currentCard: RecipeListType;
}

export interface ArrowButtonProps {
  onClick: React.MouseEventHandler<SVGSVGElement>;
}

export interface searchData {
  id: number;
  img: string;
  title: string;
  writer: string;
  date: string;
  views?: number;
}

export interface RecipeItemProps {
  RecipeId: number;
  RecipeTitle: string;
  RecipeImg: string;
  RecipeWriter: string;
  RecipeDate: string;
}

export interface ListProps {
  stepDetail: string;
  listNum: number;
  setSelectIdx: React.Dispatch<React.SetStateAction<number>>;
}
