// const btn = document.querySelector<HTMLButtonElement>(".test-btn")!;
// btn.disabled = true;

const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");

const taskListElement = document.querySelector<HTMLUListElement>(".list");

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = [];

taskForm?.addEventListener("submit", createTask);

function createTask(event: SubmitEvent) {
  event.preventDefault();
  const taskDescription = formInput?.value;

  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    };

    addTask(task);

    renderTask(task);

    formInput.value = "";
    return;
  }

  alert("Please enter a task description");
}

function addTask(task: Task): void {
  tasks.push(task);
  console.log(tasks);
}

function updateStorage(): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTask(task: Task): void {
  const taskElement = document.createElement("li");
  taskElement.textContent = task.description;
  // checkbox
  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.checked = task.isCompleted;
  // toggle checkbox
  taskCheckbox.addEventListener("change", () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });

  taskElement.appendChild(taskCheckbox);
  taskListElement?.appendChild(taskElement);
}
