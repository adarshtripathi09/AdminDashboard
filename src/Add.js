import { React, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../src/Axios/Axios';

const Add = () => {
    const navigate = useNavigate();
    const [postData, setPostData] = useState([])
    const [addData, setAddData] = useState({
        last_name: '',
        first_name: '',
        username: '',
        password: '',
        email: '',
        phone: ''
    });

    const insertData = (e) => {
        setAddData({ ...addData, [e.target.name]: e.target.value });
       
    }
    const newdata = ()=>{

    }

    const PostData = (e) => {
        e.preventDefault()
        let userObject = {
            last_name: addData.last_name,
            first_name: addData.first_name,
            username: addData.username,
            password: addData.password,
            email: addData.email,
            meta: {
                phone_number : addData.phone
            }
        }
        axios.post('users/', userObject).then((reponse) => {
            setPostData(reponse.data);
            navigate('/');
        }).catch((error) => {
            console.log(error);
        })
    }


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
                                <h3>Add User Data</h3>
                                <p>Fill in the data below.</p>
                                <form className="requires-validation" onSubmit={PostData}>

                                    <div className="col-md-12">

                                        <input className="form-control"
                                            type="text" name="last_name"
                                            onChange={insertData}
                                            placeholder="Last Name"
                                            value={addData.last_name} />

                                        <input className="form-control"
                                            type="text" name="first_name"
                                            placeholder="First Name"
                                            onChange={insertData}
                                            value={addData.first_name} />
                                        {/* <input className="form-control" type="text" name="phone_number" placeholder="Phone" value={currentData.meta.phone_number} /> */}
                                    </div>
                                    <div className="col-md-12">
                                        <input className="form-control"
                                            type="text" name="username"
                                            onChange={insertData}
                                            placeholder="Username"
                                            value={addData.username} />

                                        <input className="form-control"
                                            type="text" name="password"
                                            placeholder="password"
                                            onChange={insertData}
                                            value={addData.password} />
                                        {/* <input className="form-control" type="text" name="phone_number" placeholder="Phone" value={currentData.meta.phone_number} /> */}
                                    </div>

                                    <div className="col-md-12">
                                        <input className="form-control"
                                            type="email" name="email"
                                            placeholder="E-mail Address"
                                            onChange={insertData}
                                            value={addData.email} />
                                    </div>
                                    <div className="col-md-12">
                                        <input className="form-control"
                                            type="text" name="phone"
                                            placeholder="Phone Number"
                                            onChange={insertData}
                                            value={addData.phone} />
                                    </div>
                                    <div className="col-md-12">
                                        <input className="submit" type="submit" />
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
export default Add;
