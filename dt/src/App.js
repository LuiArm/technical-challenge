import React, { useState, useEffect } from 'react';
import './App.css';
import Data from './components/data.json';
import Datatable from './components/datatable';
import Pagination from './components/pagination';


function App() {
  const [posts, setPosts] = useState(Data);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  useEffect(() =>{
    setLoading(true);
    setPosts(Data);
    setLoading(false)
  }, []);

  

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //change the page 
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="App">
        <Datatable posts={currentPosts} />
        <Pagination 
        postsPerPage={postsPerPage} 
        totalPosts={posts.length} 
        paginate={paginate}/>
    </div>
  );
}

export default App;
