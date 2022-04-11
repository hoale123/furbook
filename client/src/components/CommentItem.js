
function CommentItem({ comment,user,post,username }) {


  return (
    <div >
      <><h5>{comment.username} Comment:</h5> <p>{comment.body}</p></>  
    </div>

  );
}

export default CommentItem;
// comments.map(comment => comment.username)