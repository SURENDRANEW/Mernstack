// function toggleTheme() {
//     document.body.classList.toggle("dark-mode");
// }

function addTask() {
    let task = document.getElementById("task").value;
    let list = document.getElementById("list");
    let li = document.createElement("li");
    li.innerHTML = task;
    list.appendChild(li);
}   