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

    formInput.value = "";
    return;
  }

  alert("Please enter a task description");
}

function addTask(task: Task): void {
  tasks.push(task);
  console.log(tasks);
}
