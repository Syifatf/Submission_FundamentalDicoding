class MenuItem extends HTMLElement {
   connectedCallback() {
     //jika ingin element diterapkan langsung
     this.render();
   }
   render() {
     this.innerHTML = `
     <div>
     <div class="menu1">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"> Meal </h5>
            <a href="/" className="btn btn-primary">Go Meal</a>
          </div>
      </div>

      <div class="menu2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"> Drink </h5>
            <a href="menu2.html" className="btn btn-primary">Go Drink</a>
          </div>
      </div>
     </div>
           `;
   }
 }
 
 customElements.define("menu-item", MenuItem);
 