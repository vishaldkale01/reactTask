// import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import React ,{useEffect , useState} from 'react';
import { useFormik } from 'formik'
import * as yup from "yup"
import axios from "axios"

export default function AutoComlite()
{
    const [user, setuser] = useState([])
    const [first, setfirst] = useState()
     
    
    const formik = useFormik ({
        initialValues : ({
            customer_Name : ""
        }),onSubmit  : ()=>{
                console.log("vakajkjk",formik.values);
        }
    })
    
    
    
    useEffect(() => {
    const handleGetUser = async()=>{
        const {data} = await axios.get("http://localhost:5000/api/getUser")
        // const newData = data.map((item)/=>{ return item.Name})
        setuser(data.result.map((item)=>{ return item.Name}));
        console.log("user",user)
    }
      handleGetUser()
      console.log(first);
      
  }, [])
  
  return (
    <>
            <form onSubmit={formik.handleSubmit}>
        <Autocomplete
      disablePortal
      options={user}
      className="form-control"
      onChange={(event, value) => {  formik.values.customer_Name = value}}
      value={formik.values.customer_Name}
      renderInput={(params) => <TextField  {...params} label="User"/>}
    />

        <button className="btn btn-primary" type="submit">Button</button>
            </form>
    
    </>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
