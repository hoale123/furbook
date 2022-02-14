
import Main from "./Main"
import NavBar from "./NavBar";
import Login from "./Login";
import Signup from "./Signup";
import AddNewFriend from '../Friends/AddNewFriend'
import MyProfile from '../MyProfile'
import EditFriend from '../Friends/EditFriend'
import { Switch, Route } from "react-router-dom";


function Homepage({user, setUser}) {
  if (!user)
    return (
      <div>
        <Switch>
        {/* <div >
          <NavBar user={user} setUser={setUser}/>
        </div> */}

          <Route exact path="/login">
            <Login onLogin={setUser} />
          </Route>

          <Route exact path="/signup">
            <Signup onLogin={setUser} />
          </Route>
          {/* <Route path="/myProfile">
                <MyProfile setUser={setUser} user={user} />
            </Route>
            <Route path="/new-friend">
                <AddNewFriend setUser={setUser} user={user} />
            </Route>
            <Route path="/friends/:id">
                <EditFriend setUser={setUser} user={user} />
            </Route> */}
        </Switch>
      </div>
    );

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Route path="/myProfile">
                <MyProfile setUser={setUser} user={user} />
            </Route>
            <Route path="/new-friend">
                <AddNewFriend setUser={setUser} user={user} />
            </Route>
            <Route path="/friends/:id">
                <EditFriend setUser={setUser} user={user} />
            </Route>
      <Main user={user} setUser={setUser} />
    </>
  );
}

export default Homepage;
