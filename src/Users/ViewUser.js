import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';

const ViewUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    })

    const { name, username, email, phone, website } = user;



    useEffect(() => {
        Loaduser();
    }, []);

    const Loaduser = async () => {
        const result = await axios.get(`http://localhost:3003/Users/${id}`);
        setUser(result.data)
    }
    return (
        <div className="container shadow py-5">
            <div className="d-flex justify-content-around align-items-center">
                <h1 className="text-center my-5 ">View User (<small>{user.name}</small>)</h1>
                <Link className="btn btn-primary" to="/">
                    Back To Home
                </Link>
            </div>
            <form>
                <ul className="list-group w-50 mx-auto ">
                    <li className="list-group-item">Name: {user.name}</li>
                    <li className="list-group-item">User Name: {user.username}</li>
                    <li className="list-group-item">Email Id: {user.email}</li>
                    <li className="list-group-item">Phone Number: {user.phone}</li>
                    <li className="list-group-item">Website: {user.website}</li>
                </ul>
            </form>
        </div>
    )
}

export default ViewUser