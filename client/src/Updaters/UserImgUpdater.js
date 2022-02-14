import { useState } from 'react'

function UserImgUpdater ({ user, setUser, editUserImg, setEditUserImg }) {
    const userImg = () => {
        if (user.profile_picture === null) {
            return defaultImg
        } else {
            return user.profile_picture
        }
    }
    const defaultImg = "https://simg.nicepng.com/png/small/128-1280406_view-user-icon-png-user-circle-icon-png.png"

    const [profile_picture, setImgUrl]= useState(userImg())

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`users/${user.id}`, {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                profile_picture: profile_picture
            }),
        })
        .then((r) => r.json())
        .then(data => {
            setUser(data)
            // setEditUserImg(!editUserImg)
        }) 
    }

    return (
        <div className="data">
            <form onSubmit={handleUpdate}>
            <p style={{fontSize: '16px'}}>Img URL </p>
                <span style={{paddingLeft: '20px'}}>
                <button style={{marginBottom: '25px'}} className="ui primary button">Save</button>
                </span>

                <span style={{paddingLeft: '20px'}}>
                <button onClick={()=>setEditUserImg(!editUserImg)} className="ui primary button">X</button>
                </span>   
           
            <div className="form-group">
                <input style={{padding: ".5rem .1rem"}} onChange={(e)=> setImgUrl(e.target.value)} value={profile_picture} type="text" name="profile_picture" required/><label  htmlFor="profile_picture">Img URL</label>
            </div>
            </form>
        </div>
    )
}

export default UserImgUpdater