function pushFunc() {
    event.preventDefault();
    let content = document.getElementById("inputContent").value;
    if (content == "") {
        return;
    }
    let listContent = document.createTextNode(content);
    let newItem = document.createElement("li");
    newItem.appendChild(listContent);
    document.getElementById("toDoList").appendChild(newItem)
    document.getElementById("inputContent").value = "";
}