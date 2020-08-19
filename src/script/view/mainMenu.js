import "../component/bar.js";
import "../component/meal-list.js";
import DataSource from "../data/data-sources.js";

const mainMenu = () => {
  const searchElement = document.querySelector("search");
  const mealListElement = document.querySelector("meal-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchmeal(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    mealListElement.meals = results;
   //  drinkaListElement.drink = results;
  };

  const fallbackResult = message => {
    mealListElement.renderError(message);
   //  drinkListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};


export default mainMenu;
