
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const clear = document.getElementById("clear-completed");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let task = input.value.trim();
    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    let span = document.createElement("span");
    span.textContent = task;
    checkbox.addEventListener("change", function() {
        span.classList.toggle("completed", checkbox.checked);
    });

    li.appendChild(checkbox);
    li.appendChild(span);

    list.prepend(li);
    input.value = "";

});

clear.addEventListener("click", function() {

    let completedTasks = list.querySelectorAll(
        "input[type='checkbox']:checked"
    );

    if (completedTasks.length === 0) {
        alert("There is no completed task!");
        return;
    }

    completedTasks.forEach(function(checkbox) {
        checkbox.parentElement.remove();
    });

});
