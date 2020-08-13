class Header extends HTMLElement {
  // constructor() {
  //   super();
  //   this.shadowDOM = this.attachShadow({ mode: "open" });
  // }
  //akan terpanggil ketika element diterapkan pada DOM
  connectedCallback() {
    //jika ingin element diterapkan langsung
    this.render();
  }
  //untuk merender
  render() {
    //berfungsi untuk menampilkan element yg dibutuhkan
    //melalui property
    //lihat this.innerHTML
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"><img src="assets/image/meals.png" width="30" height="30" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
             
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
          <a class="nav-link" href="#carouselExampleControls">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active   ">
          <a class="nav-link" href="#data">Meal<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active   ">
          <a class="nav-link" href="#data2">Drink<span class="sr-only">(current)</span></a>
        </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="search" aria-label="search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">search</button>
          </form>
        </div>
      </nav>`;
  }
}

//definisikan custom element agar bisa
//digunakan pada DOM
customElements.define("nav-header", Header);
