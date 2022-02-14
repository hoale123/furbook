
function CommentItem({ comment,user,post,username }) {
  // console.log(username)
  // console.log(comment.user.username)


  return (
    <div >
      {user.username? (
      <><h5>{user.username} Comment:</h5> <p>{comment.body}</p></>
       ): null} 
    </div>

  );
}

export default CommentItem;