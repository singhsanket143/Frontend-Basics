console.log("Welcome to my todo app");

let todos = [];

let todoDataList = document.getElementById("todo-data-list");
let saveButton = document.getElementById("save-todo");
let todoInputBar = document.getElementById("todo-input-bar")

todoInputBar.addEventListener("keyup", function toggleSaveButton() {
    let todotext = todoInputBar.value;
    if(todotext.length == 0) {
        if(saveButton.classList.contains("disabled")) return;
        saveButton.classList.add("disabled");
    } 
    else if(saveButton.classList.contains("disabled")) {
        saveButton.classList.remove("disabled");
    }
})

saveButton.addEventListener("click", function getTextAndAddTodo() {
    let todotext = todoInputBar.value;
    if(todotext.length == 0) return;
    let todo = {text: todotext, status: 'In progress', finishButtontext: 'Finshed'};
    todos.push(todo);
    addTodo(todo, todos.length);
    todoInputBar.value = ''
});


function reRenderTodos() {
    todoDataList.innerHTML = '';
    todos.forEach((element, idx) => {
        addTodo(element, idx+1);
    })
}
function removeTodo(event) {
    // console.log("clicked", event.target.parentElement.parentElement.parentElement)
    // event.target.parentElement.parentElement.parentElement.remove();
    let deleteButtonPressed = event.target;
    let indexTobeRemoved = Number(deleteButtonPressed.getAttribute("todo-idx"));
    todos.splice(indexTobeRemoved, 1);
    reRenderTodos();
}

function finishTodo(event) {
    let finshButtonPressed = event.target;
    let indexToBeFinshed = Number(finshButtonPressed.getAttribute("todo-idx"));

    // toggle
    if(todos[indexToBeFinshed].status == "Finished") {
        todos[indexToBeFinshed].status = "In progress";
        todos[indexToBeFinshed].finishButtontext = "Finshed";
    } else {
        todos[indexToBeFinshed].status = "Finished";
        todos[indexToBeFinshed].finishButtontext = "Undo";
    }

    todos.sort((a, b) => {
        console.log("inside sort")
        if(a.status == 'Finished') {
            return 1;
        }
        return -1;
    });

    reRenderTodos();
}

function addTodo(todo, todoCount) {
    console.log("called add todo")
    let rowDiv = document.createElement("div");
    let todoItem = document.createElement("div");
    let todoNumber = document.createElement("div");
    let todoDetail = document.createElement("div");
    let todoStatus = document.createElement("div");
    let todoActions = document.createElement("div");
    let deleteButton = document.createElement("button");
    let finishedButton = document.createElement("button");
    let hr = document.createElement("hr");

    // adding classes
    rowDiv.classList.add("row")
    todoItem.classList.add("todo-item", "d-flex", "flex-row", "justify-content-between", "align-items-center")
    todoNumber.classList.add("todo-no");
    todoDetail.classList.add("todo-detail", "text-muted");
    todoStatus.classList.add("todo-status", "text-muted");
    todoActions.classList.add("todo-actions", "d-flex", "justify-content-start", "gap-2");
    deleteButton.classList.add("btn", "btn-danger", "delete-todo");
    finishedButton.classList.add("btn", "btn-success", "finish-todo");

    finishedButton.setAttribute("todo-idx", todoCount-1);
    deleteButton.setAttribute("todo-idx", todoCount-1);
    deleteButton.onclick = removeTodo;
    finishedButton.onclick = finishTodo;


    todoNumber.textContent = `${todoCount}.`;
    todoDetail.textContent = todo.text; // sets the todo text sent from the input element
    todoStatus.textContent = todo.status;
    deleteButton.textContent = "Delete";
    finishedButton.textContent = todo.finishButtontext;

    todoActions.appendChild(deleteButton);
    todoActions.appendChild(finishedButton);

    todoItem.appendChild(todoNumber);
    todoItem.appendChild(todoDetail);
    todoItem.appendChild(todoStatus);
    todoItem.appendChild(todoActions);

    rowDiv.appendChild(todoItem);
    rowDiv.appendChild(hr);

    todoDataList.appendChild(rowDiv);
}























// Reference
// let getTodosButton = document.getElementById('get-todos');
// registration of event listener
// getTodosButton.addEventListener("click", () => {
//     console.log("clicked");
// });

// getTodosButton.onclick = () => {
//     console.log("clicked")
// }

// function clickBtn() {
//     console.log("click")
// }