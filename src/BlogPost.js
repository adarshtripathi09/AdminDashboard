import { React, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../src/Axios/Axios';
import Header from '../src/Header';
import '../src/BlogPost.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const getPost = () => {
        axios.get(`posts/${id}?context=edit`).then((response) => {
            setPost(response.data);
            setLoading(true)

        })
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const UpdatePost = (e)=>{
        console.log("hh")
        e.preventDefault();
        axios.post(`posts/${id}?content`, post).then((response)=>{
            setPost(response.data);
            navigate('/blog');
        })
    };

    useEffect(() => {
        getPost();
    }, [id])
    return (
        <>
            <Header />
            <div className='container'>
                {loading === true ?
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="bacon-blog-post bacon-shadow">
                                <img src="https://www.w3schools.com/howto/img_forest.jpg" alt="Update" />
                                <div className="bacon-blog-post-inner">
                                    <h2>{post.title.raw}</h2>
                                    <p>{post.content.raw}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 update_button'>
                       
                            <Button className="btn_update" variant="outlined" onClick={handleClickOpen}>
                                Update Blog
                            </Button>
                            
                            <Dialog open={open}>
                            <form id="my-form-id" onSubmit={UpdatePost}>
                                <DialogTitle>Update Blog</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        To Update to this blog, Please enter Title and Content here.
                                    </DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        name="title"
                                        label="Title"
                                        type="text"
                                        onChange={(e) => {
                                            const temp = Object.assign({}, post)
                                            temp.title.raw = e.target.value;
                                            setPost(temp);
                                        }}
                                        value={post.title.raw}
                                        fullWidth
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        name="content"
                                        label="Content"
                                        type="text"
                                        onChange={(e) => {
                                            const temp = Object.assign({}, post)
                                            console.log(temp)
                                            temp.content.raw = e.target.value;
                                            setPost(temp);
                                        }}
                                        value={post.content.raw}
                                        fullWidth
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button type="submit">Submit</Button>
                                </DialogActions>
                                </form>
                            </Dialog>
                           
                        </div>
                    </div>
                    : <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>}
            </div>
        </>
    )
}
export default BlogPost;