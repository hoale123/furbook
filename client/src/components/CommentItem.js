
function CommentItem({ comment,user,post,username }) {


  return (
    <div >
      {comment.user_id === user.id? (
      <><h5>{user.username} Comment:</h5> <p>{comment.body}</p></>
      ): <><h5>{username} Comment:</h5> <p>{comment.body}</p></>}  
    </div>

  );
}

export default CommentItem;
// comments.map(comment => comment.username)