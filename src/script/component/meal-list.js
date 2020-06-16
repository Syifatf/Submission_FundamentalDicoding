import "./meal-item.js";

class ListMeal extends HTMLElement {
  connectedCallback() {
    //jika ingin element diterapkan langsung
    this.getMeals();
  }

  getMeals = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const responseJson = await response.json();
      console.log(responseJson);
      this.renderAllMeals(responseJson.categories);
    } catch (error) {
      this.showResponseMessage(error);
    }
  };

  renderAllMeals = categories => {
    this.innerHTML = "";
    categories.forEach(meal => {
      const mealItemElement = document.createElement("meal-item");
      mealItemElement.meal = meal;
      this.appendChild(mealItemElement);
    });
  };

  showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };
}

customElements.define("meal-list", ListMeal);
