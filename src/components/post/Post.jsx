import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../dummyData"
import {useState} from "react";
export default function Post({post}) {
    const [like,setLike] = useState(post.like)
    //useState hook manages the state .
    // it returns a stateful value(like)
    // and a function to update that state(setLike)
    //like is initialized with initial value post.like

    const [isLiked,setIsLiked] = useState(false)
    //isLiked is initialized with false 
    //because post is not liked initially

    const likeHandler = ()=>{
        setLike(isLiked ? like-1 : like+1)
        //setLike is function to update like state value
        //if isLiked is true(post is liked) 
        //then on clicking like, like decrements by 1
        //else like increments by 1

        setIsLiked(!isLiked)
        //if isLiked state is true(post is liked) then isLiked gets false
        //else isLiked gets true
    }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" />
                    <span className="postUsername">
                        {Users.filter(u=>u.id===post.userId)[0].username}
                    </span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
                    <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
