import React, {useState, useEffect} from "react";

const Posts = () => {
 const  [posts, setPosts] = useState([]);
 const  [error, setError] = useState(null);
 const  [filter, setFilter] = useState("");
 const  [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not OK');
        }

        return response.json();
    })
    .then(data => {
        setPosts(data.posts);
        setFilteredPosts(data.posts);
    })
    .catch(error => setError(error.message));
}, []);

const handleFilterChange = (e) => {
    setFilter(e.target.value);
    const filtered = posts.filter(post => 
        post.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        post.userId.toString().includes(e.target.value)
    );

    setFilteredPosts(filtered);
};

return (
        <div>
            <h2 className="text-3xl font-bold mb-4">Posts</h2>

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
                                <th className="py-3 px-6 text-left">ID</th>
                                <th className="py-3 px-6 text-left">Author</th>
                                <th className="py-3 px-6 text-left">Title</th>
                                <th className="py-3 px-6 text-left">Body</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredPosts.map(post => (
                                <tr key={post.id} className="border-b hover:bg-gray-300">
                                    <td className="py-3 pc-6">{post.id}</td>
                                    <td className="py-3 pc-6">{post.userId}</td>
                                    <td className="py-3 pc-6 font-semibold">{post.title}</td>
                                    <td className="py-3 pc-6">{post.body.substring(0,50)}...</td>
                                </tr>
                            ))} 
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Posts;