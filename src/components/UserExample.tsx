import React, { FormEvent, ChangeEvent, useState } from 'react';
import sampleImage from '~/images/sample-image.png';
import { User, addUser } from '@/store/modules/users';

import { useAppDispatch, useAppSelector } from '@/hooks/tookit-hooks';

function UserExample() {
  const [name, setName] = useState('');
  const users = useAppSelector<User[]>(state => state.users);
  const dispatch = useAppDispatch();

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleAddUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addUser({ name } as User));
    setName('');
  };

  return (
    <div>
      <p>1</p>
      <img src={sampleImage} alt="sample" />
      <form onSubmit={handleAddUser}>
        <input type="text" value={name} onChange={handleChangeName} />
        <button type="submit">Add User</button>
      </form>
      <b>{users.length}</b>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default UserExample;
