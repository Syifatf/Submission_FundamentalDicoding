import "../component/bar.js";
import "../component/carousel.js";
import "../component/menu.js";
import "../component/meal-list.js";
import "../component/drink-list.js";
import DataSource from "../data/data-sources.js";

const main = () => {
  const mealListElement = document.querySelector("meal-list");
  const drinkListElement = document.querySelector("drink-list");

  const onButtonSearchClicked = async () => {
    try {
      event.preventDefault();
      const result = await DataSource.searchMeal(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    mealListElement.meals = results;
    // drinkListElement.drink = results;
  };

  const fallbackResult = message => {
    mealListElement.renderError(message);
    // drinkListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};


export default main;
