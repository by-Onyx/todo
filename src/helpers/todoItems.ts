import {ITodoItem} from "interfaces";

import { setTodosToStorage, getTodosFromStorage } from 'helpers';


export const getTodos = () => getTodosFromStorage();

export const saveTodo = (text: string) => {
  const todos = getTodosFromStorage();

  let id = 0;

  if (todos && todos.length > 0) {
    id = todos[todos.length - 1].id + 1;
  }

  const newTodo: ITodoItem = {
    text,
    id,
    isChecked: false,
  }

  todos.push(newTodo);

  setTodosToStorage(todos);

  return new Promise((resolve, reject) => {
    const newTodos = getTodosFromStorage();

    resolve(newTodos);
    reject("Save error");
  });
}

export const toggleTodoItem = (id: number) => {
  let todos = getTodosFromStorage();

  todos = todos.map(item => {
    if (item.id === id) {
      item.isChecked = !item.isChecked;
    }

    return item;
  });

  setTodosToStorage(todos);

  return new Promise((resolve, reject) => {
    const newTodos = getTodosFromStorage();

    resolve(newTodos);
    reject("Change error");
  })
}

export const deleteTodoItem = (id: number) => {
  let todos = getTodosFromStorage();

  todos = todos.filter(item => item.id !== id);

  setTodosToStorage(todos);

  return new Promise((resolve, reject) => {
    const newTodos = getTodosFromStorage();

    resolve(newTodos);
    reject("Delete error");
  });
}

export const editTodoItem = (todoItem: {id: number, editedText: string}) => {
  let todos = getTodosFromStorage();

  todos = todos.map(item => {
    if (item.id === todoItem.id) {
      item.text = todoItem.editedText;
    }

    return item;
  });

  setTodosToStorage(todos);

  return new Promise((resolve, reject) => {
    const newTodos = getTodosFromStorage();

    resolve(newTodos);
    reject("Redaction error");
  });
}
