import "../component/bar.js";
import "../component/carousel.js";
import "../component/meal-list.js";
import "../component/drink-list.js";
import "../component/search.js";
import DataSource from "../data/data-sources.js";

const main = () => {
  const searchElement = document.querySelector("search");
  const mealListElement = document.querySelector("meal-list");
  const drinkListElement = document.querySelector("drink-list");

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
    drinkaListElement.drink = results;
  };

  const fallbackResult = message => {
    mealListElement.renderError(message);
    drinkListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};


export default main;
