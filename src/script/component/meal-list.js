import "./meal-item.js";

class ListMeal extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set meals(meals) {
    this._meals = meals;
    this.render();
  }

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

  render() {
    this.shadowDOM.innerHTML = "";
    this._meals.forEach(meal => {
      const mealItemELement = document.createElement("meal-item");
      mealItemELement.meal = meal;
      this.shadowDOM.appendChild(mealItemELement);
    });
  }
}

customElements.define("meal-list", ListMeal);
