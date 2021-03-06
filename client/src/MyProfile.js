import GoToTop from './GoToTop'
import './CSS/myProfile.css'
import 'semantic-ui-css/semantic.min.css'
import { useState } from 'react'
import EditProfileForm from './EditProfileForm'
import { Link } from 'react-router-dom'

function MyProfile ({ user, setUser }) {
    const [ edit, setEdit ] = useState(false)
    const { bio, username, email, phone_number, birthdate, friends, profile_picture } = user
    const [ newFriends, setNewFriends ] = useState(user.friends)
console.log(user)

    const handleRemoveFriend = (id) => {
        fetch(`/friends/${id}`, {
            method: "DELETE"
        })
        let removeFriend = friends.filter(friend => friend.id !== id)
        setNewFriends(removeFriend)
    }

    const renderFriends = newFriends.map(friend => {
          return (
              <tr key={friend.id}>
                <td>
                    <div className="friedns-img">
                        <img src={friend.profile_picture} alt={friend.username}></img>
                    </div>
                </td>
                <td>{friend.username}</td>
                <td>{friend.birthdate}</td>
                <td>{friend.bio}</td>
                
                <td>
                    <Link to={`/friends/${friend.id}`} > 
                    <button className="ui primary button friend-edit" style={{fontSize:'11px'}}>
                    Edit</button>
                    </Link>
                    <button onClick={()=>handleRemoveFriend(friend.id)} className="ui primary button friend-edit" style={{fontSize:'11px'}}>X</button>
                </td>
            </tr> 
    )})

    return (
        <>
        {user ? (
        <section className='myProfile'>
        { edit ? 
        <EditProfileForm user={user} setUser={setUser} edit={edit} setEdit={setEdit} renderFriends={renderFriends}/>
            : 
        <>
        <div className="wrapper">
        <div className="left">
            <img src={profile_picture ? profile_picture : "https://simg.nicepng.com/png/small/128-1280406_view-user-icon-png-user-circle-icon-png.png"} alt="user" style={{width:"70%"}} />
            <h1>{username ? username : "Add Name"}</h1>
        </div>
        <div className="right">
            <div className="info">
                <h3>Information</h3> 
                <div className="info_data">
                    <div className="data">
                        <h4>Email</h4>
                        <p>{email}</p>
                    </div>
                    <div className="data">
                        <h4>Phone</h4>
                        <p>{ phone_number? phone_number : "Add Phone Number"}</p>
                    </div>
                    <div className="data">
                        <h4>BirthDay</h4>
                        <p>{birthdate ? birthdate : " Add Birthday"}</p>
                    </div>
                </div>
                    <div className="data">
                        <h4>Bio</h4>
                        <p>{bio ? bio : " Bio"}</p>
                    </div>
            </div>  
      
            <div className="projects">
                <h3>Friends</h3>
                <div className="projects_data">
                    <div className="data">
                        <h4>Friends ({friends.length})</h4>
                        <table className="content-table">
                            <thead>
                              <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Birthday</th>
                                <th>Bio</th>
                                <th>
                                    <Link to='/new-friend'>
                                    <button className="ui primary button" style={ {fontSize:'11px'}}>Add New friend</button>
                                    </Link>
                                </th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                            { renderFriends.length > 0 ? renderFriends : 
                                <td>No Friends yet</td> }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>  
        </div>
    </div>
    <GoToTop />
    </>
    
    }
    </section>
 ) : null}{" "}
    </>
    )
}

export default MyProfile