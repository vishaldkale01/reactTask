import React ,{useState} from 'react'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton'
import axios from 'axios';
import Typography from '@mui/material/Typography'



export default function Data() {
  const [user, setuser] = useState([])
  const [product, setproduct] = useState([])
    const GetUser = async()=>{
      const {data} = await axios.get("http://localhost:5000/api/getUser")
      setuser(data.result);
      console.log("user",user)
      console.log("hiii");
  }
  const Getproduct = async()=>{
    const {data} = await axios.get("http://localhost:5000/api/getproduct")
    setproduct(data.result);
    console.log("user",product)
    console.log("hiii");
}
  return (
    <div className='container mt-5'>
      <div class="row" >
        <div class="col">
          <div class="card">
            <div class="card-body">
            <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
          <Button variant="contained" type="button" onClick={GetUser} color="primary" >
            Get User
          </Button>
          <Button variant="contained" type="button" onClick={Getproduct} color="primary">
            Get Product
          </Button>
      </Stack>
            </div>
          </div>
        </div>
      </div>
      <div class="row" >
        <div class="col">
          <div class="card">
            <div class="card-body">
              <Typography variant="h3" color="Highlight" align="center">Users</Typography>
          <table class="table table-inverse table-dark table-responsive">
            <thead class="thead-inverse ">
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
              </tr>
              </thead>
              <tbody>
                {
                  user.map((item)=>{
                    return <tr>
                    <td scope="row">{item._id}</td>
                    <td>{item.Name}</td>
                    <td>{item.Email}</td>
                  </tr>
                  })
                }
                
              </tbody>
          </table>
          
            </div>
          </div>
        </div>
      </div>


      {/* // product */}

      <div class="row" >
        <div class="col">
          <div class="card">
            <div class="card-body">
            <Typography variant="h3" color="Highlight" align="center">Product</Typography>

          <table class="table table-inverse table-dark table-responsive">
            <thead class="thead-inverse ">
              <tr>
                   <th>ID</th>
                   <th>invoice_No</th>
                    <th>invoice_Date</th>
                    <th>customer_Name</th>
                    <th>Product_Name</th>
                    <th>Delivery_type</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>subtotal</th>
                    <th>mode</th>
              </tr>
              </thead>
              <tbody>
                {
                  product.map((item)=>{
                    return <tr>
                    <td scope="row">{item._id}</td>
                        <th>{item.invoice_No}</th>
                        <th>{item.invoice_Date}</th>
                        <th>{item.customer_Name}</th>
                        <th>{item.Product_Name}</th>
                        <th>{item.Delivery_type}</th>
                        <th>{item.Qty}</th>
                        <th>{item.Price}</th>
                        <th>{item.subtotal}</th>
                        <th>{item.mode}</th>
                  </tr>
                  })
                }
                
              </tbody>
          </table>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
