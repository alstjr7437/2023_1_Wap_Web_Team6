import { RecipeCard } from "../components/type";

const cardData: RecipeCard[] = [
  {
    id: 1,
    RecipeName: "볶음밥",
    FoodType: "한식",
    Ingredient: ["밥", "소세지", "김치", "간장", "참기름"],
    cards: [
      {
        id: 1,
        ListNum: 1,
        pic: "https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_960_720.jpg",
        detail: "1. 재료를 준비한다. ( 밥, 소세지, 김치, 간장, 참기름 )",
        stepTitle: "재료 준비",
      },
      {
        id: 2,
        ListNum: 2,
        pic: "https://cdn.pixabay.com/photo/2020/05/11/21/57/bake-5160388_960_720.jpg",
        detail: "2. 칼로 소세지, 김치를 알맞은 크기로 썬다.",
        stepTitle: "썰기",
      },
      {
        id: 3,
        ListNum: 3,
        pic: "https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_960_720.jpg",
        detail: "3. 소세지와 김치를 볶는다.",
        stepTitle: "재료 볶기",
      },
      {
        id: 4,
        ListNum: 4,
        pic: "https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_960_720.jpg",
        detail: "4. 밥을 넣고 중불에 5분간 볶는다.",
        stepTitle: "밥 볶기",
      },
      {
        id: 5,
        ListNum: 5,
        pic: "https://cdn.pixabay.com/photo/2015/09/16/21/07/egg-943413_960_720.jpg",
        detail: "5. 간장과 참기를을 넣고 볶은 후 먹는다.",
        stepTitle: "밥 먹기",
      },
    ],
  },
  {
    id: 2,
    RecipeName: "간장계란볶음밥",
    FoodType: "한식",
    Ingredient: ["밥", "계란", "간장", "파", "밥"],
    cards: [
      {
        id: 1,
        ListNum: 1,
        pic: "https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_960_720.jpg",
        detail: "1. 밥과 생계란을 비벼놓는다",
        stepTitle: "계란 넣기",
      },
      {
        id: 2,
        ListNum: 2,
        pic: "https://cdn.pixabay.com/photo/2020/05/11/21/57/bake-5160388_960_720.jpg",
        detail:
          "2. 팬이 차가울때 기름과 파를 같이 넣고 가열시켜 파기름을 낸다.",
        stepTitle: "팬 가열",
      },
      {
        id: 3,
        ListNum: 3,
        pic: "https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_960_720.jpg",
        detail: "3. 파향이 맛있게 올라오면 비벼둔 밥을 넣고 같이 볶아준다",
        stepTitle: "밥 볶기",
      },
      {
        id: 4,
        ListNum: 4,
        pic: "https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_960_720.jpg",
        detail: "4. 맛있게 먹는다",
        stepTitle: "시식",
      },
    ],
  },
];

export default cardData;
