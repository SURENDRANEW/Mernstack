// function showName(){
//     let name = document.getElementById("nameInput").value;
//     document.getElementById("output").innerHTML = name;
// }

let count=0;
function increment(){
    count++;
    document.getElementById("count").innerHTML = count;
}

function decrement(){
    count--;
    document.getElementById("count").innerHTML = count;
}