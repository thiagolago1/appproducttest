import React, { useRef, useCallback } from 'react';
import { useRouter } from 'next/router'
import { MdAssignmentInd } from 'react-icons/md';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useAuth } from '../hooks/auth';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

interface SignInFormData {
  email: string;
  password: string;
}

export default function Home() {
  const router = useRouter();
  const formRef = useRef<FormHandles>(null);

  const { user, signIn } = useAuth();

  console.log('### user: ', user);

  const handleSubmit = useCallback(async (data: SignInFormData) => {

    signIn({
      email: 'ze@email.com',
      password: '123456',
    });

    router.push('/products')

    },
    [signIn],
  );

  return (
   <>
    <div>
      <Form ref={formRef} onSubmit={handleSubmit}>
      <Typography variant="h5" component="h2" gutterBottom>
       Sign In <MdAssignmentInd />
      </Typography>
        <TextField label="email" type="email" /> <br />
        <TextField label="password" type="password" /> <br /> <br />
        <Button variant="contained" color="primary" disableElevation type="submit">
           Login
        </Button>
      </Form>
    </div>
   </>
  )
}
