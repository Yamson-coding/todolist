let todo = [];
todo.push("");
let t = todo.map(Math.floor)
document.getElementById("newTodoField").innerHTML = t;

const newTodoField = document.querySelector("#newTodoField");
const sectionTag = document.querySelector("section");

document.querySelector('#addingTodoForm').addEventListener("submit", function(event) {
    event.preventDefault();

    todo= newTodoField.Value;
    let template =
    `
       <h2>Todo List:
       <h2> Todo: ${t}</h2>
    `;
    sectionTag.innerHTML = template;
})