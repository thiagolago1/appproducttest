import React, { FormEvent, useState, ChangeEvent } from 'react';
import { useRouter } from 'next/router'
import { MdAdd, MdKeyboardBackspace } from 'react-icons/md';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {addProduct} from '../../store/actions/postActions'
import { useDispatch } from 'react-redux';

const AddNewProduct: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    price: 0,
  })

  function handleInputChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function handleBack() {
    router.push('/products');
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      dispatch(addProduct(formData));

      alert('new product successfully registered!');

      router.push('/products')
    } catch(err) {
      alert('Error!');
    }
  }

  return (
   <>
    <div>
      <form className="container-form" onSubmit={handleSubmit}>
      <MdKeyboardBackspace onClick={handleBack}/>
      <Typography variant="h5" component="h2" gutterBottom>
       Add new product
      </Typography>
        <h5>Product Name</h5>
        <input value={formData.name} id="standard-basic" name="name" type="text" placeholder="name..." onChange={handleInputChange}/> <br /> <br />
        <h5>Price</h5>
        <input value={formData.price} id="standard-basic" name="price" type="number" placeholder="price" onChange={handleInputChange} /> <br /> <br />
        <Button variant="contained" color="primary" disableElevation type="submit">
            Add <MdAdd />
        </Button>
      </form>
    </div>
   </>
  )
}

export default AddNewProduct;