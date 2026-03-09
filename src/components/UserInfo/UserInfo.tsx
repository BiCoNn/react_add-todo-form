import User from '../../types/User';
type Props = Pick<User, 'name' | 'email'>;

export const UserInfo = ({ name, email }: Props) => {
  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
