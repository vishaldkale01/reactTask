import React ,{useEffect} from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import axios from "axios"

export default function User() {
  const formik = useFormik({
    initialValues : {
      Name : "",
      Email : "",
      Password : "",
      Cpassword : ""
    },
    validationSchema : yup.object({
      Name : yup.string().required("is required"),
      Email : yup.string().required("is required"),
      Password : yup.string().required("is required"),

    }),
    onSubmit : async ({Name , Email , Password} , action) =>{
    await axios.post("http://localhost:5000/api/adduser",{Name , Email , Password}) 
      console.log("hiii",formik.values);
      action.resetForm()
    }
  })
  
  return (

    
    <>
    {/* <!-- Modal --> */}
    <div className="modal fade mt-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Create New User</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
                 <div className="col-md-12 m-auto">
                   <form onSubmit={formik.handleSubmit}>
                   <div className="form-group mt-2">
                       <label className='mb-2' >Name</label>
                       <input type="text" name="Name" className="form-control" id="Name"placeholder="Enter Name" onChange={formik.handleChange} value={formik.values.Name}/>
                     </div>
                     <div className="form-group mt-2">
                       <label className='mb-2'>Email address</label>
                       <input type="email"  className="form-control" id="Email"  placeholder="Enter email" 
                     onChange={formik.handleChange} value={formik.values.Email}/>
                     </div>
                     <div className="form-group mt-2">
                       <label className='mb-2'>Password</label>
                       <input type="password"  className="form-control" id="Password" placeholder="Password"onChange={formik.handleChange} value={formik.values.Password} />
                     </div>
                     <div className="form-group mt-2">
                       <label label className='mb-2'>Password</label>
                       <input type="password"  className="form-control" id="Cpassword" placeholder="Password Again" onChange={formik.handleChange} value={formik.values.Cpassword}/>
                     </div>
                     <div className="form-check mt-2">
                       <input type="checkbox" name="checkbox" className="form-check-input" id="remember" />
                       
                     </div>
                  <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-primary"  >Add User</button>
          </div>
                   </form>
                 </div>
          </div>
          
        </div>
      </div>
    </div>
  
    </>
  )
}
