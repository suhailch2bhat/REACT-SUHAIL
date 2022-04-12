import  "./post.css"
const PostImage = ({ config }) => {
  const relativeImageurl=`../assets/${config.PostImage}`
return <div className="PostImage">
        <img  className="myimg" src={relativeImageurl} alt={config.description}/>  
    </div>;
};
export default PostImage