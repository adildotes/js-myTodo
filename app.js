let taskList = [];

function addData() {
    let taskInp = document.querySelector("input");
    let task = taskInp.value.trim();
    if (task !== "") {
        update(task);
    }
    taskInp.value = '';
}

function update(task) {
    if (task !== '') {
        taskList.push(task);
        localStorage.setItem('mytask', JSON.stringify(taskList));
    }
    renderTasks();
}

function removeTask(content) {
    let itemToRem = taskList.indexOf(content);
    taskList.splice(itemToRem, 1);
    localStorage.setItem('mytask', JSON.stringify(taskList));
    renderTasks();
}

function renderTasks() {
    let list = document.querySelector("ul");
    list.innerHTML = '';
    taskList.forEach((task, index) => {
        list.innerHTML += `<li class='bg-li-list d-flex justify-content-between align-items-center'>
            <span class="task-text">${task}</span>
            <div>
                <i class='fa-solid fa-pen edit-icon' onclick="editTask(${index})"></i>
                <i onclick="removeTask('${task}')" class='fa-regular fa-trash-can ps-3 delete-icon'></i>
            </div>
        </li>`;
    });
}

function editTask(index) {
    let editedTask = prompt("Edit the task:", taskList[index]);
    if (editedTask !== null && editedTask !== "") {
        taskList[index] = editedTask;
        localStorage.setItem('mytask', JSON.stringify(taskList));
        renderTasks();
    }
}

window.onload = function () {
    let storedTasks = localStorage.getItem('mytask');
    if (storedTasks) {
        taskList = JSON.parse(storedTasks);
        renderTasks();
    }
};
