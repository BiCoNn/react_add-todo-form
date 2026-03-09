import User from './User';

type ToDo = {
  id: number;
  title: string;
  completed: boolean;
  userId: User['id'];
};

export default ToDo;
