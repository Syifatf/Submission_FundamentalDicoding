function main2() {

   const baseUrl = "https://www.themealdb.com";

   const getMeals = () => {
       // membuat instance dari XMLHttpRequest
       const xhr = new XMLHttpRequest();

       //menetapkan callback jika response sukses dan error
       xhr.onload = function() {
           const responseJson = JSON.parse(this.responseText);
           if(responseJson.error) {
               showResponseMessage(responseJson.message);
           } else {
               renderAllMeals(responseJson.meals);
           }
       };

       xhr.onerror = function() {
           showResponseMessage();
       };

       // Membuat GET request dan menetapkan target URL
       xhr.open("GET", `${baseUrl}/list`);
       // Mengirimkan request
       xhr.send();
   };


   const insertMeals = (meals) => {
       // Membuat instance dari XMLHttpRequest
       const xhr = new XMLHttpRequest();

       //menetapkan callback jika response sukses dan error
       xhr.onload = function() {
           const responseJson = JSON.parse(this.responseText);
           console.log(responseJson);
           showResponseMessage(responseJson.message);
           getMeals();
       };

       xhr.onerror = function() {
           showResponseMessage();
       };

       // Membuat POST request dan menetapkan target URL
       xhr.open("POST", `${baseUrl}/add`);

       // Mementapkan properti Content-Type dan X-Auth-Token pada Header request
       xhr.setRequestHeader("Content-Type", "application/json");
       xhr.setRequestHeader("X-Auth-Token", "12345");

       // Mengirimkan request dan menyisipkan JSON.stringify(meal) pada body
       xhr.send(JSON.stringify(meals));
   };

   const updateMeals = (meals) => {
       // Membuat instance dari XMLHttpRequest
       const xhr = new XMLHttpRequest();

       //menetapkan callback jika response sukses dan error
       xhr.onload = function() {
           const responseJson = JSON.parse(this.responseText);
           showResponseMessage(responseJson.message);
           getMeals();
       };

       xhr.onerror = function() {
           showResponseMessage();
       };

       // Membuat PUT request dan menetapkan target URL
       xhr.open("PUT", `${baseUrl}/edit/${idMeal}`);

       // Mementapkan properti Content-Type dan X-Auth-Token pada Header request
       xhr.setRequestHeader("Content-Type", "application/json");
       xhr.setRequestHeader("X-Auth-Token", "12345");

       // Mengirimkan request dan menyisipkan JSON.stringify(book) pada body
       xhr.send(JSON.stringify(meals));
   };

   const removeMeals = (idMeal) => {
       // Membuat instance dari XMLHttpRequest
       const xhr = new XMLHttpRequest();

       //menetapkan callback jika response sukses dan error
       xhr.onload = function() {
           const responseJson = JSON.parse(this.responseText);
           showResponseMessage(responseJson.message);
           getMeal();
       };

       xhr.onerror = function() {
           showResponseMessage();
       };

       // Membuat DELETE request dan menetapkan target URL
       xhr.open("DELETE", `${baseUrl}/delete/${idMeal}`);

       // Mementapkan properti Content-Type dan X-Auth-Token pada Header request
       xhr.setRequestHeader("X-Auth-Token", "12345");

       // Mengirimkan request
       xhr.send();
   };






   /*
       jangan ubah kode di bawah ini ya!
   */

   const renderAllMeals = (meals) => {
       const listMealElement = document.querySelector("#listMeal");
       listMealElement.innerHTML = "";

       meals.forEach(meals => {
           listMealElement.innerHTML += `
               <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                   <div class="card">
                       <div class="card-body">
                           <h5>(${idMeal}) ${strMeal}</h5>
                           <p>${strMealThumb}</p>
                           <button type="button" class="btn btn-danger button-delete" id="${meals.id}">Hapus</button>
                       </div>
                   </div>
               </div>
           `;
       });

       const buttons = document.querySelectorAll(".button-delete");
       buttons.forEach(button => {
           button.addEventListener("click", event => {
               const idMeal = event.target.id;
               removeMeals(idMeal);
           })
       })
   };

   const showResponseMessage = (message = "Check your internet connection") => {
       alert(message);
   };

   document.addEventListener("DOMContentLoaded", () => {

       const inputidMeal = document.querySelector("#inputidMeal");
       const inputstrMeal = document.querySelector("#inputstrMeal");
      //  const inputBookAuthor = document.querySelector("#inputBookAuthor");
       const buttonSave = document.querySelector("#buttonSave");
       const buttonUpdate = document.querySelector("#buttonUpdate");

       buttonSave.addEventListener("click", function () {
           const meals = {
               id: Number.parseInt(inputidMeal.value),
               title: inputstrMeal.value,
               // author: inputBookAuthor.value
           };
           insertMeals(meals)
       });

       buttonUpdate.addEventListener("click", function () {
           const meals = {
               id: Number.parseInt(inputidMeal.value),
               title: inputstrMeal.value,
               // author: inputBookAuthor.value
           };

           updateMeals(meals)
       });
       getMeals();
   });
}

export default main2;