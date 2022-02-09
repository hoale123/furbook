import { useState } from "react";


function CommentForm({ handleAddComment,post,user }) {
  // console.log(user.id)
  const initialState = {
    body: "",
    post_id: post.id,
    user_id: user.id
  };
  const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newSpice) => {
        handleAddComment(newSpice);
        setFormData({
          body: "",
          post_id: "",
          user_id: ""
        });
      });
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
      <label htmlFor="body">comment: </label>
        <textarea
          id="body"
          value={formData.body}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentForm;
