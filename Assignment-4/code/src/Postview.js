import React ,{useState , useEffect} from 'react';
// import React  from 'react';
// import './Postview.css';
import Post from './post';


const Postview=()=> {
  const [posts,setPosts]=useState([]);
  const setPostsAsync = async () =>{
    const res = await fetch("http://localhost:3004/user")
    const data = await res.json();
    setPosts(data);
  

  };
  useEffect(() => {
    setPostsAsync();
  }, []);
  return (
    <div className="Postview">
      {posts.map((post,index)=>(
        <Post key={index} config={post}/>
      ))}
    </div>
  );
}

export default Postview;

