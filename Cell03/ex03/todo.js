document.addEventListener("DOMContentLoaded", function() {
    let ft_list = document.getElementById("ft_list");
    let newTaskBtn = document.getElementById("newTask");

    if (!getCookie("todos")) {
        document.cookie = "todos=[]; path=/;";
    }

    loadTodos();

    newTaskBtn.addEventListener("click", function() {
        let task = prompt("Enter a new TO-DO:");
        if (task) {
            addTodo(task);
            saveTodos();
        }
    });

    function addTodo(task) {
        let todo = document.createElement("div");
        todo.className = "todo";
        todo.textContent = task;

        todo.addEventListener("click", function() {
            let confirmDelete = confirm("Do you want to remove this TO-DO?");
            if (confirmDelete) {
                todo.remove();
                saveTodos();
            }
        });

        ft_list.insertBefore(todo, ft_list.firstChild);
    }

    function saveTodos() {
        let todos = [];
        document.querySelectorAll(".todo").forEach(todo => {
            todos.push(todo.textContent);
        });
    
        document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/; max-age=604800;";
    }

    function loadTodos() {
        let todos = getCookie("todos");
        if (todos) {
            todos = JSON.parse(decodeURIComponent(todos));
            todos.forEach(task => addTodo(task));
        }
    }

    function getCookie(name) {
    let cookies = document.cookie.split("; ");
    let cookie = cookies.find(row => row.startsWith(name + "="));
    return cookie ? cookie.split("=")[1] : null;
}
});
