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
      {/* <div  className='imagetop' style={{width:'97%',height:'40px', margin:"30px",broder:"solid black 2px"}}> <span><h1 style={{ width:'60%'}}>@instaclone</h1>
      <img  style={{float:"right", width:'40%',height:'10%', margin:"10px"}}  src="https://thumbs.dreamstime.com/b/speed-fast-camera-icon-logo-design-element-can-be-used-as-as-complement-to-95291428.jpg" alt="my camera"/>
      </span>
      </div> */}
      <div className="Posttop">
       <span> <div className="imagetop"><h1>@insta clone</h1></div>
       <img  style={{float:"right", width:'100px',height:'100px',marginTop:"0px",broder:"solid black 2px"}}  src="https://thumbs.dreamstime.com/b/speed-fast-camera-icon-logo-design-element-can-be-used-as-as-complement-to-95291428.jpg" alt="my camera"/>
      
    </span>
    </div>
      {posts.map((post,index)=>(
        <Post key={index} config={post}/>
      ))}
    </div>
  );
}

export default Postview;

