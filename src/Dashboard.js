import { React, useState, useEffect } from 'react';
// import '../src/Dashboard.scss';
import Header from '../src/Header';
import axios from './Axios/Axios';
import Edit from '../src/Edit';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import Alert from '@mui/material/Alert';
import UserTable from './UserTable';
import Add from "../src/Add";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';



export const Dashboard = () => {
 
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [searchFilter, setSearchFilter] = useState([]);


    const fetchData = () => {
        axios.get('users?page=1&per_page=10&order=asc&orderby=id&roles=subscriber&context=edit').then((response) => {
            setData(response.data);
            setSearchFilter(response.data)
            setLoading(true);

        }
        )
    }

    data.sort((a, b) => {
        return a.last_name.localeCompare(b.last_name) //using String.prototype.localCompare()
    });
    const removeItem = (ele) => {
        axios.delete(`users/${ele}?reassign=0&force=true`).then((response) => {

            const deleteditem = data.filter((item) => {
                return ele !== item.id;
            })
            setData(deleteditem);
        })
    }

    const searchVal = (e) => {
        setSearch(e.target.value);
        const temp = Object.assign(searchFilter, data)

        if (search != '') {
            
            const fillter = temp.filter((ele) => {
                return ele.last_name.toLowerCase().includes(search.toLowerCase());
            })
            console.log(fillter)
            setSearchFilter(fillter);
        } else {
            setSearchFilter(data);

        }
    }
   
    useEffect(() => {
        fetchData();
    }, [])



    return (

        <>
            {loading ?

                <section className="panel">
                    <Header />
                    <div className="panel-body">
                        <div className="adv-table editable-table ">
                            <div className="clearfix">
                                <div className="btn-group">
                                    <button id="editable-sample_new" className="btn green">
                                        <Link to='/add'>Add Item</Link>
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                                <div className="btn-group pull-right">
                                    <button className="btn dropdown-toggle" data-toggle="dropdown">Tools <i className="fa fa-angle-down"></i>
                                    </button>
                                    <ul className="dropdown-menu pull-right">
                                        <li><Link to="#">Print</Link></li>
                                        <li><Link to="#">Save as PDF</Link></li>
                                        <li><Link to="#">Export to Excel</Link></li>
                                    </ul>
                                </div>
                                <div className="btn-group">
                                    <button id="editable-sample_new" className="btn green">
                                        <Link to='/blog'>Blog</Link>
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                                <div className="btn-group search">
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '25ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            id="outlined-basic"
                                            label="Search"
                                            variant="outlined"
                                            value={search}
                                            onChange={searchVal}
                                        />

                                    </Box>
                                </div>
                            </div>
                            <div className="space15"></div>

                            <div className="table-responsive">

                                <table className="table table-striped table-hover table-bordered" id="editable-sample">
                                    <thead>
                                        <tr>

                                            <th>Last Name</th>
                                            <th>First Name</th>
                                            <th>ID</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>EDIT</th>
                                            <th>DELETE</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <UserTable data={searchFilter} removeItem={removeItem}  setData={setData}/>

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </section> :
                <Box sx={{ width: '100%' }}>
                    <LinearProgress color="success" />
                </Box>

            }

            {/* // https://codepen.io/NicolasMota/pen/yLKBXWG */}
        </>
    )
}

export default Dashboard;
