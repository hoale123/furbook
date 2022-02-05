import PostContainer from "./PostContainer";
// import Posts from "./posts"
import Profile from "./Profile";
import { Switch, Route } from "react-router-dom";

function Main({ user, setUser }) {
  return (
    <div
      style={{
        textAlign: "center",
        paddingRight: "200px",
        paddingLeft: "200px",
        paddingBottom: "200px",
      }}
    >

      <Switch>
        <Route exact path="/">
      <h1>{user.username}'s Book </h1>
        {/* <div class="row">
         <Posts/>
        </div> */}
          <PostContainer user={user} />

        </Route>

        <Route exact path="/profile-edit">
          <Profile user={user} setUser={setUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
