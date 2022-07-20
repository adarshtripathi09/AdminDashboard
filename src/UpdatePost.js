import { React, useState, useEffect } from 'react'
import { Link,useParams } from 'react-router-dom';
import axios from '../src/Axios/Axios';
import '../src/Edit.css';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const UpdatePost = () => {
    const {id} = useParams();
   


    return (
        <>
            <div className="form-body">
                <div className="row">
                    <div className=' btn home_btm'>
                        <Link to="/">Home</Link>
                        <Link to="/blog">Blog</Link>
                    </div>
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3>Update</h3>
                                <p>Fill in the data below.</p>
                                <form className="requires-validation" noValidate>

                                    <div className="col-md-12">
                                        <input className="form-control"
                                            type="text" name="title"
                                            placeholder="Title"
                                            value="" />
                                        <input className="form-control"
                                            type="text" name="exerpt"
                                            placeholder="Exerpt"
                                            value="" />

                                    </div>
                                    <div className="col-md-12">
                                        <input className="form-control"
                                            type="text" name="content"
                                            placeholder="Content"

                                            value="" />
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
export default UpdatePost;