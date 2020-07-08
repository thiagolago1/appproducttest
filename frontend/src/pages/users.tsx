import React from 'react';
import axios from 'axios';

const User = (users: any[]) => (
    <div>
      <ul>
        {
          users.map((user: React.ReactNode) => (
            <li>
              {user.name}
            </li>
          ))
        }
      </ul>
    </div>
)

User.getInitialProps = async () => {
  const response = await axios.get(
    'http://localhost:3333/users'
  );

  return { users: response.data };
}

export default User;