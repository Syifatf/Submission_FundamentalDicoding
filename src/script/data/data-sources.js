class DataSource {
  //memakai static agar bisa diakses secara langsung tanpa harus membuat instance
  static searchMeal(keyword) {
    return fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${keyword}`
    )
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.teams) {
          return Promise.resolve(responseJson.teams);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
