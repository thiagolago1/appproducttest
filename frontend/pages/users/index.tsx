import React from 'react';
import axios from 'axios';

const User = ({ user }: { user: any}) => (
  <div>
    <h1>
      List All Users
    </h1>
        <ul>
          {user.map(users => (
            <li key={users.id}>
              {users.name}
            </li>
          ))}
        </ul>

  </div>
);

User.getInitialProps = async () => {
  const response = await axios.get(
    "http://localhost:3333/users"
  );
  console.log(response.data);
  return { user: response.data }
}

export default User;