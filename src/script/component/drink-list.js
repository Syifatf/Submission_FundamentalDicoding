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

  renderAllDrinks = drinks => {
    this.innerHTML = "";
    drinks.forEach(drink => {
      const drinkItemElement = document.createElement("drink-item");
      drinkItemElement.drink = drink;
      this.appendChild(drinkItemElement);
    });
  };

  showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };
}

customElements.define("drink-list", ListDrink);
