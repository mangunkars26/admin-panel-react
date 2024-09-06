import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-blue-900 text-white flex flex-col">
            <h2 className="text-2xl font-bold p-4">Admin Panel</h2>
            <nav className="flex-grow">
                <ul className="space-y-2 p-4">
                    <li><Link to="/" className="block hover:bg-green-900 text-white rounded">Dashboard</Link> </li>
                    <li><Link to="posts" className="block hover:bg-green-900 text-white rounded" >Posts</Link> </li>
                    <li><Link to="/settings" className="block hover:bg-green-900 text-white rounded" >Settings</Link> </li>
                    <li><Link to="/users" className="block hover:bg-green-900 text-white rounded" >Users</Link> </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;