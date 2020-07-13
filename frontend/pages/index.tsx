// import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { fetchposts } from '../store/actions/postActions';
import {useEffect} from 'react';
import { MdPlusOne } from 'react-icons/md';

export default function Home() {

const dispatch = useDispatch();
const { posts } = useSelector(state => state.post);

useEffect(() => {
  dispatch(fetchposts());
},[])

  return (
   <>
   <div>
      <h1 className="title">List of Products</h1>

        <table className="container-table">
          <tr>
            <th>Name</th>
            <th>price</th>
          </tr>

          {posts && posts.map(item => (
              <tr key={item.id}>
                <td>
                  {item.name}
                  </td>
                  <td>
                  € {item.price}
                  </td>
                </tr>
              ))}
        </table>

    </div>

    <div>
      <h4 className="form-title">Add new product </h4>
      <form className="container-form">
        <input placeholder="product name"/> <br />
        <input placeholder="product price"/> <br />
        <button>Add <MdPlusOne /></button>
      </form>
    </div>
   </>
  )
}
