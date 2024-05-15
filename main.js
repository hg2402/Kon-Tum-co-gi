/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

let names = [
   "KITACHI, Kon Tum, Đồ ăn",
   "The Pad Thái, Kon Tum, Đồ ăn",
   "Dokki, Kon Tum, Đồ ăn" ,
   "Bonné, Kon Tum, Thức uống",
   "Xám, Kon Tum, Thức uống",
   "The Dé, Kon Tum, Thức uống",
   "Nhà thờ gỗ, Kon Tum, Địa danh",
   "Di tích lịch sử Ngục Kon Tum, Kon Tum, Địa danh",
   "Chủng viện Thừa sai Kon Tum, Kon Tum, Địa danh",
   "K50-hang én, Măng Đen, Địa danh",
   "Thác Pa Sỹ, Măng Đen, Địa danh",
   "Rừng thông, Măng Đen, Địa danh",
 ];
 //Sort names in ascending order
 let sortedNames = names.sort();
 
 //reference
 let input = document.getElementById("search__input");
 
 //Execute function on keyup
 input.addEventListener("keyup", (e) => {
   //loop through above array
   //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
   removeElements();
   for (let i of sortedNames) {
     //convert input to lowercase and compare with each string
 
     if (
       i.toLowerCase().startsWith(input.value.toLowerCase()) &&
       input.value != ""
     ) {
       //create li element
       let listItem = document.createElement("li");
       //One common class name
       listItem.classList.add("list-items");
       listItem.style.cursor = "pointer";
       listItem.setAttribute("onclick", "displayNames('" + i + "')");
       //Display matched part in bold
       let word = "<b>" + i.substr(0, input.value.length) + "</b>";
       word += i.substr(input.value.length);
       //display the value in array
       listItem.innerHTML = word;
       document.querySelector(".list").appendChild(listItem);
     }
   }
 });
 function displayNames(value) {
   input.value = value;
   removeElements();
 }
 function removeElements() {
   //clear all the item
   let items = document.querySelectorAll(".list-items");
   items.forEach((item) => {
     item.remove();
   });
 }
// /*=============== LOGIN ===============*/
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

/* Login show */
loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})
