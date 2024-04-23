

let taskList = []
// let myData = localStorage.getItem('mytask');

// if (myData !== '') {
//     taskList = [...taskList, myData]
// }


function addData() {
    let taskInp = document.querySelector("input");
    let task = taskInp.value;
    if (task !== "") {
        update(task)
    }
    taskInp.value = '';
}


function update(task) {
    if (task !== '') {
        taskList.push(task)
        localStorage.setItem('mytask', taskList);
    }
    let list = document.querySelector("ul");
    list.innerHTML = '';
    for (i in taskList) {
        list.innerHTML += `<li class='bg-li-list d-flex justify-content-between align-items-center'>
            ${taskList[i]}
            <div>
                <i class='fa-solid fa-pen edit-icon'></i>
                <i onclick="removeTask('${taskList[i]}')" class='fa-regular fa-trash-can ps-3 delete-icon'></i>
            </div>
        </li>`;
    }
}

function removeTask(content) {
    let itemToRem = taskList.indexOf(content)
    taskList.splice(itemToRem, 1)
    update('')
}




