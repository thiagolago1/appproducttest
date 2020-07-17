import React, { FormEvent, useState, ChangeEvent } from 'react';
import { useRouter } from 'next/router'
import { MdAdd, MdKeyboardBackspace } from 'react-icons/md';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const AddNewProduct: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    price: 0,
  })

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({name, value});
  }

  function handleBack() {
    router.push('/products');
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

  /*   const { name, price } = formData;

    const data = new FormData(); */

    console.log(formData);

    // await api.post('/product', formData);

    alert('new product successfully registered!');

    router.push('/products')
  }

  return (
   <>
    <div>
      <form className="container-form" onSubmit={handleSubmit}>
      <MdKeyboardBackspace onClick={handleBack}/>
      <Typography variant="h5" component="h2" gutterBottom>
       Add new product
      </Typography>
        <TextField id="standard-basic" label="name" onChange={handleInputChange}/> <br />
        <TextField id="standard-basic" label="price" type="number" onChange={handleInputChange} /> <br /> <br />
        <Button variant="contained" color="primary" disableElevation type="submit">
            Add <MdAdd />
        </Button>
      </form>
    </div>
   </>
  )
}

export default AddNewProduct;