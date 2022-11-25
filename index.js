function addItem() {
    //using inner html to set the contents of your empty <div> to some text
    // createElement method is used to make a new HTML element such as a <div>, button, paragraph
    let newItem = document.createElement("div");
    // access value
    newItem.innerHTML = document.getElementById("box").value;
    newItem.onclick = removeItem;
    // document.location.appendChild(newItem);
    document.getElementById("list").appendChild(newItem);
}
function removeItem() {
    // (this) keyword
    document.getElementById("list").removeChild(this);
}