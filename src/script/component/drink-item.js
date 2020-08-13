class DrinkItem extends HTMLElement {
   set drink(drink) {
     //untuk menetapkan nilai
     //property dari objek disimpan
     this._drink = drink;
     this.render();
   }
 
   render() {
     this.innerHTML = `
      <div class="col-lg-12">
           <div class="card-body">
              <h5>${this._drink.strDrink}</h5>
              <img class="menus" src="${this._drink.strDrinkThumb}"/>                        
           </div>
       </div>`;
   }
 }
 
 customElements.define("drink-item",DrinkItem);
 