// Create a site for a shopping list, when you click on a button you will be prompt to input a value.
// That value should then appear inside of a list on your html.
// It should also get added to an array which gets consoled every time you click the button as well

var items = [];

function addToList(){
  console.log("adding to list");
  var newItem = document.getElementById("value").value ;

  if (newItem.length >0){
    document.getElementById("list").innerHTML += "<li>" + newItem + "</li>";
    items.push(newItem);
    document.getElementById("inputBox").reset();
  } else {
    console.log("Please make sure input a value");
  }
}
