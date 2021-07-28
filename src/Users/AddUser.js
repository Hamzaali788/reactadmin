import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    })

    const { name, username, email, phone, website } = user;;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/Users/", user);
        history.push('/');
    }

    return (
        <div className="container shadow py-5">
            <h1 className="text-center my-5">Add User</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group my-3 ">
                    <input type="text" name="name" className="form-control" value={name} onChange={e => onInputChange(e)} placeholder="Enter Name" />
                </div>
                <div className="form-group my-3">
                    <input type="text" name="username" className="form-control" value={username} onChange={e => onInputChange(e)} placeholder="Enter Username" />
                </div>
                <div className="form-group my-3">
                    <input type="email" name="email" className="form-control" value={email} onChange={e => onInputChange(e)} placeholder="Enter Email" />
                </div>
                <div className="form-group my-3">
                    <input type="tel" name="phone" className="form-control" value={phone} onChange={e => onInputChange(e)} placeholder="Enter Number" />
                </div>
                <div className="form-group my-3">
                    <input type="text" name="website" className="form-control" value={website} onChange={e => onInputChange(e)} placeholder="Enter Website" />
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100 btn-block">Add User</button>
            </form>
        </div>
    )
}

export default AddUser