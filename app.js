document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {
    
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    const task = {
        title, // title: title
        description // description: description
    };

    
    if (localStorage.getItem("tasks") === null) {
        let tasks = [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    getTasks();

    document.getElementById("formTask").reset();
    // Disables the default behaviour of the form
    e.preventDefault();
}

function getTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    let taskView = document.getElementById("tasks");

    taskView.innerHTML = "";

    if (tasks === null)
        return;
    for (let i = 0; i < tasks.length; i++){
        let title = tasks[i].title;
        let description = tasks[i].description;
        
        taskView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
            <p>${title} - ${description}</p>
            <button class="btn btn-danger" onclick="deleteTask('${title}', '${description}')">Delete</button>
        </div>
        </div>`
    }
}

function deleteTask(title, description){
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(tasks);
    for (let i = 0; i < tasks.length; i++){
        console.log(tasks[i].title);
        if ((tasks[i].title == title) && (tasks[i].description == description)){
            console.log("Hola");
            tasks.splice(i, 1);
        }
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    getTasks();
}

getTasks();

