class MealItem extends HTMLElement {
  set meal(meal) {
    //untuk menetapkan nilai
    //property dari objek disimpan
    this._meal = meal;
    this.render();
  }

  render() {
    this.innerHTML = `
     <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
        <div>
          <div class="card-body">
             <h5>${this._meal.strCategory}</h5>
             <img src="${this._meal.strCategoryThumb}"/>                        
          </div>
        </div>
      </div>`;
  }
}

customElements.define("meal-item", MealItem);
