import "./meal-item.js";

class ListMeal extends HTMLElement {
  set meals(meals) {
    this._meals = meals;
    this.render();
  }

  getMeals = async () => {
    try {
      const response = await fetch(`${baseUrl}/categories.php`);
      const responseJson = await response.json();
      if (responseJson.error) {
        this.showResponseMessage(responseJson.message);
      } else {
        this.renderAllMeals(responseJson.categories);
      }
    } catch (error) {
      this, showResponseMessage(error);
    }
  };

  renderAllMeals = categories => {
    const listBookElement = document.querySelector("#listMeal");
    listBookElement.innerHTML = "";

    categories.forEach(item => {
      const dataElement = document.createElement("meal-item");
      dataElement.item = item;
      this.appendChild(dataElement);
    });
  };

  showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };
}

customElements.define("meal-list", ListMeal);
