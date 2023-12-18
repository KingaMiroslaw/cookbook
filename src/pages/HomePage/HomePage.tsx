import { useGetMealsQuery } from "../../api/meals-api/meals-api";

type Random = {
  title: string;
};

const HomePage = () => {
  const { data: randomMeals = [] } = useGetMealsQuery();
  console.log(randomMeals);

  return (
    <div>
      {randomMeals.recipes.map((recipe: Random) => {
        console.log(recipe);
        return (
          <div>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  );
};
export default HomePage;
