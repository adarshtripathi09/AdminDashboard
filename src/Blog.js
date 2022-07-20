import { ReactComponentElement, useState, useEffect } from 'react';
import '../src/Blog.css';
import Header from '../src/Header';
import Axios from '../src/Axios/Axios';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


const Blog = () => {
    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(false);
    const blopPost = () => {
        Axios.get('posts').then((response) => {
            setBlog(response.data);
            console.log(blog)
            setLoading(true)
        })
    }
    useEffect(() => {
        blopPost()
    }, []);

    return (
        <>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-md-12">
                        <Header /></div>
                </div>
            </div>
            {loading == true ?
                <div className='container'>

                    <div className="row">
                        <div className="aa col-md-4 d-flex">
                            <div className="main_title"><h2>Four Equal Columns</h2></div>
                            <div className="add_blog"><Link to="/post">Add Blog</Link></div>


                        </div>


                    </div>

                    <div className="row">
                        {

                            blog.map((ele) => {
                                return (
                                    <>
                                        {
                                            //     <div className="column">
                                            //     <h2>{ele.title.rendered}</h2>
                                            //     <p>Some text..</p>
                                            //   </div>
                                            <div className="col-md-3">
                                                <div className='column1'>

                                                    <div className='title'>
                                                        <h1> {ele.title.rendered}</h1>
                                                    </div>
                                                    <div className='content'>
                                                        <p>{ele.excerpt.rendered}</p>
                                                    </div>
                                                    <Link className='read' to={`${ele.id}`}>Read More</Link>
                                                </div>
                                            </div>


                                            // <div classNameName="grid-unit">
                                            //     
                                            //     <h2> {ele.title.rendered} </h2>
                                            //    
                                            //  
                                            // </div>
                                        }
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                : <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
            }
        </>
    )
}
export default Blog;
