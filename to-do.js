var myform = document.getElementById(myform);
var myinput = document.getElementById(myinput);
var myItem = document.getElementById(myItem);

myform.addEventListener("submit", function(event){
     event.preventDefault();
    createItem(myinput.value); 
});


function createItem( inputItems){
    var things = `<li> ${inputItems}<button onclick ="deleteElement (this)"> Delete </button> </li>`
 myItem.insertAdjacentHTML("beforeend",things);

 
 myinput.value = "";
 myinput.focus();

};

function deleteElement(ElementtoDelete){
 ElementtoDelete.parentElement.remove();
};