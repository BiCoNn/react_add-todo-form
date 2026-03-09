import { TodoInfo } from '../TodoInfo';
import ToDo from '../../types/ToDo';
import User from '../../types/User';

type Props = {
  todos: ToDo[];
  users: User[];
};

export const TodoList = ({ todos, users }: Props) => {
  return (
    <section className="TodoList">
      {todos.map(todo => {
        return <TodoInfo key={todo.id} todo={todo} users={users} />;
      })}
    </section>
  );
};
