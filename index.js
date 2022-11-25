function addItem() {
    //using inner html to set the contents of your empty <div> to some text
    // createElement method is used to make a new HTML element such as a <div>, button, paragraph
    let newItem = document.createElement("div");
    // access value
    newItem.innerHTML = document.getElementById("box").value;
    newItem.onclick = removeItem;
    // document.location.appendChild(newItem);
    document.getElementById("list").appendChild(newItem);
    saveList();
}
function removeItem() {
    // (this) keyword
    document.getElementById("list").removeChild(this);
    saveList();
}
function saveList() {
    // localStorage.storageName = "";  //remove piece of information from local storage
    // localStorage keyword.localStorage name(giving a name to the information you want to store) = "information stored(the information u want to store)"
    //localStorage.storedList //keyword.name
    localStorage.storedList = document.getElementById("list").innerHTML;
}
function loadList() {
    document.getElementById("list").innerHTML = localStorage.storedList;
    for(let i = 0; i < list.children.length; i++) {
        list.children[i].onclick = removeItem;
    }
}
//  Check if there is already a vlaue in local storage //little confused about this explanation
//if(localStorage.storedList) {
    //loadList();
//}
