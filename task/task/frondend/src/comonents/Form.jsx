import React , {useState , useEffect} from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button'
import { useFormik } from 'formik'
import * as yup from "yup"
import axios from "axios"
import User from './User';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function Form() {
  const [user, setuser] = useState([])
  const [product, setproduct] = useState([])
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  today = dd + '/' + mm + '/' + yyyy;
  const [users, setusers] = useState([])   
  const [inv, setinv] = useState()
 
  const formik = useFormik({
    initialValues : {
      invoice_No : "",
      invoice_Date : today,
      customer_Name : "",
      Product_Name : "",
      Delivery_type : "",
      Qty : "",
      Price : "",
      subtotal : "0",
      mode :"cash"
    },
validationSchema: yup.object({
customer_Name:  yup.string().required("is requred"),
Product_Name:   yup.string().required("is requred"),
Delivery_type:  yup.string().required("is requred"),
Qty:            yup.string().required("is requred"),
Price:          yup.string().required("is requred"),
subtotal:       yup.string().required("is requred"),
    }),
    onSubmit : async (values , action)=> { 
      const result  =  await axios.post("http://localhost:5000/api/addProduct",values)
        console.log("data",values);
        action.resetForm()
    }  
  })
 
    // const handleGetUser = async()=>{
    //   const {data} = await axios.get("http://localhost:5000/api/getUser")
    //   setuser(data.result)

    //   console.log("user",user);
    // }
    const getproduct = async ()=>{
      const {data} = await axios.get("http://localhost:5000/api/getProduct")
      setproduct(data.result.map((item)=>{ return item.Product_Name}));
      setinv(data.result.length)
    }

  useEffect(() => {
    getproduct()
  }, [""])
  useEffect(() => {
    const handleGetUser = async()=>{
        const {data} = await axios.get("http://localhost:5000/api/getUser")
        setuser(data.result.map((item)=>{ return item.Name}));
    }
      handleGetUser()
  }, [])
  return (
   
   <div style={{backgroundColor:"white"}} className='m-1 pt-5' >    
        <form onSubmit={formik.handleSubmit} >
        <div className="form-row" style={{display : "flex" , justifyContent: "space-around" }}>
         <div className="col-md-4 mb-4">
           <label>Invoice No</label>
           <input type="text"
            className="form-control"
            value={`recipt No - abc ${formik.values.invoice_No = inv + 1}`} 
            onChange={formik.handleChange}
            id="invoice_No"/>
         </div>

        <div className="col-md-3 mb-4">
           <label  >Invoive Date</label>
           <input type="text" 
           className="form-control"
             value={formik.values.invoice_Date}
              placeholder={formik.values.invoice_Date}
             id="invoice_Date" />
         </div>

         <div className="col-md-4 mb-4">
           <label>Customer :  </label>
           <div className="input-group col-md-4">              
         <Autocomplete
          disablePortal
          options={user}
          className="form-control"
          onChange={(event, value) => {  formik.values.customer_Name = value}}
          value={formik.values.customer_Name}
          renderInput={(params) => <TextField variant='standard' sx={{height : "4px"}} {...params} />}
          />
             <div className='input-group-append'>
             <Button variant='contained' color='error'
              style={{backgroundColor : "#F5F5F5" }} 
              className='btn' data-bs-toggle="modal" data-bs-target="#exampleModal">
              <AddCircleIcon  color='secondary' />
              </Button>
              </div>
           </div>
         </div>
       </div>
       <div className="form-row" style={{display : "flex" , justifyContent: "space-around" }}>
         <div className="col-md-4 mb-4">
          <label>Delivery Type</label>
       <select className="form-select" onChange={formik.handleChange}
        value={formik.values.Delivery_type} id="Delivery_type" >
         <option  value="Hand To Hand">Hand To Hand</option>
         <option value="Courer">Courer</option>
         <option value="Other">Other</option>
       </select>
         </div>
         <div className="col-md-3 mb-4">
           <label >Product name or Code</label>
            <Autocomplete
            disablePortal
            options={product}
            id="Product_Name"
            className="form-control"
            onChange={(event, value) => { formik.values.Product_Name = value}}
            value={formik.values.Product_Name}
            renderInput={(params) => <TextField variant='standard' sx={{height : "4px"}} {...params} />}
         />
</div>
<div className="col-md-4 mb-4">           
         </div>
          {/* table start */}
       </div>
       <table className="table table-bordered">
       <thead>
         <tr style={{textAlign : "center" ,fontSize :"15px"}}>
           <th scope="col"></th>
           <th scope="col">PRODUCT NAME</th>
           <th scope="col">SELLING SENARIA</th>
           <th scope="col">QTY</th>
           <th scope="col">PRICE</th>
           <th scope="col">SUBTOTAL</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <th scope="row">2</th>
           <td>{formik.values.Product_Name}</td>
           <td> <input type="text" className="form-control" /> </td>
           <td><input type="text" className="form-control" onChange={formik.handleChange} value={formik.values.Qty} placeholder='qty' id="Qty"/></td>
           <td> <input type="text" className="form-control" placeholder='price' onChange={formik.handleChange} value={formik.values.Price}  id="Price"/> </td>
           <td> <input type="text"  className="form-control" onChange={formik.handleChange}
           value={formik.values.subtotal = formik.values.Qty * formik.values.Price}
           disabled /></td>
         </tr>
         <tr>
           <th colSpan={5} > <h4 style={{textAlign :"right"}}>Totol</h4> </th>
           <td> <input type="text" className="form-control p-2 col-xs-1" value={formik.values.Qty * formik.values.Price} disabled
            /> </td>
       
         </tr>
       </tbody>
       </table>
          {/* table end */}
          {/* table start */}
          {/* table end */}
          <table className="table table-bordered">
       <thead>
         <tr>
           {/* <th scope="col"></th> */}
           <th scope="col" colSpan={2} >Payment Mode</th>
           <th scope="col" colSpan={5}>
            <div className='d-flex justify-content-between'>
            <div className="form-check-inline">
               <label className="form-check-label">
               <input className="form-check-input radio me-2" type="checkbox"  id="Cash "  value={formik.values.mode = "cash"} onChange={formik.handleChange} />
                 Cash 
               </label>
             </div>
             <div className="form-check-inline">
               <label className="form-check-label" >
               <input className="form-check-input me-2 radio" type="checkbox"  id="cheque"  value={formik.values.mode = "Cheque"} onChange={formik.handleChange}  />
                 Cheque
               </label>
             </div>
             <div className="form-check-inline">
               <input className="form-check-input me-2" type="checkbox"  id='card' value={formik.values.mode = "card"} onChange={formik.handleChange} />
               <label className="form-check-label" >
                 card
               </label>
             </div>
             <div className="form-check-inline">
               <input className="form-check-input me-2" type="checkbox"   id="Voucher" value={formik.values.mode = "Voucher"} onChange={formik.handleChange}  />
               <label  >Voucher</label>
             </div>
            </div>
           </th>
         
         </tr>
       </thead>
       <tbody>
         <tr>
           <th scope="row " colSpan={2}>Check Amount</th>
           {/* <td>Kesar Mango <br />(MG0308)</td> */}
           <td> <input type="text" className="form-control p-2 col-xs-1" /> </td>
           <td><input type="text" className="form-control p-2 col-xs-1"/></td>
           <td> <label   className='p-2'>Cheque Amount</label></td>
           <td> <input type="text" className="form-control p-2 col-xs-1" /> </td>
         </tr>
         <tr>
           <th colSpan={4} ></th>
           <td><label   className='p-2'>Cash Amount</label></td>
           <td> <input type="text" className="form-control p-2 col-xs-1" /> </td>      
         </tr>
       </tbody>
       </table>
       <Button variant="contained" type="submit" color="primary">
         Add
       </Button> 
        </form>
      <User/>             
      </div>

    )
}
