import { useGetMealsQuery } from "../../api/meals-api/meals-api";
import { Random } from "../../types/Random";
import Button from "../../components/Button";

const HomePage = () => {
  const { data: randomMeals = [] } = useGetMealsQuery();

  return (
    <div className="grid grid-cols-[auto,1fr] flex-grow-1">
      {/* Sidebar */}
      <h2>Sidebar</h2>
      <div className="overflow-x-hidden px-8 pb-4">
        <div className="sticky top-0 bg-white z-10 pb-4">Categories</div>
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
          {randomMeals.recipes?.map((recipe: Random) => {
            const { id, image, title, readyInMinutes } = recipe;
            console.log(recipe);
            return (
              <div key={id}>
                <img src={image} alt="meal" />
                <p>{readyInMinutes}</p>
                <div>
                  <Button
                    variant="primary"
                    btnType="icon"
                    className="w-13 h-13"
                  >
                    Details
                  </Button>
                  <h2 className="text-ghost-text">{title}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
