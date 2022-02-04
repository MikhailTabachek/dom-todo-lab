console.log("test!")


//created variable that stores input value
function addText(){
  let inputText = document.getElementById("input").value;
  // document.querySelector("#to-do-list").textContent = inputText
  if (inputText == null || inputText == "") {
    alert("Input cannot be empty. Please type something");
    return false;}
  document.getElementById("to-do-list").classList.add("to-do-list")
  let ul = document.getElementById("to-do-list")
  let li = document.createElement("li")
  li.appendChild(document.createTextNode(inputText))
  ul.appendChild(li)
  document.getElementById('input').value='';
  console.log(document.querySelector("ul").innerHTML)
  
  // document.querySelector("to-do-list").onclick.createElement(li)
  
}

function reset(){
  // resets to its original state
document.getElementById("to-do-list").classList.remove("to-do-list")
document.getElementById("to-do-list").innerHTML = ""
}

document.querySelector("ul").addEventListener("click", removeToDo)

function removeToDo(click){
if (document.getElementById("to-do-list").children.length !== 1) {
  click.target.parentElement.removeChild(click.target)
} else {
  document.getElementById("to-do-list").classList.remove("to-do-list")
  document.getElementById("to-do-list").innerHTML = ""
}

}


