var getUl = document.querySelector("#ul");
var getInp = document.querySelector("#inp");
var getInpprice = document.querySelector("#inpprice");
var getInpput = document.querySelector("#input");
 
 function addTodo() {
    if (getInp.value == ""){
        alert("please input same value for the item name");
    }
    else if (getInpprice.value == "") {
        alert("please input same value for the item price")
    }
    // else if (isNaN(parseFloat(getInpprice.value == ""))) {
    //     alert("please input a valid number for the item price")
    // }
    else{
        getUl.innerHTML += `<li class="li">${getInp.value} ${getInpprice.value}<button class="add" onclick='edit(this)'> Edit </button> <button class="del" onclick='del(this)'> Delete </button></li>`;
        ToTal();
    }
    getInp.value = "";
    getInpprice.value = "";
   }

// function delall(){
//     getUl.innerHTML = "";
// }

function edit(e){
    var currentText = e.parentNode.firstChild.textContent.trim();
    var parts = currentText.split(" ");
    var currentname = parts.slice(0, -1).join(" ");
    var currentprice = parts[parts.length -1];
    var newname = prompt("Enter updated item name", currentname);
    if (newname === null) return;
    var newpricestr = prompt("Enter updated item price", currentprice);
    if (isNaN(newprice)) {
        alert("Invalid price entered.");
    }
    e.parentNode.firstChild.textContent = `${newname} ${newprice}`
    ToTal();
    // e.parentNode.firstChild.textContent = pro;
}
function del(e){
      e.parentNode.remove();
      ToTal();
}
function ToTal(){
    var ToTalprice = 0;
    var listitme = getUl.querySelectorAll("li");
    listitme.forEach(item => {
        var itemText = item.firstChild.textContent.trim();
        var parts = itemText.split(" ");
        var pricestr = parts[parts.length -1];
        var price = parseFloat(pricestr);
        if (!isNaN(price)) {
            ToTalprice += price;
        }
    });
    getInpput.value = ToTalprice;
}