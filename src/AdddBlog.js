import { React, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../src/Edit.css';
import Header from '../src/Header';
import axios from '../src/Axios/Axios';


const AdddBlog = () => {
    const navigate = useNavigate();
    const [blog, setBlog] = useState({
        title : '',
        content : '',
        status : ''
    });

 
    const getData = (e)=>{
      
        setBlog({...blog , [e.target.name]: e.target.value})
        console.log(blog);
    }
    const postData = (e)=>{
        e.preventDefault();
        axios.post(`posts`, blog).then((response)=>{
            setBlog(response.data);
            console.log("success");
            navigate("/blog");
        })
    }
    return (
        <>
            <Header />
            <div className="form-body">
                <div className="row">
                    <div className=' btn home_btm'>
                        <Link to="/">Home</Link>
                    </div>
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3>Add Blog</h3>
                                <p>Fill in the data below.</p>
                                <form className="requires-validation" noValidate onSubmit={postData}>

                                    <div className="col-md-12">

                                        <input className="form-control"
                                            type="text" name="title"

                                            placeholder="Title"
                                            onChange={getData}
                                            value={blog.title} />

                                        <input className="form-control"
                                            type="text" name="content"
                                            onChange={getData}
                                            placeholder="Content"

                                            value={blog.content} />
                                        <input className="form-control"
                                            type="text" name="status"
                                            placeholder="Status"
                                            onChange={getData}
                                            value={blog.status} />
                                    </div>

                                    {/* <div className="col-md-12">
                                    <Link className='button' to="">Read More</Link>
                                    </div> */}
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
export default AdddBlog;