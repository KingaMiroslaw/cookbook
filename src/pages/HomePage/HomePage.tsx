import { useGetMealsQuery } from "../../api/meals-api/meals-api";
import { Random } from "../../types/Random";

const HomePage = () => {
  const { data: randomMeals = [] } = useGetMealsQuery();

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
