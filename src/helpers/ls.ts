export const saveTodoToLocalStorage = (value: string) => {
  localStorage.setItem("todo", value);
};