
document.addEventListener("DOMContentLoaded", function () {
    var dropdowns = document.querySelectorAll('.item');
    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('click', function () {
            var dropdownContent = this.querySelector('.dropdown-content');
            dropdownContent.classList.toggle('show');
        });
    });

    window.onclick = function (event) {
        if (!event.target.matches('.item')) {
            var dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(function (dropdownContent) {
                if (dropdownContent.classList.contains('show')) {
                    dropdownContent.classList.remove('show');
                }
            });
        }
    }
});
let name = [
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
]
let sortedNames = name.sort();

let searchText = document.getElementById("search-text");

searchText.addEventListener("keyup", (e) => {
    removeElements();
    for (let i of sortedNames){
        
       if (i.toLowerCase().startsWith(searchText.value.toLowerCase()) && searchText.value !=""){
            let listItem = document.createElement("li");
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('" + i + "')");
            let word = "<b>" + i.substr(0,searchText.value.length) + "</b>";
            word += i.substr(searchText.value.length);
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
       }
    }
});
function displayNames(value){
    searchText.value = value; 
}
function removeElements(){
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) =>{
        item.remove();

    })
}
// // document.addEventListener("keyup", event => {
// // });
// let availableKeywords = [
//     "KITACHI, Kon Tum",
//     "The Pad Thai, Kon Tum",
//     "Dokki, Kon Tum" ,
//     "Bonne, Kon Tum",
//     "Xam, Kon Tum",
// ];
// const resultsBox = document.querySelector(".result-box");
// const searchText = document.getElementById(".search-text");
// searchText.keyup = function(){
//     let result = [];
//     let input = searchText.ariaValueMax;
//     if(input.length){
//         result=availableKeywords.filter((keyword)=>{
//             return keyword.toLowerCase().includes(input.toLowerCase());
//         });
//         console.log(result);
//     }
// }




// let recomntlist =[
//     "KITACHI, Kon Tum, Đồ ăn",
//     "The Pad Thái, Kon Tum, Đồ ăn",
//     "Dokki, Kon Tum, Đồ ăn" ,
//     "Bonné, Kon Tum, Thức uống",
//     "Xám, Kon Tum, Thức uống",
//     "The Dé, Kon Tum, Thức uống",
//     "Nhà thờ gỗ, Kon Tum, Địa danh",
//     "Di tích lịch sử Ngục Kon Tum, Kon Tum, Địa danh",
//     "Chủng viện Thừa sai Kon Tum, Kon Tum, Địa danh",
//     "Chủng viện Thừa sai Kon Tum, Măng Đen, Đồ ăn",
//     "Chủng viện Thừa sai Kon Tum, Măng Đen, Thức uống",
//     "Đức Mẹ Măng Đen, Măng Đen, Địa danh",
//     "Chùa Khánh Lâm, Măng Đen, Địa danh",
//     "Thác Pa Sỹ, Măng Đen, Địa danh",
//     "Hồ Đăk Ke, Măng Đen, Địa danh",
//     "Chợ phiên Măng Đen, Măng Đen, Địa danh",
// ]