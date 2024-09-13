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

taskForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskDescription = formInput?.value;

  if (taskDescription) {
    formInput.value = "";
    return;
  }

  alert("Please enter a task description");
});
