import React ,{useState , useEffect} from 'react'
import axios from 'axios'

export default function Demo() {
    const [user, setuser] = useState([])
    const [input, setinput] = useState('')
    const [output, setoutput] = useState([])
    useEffect(() => {
        const handleGetUser = async()=>{
            const {data} = await axios.get("http://localhost:5000/api/getUser")
            setuser(data.result)
            console.log("user",user);
          }
          handleGetUser()
    }, [])
    useEffect(() => {
      
    }, [input])
    
  return (
    <div>
                <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Search" onChange={e=>setinput(e.target.value)} />

                {
                    user.map(item=>(
                        <p>{item.Name}</p>
                    ))
                }
    </div>
  )
}
