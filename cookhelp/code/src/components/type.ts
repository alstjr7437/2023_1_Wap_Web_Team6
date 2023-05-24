export interface RecipeListType {
  id: number;
  ListNum: number;
  pic: string;
  detail: string;
  stepTitle: string;
  timer?: number;
}

export interface RecipeCard {
  id: number;
  RecipeName: string;
  FoodType: string;
  cards: RecipeListType[];
  Ingredient: string[];
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
  to: string;
}

export interface ListProps {
  stepDetail: string;
  listNum: number;
  setSelectIdx: React.Dispatch<React.SetStateAction<number>>;
}
