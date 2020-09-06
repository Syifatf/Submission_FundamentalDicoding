import "./drink-item.js";

class ListDrink extends HTMLElement {
  connectedCallback() {
    //jika ingin element diterapkan langsung
    this.getDrinks();
  }

  getDrinks = async () => {
    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
      );
      const responseJson = await response.json();
      console.log(responseJson);
      this.renderAllDrinks(responseJson.drinks);
    } catch (error) {
      this.showResponseMessage(error);
    }
  };

  set drinks(drinks) {
    this.drinks = drinks;
    this.renderAllDrinks();
  }

  
  renderAllDrinks = drinks => {
    this.innerHTML = "";
    drinks.forEach(drink => {
      const drinkItemElement = document.createElement("drink-item");
      drinkItemElement.drink = drink;
      this.appendChild(drinkItemElement);
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

customElements.define("drink-list", ListDrink);
