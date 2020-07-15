// import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import { fetchposts } from '../../store/actions/postActions';
import React, {useEffect } from 'react';
import { MdAdd, MdEdit, MdDelete } from 'react-icons/md';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default function Products() {

const router = useRouter();

const dispatch = useDispatch();
const { posts } = useSelector(state => state.post);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableCell: {
    fontWeight: "bold"
  }
});

const classes = useStyles();

useEffect(() => {
  dispatch(fetchposts());
},[])

function handleSignOut() {
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

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
              <TableCell className={classes.tableCell}></TableCell>
                <TableCell className={classes.tableCell}><Typography variant="h6" gutterBottom>ID</Typography></TableCell>
                <TableCell align="left" className={classes.tableCell}><Typography variant="h6" gutterBottom>Name</Typography></TableCell>
                <TableCell align="left" className={classes.tableCell}><Typography variant="h6" gutterBottom>€ Price</Typography></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((row) => (
                <TableRow key={row._id}>
                  <TableCell component="th" scope="row"><Typography variant="h6" component="h2" gutterBottom> <MdEdit/> <MdDelete /> </Typography></TableCell>
                  <TableCell component="th" scope="row"><Typography variant="h6" component="h2" gutterBottom>{row._id}</Typography></TableCell>
                  <TableCell align="left"><Typography variant="h6" component="h2" gutterBottom>{row.name}</Typography></TableCell>
                  <TableCell align="left"><Typography variant="h6" component="h2" gutterBottom>€ {row.price}</Typography></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
   </>
  )
}
