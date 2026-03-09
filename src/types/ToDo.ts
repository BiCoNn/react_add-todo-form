import User from './User';

type ToDo = {
  id: number;
  title: string;
  completed: boolean;
  userId: User['id'];
  user?: User;
};

export default ToDo;
