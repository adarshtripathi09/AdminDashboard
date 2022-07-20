import { React, useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from '../src/Axios/Axios';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


const UserTable = ({ data, removeItem, setData }) => {
   const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [persondata, setPersonData] = useState([]);
   


    const handleClickOpen = (e) => {
        setOpen(true);
        const dataId = e.target.dataset.userid;
        
       
        // axios.get(`users/${dataId}`).then((response) => {
        //     setPersonData(response.data);
        // })
        const filterData = data.filter((ele) => {
            return ele.id == dataId;
        })
        setPersonData(filterData[0]);
        // console.log(persondata)
    };
    const handleClose = () => {
        setOpen(false);
    };

    const editData = (e) => {
        e.preventDefault()
       const getid = e.target.dataset.id;
       console.log(getid);
        axios.post(`users/${getid}`, persondata).then((response) => {
            setPersonData(response.data);
            // navigate('/');
        })
    }


    return (
        <>
            {
                data.map((ele) => {
                    return (
                        <>

                            <tr className="" key={ele.id}>
                                <td>{ele.last_name}</td>
                                <td>{ele.first_name}</td>
                                <td>{ele.id}</td>
                                <td>{ele.email}</td>
                                <td>{ele.meta.phone_number}</td>

                                <td>

                                    <Link to={ele.id} className="btn_Edit" variant="outlined" data-userid={ele.id} onClick={handleClickOpen}>
                                        Edit
                                    </Link>

                                </td>
                                <td><Link className="delete" to="" onClick={() => removeItem(ele.id)}>Delete</Link></td>
                            </tr>
                            <div className="col-md-12">
                            <Dialog open={open}>
                                        <form id="my-form-id" onSubmit={editData} data-id={persondata.id}>
                                            <DialogTitle>Update Blog</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    Edit User Information, Please enter Title and Content here.
                                                </DialogContentText>
                                                <TextField
                                                    autoFocus
                                                    margin="dense"
                                                    name="last_name"
                                                    label="Last Name"
                                                    type="text"
                                                    onChange={(e) => {
                                                        const temp = Object.assign({}, data);
                                                        temp.last_name = e.target.value;
                                                        setPersonData(temp);
                                                        console.log(persondata)
                                                    }

                                                    }
                                                    value={persondata.last_name}
                                                    fullWidth
                                                />
                                                <TextField
                                                    autoFocus
                                                    margin="dense"
                                                    name="first_name"
                                                    label="First Name"
                                                    type="text"
                                                    onChange={(e) => {
                                                        const temp = Object.assign({}, data);
                                                        temp.first_name = e.target.value;
                                                        setPersonData(temp);
                                                    }
                                                    }
                                                    value={persondata.first_name}
                                                    fullWidth
                                                />
                                                <TextField
                                                    autoFocus
                                                    margin="dense"
                                                    name="Email"
                                                    label="Email"
                                                    type="text"
                                                    onChange={(e) => {
                                                        const temp = Object.assign({}, data);
                                                        temp.email = e.target.value;
                                                        setPersonData(temp);
                                                    }

                                                    }
                                                    value={persondata.email}
                                                    fullWidth
                                                />
                                                <TextField
                                                    autoFocus
                                                    margin="dense"
                                                    name="phone"
                                                    label="Phone Number"
                                                    type="text"

                                                    // value={persondata.meta.phone_number}
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

                        </>
                    )

                })

            }
        </>
    )
}
export default UserTable;