import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        LoadUsers();
    }, []);

    const LoadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        console.warn(result.data)
        setUsers(result.data.reverse())
    }

    const DeleteUser = async id => {
        await axios.delete(`http://localhost:3003/Users/${id}`)
        LoadUsers();
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table class="table border shadow  table-hover">
                    <thead className=" table-dark">
                        <tr className="text-center">
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((users , index) => (
                                <tr>
                                    <td scope="roe">{index + 1}</td>
                                    <td>{users.name}</td>
                                    <td>{users.username}</td>
                                    <td>{users.email}</td>
                                    <td className="text-center">
                                        <Link className="btn btn-primary mx-3" to={`/Users/view/${users.id}`}>View</Link>
                                        <Link className="btn btn-outline-primary mx-3" to={`/Users/edit/${users.id}`}>Edit</Link>
                                        <Link className="btn btn-danger mx-3" onClick={() => DeleteUser(users.id)}>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home