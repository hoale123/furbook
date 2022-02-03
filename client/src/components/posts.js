import React from 'react'


const Posts = () => {
    return (
        <div class="col-12">
        <div class="list-group">
          <h1 href="#" class="list-group-item list-group-item-action active">
            <div>
              <h5>Recent Posts</h5>
            </div>
          </h1>
          <li href="#" class="list-group-item list-group-item-action">
            <div>
              <h5>Takota McConner Says:</h5>
              <small class="text-muted">3 days ago</small>
            </div>
            <p>Did nothing today, just layed around and ate food #bestdayever</p>
            <input placeholder="comment.." />
          </li>
        </div>
      </div>
    )
}


export default Posts;