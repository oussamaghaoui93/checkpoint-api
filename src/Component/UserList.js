import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setListOfUsers(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="container mt-5">
            <h2>User List</h2>
            <div className="row">
                {listOfUsers.map((user) => (
                    <div className="col-md-4 mb-4" key={user.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">@{user.username}</h6>
                                <p className="card-text">
                                    <strong>Email:</strong> {user.email} <br />
                                    <strong>Phone:</strong> {user.phone} <br />
                                    <strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a> <br />
                                    <strong>Company:</strong> {user.company.name} <br />
                                    <strong>Address:</strong> {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode} <br />
                                    <strong>Geo:</strong> Latitude: {user.address.geo.lat}, Longitude: {user.address.geo.lng}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;
