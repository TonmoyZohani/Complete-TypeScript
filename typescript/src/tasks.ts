// const btn = document.querySelector<HTMLButtonElement>(".test-btn")!;
// btn.disabled = true;

const taskForm = document.querySelector<HTMLFormElement>(".form");
const formData = document.querySelector<HTMLInputElement>(".form-input");

const taskListElement = document.querySelector<HTMLUListElement>(".list");

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = [];
