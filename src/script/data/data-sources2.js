class DataSource2 {
   //memakai static agar bisa diakses secara langsung tanpa harus membuat instance
   static searchDrink(keyword) {
     return fetch(
       `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${keyword}`
     )
       .then(response => {
         return response.json();
       })
       .then(responseJson => {
         if (responseJson.drinks) {
           return Promise.resolve(responseJson.drinks);
         } else {
           return Promise.reject(`${keyword} is not found`);
         }
       });
   }
 }
 
 export default DataSource2;
 