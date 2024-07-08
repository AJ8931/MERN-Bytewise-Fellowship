// Function to fetch todos from localStorage or initialize an empty array
const getTodosFromLocalStorage = () => {
  const todosString = localStorage.getItem("todos");
  return todosString ? JSON.parse(todosString) : [];
};

// Function to save todos to localStorage
const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Initial load: Get todos from localStorage or start with an empty array
let todos = getTodosFromLocalStorage();

// Function to add a new task
const addData = () => {
  let input = document.getElementById("TodoInput").value;
  let obj = {
    id: Math.floor(Math.random() * 1000) + 1,
    text: input,
    completed: false,
  };
  todos.push(obj);
  saveTodosToLocalStorage(todos); // Save todos to localStorage
  viewData();
  console.log(todos);
  document.getElementById("TodoInput").value = ""; // Clear input after adding
};

// Function to delete a task by id
const deleteData = (id) => {
  console.log(id);
  todos = todos.filter((todo) => todo.id !== id);
  saveTodosToLocalStorage(todos); // Save todos to localStorage
  viewData();
};

// Function to update a task text by id
const updateData = (id) => {
  let updatedText = prompt("Enter updated text");
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.text = updatedText;
    }
    return todo;
  });
  saveTodosToLocalStorage(todos); // Save todos to localStorage
  viewData();
};
// Function to update a task completed by id
const updateCheckedData = (id, checkbox) => {
  console.log(checkbox.checked);
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = checkbox.checked;
    }
    return todo;
  });
  saveTodosToLocalStorage(todos); // Save todos to localStorage
  viewData();
};

// Function to toggle between All, Pending, and Completed tasks
const toggledata = (button) => {
  const buttonName = button.textContent;
  if (buttonName === "All") {
    viewData();
  } else if (buttonName === "Pending") {
    viewPenComData(false);
  } else if (buttonName === "Completed") {
    viewPenComData(true);
  }
};

// Event listener for adding new task on Enter key press
document.getElementById("TodoInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addData();
  }
});

// Function to display all tasks
const viewData = () => {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  todos.forEach((todo) => {
    const taskItem = createTaskElement(todo);
    taskList.appendChild(taskItem);
  });
};

// Function to display Pending or Completed tasks based on completed flag
const viewPenComData = (completed) => {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  todos.forEach((todo) => {
    if (todo.completed === completed) {
      const taskItem = createTaskElement(todo);
      taskList.appendChild(taskItem);
    }
  });
};

// Helper function to create task HTML element
const createTaskElement = (todo) => {
  const taskItem = document.createElement("div");
  taskItem.className = "task-item py-3";

  taskItem.innerHTML = `
        <div class="d-flex justify-content-center align-items-center gap-3">
            <input type="checkbox" ${
              todo.completed ? "checked" : ""
            } class="form-check-input form-check-input-custom" onclick="updateCheckedData(${
    todo.id
  }, this)">
            <label class="form-check-label">${todo.text}</label>
        </div>
        <div>
            <div class="dropdown ms-auto">
                <i class="fas fa-ellipsis-vertical cursor-pointer" data-bs-toggle="dropdown" aria-expanded="false"></i>
                <ul class="dropdown-menu">
                    <li>
                        <button class="dropdown-item cursor-pointer" onclick="updateData(${
                          todo.id
                        })">
                            <i class="fas fa-pen mx-2"></i> Update
                        </button>
                    </li>
                    <li>
                        <button class="dropdown-item cursor-pointer" onclick="deleteData(${
                          todo.id
                        })">
                            <i class="fas fa-trash mx-2"></i> Delete
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    `;

  return taskItem;
};

// Initial view: Display all tasks from localStorage
viewData();
