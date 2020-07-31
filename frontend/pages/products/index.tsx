// import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import { fetchposts } from '../../store/actions/postActions';
import React, {useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import Typography from '@material-ui/core/Typography';
import { useAuth } from '../../hooks/auth';
import {Column, Table} from 'react-virtualized';

export default function Products() {

const router = useRouter();

const { signOut } = useAuth();

const dispatch = useDispatch();
const { products } = useSelector(state => state.product);

const SortDirection = {
  ASC: 'ASC',
  DESC: 'DESC',
};

useEffect(() => {
  dispatch(fetchposts());
},[])

function handleSignOut() {
  signOut();
  router.push('/');
}

function handleAddNewProduct() {
  router.push('/products/addNewProduct');
}

  return (
   <>

    <div className="table-container-m">
      <div className="header-content">
        <Typography variant="h3" component="h2" gutterBottom>
        Products List
        </Typography>

        <Typography variant="h6" component="h6" gutterBottom onClick={handleAddNewProduct}>
        Add New Product <MdAdd />
        </Typography>

        <Typography variant="h6" component="h6" gutterBottom onClick={handleSignOut}>
        Sign Out
        </Typography>
      </div>

        <Table
          width={800}
          height={300}
          headerHeight={20}
          rowHeight={30}
          rowCount={products.length}
          sortDirection={SortDirection.ASC}
          rowGetter={({index}) => products[index]}>
          <Column width={500} label="_id" dataKey="_id" />
          <Column label="Name" dataKey="name" width={300} />
          <Column width={300} label="price" dataKey="price" />
        </Table>

    </div>
   </>
  )
}
