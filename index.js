const todoList = [];

function addTodo (todo) {
    // Accessing ulListNode
    const ulListNode = document.getElementById("todo-list");
    // creating a li element
    const liNode = document.createElement("li");
    // creating a todo
    const todoNode = document.createTextNode(todo);

    const deleteBtn = document.createElement("button");
    const btnText = document.createTextNode("Delete");
    deleteBtn.appendChild(btnText);
    // here i am adding todo inside li
    liNode.appendChild(todoNode);
    liNode.appendChild(deleteBtn);
    // we are adding li inside ullist
    ulListNode.appendChild(liNode);
}

function handleOnAddTodoClick (event) {
    const value = document.getElementById("todo").value;
    if(value) {
        addTodo(value);
        todoList.push(value);
        console.log("Todolist--->",todoList);
        document.getElementById("todo").value="";
    }
    else {
        alert("Please enter a todo");
    }
}

document.getElementById('addBtn').onclick=handleOnAddTodoClick;