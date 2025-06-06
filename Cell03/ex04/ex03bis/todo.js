$(document).ready(function() {
    loadTodos();

    $("#newTask").click(function() {
        let task = prompt("Enter a new TO-DO:");
        if (task) {
            addTodo(task);
            saveTodos();
        }
    });

    function addTodo(task) {
        let todo = $("<div>").addClass("todo").text(task);

        todo.click(function() {
            if (confirm("Do you want to remove this TO-DO?")) {
                $(this).remove();
                saveTodos();
            }
        });

        $("#ft_list").prepend(todo);
    }

    function saveTodos() {
        let todos = [];
        $(".todo").each(function() {
            todos.push($(this).text());
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
