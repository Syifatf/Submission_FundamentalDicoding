class MealItem extends HTMLElement {
  // constructor() {
  //   super();
  //   this.shadowDOM = this.attachShadow({ mode: "open" });
  // }

  set meal(meal) {
    //untuk menetapkan nilai
    //property dari objek disimpan
    this._meal = meal;
    this.render();
  }

  render() {
    this.innerHTML = `
     <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="card-body" id="listM">
             <h5>${this._meal.strCategory}</h5>
             <img class="menus" src="${this._meal.strCategoryThumb}"/>                        
          </div>
      </div>`;
  }
}

customElements.define("meal-item", MealItem);
