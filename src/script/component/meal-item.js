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
        <div class="card">
          <div class="card-body">
             <h5>${book.strCategory}</h5>
                <img src="${book.strCategoryThumb}"/>                        
          </div>
        </div>
    </div>`;
  }
}

customElements.define("meal-item", MealItem);
