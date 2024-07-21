//display current time on nav
const dateParagraph = document.querySelector('.js-date');

const currentDate = new Date();

console.log(currentDate);

const currentDateTime = currentDate.toLocaleString();

dateParagraph.innerHTML = currentDateTime;

//display to-do
const todos = JSON.parse(localStorage.getItem('todos')) || [];

renderToDoTable();

function addToDo() {
    const inputElement = document.querySelector('.js-input');

    //removes whitespace from string
    todos.push(inputElement.value.trim());

    setLocalStorage();

    inputElement.value = '';

    renderToDoTable();
}

//localStorage
function setLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

//render to-do
function renderToDoTable() {

    let todoListHTML = '';

    for(let i = 0; i <= todos.length - 1; i++) {
        if(todos[i] !== '') {
            const todoContent = todos[i];
            const html = `
                <div class = "todo-paragraph">${todoContent}</div>
                <button class = "delete-button"
                    onclick = "deleteToDo(${i});"
                >Delete</button>
            `;
    
            todoListHTML += html;
        }
    }

    const divElement = document.querySelector('.todo-table');

    divElement.innerHTML = todoListHTML;
}


function deleteToDo(i) {
    todos.splice(i, 1);
    setLocalStorage();
    renderToDoTable();
}

function toggleKey(event) {

    if (event.key === 'Enter') {
        addToDo();
    }

}
