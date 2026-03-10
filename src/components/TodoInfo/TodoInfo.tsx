import { UserInfo } from '../UserInfo';
import ToDo from '../../types/ToDo';

type Props = {
  todo: ToDo;
};

export const TodoInfo = ({ todo }: Props) => {
  // const taskUser = users.find(u => u.id === todo.userId);

  return (
    <article
      data-id={todo.id}
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && <UserInfo name={todo.user.name} email={todo.user.email} />}
    </article>
  );
};
