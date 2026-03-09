import './App.scss';

import usersFromServer from './api/users';
import todosFromServer from './api/todos';
import React, { useState } from 'react';

// import ToDo from './types/ToDo';
import User from './types/User';
import { TodoList } from './components/TodoList';
import ToDo from './types/ToDo';

export const App = () => {
  const users = usersFromServer;
  // const todos = todosFromServer;

  const [todos, setTodos] = useState(todosFromServer);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [userError, setUserError] = useState(false);

  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState(false);

  const handleChangeUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const user = users.find(u => u.username === event.target.value);

    if (user) {
      setUserError(false);
      setSelectedUser(user);
    }
  };

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const titleTask = event.target.value;

    if (!titleTask.trim()) {
      setTitleError(true);
    }

    setTitle(titleTask);
    setTitleError(false);
  };

  const addTaskHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedUser) {
      setUserError(true);
    }

    if (!title.trim()) {
      setTitleError(true);
    }

    if (!selectedUser || !title.trim()) {
      return;
    }

    const maxId = Math.max(...todos.map(todo => todo.id)) + 1;

    const newTask: ToDo = {
      id: maxId,
      title: title,
      completed: false,
      userId: selectedUser!.id,
    };

    setTodos(prev => [...prev, newTask]);

    setTitle('');
    setSelectedUser(null);
    setUserError(false);
    setTitleError(false);
  };

  return (
    <div className="App">
      <h1>Add todo form</h1>

      <form action="/api/todos" method="POST" onSubmit={addTaskHandler}>
        <div className="field">
          <input
            type="text"
            data-cy="titleInput"
            value={title}
            onChange={handleChangeTitle}
            placeholder="Enter title of task"
          />
          {titleError && <span className="error">Please enter a title</span>}
        </div>

        <div className="field">
          <select
            data-cy="userSelect"
            value={selectedUser?.username ?? '0'}
            onChange={handleChangeUser}
          >
            <option value="0" disabled>
              Choose a user
            </option>
            {users.map(user => (
              <option value={user.username} key={user.id}>
                {user.name}
              </option>
            ))}
          </select>

          {userError && <span className="error">Please choose a user</span>}
        </div>

        <button type="submit" data-cy="submitButton">
          Add
        </button>
      </form>
      <TodoList todos={todos} />
    </div>
  );
};
