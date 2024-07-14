//display current time on nav
const dateParagraph = document.querySelector('.js-date');

const currentDate = new Date();

console.log(currentDate);

const currentDateTime = currentDate.toLocaleString();

dateParagraph.innerHTML = currentDateTime;

//display to-do
const todos = [];

function addToDo() {
    const inputElement = document.querySelector('.js-input');

    todos.push(inputElement.value);

    inputElement.value = '';

    renderToDoTable();
}

//render to-do
function renderToDoTable() {

    let todoListHTML = '';

    for(let i = 0; i <= todos.length - 1; i++) {
        const todoContent = todos[i];
        const html = `<p class = "todo-paragraph">${todoContent}</p>`;

        todoListHTML += html;
    }

    const divElement = document.querySelector('.todo-table');

    divElement.innerHTML = todoListHTML;
}

function toggleKey(event) {

    if (event.key === 'Enter') {
        addToDo();
    }

}
