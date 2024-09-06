

import React, {useState, useEffect} from "react";

const Users = () => {
 const  [users, setUsers] = useState([]);
 const  [error, setError] = useState(null);
 const  [filter, setFilter] = useState("");
 const  [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not OK');
        }

        return response.json();
    })
    .then(data => {
        setUsers(data.users);
        setFilteredUsers(data.users);
    })
    .catch(error => setError(error.message));
}, []);

const handleFilterChange = (e) => {
    setFilter(e.target.value);
    const filtered = users.filter(post => 
        post.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        post.userId.toString().includes(e.target.value)
    );

    setFilteredUsers(filtered);
};

return (
        <div>
            <h2 className="text-3xl font-bold mb-4">Users</h2>

        <div className="mb-4">
            <input 
                type="text"
                placeholder="Filter by title or Author Id"
                value={filter}
                onChange={handleFilterChange}
                className="p-2 border border-gray-300 rounded w-full" 
                />
        </div>
            {error ? (
                <p className="text-red-500"> Error : {error}</p>
            ) : (
                <div className="min-w-full bg-white shadow-md rounded mb-6">
                    <table className="min-w-full bg-white shadow-md mb-6">
                        <thead>
                            <tr className="bg-gray-100 text-slate-600">
                                <th className="py-3 px-3 text-left">ID</th>
                                <th className="py-3 px-3 text-left">Nama</th>
                                <th className="py-3 px-3 text-left"></th>
                                <th className="py-3 px-3 text-left">ID</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredUsers.map(user => (
                                <tr key={user.id} className="border-b hover:bg-gray-300">
                                    <td className="py-3 px-3">{user.id}</td>
                                    <td className="py-3 px-3">{user.firstName.concat(user.lastName)}</td>
                                </tr>
                            ))} 
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Users;
