var myform = document.getElementById(myform);
var mytext = document.getElementById(mytext);
var myStuff = document.getElementById(myStuff);

myform.addEventListener("submit", function(event){
     event.preventDefault();
    createItem(mytext.value); 
});


function createItem( inputItems){
    var items = `<li> ${inputItems}<button onclick ="deleteElement (this)"> Delete </button> </li>`
 myStuff.insertAdjacentHTML("beforeend",items);

 
mytext.value = "";
mytext.focus();

};

function deleteElement(ElementtoDelete){
 ElementtoDelete.parentElement.remove();
};