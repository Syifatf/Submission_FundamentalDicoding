import "./meal-item.js";

class ListMeal extends HTMLElement {
  // constructor() {
  //   super();
  //   this.shadowDOM = this.attachShadow({ mode: "open" });
  // }
  connectedCallback() {
    //jika ingin element diterapkan langsung
    this.getMeals();
  }

  // tambahkan fungsi set meals
  
  set meals(meals) {
    this.meals = meals;
    this.renderAllMeals();
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

  renderError(messange) {
    this.shadowDOM.innerHTML = `
    <style>
    .placeholder {
      font-weight: lighter;
      color: rgba(0, 0, 0, 0.5);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${messange}</h2>`;
  }

  showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };
}

customElements.define("meal-list", ListMeal);
