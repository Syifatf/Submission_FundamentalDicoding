class CarouselItem extends HTMLElement {
  connectedCallback() {
    //jika ingin element diterapkan langsung
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="card" style="background-color: rgb(194, 164, 230);"></div>  <br>

    <!-- carausel -->
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
       <div class="carousel-inner">
         <div class="carousel-item active">
           <img id="cr" class="d-block w-100" src="assets/image/1.png" alt="First slide">
         </div>
         <div class="carousel-item">
           <img id="cr" class="d-block w-100" src="assets/image/2.png" alt="Second slide">
         </div>
         <div class="carousel-item">
           <img id="cr" class="d-block w-100" src="assets/image/5.png" alt="Third slide">
         </div>
       </div>
       <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         <span class="sr-only">Previous</span>
       </a>
       <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
         <span class="sr-only">Next</span>
       </a>
     </div>
     <br>

     <div class="card" style="background-color: rgb(192, 192, 235);"></div>  <br>

     </div>
          `;
  }
}

customElements.define("carousel-item", CarouselItem);
