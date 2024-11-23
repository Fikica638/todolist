// Select Elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Add Task
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = todoInput.value.trim();
  if (taskText === "") return;

  const todoItem = document.createElement("li");
  todoItem.className = "todo-item";

  todoItem.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  todoList.appendChild(todoItem);
  todoInput.value = "";

  // Add delete functionality
  const deleteBtn = todoItem.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    todoItem.style.animation = "slideOut 0.5s ease-in-out forwards";
    todoItem.addEventListener("animationend", () => {
      todoItem.remove();
    });
  });
});

// CSS Animation for Slide Out
document.styleSheets[0].insertRule(`
  @keyframes slideOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`, 0);
