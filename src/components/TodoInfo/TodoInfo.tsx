import { UserInfo } from '../UserInfo';
import ToDo from '../../types/ToDo';
import User from '../../types/User';

type Props = {
  todo: ToDo;
  users: User[];
};

export const TodoInfo = ({ todo, users }: Props) => {
  const taskUser = users.find(u => u.id === todo.userId);

  return (
    <>
      {taskUser ? (
        <article
          data-id={todo.id}
          className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
        >
          <h2 className="TodoInfo__title">{todo.title}</h2>

          <UserInfo name={taskUser.name} email={taskUser.email} />
        </article>
      ) : (
        ''
      )}
    </>
  );
};
