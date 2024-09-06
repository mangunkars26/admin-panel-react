import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Posts from './pages/Posts';
import Settings from "./pages/Settings";
import './index.css';
import Users from "./pages/Users";


const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col flex-grow">
          <Header />
          <main className="p-6 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<Users />} />
          </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;