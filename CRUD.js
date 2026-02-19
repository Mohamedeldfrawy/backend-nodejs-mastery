let productName= document.getElementById("productName");
let productsPrice= document.getElementById("productPrice");
let productCategory= document.getElementById("productCategory");
let productDescription= document.getElementById("productDescription");
let searchElement= document.getElementById("search");
let productsStore = [];
let indexupdata = 0;


// check if localStorage it have element

const row = document.getElementById("row");
let getdata=(localStorage.getItem("products")) ;

 if (getdata != null){
        productsStore =  JSON.parse(getdata);
        displaye();
    }

  // Save products to localStorage, refresh the list on screen, and clear the form.
function saveAndRefreshProducts(){

 localStorage.setItem("products", JSON.stringify(productsStore).toLowerCase() );
   displaye();
  clearForm();

}

// submitProduct();
function submitProduct(){
    let product = {
        
        name:productName.value,
        price: productsPrice.value,
        category: productCategory.value,
        description: productDescription.value
    }

   
 productsStore.push(product);
 

saveAndRefreshProducts();



}

 // searchProduct(); 
function searchProduct(){
   
    row.innerHTML=" ";// to clear the table before add new data to it

    for(let i=0; i<productsStore.length; i++){

 if (productsStore[i].name.includes(searchElement.value)) {
  

   let addrow =  `<tr>

        <td>${[i]}</td>
        <td>${productsStore[[i]].name} </td>
        <td>${productsStore[[i]].price}</td>
        <td>${productsStore[[i]].category}</td>
        <td >${productsStore[[i]].description}</td>
      </tr>


  `
    document.getElementById("row").innerHTML+=addrow;

 }

    }
}




   
  

// clearForm()  clear after submit or search  from input field;

function clearForm(){
    
    productName.value="";
    productsPrice.value="";
    productCategory.value="";
    productDescription.value="";
  
}


// delet proudect from roww 
function deleteProduct(index){
productsStore.splice(index,1)
localStorage.setItem("products", JSON.stringify(productsStore) );
displaye();

}

// displaye all proucect
function displaye(){ 
 row.innerHTML=" "; // to clear the table before add new data to it

 for(let i=0; i<productsStore.length; i++){
 let counter =  `<tr>

        <td>${i+1}</td>
        <td>${productsStore[i].name} </td>
        <td>${productsStore[i].price}</td>
        <td>${productsStore[i].category}</td>
        <td >${productsStore[i].description}</td>
        <td > <button class=" btn btn-outline-danger " onclick="deleteProduct(${i})"> Delete </button></td>
        <td > <button class=" btn btn-outline-warning " onclick="updateProduct(${i})"> Update </button></td>
       
    
      </tr>


`
 document.getElementById("row").innerHTML+=counter;

;


}
}

// Hides the "Editdata" (submit) button and shows the "updata" button.
// Used when the user selects an item to edit, switching the UI to update mode.
function hide_btn(){
 document.getElementById("Editdata").style.display='none';
document.getElementById("updata").style.display='block';

}
hide_btn();
// Shows the "Editdata" (submit) button and hides the "updata" button.
// Used after finishing the update or when returning to normal add mode.
function show_btn(){

document.getElementById("Editdata").style.display='block';
document.getElementById("updata").style.display='none';


}
// Put the selected product data into the form inputs.
// Save its index to update it later, then show update button.
function updateProduct(indextvalue){
productName.value=productsStore[indextvalue].name;
productsPrice.value=productsStore[indextvalue].price;
productCategory.value=productsStore[indextvalue].category;
productDescription.value=productsStore[indextvalue].description;
indexupdata=indextvalue;
show_btn();


}

// Editdata when uesr click on button updata 
function  Editdata(){
 hide_btn();



    let product = {
        
        name:productName.value,
        price: productsPrice.value,
        category:productCategory.value,
        description:productDescription.value
    
    }
 productsStore[indexupdata]=product;
saveAndRefreshProducts();


}





