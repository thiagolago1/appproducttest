import React, { FormEvent } from 'react';
import { useRouter } from 'next/router'
import { MdAssignmentInd } from 'react-icons/md';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export default function Home() {
  const router = useRouter();

async function handleSubmit(event: FormEvent) {
  event.preventDefault();

  router.push('/products')
}

  return (
   <>
    <div>
      <form onSubmit={handleSubmit}>
      <Typography variant="h5" component="h2" gutterBottom>
       Sign In <MdAssignmentInd />
      </Typography>
        <TextField label="email" type="email" /> <br />
        <TextField label="password" type="password" /> <br /> <br />
        <Button variant="contained" color="primary" disableElevation type="submit">
           Login
        </Button>
      </form>
    </div>
   </>
  )
}
