console.log("test!")


//created variable that stores input value
function getText(){
  let inputText = document.getElementById("input").value;
  // document.querySelector("#to-do-list").textContent = inputText
  let ul = document.getElementById("to-do-list")
  let li = document.createElement("li")
  li.appendChild(document.createTextNode(inputText))
  ul.appendChild(li)
  document.getElementById('input').value='';
  
  // document.querySelector("to-do-list").onclick.createElement(li)
  
}

function removeText(){
  let ul = document.getElementById("to-do-list")
  let li = document.removeElement("li")
  li.appendChild(document.removeTextNode(inputText))
  ul.appendChild(li)
}

function removeTextFromInput(){

}



