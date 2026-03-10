import { TodoInfo } from '../TodoInfo';
import ToDo from '../../types/ToDo';

type Props = {
  todos: ToDo[];
};

export const TodoList = ({ todos }: Props) => {
  return (
    <section className="TodoList">
      {todos.map(todo => {
        return <TodoInfo key={todo.id} todo={todo} />;
      })}
    </section>
  );
};
