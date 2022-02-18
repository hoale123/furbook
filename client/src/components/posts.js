
import { useState,useEffect } from "react";
// import Comments from "./Comments";
import CommentForm from './CommentForm'
import CommentItem from "./CommentItem";

import {
  Form,
  Button,
  TextArea,
  Header,
  Image,
} from "semantic-ui-react";
function Post({
  post,
  user,
  id,
  content,
  username,
  avatar,
  date,
  updatedDate,
  createdAt,
  updatedAt,
  postArray,
  setPostArray
}) {
  const [comments, setCommentArray] = useState([]);
  const [ addNew, setAddNew ] = useState(false)

  useEffect(() => {
    fetch("/comments")
      .then((resp) => resp.json())
      .then(setCommentArray);
  }, []);

  function handleAddComment(addedComment) {
    setCommentArray([...comments, addedComment]);
    setAddNew(!addNew)
  }

  const [singlePost, setSinglePost] = useState(post)
  // console.log(post)
  useEffect(() => {
    fetch("/posts")
      .then((resp) => resp.json())
      .then((data) => setSinglePost(data));
  }, []);

  const [isClicked, setIsClicked] = useState(false);
  const [updatedText, setUpdatedText] = useState(content);

  function handleRemove() {
    fetch(`/posts/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    const postsToDisplay = postArray.filter((post) => {
      // console.log(post.id, id);
      if (post.id === id) return false;
      else return true;
    });
    setPostArray(postsToDisplay);
  }

  function handleEdit(e) {
    e.preventDefault();
    fetch(`/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: updatedText,
      }),
    })
      .then((res) => res.json())
      .then((updatedPost) => handleUpdatePost(updatedPost));
    setIsClicked(!isClicked);
  }

  
  function handleUpdatePost(updatedPost) {
    const updatedPostsArray = postArray.map((post) => {
      return post.id === updatedPost.id ? updatedPost : post;
    });
    setPostArray(updatedPostsArray);
  }

  function handleEditClick(e) {
    setIsClicked((prevIsClicked) => !prevIsClicked);
  }

  function handleInputChange(event) {
    setUpdatedText(event.target.value);
  }

  return (
    <>
      <div
        className="post"
        style={{
          justifyContent: "center",
          padding: 5,
          border: "2px solid gray",
        }}
      >
        <Image
          src={avatar} 
          alt="user avatar"
          style={{ maxWidth: 250,   marginLeft:"auto",
          marginRight:"auto" }}
          />  
        {updatedAt === createdAt ? (
          <Header style={{fontWeight:"lighter", fontSize: "12px" }}>Posted: {date}</Header>
          ) : (
            <Header style={{fontWeight:"lighter", fontSize: "12px" }}>Updated: {updatedDate}</Header>
            )}
        <Header as="h3" style={{fontWeight:"lighter"}}>{username} Posted:</Header>
        {!isClicked ? (
          <p style={{fontWeight:"lighter", fontSize: "20px", marginLeft:"auto", marginRight:"auto",marginBottom:"0px",paddingLeft:"100px", paddingRight:"100px" }}>{content}</p>
          ) : (
            <Form onSubmit={handleEdit} style={{textAlign: "left", marginTop:"20px", marginLeft:"auto",
            marginRight:"auto", paddingLeft:"150px",
            paddingRight:"150px" }}>
            <Form.Field
            label="Update Post:"
            style={{fontWeight:"lighter", fontSize: "20px"}}
            onChange={handleInputChange} 
            type="text" 
            control={TextArea}
            value={updatedText}
            
            />
             <Button>Update</Button>
          </Form>
          )}
          {user.username === username ? (
            <>
            <Button
              onClick={handleEditClick}
              className={!isClicked ? "edit" : "hidden"}
              >
              Edit
            </Button>
            <Button onClick={handleRemove} className="remove">
              Delete
            </Button>
            {/* {comments.map((comment) => (
              
              <CommentItem
              user={username}
              key={comment.id}
              comment={comment}
              post={post}
              />
              ))} */}
          </>
          
          ) :
          
        <>
            {/* <Comments /> */}
        <CommentForm post={singlePost} user={user}handleAddComment={handleAddComment} />
         <>
          {comments.map((comment) => (
            
            <CommentItem
            key={comment.id}
            comment={comment}
            username={username}
            user={user}
            post={post}
            />
            ))}
      </> 
        </>
         }
      </div>
      <br />
      </>
      );
}

export default Post;