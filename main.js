var registerForm = document.querySelector(".RegisterForm");
var nameInput = document.querySelector("#name");
var discriptionInput = document.querySelector("#discription");
var priceInput = document.querySelector("#price");
var products = [];

registerForm.onsubmit = function(e){
    e.preventDefault();
    product = 
        {
            name:nameInput.value,
            discription:discriptionInput.value,
            price:priceInput.value,
        }
       products.push(product);
    console.log(products);
    printData(); 

}


function printData(){
    var data = '';
    for (let index = 0; index < products.length; index++) {
       data+= `
       <tr>
            <td>${products[index].name}</td>
            <td>${products[index].discription}</td>
            <td>${products[index].price}</td>
        </tr>
    
       `;
        
    }
    document.querySelector("tbody ").innerHTML = data;
}