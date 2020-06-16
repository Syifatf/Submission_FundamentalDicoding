import "../component/bar.js";
import "../component/carousel.js";

function main2() {
  //   const baseUrl = "https://www.themealdb.com/api/json/v1/1";
  //   const getMeals = async () => {
  //     try {
  //       const response = await fetch(`${baseUrl}/categories.php`);
  //       const responseJson = await response.json();
  //       if (responseJson.error) {
  //         showResponseMessage(responseJson.message);
  //       } else {
  //         renderAllMeals(responseJson.categories);
  //       }
  //     } catch (error) {
  //       showResponseMessage(error);
  //     }
  //   };
  //   const renderAllMeals = categories => {
  //     const listBookElement = document.querySelector("#listMeal");
  //     listBookElement.innerHTML = "";
  //     categories.forEach(book => {
  //       listBookElement.innerHTML += `
  //                 <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
  //                     <div class="card">
  //                         <div class="card-body">
  //                             <h5>${book.strCategory}</h5>
  //                             <img src="${book.strCategoryThumb}"/>
  //                         </div>
  //                     </div>
  //                 </div>
  //             `;
  //     });
  //   };
  //   const showResponseMessage = (message = "Check your internet connection") => {
  //     alert(message);
  //   };
  //   getMeals();
}

export default main2;
