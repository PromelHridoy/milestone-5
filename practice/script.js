const searchMeal = async () => {
  const searchText = document.getElementById("searchInput").value;

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

  const res = await fetch(url);
  const data = await res.json();

  console.log(data.meals);
  
//   displayMeals(data.meals);
};

// const displayMeals = (meals) => {
//   const container = document.getElementById("mealContainer");
//   container.innerHTML = "";

//   meals.forEach(meal => {
//     const div = document.createElement("div");
//     div.innerHTML = `
//       <h3>${meal.strMeal}</h3>
//       <img src="${meal.strMealThumb}" width="200"/>
//       <button onclick="loadDetails(${meal.idMeal})">Details</button>
//     `;
//     container.appendChild(div);
//   });
// };


// const loadDetails = async (id) => {
//   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
//   const res = await fetch(url);
//   const data = await res.json();

//   alert(data.meals[0].strInstructions);
// };

// const loadRandom = async () => {
//   const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
//   const data = await res.json();

//   displayMeals(data.meals);
// };