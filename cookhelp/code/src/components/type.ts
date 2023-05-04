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
