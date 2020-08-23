class MenuItem extends HTMLElement {
   connectedCallback() {
     //jika ingin element diterapkan langsung
     this.render();
   }
   render() {
     this.innerHTML = `
     <br>
     <div class="card-body">
        <div class="row" id="menu2">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special Drinks</h5>
              <img class="d-block w-100" src="../src/assets/image/4.png"/> <br>
              <a href="#data" class="btn btn-success">Go Meal</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special Meals</h5>
              <img class="d-block w-100" src="../src/assets/image/3.png"/> <br>
              <a href="#data2" class="btn btn-success">Go Drink</a>
            </div>
          </div>
        </div>
      </div>
     </div> <br>

     <div class="card" style="background-color: rgb(192, 192, 235);"></div> <br>

           `;
   }
 }
 
 customElements.define("menu-item", MenuItem);
 