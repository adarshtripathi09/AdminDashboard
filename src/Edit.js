import {React,useState,useEffect} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from '../src/Axios/Axios';
import '../src/Edit.css';
import Header from '../src/Header';


export const Edit = () => {
        const  {id} = useParams();
       const navigate = useNavigate();
        console.log(id)
         const [currentData , setCurrentData] = useState({});

         const retrieveData = ()=>{
            axios.get('users/'+id+'?context=edit').then((response)=>{
                setCurrentData(response.data);
                // Note that you can always find the requested data from the .data property in the response.
                // 'users/'+id+'?context=edit'
                
            })
         }

         const sendData = (e)=>{
          
            e.preventDefault();
            axios.post('users/'+id, currentData ).then((response)=>{
                    setCurrentData(response.data);
                    alert("Update data succefully")
                    navigate(-1);
            })

         }

         useEffect(()=>{
            retrieveData();
         },[id])
    return (
        <>  
            <div className="form-body">
                <div className="row">
                <div className=' btn home_btm'>
                    <Link to="/">Home</Link>
                </div>
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3>Edit User</h3>
                                <p>Fill in the data below.</p>
                                <form className="requires-validation" onSubmit={sendData} noValidate>

                                    <div className="col-md-12">
                                        
                                        <input className="form-control" 
                                        type="text" name="last_name" 
                                        onChange={(e)=>{
                                            const newval = Object.assign({}, currentData)
                                            newval.last_name = e.target.value;
                                            setCurrentData(newval);
                                        }} 
                                        placeholder="Last Name" 
                                        value={currentData.last_name} />

                                        <input className="form-control" 
                                        type="text" name="first_name"  
                                        placeholder="First Name" 
                                        onChange={(e)=>{
                                            const newval = Object.assign({}, currentData);
                                            newval.first_name = e.target.value;
                                            setCurrentData(newval);
                                        }}
                                        value={currentData.first_name} />
                                        {/* <input className="form-control" type="text" name="phone_number" placeholder="Phone" value={currentData.meta.phone_number} /> */}
                                    </div>

                                    <div className="col-md-12">
                                        <input className="form-control" 
                                        type="email" name="email"  
                                        placeholder="E-mail Address" 
                                        onChange={(e)=>{
                                            const newval = Object.assign({},currentData);
                                            newval.email = e.target.value;
                                            setCurrentData(newval);
                                        }}
                                        value={currentData.email} />
                                    </div>
                                    <div className="col-md-12">
                                    <input className="submit"  type="submit" />  
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
export default Edit;