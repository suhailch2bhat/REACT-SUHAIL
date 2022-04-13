// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import SendIcon from '@mui/icons-material/Send';
// const PostFooter = ({ config }) => {
//     const postedOnDate=new Date(config.date),
//     postedOn=`${postedOnDate.getDate()} ${MonthNames[postedOnDate.getMonth()]} ${postedOnDate.getFullYear()}`;
//     return (<div className="PostFooter">
//          <div className="PostDetails">
//             <div className="LikeShareWrapper">
//                 <div className="LikeShareContainer">
//                 <button className="LikeBtn">
//                 <FavoriteBorderIcon/>
//                 </button>
//                 <button className="ShareBtn">
//                 <SendIcon/>
//                 </button>
//                 </div>
//                 <div className="Likes">likes</div>
//             </div>
//             <div className="PostedOn">{postedOn}</div>
//         </div>
// <div className="PostCaption">description</div> 
//     </div>
//     );
// };
// const MonthNames=["Jan","Feb","Mar","June","July","Aug","Sep","Oct","Nov","Dec"]
// export default PostFooter;
import  "./post.css"
 const PostFooter = ({ config }) => {
    const MonthNames=["Jan","Feb","Mar","June","July","Aug","Sep","Oct","Nov","Dec"]
    const relativeImageur=`../assets/${config.Likeimage}`
    const relativeImageu=`../assets/${config.Send}`
    const postedOnDate=new Date(config.date),
        postedOn=`${postedOnDate.getDate()} ${MonthNames[postedOnDate.getMonth()]} ${postedOnDate.getFullYear()}`;
    return <div className="PostFooter">
        <img className="PostFooter1" src={relativeImageur} alt={config.Likeimage}/>  
        <img className="PostFooter1" src={relativeImageu} alt={config.Send}/> 
        <div className="PostedOn">{postedOn}</div>
        <div className="likesc">{config.likes}</div>
        <div className="PostCaption"><h1>{config.description}</h1></div>
    </div>
    
};

export default PostFooter;