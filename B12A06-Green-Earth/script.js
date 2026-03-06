

const categoriesContainer =document.getElementById("categories-container");
const treesContainer = document.getElementById("trees-container");
const loadingSpinner = document.getElementById("loading-spinner");
const allTreesBtn =document.getElementById("all-trees-btn");
const treeDetailsModal = document.getElementById("tree-details-modal");
const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");
const modalPrice = document.getElementById("modalPrice");
const modalTitle = document.getElementById("modalTitle");
const cardContainer = document.getElementById("card-container");
const totalPrice = document.getElementById("total-price");
const emptyCardMessage = document.getElementById("empty-card-message");

let card =[];



// async function loadCategories () {
// // fetch("https://openapi.programming-hero.com/api/categories")
// // .then((res) => res.json())
// // .then((data) => {
// //     console.log(data);
    
// // })
// // .catch((e) => console.log(e));

// //async await
// const res = await fetch("https://openapi.programming-hero.com/api/categories");
// // console.log(res);
// const data = await res.json();
// console.log(data);
// console.log(categoriesContainer);
// data.categories.forEach(category => {
//     console.log(category);
//     const btn = document.createElement("button");
//     btn.className = "btn btn-outline w-full"
//     btn.textContent = category.category_name
//     categoriesContainer.appendChild(btn)
// });
// // categoriesContainer.innerHTML = "ekhane kisu nai"



// }

// loadCategories();

const loadCategories = async () => {
    const url = ("https://openapi.programming-hero.com/api/categories")
    const res = await fetch(url);
    const data = await res.json();
    data.categories.forEach(category => {
        const btn = document.createElement("button");
        btn.className = "btn btn-outline w-full"
        btn.onclick = () => selectCategory(category.id, btn);
    btn.textContent = category.category_name
    categoriesContainer.appendChild(btn)
    })

}

async function selectCategory(categoryId, btn) {
    console.log(categoryId, btn);
    showLoading();
    const allButton = document.querySelectorAll("#categories-container button, #all-trees-btn");
    console.log(allButton);
    allButton.forEach(btn => {
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-outline")
    });
    
    btn.classList.add("btn-primary");
    btn.classList.remove("btn-outline");

    showLoading();

    const res = await fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`);
    const data = await res.json();
    console.log(data);

    hideLoading();
    
    data.plants.forEach(plant => {
    console.log(plant)
    const div = document.createElement("div");
    div.innerHTML =`
     <div class="card bg-white shadow-sm">
  <figure>
    <img
      src="${plant.image}"
      alt="${plant.name}"
      title = "${plant.name}"
      class = "h-48 w-full object-cover"
       />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${plant.name}</h2>
    <p class="line-clamp-2">${plant.description}</p>
    <div class="badge badge-success">${plant.category}</div>
    <div class="card-actions justify-between items-center">
        <h2 class="font-bold text-xl text-[#4ade80]">${plant.price}$</h2>
      <button class="btn btn-primary">Cart</button>
    </div>
  </div>
</div>
    `;
    treesContainer.appendChild(div);
    })
    
}


function showLoading (){
    loadingSpinner.classList.remove("hidden");
    treesContainer.innerHTML ='';
}

function hideLoading() {
    loadingSpinner.classList.add("hidden");
}

allTreesBtn.addEventListener("click", () => {
    const allButton = document.querySelectorAll("#categories-container button, #all-trees-btn");
    // console.log(allButton);
    allButton.forEach(btn => {
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-outline")
    });
    
    allTreesBtn.classList.add("btn-primary");
    allTreesBtn.classList.remove("btn-outline");

    loadTrees();
});

async function loadTrees() {
    
    // loadingSpinner.classList.remove("hidden");
    showLoading();

    const res = await fetch("https://openapi.programming-hero.com/api/plants");
console.log(res);
const data = await res.json();
// loadingSpinner.classList.add("hidden");
hideLoading();
console.log(data);
data.plants.forEach(plant => {
    console.log(plant)
    const div = document.createElement("div");
    div.className = `card bg-white shadow-sm border-b-2 ${plant.price > 500 ? "border-red-500" : "border-green-500"}`;
    div.innerHTML =`
     <div class="card bg-white shadow-sm">
  <figure>
    <img
      src="${plant.image}"
      alt="${plant.name}"
      title = "${plant.name}"
      onclick="openTreeModal(${plant.id})"
      class = "h-48 w-full object-cover"
      
       />
  </figure>
  <div class="card-body">
    <h2 class="card-title cursor-pointer hover:text-[#4ade80]" onclick="openTreeModal(${plant.id})">${plant.name}</h2>
    <p class="line-clamp-2">${plant.description}</p>
    <div class="badge badge-success">${plant.category}</div>
    <div class="card-actions justify-between items-center">
        <h2 class="font-bold text-xl ${plant.price > 500 ? "text-red-500" : "text-[#4ade80]"} ">${plant.price}$</h2>
      <button onclick="addToCard(${plant.id}, '${plant.name}', ${plant.price})" class="btn btn-primary">Cart</button>
    </div>
  </div>
</div>
    `;
    treesContainer.appendChild(div);
})
}

async function openTreeModal(plantId) {
    console.log(plantId);
    const res =await fetch(`https://openapi.programming-hero.com/api/plant/${plantId}`);
    const data =await res.json()
    const plantDetails =data.plants;
    console.log(plantDetails);
    
    modalTitle.textContent = plantDetails.name;
    modalImage.src = plantDetails.image;
    modalCategory.textContent = plantDetails.category;
    modalDescription.textContent =plantDetails.description;
    modalPrice.textContent = plantDetails.price;

    treeDetailsModal.showModal();
 }

 

 function addToCard(id, name, price) {
    console.log(id, name, price);
    const existingItem = card.find(item => item.id === id);
    if(existingItem){
        existingItem.quantity +=1;
    }else{
        card.push({
        id,
        name,
        price,
        quantity: 1
    });
    }
    
    updateCard();
 }

 function updateCard() {
    cardContainer.innerHTML ="";

    if(card.length === 0) {
        emptyCardMessage.classList.remove("hidden");
        totalPrice.textContent = `$${0}`;
        return
    }

     emptyCardMessage.classList.add("hidden");

    console.log(card);
    let total = 0;
     card.forEach(item => {
        total += item.price * item.quantity;
        const cardItem = document.createElement("div");
        cardItem.className = "card card-body bg-slate-100"
        cardItem.innerHTML = `
                        <div class="flex justify-between items-center">
                            <div>
                                <h2>${item.name}</h2>
                                <p>$${item.price} x ${item.quantity}</p>
                            </div>
                            <button class="btn btn-ghost" onclick="removeFormCard(${item.id})">X</button>
                        </div>
                        <p class="text-right font-semibold text-xl">$${item.price * item.quantity}</p>
                    
        `;
        cardContainer.appendChild(cardItem);
     });
     totalPrice.innerText = `$${total}`;
 }

 function removeFormCard(plantId) {
    console.log(plantId);
    const updatedElements = card.filter(item => item.id != plantId)

    console.log(updatedElements);
    card = updatedElements;
    updateCard();
    
 }

 loadTrees()
loadCategories();
